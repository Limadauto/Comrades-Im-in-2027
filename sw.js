const CACHE="comrades100-v1";
const ASSETS=["./","./index.html","./manifest.webmanifest","./assets/template.png","./assets/favicon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
