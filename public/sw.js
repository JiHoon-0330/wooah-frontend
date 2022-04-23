const FONT_CACHE = "FONT_CACHE";

const fonts = [
  "/fonts/NotoSansKR/NotoSansKR-Bold.otf",
  "/fonts/NotoSansKR/NotoSansKR-Light.otf",
  "/fonts/NotoSansKR/NotoSansKR-Medium.otf",
  "/fonts/NotoSansKR/NotoSansKR-Regular.otf",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(FONT_CACHE).then((cache) => {
      return cache.addAll(fonts);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const { url, method } = event.request;
  const isFonts = url.includes("/fonts/");

  if (isFonts) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) => {
        return cache.match(event.request.url);
      }),
    );
    return;
  }
});
