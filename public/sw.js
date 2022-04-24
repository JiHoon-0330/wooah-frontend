const FONT_CACHE = "FONT_CACHE";
const NEXT_IMAGE = "NEXT_IMAGE";

const fonts = [
  "/fonts/NotoSansKR/NotoSansKR-Bold.otf",
  "/fonts/NotoSansKR/NotoSansKR-Light.otf",
  "/fonts/NotoSansKR/NotoSansKR-Medium.otf",
  "/fonts/NotoSansKR/NotoSansKR-Regular.otf",
];

const timer = {};

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(FONT_CACHE).then((cache) => {
      return cache.addAll(fonts);
    }),
  );
});

const getFonts = async (url) => {
  const cache = await caches.open(FONT_CACHE);
  return await cache.match(url);
};

const saveCache = async (cache, request) => {
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getNextImage = async (request) => {
  const cache = await caches.open(NEXT_IMAGE);
  const match = await cache.match(request);

  if (match) {
    return match;
  }
  return await saveCache(cache, request);
};

const getIsUrlMatch = (url) => (pattern) => url.includes(pattern);

self.addEventListener("fetch", (event) => {
  const {
    request,
    request: { url, method },
  } = event;
  const isUrlMatch = getIsUrlMatch(url);

  event.respondWith(
    (async () => {
      switch (true) {
        case isUrlMatch("/fonts/"):
          return await getFonts(url);
        case isUrlMatch("/_next/image"):
          return await getNextImage(request);
        default:
          return await fetch(request);
      }
    })(),
  );
});
