// El simulador se mudó: este service worker se elimina a sí mismo
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x.startsWith("simvent-")).map(x => caches.delete(x)))).then(() => self.registration.unregister())));
