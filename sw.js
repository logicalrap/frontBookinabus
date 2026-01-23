const CACHE_NAME = "bookinabus-cache-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/main.js",
  "/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  console.log("Service Worker installed and cached assets");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
