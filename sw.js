// Calculadora Neonatal - funcionamiento sin conexión
// Cambiá VERSION cada vez que actualices index.html para que los celulares bajen la versión nueva.
const VERSION = "v120";
const CACHE = "calc-neonatal-" + VERSION;
const CORE = ["./", "./index.html", "./infusiones.html", "./electrolitos.html", "./sedoanalgesia.html", "./nutricion.html", "./insulina.html", "./laboratorio.html", "./cardio.html", "./antimicrobianos.html", "./neo.html", "./semaforo.css", "./crecimiento.html", "./neofax.html", "./ehi.html", "./fuentes.html", "./balance.html", "./hoja.html", "./vafo.html", "./ventilacion.html", "./neofax-data.js", "./neofax-index.js", "./paciente.js", "./taketomo.js", "./eco.js", "./arr.js", "./ped.js", "./sim3d.js", "./lib/three.module.min.js", "./manifest.webmanifest", "./simvm/index.html",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/icon-maskable-512.png"];

self.addEventListener("install", e => {
  // cache:"reload" = bajar siempre de la red, nunca de la caché del navegador, para que la versión nueva llegue completa
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
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
  // Apertura rápida: todo sale de la copia guardada de ESTA versión (completa y coherente, se baja junta al instalar).
  // Las versiones nuevas llegan por sw.js: el navegador lo revisa en cada apertura; al instalarse, la app se recarga sola.
  if (req.mode === "navigate") {
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })
      .catch(() => caches.match("./index.html"))));
    return;
  }
  // Páginas, scripts, íconos, three.js y fuentes: primero la copia guardada; si falta, la red (y se guarda)
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r;
    })));
  }
});
