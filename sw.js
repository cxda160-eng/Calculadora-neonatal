// Calculadora Neonatal - funcionamiento sin conexión
// Cambiá VERSION cada vez que actualices index.html para que los celulares bajen la versión nueva.
const VERSION = "v89";
const CACHE = "calc-neonatal-" + VERSION;
const CORE = ["./", "./index.html", "./infusiones.html", "./electrolitos.html", "./sedoanalgesia.html", "./nutricion.html", "./insulina.html", "./laboratorio.html", "./cardio.html", "./antimicrobianos.html", "./neo.html", "./crecimiento.html", "./neofax.html", "./ehi.html", "./fuentes.html", "./balance.html", "./vafo.html", "./neofax-data.js", "./neofax-index.js", "./paciente.js", "./taketomo.js", "./eco.js", "./arr.js", "./ped.js", "./sim3d.js", "./lib/three.module.min.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // El video instructivo no se guarda sin conexión (es pesado y se reproduce por partes)
  if (url.pathname.includes("/video/")) return;
  // La página: primero la red (para recibir actualizaciones), si no hay conexión, la copia guardada
  if (req.mode === "navigate") {
    e.respondWith(fetch(req, {cache: "no-cache"}).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
      .catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || caches.match("./index.html"))));
    return;
  }
  // Páginas y scripts propios (.html/.js/manifest): primero la red, para que nunca se mezclen
  // una página nueva con un script viejo; sin conexión, la copia guardada.
  if (url.origin === location.origin && /(\.html|\.js|\.webmanifest|\/)$/.test(url.pathname) && !url.pathname.includes("/lib/")) {
    e.respondWith(fetch(req, {cache: "no-cache"}).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })
      .catch(() => caches.match(req, {ignoreSearch: true})));
    return;
  }
  // Íconos, three.js y fuentes: primero la copia guardada
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r;
    })));
  }
});
