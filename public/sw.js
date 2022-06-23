const FONT_CACHE = "FONT_CACHE";
const NEXT_IMAGE = "NEXT_IMAGE";
const TWEMOJI = "TWEMOJI";

self.addEventListener("install", (event) => {
  self.skipWaiting();
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

const getCache = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  const match = await cache.match(request);

  if (match) {
    return match;
  }
  return await saveCache(cache, request);
};

const getIsUrlMatch = (url) => (pattern) => url.includes(pattern);

const getCacheByRequest = async (request) => {
  const { url } = request;
  const isUrlMatch = getIsUrlMatch(url);

  switch (true) {
    case isUrlMatch("/_next/image"):
      return await getCache(request, NEXT_IMAGE);
    case isUrlMatch("twemoji.maxcdn.com"):
      return await getCache(request, TWEMOJI);
    default:
      return await fetch(request);
  }
};

self.addEventListener("fetch", async (event) => {
  const { request } = event;

  event.respondWith(getCacheByRequest(request));
});
