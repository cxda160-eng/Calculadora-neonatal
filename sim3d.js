/* Corazón 3D para el simulador de arritmias (Calculadora Neonatal)
   Lee el estado del simulador 2D (window.SIM_API) y lo dibuja sobre un corazón 3D semitransparente:
   cámaras que se iluminan al despolarizarse, sistema de conducción y el impulso viajando por cada vía. */
import * as THREE from "./lib/three.module.min.js";

const API = window.SIM_API;
let renderer, scene, camera, heart, resize = () => {};
const canvas = document.getElementById("sm-canvas");
const box3d = document.getElementById("sm-3d"), box2d = document.getElementById("sm-2d"), seg = document.getElementById("sm-hv");

function webglOK() {
  try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch (e) { return false; }
}

let mode = "3d";
try { if (localStorage.getItem("sim_hv") === "2d") mode = "2d"; } catch (e) {}
if (!API || !canvas || !webglOK()) { mode = "2d"; if (seg) seg.hidden = true; }

function setMode(m) {
  mode = m;
  seg.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === m));
  box3d.hidden = m !== "3d";
  // El SVG sigue en el documento (oculto) porque de ahí se toman las trayectorias
  box2d.classList.toggle("sm-2d-off", m === "3d");
  try { localStorage.setItem("sim_hv", m); } catch (e) {}
  if (m === "3d") resize();
}
if (seg) seg.querySelectorAll("button").forEach(b => b.onclick = () => setMode(b.dataset.v));

if (API && canvas && webglOK()) init();
setMode(mode);

