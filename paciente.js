/* Calculadora Neonatal · datos del paciente compartidos entre pestañas + botón "Copiar resumen"
   - El peso, la EG y los días de vida se guardan en localStorage ("pac") y se aplican a todas las pestañas.
   - Si una pestaña cambia el peso, se avisa a la pantalla principal, que lo reparte al resto. */
(function () {
  "use strict";
  var KEY = "pac";
  var page = (location.pathname.split("/").pop() || "index.html").replace(".html", "");

  // Campos de cada pestaña: [selector, tipo, unidad]
  var FIELDS = {
    infusiones: [["#peso", "peso", "g"]],
    electrolitos: [["#peso", "peso", "g"]],
    sedoanalgesia: [["#peso", "peso", "g"]],
    insulina: [["#peso", "peso", "g"]],
    nutricion: [["#peso", "peso", "g"]],
    antimicrobianos: [["#pPeso", "peso", "g"], ["#pEG", "eg"], ["#pDias", "dias"]],
    cardio: [["#zPeso", "peso", "g"], ["#aPeso", "peso", "g"], ["#dPeso", "peso", "g"], ["#pdaPeso", "peso", "g"], ["#pdaDias", "dias"]],
    neo: [["#nPeso", "peso", "g"], ["#nEG", "eg"], ["#nHoras", "horas"]],
    balance: [["#peso", "peso", "g"]],
    crecimiento: [["#cPeso", "peso", "g"], ["#cEGw", "egw"], ["#cEGd", "egd"], ["#cDias", "dias"]]
  };

  function read() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  function write(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function num(s) { var n = parseFloat(String(s).trim().replace(",", ".")); return isFinite(n) ? n : NaN; }
  function ok(n) { return typeof n === "number" && isFinite(n); }
  function trim(n, d) { return String(+n.toFixed(d)); }

  var applying = false;
  function fmt(el, n, d) {
    var s = trim(n, d);
    return el.type === "number" ? s : s.replace(".", ",");
  }
  function nutUnit() {
    var b = document.querySelector('#unidad [aria-pressed="true"]');
    return b ? b.dataset.v : "g";
  }

  function apply(p) {
    var list = FIELDS[page]; if (!list) return;
    if (p && p.nac) { var hv = (Date.now() - Date.parse(p.nac)) / 36e5; if (isFinite(hv) && hv >= 0) { p = Object.assign({}, p, { dias: hv / 24, _h: hv }); } }
    applying = true;
    list.forEach(function (f) {
      var el = document.querySelector(f[0]); if (!el) return;
      var val = "";
      if (f[1] === "peso") {
        if (ok(p.kg) && p.kg > 0) {
          var u = f[2] === "nut" ? nutUnit() : f[2];
          val = u === "g" ? fmt(el, p.kg * 1000, p.kg * 1000 < 100 ? 2 : 0) : fmt(el, p.kg, 3);
        }
      } else if (f[1] === "eg") { if (ok(p.eg) && p.eg > 0) val = fmt(el, p.eg, 1); }
      else if (f[1] === "dias") { if (ok(p.dias) && p.dias >= 0) val = fmt(el, Math.floor(p.dias + 1e-9), 0); }
      else if (f[1] === "horas") { if (ok(p.dias) && p.dias >= 0) val = fmt(el, Math.floor(p.dias * 24 + 1e-9), 0); }
      else if (f[1] === "egw") { if (ok(p.eg) && p.eg > 0) val = fmt(el, Math.floor(p.eg + 1e-6), 0); }
      else if (f[1] === "egd") { if (ok(p.eg) && p.eg > 0) { var dd = Math.round((p.eg - Math.floor(p.eg + 1e-6)) * 7); val = fmt(el, Math.min(6, Math.max(0, dd)), 0); } }
      if (el.value !== val) {
        el.value = val;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
    applying = false;
  }

  function fromField(f, el) {
    var n = num(el.value), p = read();
    if (f[1] === "peso") {
      var u = f[2] === "nut" ? nutUnit() : f[2];
      p.kg = isFinite(n) && n > 0 ? (u === "g" ? n / 1000 : n) : null;
    } else if (f[1] === "eg") p.eg = isFinite(n) ? n : null;
    else if (f[1] === "dias") { p.dias = isFinite(n) ? n : null; delete p.nac; }
    else if (f[1] === "horas") { p.dias = isFinite(n) ? n / 24 : null; delete p.nac; }
    else if (f[1] === "egw" || f[1] === "egd") {
      var w = num((document.querySelector("#cEGw") || {}).value), d = num((document.querySelector("#cEGd") || {}).value);
      p.eg = isFinite(w) && w > 0 ? w + (isFinite(d) ? Math.min(6, d) : 0) / 7 : null;
    }
    write(p);
    if (window.parent !== window) window.parent.postMessage({ type: "pac-set", pac: p, from: page }, "*");
    else apply(p);
  }

  // Aviso si parece que se cargó el peso en kg (todo el peso de la app va en gramos)
  function gWarn(el) {
    var n = num(el.value), id = "gw-" + el.id, w = document.getElementById(id);
    var bad = isFinite(n) && n > 0 && n < 100;
    if (!bad) { if (w) w.remove(); return; }
    if (!w) {
      w = document.createElement("div"); w.id = id; w.setAttribute("role", "alert");
      w.style.cssText = "margin-top:4px;padding:6px 9px;border-radius:9px;font:600 .78rem/1.3 'Public Sans',system-ui,sans-serif;background:#ffe3e8;color:#a12d40";
      var host = el.closest("label") || el.parentNode; host.parentNode.insertBefore(w, host.nextSibling);
    }
    w.textContent = "⚠ El peso va en gramos: " + String(el.value).trim() + " g. Si quisiste poner " + String(el.value).trim() + " kg, escribí " + Math.round(n * 1000) + ".";
  }
  function hook() {
    var list = FIELDS[page]; if (!list) return;
    list.forEach(function (f) {
      var el = document.querySelector(f[0]); if (!el) return;
      el.addEventListener("input", function () { if (!applying) fromField(f, el); if (f[1] === "peso") gWarn(el); });
      if (f[1] === "peso") gWarn(el);
    });
    // Botones +/− de peso (Infusiones y Electrolitos) y cambio g/kg en Nutrición
    ["#wMinus", "#wPlus"].forEach(function (s) {
      var b = document.querySelector(s); if (!b) return;
      b.addEventListener("click", function () { setTimeout(function () { var el = document.querySelector("#peso"); if (el) fromField(["#peso", "peso", "g"], el); }, 0); });
    });
  }

  window.addEventListener("message", function (e) {
    if (e.data && e.data.type === "pac") apply(e.data.pac || {});
  });

  /* ---------- Copiar resumen ---------- */
  var COPY = {
    infusiones: ["#pump", "#loadPanel", "#bolusPanel", "#recipe", "#alerts"],
    electrolitos: ["#pump", "#recipe", "#alerts"],
    sedoanalgesia: [".out"],
    insulina: ["#pesoMsg", ".prep", ".tiles", "#dosisMsg", "#rFG", "#accion", "#osmMsg"],
    laboratorio: [".res"],
    antimicrobianos: ["#rPac", "#list > *", "#tkBanner", "#tklist details[open]", "#cmpBanner", "#cmplist > .cmp"],
    cardio: ["[id^='r']"],
    neo: [".mod:not([hidden]) .res", ".mod:not([hidden]) tr.sel"],
    crecimiento: ["#rRes", "#rTrend"]
  };
  var TITLES = { infusiones: "Infusiones", electrolitos: "Electrolitos", sedoanalgesia: "Sedoanalgesia", insulina: "Insulina",
    laboratorio: "Laboratorio", antimicrobianos: "Antimicrobianos", cardio: "Cardiología", neo: "RCP · Bilirrubina · Transfusiones", crecimiento: "Crecimiento INTERGROWTH-21st", balance: "Balance hídrico" };

  function visible(el) {
    if (!el || !el.getClientRects().length) return false;
    var cs = getComputedStyle(el); return cs.visibility !== "hidden" && cs.display !== "none";
  }
  function clean(t) {
    return t.replace(/ /g, " ").split("\n").map(function (l) { return l.replace(/\s+/g, " ").trim(); })
      .filter(function (l, i, a) { return l && !/^Faltan datos|^Cargá /.test(l); }).join("\n");
  }
  function titleFor(el) {
    var n = el;
    while (n && n !== document.body) {
      var s = n.previousElementSibling;
      while (s) { if (/^H[23]$/.test(s.tagName)) return s.textContent.replace(/Copiar resumen|Cargar.*$/g, "").trim(); var h = s.querySelector && s.querySelector("h2,h3"); if (h && s.tagName !== "DIV") return h.textContent.trim(); s = s.previousElementSibling; }
      n = n.parentElement;
      if (n && n.tagName === "SECTION") { var hh = n.querySelector("h2,h3"); if (hh) return hh.textContent.replace(/Copiar resumen/g, "").trim(); }
    }
    return "";
  }
  function buildSummary() {
    var sels = COPY[page] || [], seen = [], out = [];
    sels.forEach(function (s) {
      document.querySelectorAll(s).forEach(function (el) {
        if (page === "cardio" && !/^r[A-Z]/.test(el.id)) return;
        if (!visible(el) || seen.some(function (x) { return x.contains(el) || el.contains(x); })) return;
        var t = clean(el.innerText || ""); if (!t) return;
        seen.push(el);
        var h = (page === "laboratorio" || page === "cardio" || page === "sedoanalgesia" || page === "neo") ? titleFor(el) : "";
        out.push((h ? "■ " + h + "\n" : "") + t);
      });
    });
    if (window.customSummary) { var c = window.customSummary(); if (c) out.unshift(c); }
    var p = read(), pac = [];
    if (p.kg) pac.push("peso " + trim(p.kg, 3).replace(".", ",") + " kg");
    if (p.eg) pac.push("EG " + trim(p.eg, 1).replace(".", ",") + " sem");
    if (p.nac) { var hv = (Date.now() - Date.parse(p.nac)) / 36e5; if (hv >= 0) p.dias = hv / 24; }
    if (ok(p.dias)) pac.push(Math.floor(p.dias + 1e-9) + " días de vida");
    var d = new Date(), fecha = d.toLocaleDateString("es-AR") + " " + d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
    return "Calculadora Neonatal · " + (TITLES[page] || "") + " · " + fecha + (pac.length ? "\nPaciente: " + pac.join(" · ") : "") + "\n\n" + out.join("\n\n") +
      "\n\n(Herramienta de apoyo: verificar con protocolo y doble chequeo.)";
  }
  function copyText(t, btn) {
    var done = function () { var o = btn.textContent; btn.textContent = "✓ Copiado"; setTimeout(function () { btn.textContent = o; }, 1600); };
    var fb = function () { var ta = document.createElement("textarea"); ta.value = t; ta.style.position = "fixed"; ta.style.left = "-9999px"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch (e) {} ta.remove(); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, fb); else fb();
  }
  function addCopyButton() {
    if (!COPY[page] && !window.customSummary) return;
    var b = document.createElement("button");
    b.type = "button"; b.id = "copyFab"; b.textContent = "⧉ Copiar resumen";
    b.setAttribute("aria-label", "Copiar el resumen de esta pestaña");
    b.style.cssText = "position:fixed;right:max(14px,env(safe-area-inset-right,0px));bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:50;" +
      "font:600 .85rem/1 'Public Sans',system-ui,sans-serif;padding:11px 15px;border-radius:999px;border:0;cursor:pointer;" +
      "background:#2e3147;color:#fff;box-shadow:0 6px 18px -6px rgba(0,0,0,.45);opacity:.94";
    b.onclick = function () { copyText(buildSummary(), b); };
    document.body.appendChild(b);
    // espacio al final para que el botón no tape el pie
    document.body.style.paddingBottom = "calc(" + (getComputedStyle(document.body).paddingBottom || "0px") + " + 56px)";
  }
  window.CalcNeo = { read: read, buildSummary: buildSummary, copyText: copyText, hasSummary: function () { return !!(COPY[page] || window.customSummary); } };

  /* Dentro de la app: los datos del paciente se editan solo en la barra superior */
  var EMB = window.parent !== window;
  function lockFields() {
    if (!EMB) return;
    var st = document.createElement("style");
    st.textContent = "input.pac-lock{cursor:pointer;background-image:none}input.pac-lock:focus{outline:2px solid #0f9a83}";
    document.head.appendChild(st);
    (FIELDS[page] || []).forEach(function (f) {
      var el = document.querySelector(f[0]); if (!el) return;
      el.readOnly = true; el.classList.add("pac-lock"); el.setAttribute("inputmode", "none");
      el.title = "Se edita en la barra del paciente, arriba";
      el.addEventListener("click", function () { window.parent.postMessage({ type: "pac-edit" }, "*"); });
    });
    ["#wMinus", "#wPlus"].forEach(function (s) { var b = document.querySelector(s); if (b) b.style.display = "none"; });
  }
  window.CalcNeo = window.CalcNeo || {};
  function init() { hook(); apply(read()); lockFields(); if (!EMB) addCopyButton(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(init, 0); });
  else setTimeout(init, 0);
})();
