self.addEventListener('install', event => {
  console.log('Service Worker نصب شد');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker فعال شد');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});