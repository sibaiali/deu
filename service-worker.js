// Offline Caching Service Worker
const CACHE_NAME = 'deu-platform-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './css/app.css',
  './js/app.js',
  './js/storage.js',
  './js/srs.js',
  './js/speech.js',
  './js/search.js',
  './js/router.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