/* ------------------------------------------------------------------ */
function init() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0.15, 9.2);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x3a2a48, 1.25));
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 4, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0xff9fb8, 1.4); rim.position.set(-4, -2, -5); scene.add(rim);
  const rim2 = new THREE.DirectionalLight(0x8fb4ff, 0.9); rim2.position.set(5, 1, -4); scene.add(rim2);

  const pivot = new THREE.Group(); pivot.position.y = -0.2; scene.add(pivot);
  heart = new THREE.Group();
  heart.rotation.z = -0.1; // eje anatómico: punta hacia la izquierda del paciente
  pivot.add(heart);

  /* ---------- Coordenadas: del esquema SVG (400 × 420) al espacio 3D ---------- */
  const X = x => (x - 205) / 100, Y = y => (215 - y) / 100;
  const Z = (x, y) => { // profundidad: aurículas atrás, VD adelante, VI algo posterior
    const atr = y < 205 ? 1 : 0;
    return atr ? 0.05 + 0.25 * Math.tanh((200 - x) / 70) : 0.18 + 0.32 * Math.tanh((200 - x) / 60);
  };
  const to3 = (x, y) => new THREE.Vector3(X(x), Y(y), Z(x, y));

  /* ---------- Cámaras ---------- */
  function blob(cx, cy, cz, rx, ry, rz, opts = {}) {
    const g = new THREE.SphereGeometry(1, 48, 36), p = g.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      let { x, y, z } = v;
      if (opts.apex && y < 0) { const t = -y; const k = 1 - opts.apex * Math.pow(t, 1.7); x *= k; z *= k; x += (opts.shift || 0) * t * t; }
      if (opts.flat) z *= 1 - opts.flat * Math.max(0, -x * (opts.flatSide || 1));
      p.setXYZ(i, cx + x * rx, cy + y * ry, cz + z * rz);
    }
    g.computeVertexNormals();
    return g;
  }
  const chamberMat = c => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.42, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.35, sheen: 0.6, sheenColor: new THREE.Color(0xffd0d8),
    transparent: true, opacity: 0.34, depthWrite: false, emissive: new THREE.Color(0xff3b2f), emissiveIntensity: 0 });
  const MAT = { ra: chamberMat(0xee8f84), la: chamberMat(0xf2ad7e), rv: chamberMat(0xd08ad9), lv: chamberMat(0xe97f9c) };
  const CH = {
    ra: new THREE.Mesh(blob(-0.74, 0.86, 0.12, 0.56, 0.64, 0.52), MAT.ra),
    la: new THREE.Mesh(blob(0.7, 0.95, -0.58, 0.6, 0.5, 0.45), MAT.la),
    rv: new THREE.Mesh(blob(-0.3, -0.66, 0.34, 0.72, 0.78, 0.5, { apex: 0.5, shift: 0.55 }), MAT.rv),
    lv: new THREE.Mesh(blob(0.52, -0.84, -0.12, 0.66, 0.92, 0.64, { apex: 0.62, shift: 0.3 }), MAT.lv)
  };
  CH.ra.renderOrder = CH.la.renderOrder = 1; CH.rv.renderOrder = CH.lv.renderOrder = 2;
  for (const k in CH) heart.add(CH[k]);
  // Pared externa de los ventrículos (miocardio): une ambas cámaras en una sola silueta
  const shellGeo = blob(0.04, -0.76, 0.08, 1.3, 1.14, 0.92, { apex: 0.5, shift: 0.42 });
  const shell = new THREE.Mesh(shellGeo, new THREE.MeshPhysicalMaterial({ color: 0xe07b80, roughness: 0.5, clearcoat: 0.5, clearcoatRoughness: 0.3,
    sheen: 0.8, sheenColor: new THREE.Color(0xffc4cc), transparent: true, opacity: 0.24, depthWrite: false }));
  shell.renderOrder = 5; heart.add(shell);
  const shellBack = new THREE.Mesh(shellGeo, new THREE.MeshBasicMaterial({ color: 0xb8565e, transparent: true, opacity: 0.08, side: THREE.BackSide, depthWrite: false }));
  shellBack.renderOrder = 0; heart.add(shellBack);
  // Arterias coronarias sobre la superficie (se proyectan sobre la pared por raycasting)
  shell.updateMatrixWorld(true);
  const ray = new THREE.Raycaster();
  function onSurface(guide, fromFront = true) {
    const pts = [];
    for (const [x, y] of guide) {
      ray.set(new THREE.Vector3(x, y, fromFront ? 5 : -5), new THREE.Vector3(0, 0, fromFront ? -1 : 1));
      const hit = ray.intersectObject(shell, false)[0];
      if (hit) pts.push(hit.point.clone().add(hit.face.normal.clone().multiplyScalar(0.025)));
    }
    return pts;
  }
  const corMat = new THREE.MeshPhysicalMaterial({ color: 0xc8302c, roughness: 0.35, clearcoat: 0.6, transparent: true, opacity: 0.75 });
  function coronary(guide, r) { const pts = onSurface(guide); if (pts.length < 3) return; const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, r, 8, false), corMat); m.renderOrder = 6; heart.add(m); }
  const lad = []; for (let i = 0; i <= 14; i++) { const t = i / 14; lad.push([0.08 + 0.62 * t * t, 0.18 - 1.95 * t]); }
  coronary(lad, 0.028);                                                                  // descendente anterior
  const rca = []; for (let i = 0; i <= 12; i++) { const t = i / 12; rca.push([-0.15 - 1.0 * Math.sin(t * 1.4), 0.2 - 0.95 * t * t]); }
  coronary(rca, 0.026);                                                                  // coronaria derecha
  const diag = []; for (let i = 0; i <= 8; i++) { const t = i / 8; diag.push([0.3 + 0.6 * t, -0.25 - 0.6 * t]); }
  coronary(diag, 0.018);                                                                 // diagonal

  // Orejuelas (comparten el material de su aurícula: se iluminan con ella)
  const raa = new THREE.Mesh(blob(-0.3, 1.32, 0.55, 0.3, 0.17, 0.2), MAT.ra);
  const laa = new THREE.Mesh(blob(1.08, 1.12, 0.02, 0.27, 0.15, 0.17), MAT.la);
  raa.renderOrder = laa.renderOrder = 1; heart.add(raa); heart.add(laa);

  // Contorno sutil de cada cámara (aristas suaves) para que se lea la forma
  for (const k in CH) {
    const back = new THREE.Mesh(CH[k].geometry, new THREE.MeshBasicMaterial({ color: CH[k].material.color, transparent: true, opacity: 0.1, side: THREE.BackSide, depthWrite: false }));
    heart.add(back);
  }

  /* ---------- Grandes vasos ---------- */
  function vessel(pts, r, color, op = 0.42) {
    const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)));
    const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, r, 20, false),
      new THREE.MeshPhysicalMaterial({ color, roughness: 0.4, clearcoat: 0.3, transparent: true, opacity: op, depthWrite: false }));
    m.renderOrder = 3; heart.add(m); return m;
  }
  vessel([[0.22, 0.15, -0.02], [0.0, 0.95, 0.05], [-0.12, 1.65, 0.02], [0.12, 2.25, -0.12], [0.7, 2.38, -0.42], [1.02, 1.85, -0.78], [1.05, 1.1, -0.9]], 0.19, 0xdc3f37);   // aorta
  vessel([[-0.02, 2.2, -0.08], [-0.12, 2.7, -0.1]], 0.07, 0xdc3f37, 0.36);   // tronco braquiocefálico
  vessel([[0.35, 2.38, -0.3], [0.38, 2.78, -0.32]], 0.055, 0xdc3f37, 0.34);  // carótida izquierda
  vessel([[0.62, 2.38, -0.42], [0.72, 2.75, -0.45]], 0.055, 0xdc3f37, 0.34); // subclavia izquierda
  vessel([[-0.12, 0.12, 0.72], [0.02, 0.85, 0.72], [0.3, 1.45, 0.52], [0.55, 1.7, 0.18]], 0.18, 0x4a7bd6);    // tronco pulmonar
  vessel([[0.55, 1.7, 0.18], [1.1, 1.82, -0.12], [1.55, 1.72, -0.35]], 0.1, 0x4a7bd6, 0.38);   // rama izquierda
  vessel([[0.55, 1.7, 0.18], [0.1, 1.85, -0.25], [-0.7, 1.75, -0.4], [-1.15, 1.65, -0.45]], 0.1, 0x4a7bd6, 0.34); // rama derecha (por detrás de la aorta)
  vessel([[-0.95, 2.65, -0.05], [-0.9, 2.0, 0.0], [-0.82, 1.35, 0.05]], 0.15, 0x6a83c9, 0.36);  // vena cava superior
  vessel([[-0.78, 0.35, -0.05], [-0.82, -0.15, -0.2], [-0.86, -0.6, -0.3]], 0.15, 0x6a83c9, 0.28); // vena cava inferior
  for (const [x0, y0, z0, x1, y1, z1] of [[0.45, 1.05, -0.85, 1.25, 1.2, -1.15], [0.6, 0.75, -0.85, 1.35, 0.7, -1.1], [0.95, 1.05, -0.7, 1.6, 1.05, -0.8], [0.95, 0.78, -0.7, 1.6, 0.68, -0.75]])
    vessel([[x0, y0, z0], [x1, y1, z1]], 0.06, 0x9a6bb0, 0.22); // venas pulmonares

  /* ---------- Sistema de conducción ---------- */
  const SAMPLES = {};
  const pathMat = new THREE.MeshBasicMaterial({ color: 0x2e3147, transparent: true, opacity: 0.0, depthTest: false });
  const PM = {};
  for (const id in API.PATHS) {
    const el = API.pathEls[id]; if (!el) continue;
    let len = el._len || 0; try { len = el.getTotalLength(); } catch (e) {}
    const n = Math.max(12, Math.round(len / 6)), pts = [];
    for (let i = 0; i <= n; i++) { let pt; try { pt = el.getPointAtLength(len * i / n); } catch (e) { pt = { x: 200, y: 200 }; } pts.push(to3(pt.x, pt.y)); }
    SAMPLES[id] = pts;
    const curve = new THREE.CatmullRomCurve3(pts);
    const m = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.min(120, n * 2), 0.014, 8, false), pathMat.clone());
    m.renderOrder = 20; m.visible = false; heart.add(m); PM[id] = m;
  }
  const at = (pts, fr) => { const f = Math.max(0, Math.min(1, fr)) * (pts.length - 1), i = Math.floor(f), t = f - i; return i >= pts.length - 1 ? pts[pts.length - 1].clone() : pts[i].clone().lerp(pts[i + 1], t); };

  /* ---------- Sprites (brillo, etiquetas, bloqueo) ---------- */
  function glowTex(color) {
    const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d");
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.22, color); gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  function textTex(txt, color = "#e8f6ff", bg = "rgba(10,12,30,.7)") {
    const c = document.createElement("canvas"), g = c.getContext("2d"), fs = 44;
    g.font = `700 ${fs}px "Public Sans", system-ui, sans-serif`;
    const w = Math.ceil(g.measureText(txt).width) + 28; c.width = w; c.height = fs + 22;
    g.font = `700 ${fs}px "Public Sans", system-ui, sans-serif`;
    g.fillStyle = bg; const r = 16; g.beginPath(); g.roundRect ? g.roundRect(0, 0, w, c.height, r) : g.rect(0, 0, w, c.height); g.fill();
    g.fillStyle = color; g.textBaseline = "middle"; g.fillText(txt, 14, c.height / 2 + 2);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return { t, aspect: w / c.height };
  }
  const label = (txt, pos, h = 0.2, color, bg) => {
    const { t, aspect } = textTex(txt, color, bg);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
    s.scale.set(h * aspect, h, 1); s.position.copy(pos); s.renderOrder = 40; heart.add(s); return s;
  };
  label("AD", new THREE.Vector3(-1.32, 1.25, 0.45), 0.17, "#ffb4a8", "rgba(10,12,30,.55)");
  label("AI", new THREE.Vector3(1.38, 1.45, -0.45), 0.17, "#ffd2a0", "rgba(10,12,30,.55)");
  label("VD", new THREE.Vector3(-1.05, -0.85, 0.95), 0.17, "#efb6ff", "rgba(10,12,30,.55)");
  label("VI", new THREE.Vector3(1.35, -1.0, 0.4), 0.17, "#ffb0c6", "rgba(10,12,30,.55)");
  label("Ao", new THREE.Vector3(-0.42, 2.25, 0.25), 0.15, "#ff9a90", "rgba(10,12,30,.55)");
  label("AP", new THREE.Vector3(0.62, 1.32, 0.85), 0.15, "#9cc3ff", "rgba(10,12,30,.55)");

  // Puntos de referencia (nodo sinusal, NAV, His, focos, vías accesorias)
  const LM = {};
  const lmMat = new THREE.MeshBasicMaterial({ color: 0x0c0d1a, depthTest: false });
  for (const id in API.LANDMARKS) {
    const L = API.LANDMARKS[id], pos = to3(L.x, L.y);
    const g = new THREE.Group(); g.position.copy(pos);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.045 + L.r * 0.004, 16, 12), lmMat.clone()); core.renderOrder = 30;
    const ring = new THREE.Mesh(new THREE.SphereGeometry(0.07 + L.r * 0.004, 16, 12), new THREE.MeshBasicMaterial({ color: 0x7fe3ff, transparent: true, opacity: 0.9, depthTest: false })); ring.renderOrder = 29;
    g.add(ring); g.add(core);
    if (L.label) { const s = label(L.label, new THREE.Vector3(0, 0.17, 0), 0.13); heart.remove(s); g.add(s); }
    g.visible = false; heart.add(g); LM[id] = g;
  }

  const ANTE = glowTex("rgba(255,80,50,1)"), RETRO = glowTex("rgba(70,150,255,1)");
  const pool = [];
  function sprite(i) {
    if (!pool[i]) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ANTE, depthTest: false, transparent: true, blending: THREE.AdditiveBlending }));
      s.renderOrder = 35; heart.add(s); pool[i] = s; }
    return pool[i];
  }
  const blockTex = (() => { const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d");
    g.strokeStyle = "#d1242f"; g.lineWidth = 11; g.lineCap = "round"; g.beginPath(); g.moveTo(14, 14); g.lineTo(50, 50); g.moveTo(50, 14); g.lineTo(14, 50); g.stroke();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const blocks = [];
  function blockSprite(i) { if (!blocks[i]) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: blockTex, depthTest: false, transparent: true })); s.scale.set(0.26, 0.26, 1); s.renderOrder = 45; heart.add(s); blocks[i] = s; } return blocks[i]; }

  /* ---------- Interacción: girar arrastrando ---------- */
  const rot = { x: 0.12, y: -0.35, vx: 0, vy: 0, drag: false, lx: 0, ly: 0, idle: 0 };
  canvas.addEventListener("pointerdown", e => { rot.drag = true; rot.lx = e.clientX; rot.ly = e.clientY; rot.idle = 0; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener("pointermove", e => {
    if (!rot.drag) return;
    const dx = e.clientX - rot.lx, dy = e.clientY - rot.ly; rot.lx = e.clientX; rot.ly = e.clientY;
    rot.vy = dx * 0.008; rot.vx = dy * 0.008; rot.y += rot.vy; rot.x = Math.max(-1.2, Math.min(1.2, rot.x + rot.vx));
  });
  const end = () => { rot.drag = false; };
  canvas.addEventListener("pointerup", end); canvas.addEventListener("pointercancel", end);
  canvas.addEventListener("dblclick", () => { rot.x = 0.12; rot.y = -0.35; rot.vx = rot.vy = 0; });

  resize = function () {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    camera.position.z = w / h < 0.85 ? 10.4 : 9.2; camera.updateProjectionMatrix();
  };
  window.addEventListener("resize", resize);

  const dark = () => window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  let last = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    if (mode !== "3d" || canvas.offsetParent === null) return;
    const dt = Math.min(50, now - last); last = now;
    if (canvas.width !== Math.round(canvas.clientWidth * renderer.getPixelRatio())) resize();

    // giro con inercia y oscilación suave cuando no se toca
    if (!rot.drag) { rot.y += rot.vy; rot.x += rot.vx; rot.vx *= 0.92; rot.vy *= 0.92; rot.idle += dt;
      if (rot.idle > 2500) rot.y += Math.sin(now / 2400) * 0.0016; }
    pivot.rotation.set(rot.x, rot.y, 0);

    const sim = API.sim; if (!sim) { renderer.render(scene, camera); return; }
    const t = sim.t;

    // cámaras: brillo al despolarizarse
    for (const k in CH) {
      let v = 0; for (const f of sim.flashes) if (f.ch === k && t >= f.t0) v = Math.max(v, Math.exp(-(t - f.t0) / 160));
      CH[k].material.opacity = 0.32 + 0.4 * v; CH[k].material.emissiveIntensity = 1.3 * v;
    }
    // vías visibles en el escenario actual
    const lineCol = 0xd9f2ff;
    for (const id in PM) {
      const el = API.pathEls[id], op = el ? +(el.getAttribute("opacity") || 0) : 0;
      PM[id].visible = op > 0.01; PM[id].material.opacity = Math.min(0.85, op * 1.6); PM[id].material.color.setHex(lineCol);
    }
    for (const id in LM) { const g = API.lmEls[id] && API.lmEls[id].g; LM[id].visible = !!g && g.style.display !== "none"; }

    // impulsos: cabeza brillante + estela
    let n = 0;
    for (const a of sim.anims) {
      if (t < a.t0 || t > a.t0 + a.dur + 60) continue;
      const pts = SAMPLES[a.path]; if (!pts) continue;
      const fr = Math.min(1, (t - a.t0) / a.dur), fade = t > a.t0 + a.dur ? 1 - (t - a.t0 - a.dur) / 60 : 1;
      const tex = a.kind === "retro" ? RETRO : ANTE;
      for (let k = 0; k < 7; k++) {
        const s = sprite(n++), ff = fr - k * 0.045; if (ff < 0) { s.visible = false; continue; }
        s.visible = true; s.material.map = tex; s.position.copy(at(pts, ff));
        const sc = (k === 0 ? 0.55 : 0.36 - k * 0.035); s.scale.set(sc, sc, 1); s.material.opacity = fade * (k === 0 ? 1 : 0.55 - k * 0.07);
      }
    }
    for (let i = n; i < pool.length; i++) pool[i].visible = false;

    // bloqueos
    let b = 0;
    for (const bl of sim.blocks) { if (t < bl.t0 || t > bl.t0 + bl.dur) continue; const s = blockSprite(b++); s.visible = true; s.position.copy(to3(bl.x, bl.y)); }
    for (let i = b; i < blocks.length; i++) blocks[i].visible = false;

    renderer.render(scene, camera);
  }
  resize();
  requestAnimationFrame(frame);
}
