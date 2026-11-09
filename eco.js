// Ecocardiografía funcional (pestaña Cardiología · vista "Eco").
// Fuente: Grupo de Trabajo de Ecografía de la SECIP, "Ecocardiografía funcional en el paciente pediátrico crítico"
// (Ramos Casado, Granados Ruiz, Menéndez Suso). Resumen propio; sin figuras del documento.
// Las imágenes de cada ventana las carga el usuario y quedan solo en su dispositivo (IndexedDB).
(function(){
const $ = id => document.getElementById(id);
const num = id => { const el = $(id); if (!el) return NaN; const s = String(el.value).trim(); if (s === '') return NaN; const n = parseFloat(s.replace(',', '.')); return isFinite(n) ? n : NaN; };
const f = (n, d=0) => isFinite(n) ? n.toLocaleString('es-AR', {maximumFractionDigits:d, minimumFractionDigits:0}) : '–';
const tile = (k, val, s, main) => `<div class="tile${main?' main':''}"><span class="k">${k}</span><span class="v">${val}</span>${s?`<span class="s">${s}</span>`:''}</div>`;
const pill = (cls, t) => `<div class="pill ${cls}"><span>${t}</span></div>`;
const tiles = a => `<div class="tiles">${a.join('')}</div>`;
const empty = t => `<div class="empty">${t}</div>`;

// ---------- Paciente: peso, talla, edad ----------
function pac(){
  let p = {}; try { p = JSON.parse(localStorage.getItem('pac') || '{}'); } catch (e) {}
  let kg = num('zPeso') / 1000; if (!(kg > 0)) kg = +p.kg;
  const h = num('zTalla');
  const dias = +p.dias, eg = +p.eg;
  let sc = NaN, scTxt = '';
  if (kg > 0) {
    if (h > 0) { sc = 0.024265 * Math.pow(kg, 0.5378) * Math.pow(h, 0.3964); scTxt = 'Haycock'; }
    else { sc = (4 * kg + 7) / (kg + 90); scTxt = 'Costeff (sin talla)'; }
  }
  const neo = !(dias > 28);
  return { kg, sc, scTxt, dias, eg, neo };
}

// ---------- Guía de ventanas ----------
const VW = [
  {id:'pel', n:'Paraesternal eje largo (PEL)', sonda:'Borde esternal izquierdo, 2.º–4.º espacio intercostal. Marca hacia el hombro derecho.',
   ve:['VD (anterior)','Septo interventricular','VI','Válvula mitral','Válvula aórtica y raíz aórtica','AI','Pericardio posterior','Aorta descendente (detrás de la AI)'],
   mide:[['FA y FE: modo M a la altura de las puntas mitrales','e-vi'],['Diámetro del TSVI en mesosístole (gasto cardíaco)','e-gc'],['Grosor del septo y de la pared posterior',''],['Derrame pericárdico en telediástole','e-der']]},
  {id:'pecp', n:'Paraesternal eje corto · músculos papilares', sonda:'Desde el PEL, girar 90° en sentido horario (marca hacia el hombro izquierdo).',
   ve:['VI circular con los dos músculos papilares','VD en semiluna por delante','Septo interventricular'],
   mide:[['Posición del septo (tipo I, II o III) y movimiento paradójico','e-vd'],['Índice de excentricidad D1/D2','e-vd'],['"Kissing walls": hipovolemia grave','e-flu'],['FA en modo M si el PEL no es bueno','e-vi'],['Contractilidad segmentaria','']]},
  {id:'pecv', n:'Paraesternal eje corto · vasos', sonda:'Desde el plano de los papilares, bascular la sonda hacia la base del corazón.',
   ve:['Válvula aórtica en corte transversal ("Mercedes Benz")','AD y válvula tricúspide','TSVD, válvula y tronco pulmonar con sus ramas','En el neonato: ductus arterioso'],
   mide:[['Insuficiencia tricuspídea para la PAPs (si el Doppler alinea)','e-pre'],['Índice de Tei del VD','e-tei'],['Flujo pulmonar y ductal','']]},
  {id:'a4c', n:'Apical 4 cámaras (A4C)', sonda:'En el ápex, marca hacia la izquierda (3 h). El VI queda a la derecha de la pantalla.',
   ve:['Las 4 cavidades','Válvulas mitral y tricúspide','Septos interventricular e interauricular','Venas pulmonares'],
   mide:[['E/A mitral, E/E′ y tiempo de desaceleración','e-dia'],['TAPSE (anillo tricuspídeo lateral)','e-vd'],['MAPSE (anillo mitral lateral)','e-vi'],['Relación de áreas VD/VI','e-vd'],['Insuficiencia tricuspídea para la PAPs','e-pre'],['FE por Simpson y área telediastólica del VI','e-flu'],['dP/dt si hay insuficiencia mitral','e-vi']]},
  {id:'a5c', n:'Apical 5 cámaras (A5C)', sonda:'Desde el A4C, bascular hacia anterior (hacia el abdomen) hasta ver la salida de la aorta.',
   ve:['Lo mismo que el A4C','TSVI y válvula aórtica (la "quinta cámara")'],
   mide:[['IVT del TSVI con Doppler pulsado (gasto cardíaco)','e-gc'],['Variación respiratoria de la velocidad pico aórtica','e-flu'],['Índice de Tei del VI','e-tei']]},
  {id:'s4c', n:'Subcostal 4 cámaras (S4C)', sonda:'Región subxifoidea, sonda plana. Marca hacia la izquierda (3 h).',
   ve:['Hígado como ventana','Las 4 cavidades','Septo interauricular de perfil: foramen oval o CIA y dirección del shunt'],
   mide:[['Derrame pericárdico y colapso de AD y VD','e-der'],['Gradiente trans-CIA para la presión de AI','e-pre'],['Útil con ventilación mecánica o mala ventana paraesternal','']]},
  {id:'seq', n:'Subcostal eje corto', sonda:'Desde el S4C, girar 90°.',
   ve:['VI y VD en corte transversal (como el PEC)'],
   mide:[['Alternativa al PEC: posición del septo, FA','e-vd']]},
  {id:'cav', n:'Subcostal de cavas (VCI)', sonda:'Desde el S4C, girar 90° antihorario. Marca cefálica (12 h).',
   ve:['VCI en su eje largo entrando en la AD','Vena suprahepática media'],
   mide:[['Diámetro máximo y mínimo de la VCI, distal a la suprahepática','e-pre'],['Colapsabilidad (respiración espontánea) o distensibilidad (ventilado)','e-flu']]},
  {id:'sel', n:'Supraesternal eje largo · cayado aórtico', sonda:'Hueco supraesternal con el cuello en extensión (rollo bajo los hombros). Marca entre las 12 y la 1 h, apuntando hacia el hombro izquierdo y la espalda, siguiendo el plano del cayado.',
   ve:['Aorta ascendente, cayado transverso e istmo','Los 3 vasos del cayado izquierdo: tronco braquiocefálico (innominado), carótida común izquierda y subclavia izquierda','Aorta descendente torácica','Rama pulmonar derecha en corte transversal, por debajo del cayado','Vena innominada izquierda por encima del cayado','En el neonato: ductus arterioso entrando en la aorta frente a la subclavia izquierda (plano ductal, bascular algo a la izquierda)'],
   mide:[['Diámetros de aorta ascendente, cayado proximal y distal e istmo (z-score) para descartar hipoplasia o coartación',''],['Doppler continuo en aorta descendente: gradiente y prolongación diastólica («cola diastólica») sugieren coartación',''],['Flujo reverso holodiastólico en aorta descendente: robo ductal (DAP hemodinámicamente significativo) o insuficiencia aórtica',''],['Dirección del flujo ductal (izquierda-derecha, bidireccional o derecha-izquierda)',''],['Lateralidad del cayado: en el cayado izquierdo el primer vaso se dirige a la derecha y se bifurca (subclavia y carótida derechas)','']]},
  {id:'sec', n:'Supraesternal eje corto · «cangrejo»', sonda:'Desde el eje largo supraesternal, girar 90° (marca hacia la izquierda, 3 h).',
   ve:['Cayado aórtico en corte transversal','Rama pulmonar derecha en su eje largo, por debajo de la aorta','Aurícula izquierda con las 4 venas pulmonares llegando («cangrejo»)','Vena cava superior a la derecha y vena innominada por encima'],
   mide:[['Drenaje de las 4 venas pulmonares (descartar drenaje venoso anómalo)',''],['Diámetro de la rama pulmonar derecha',''],['Flujo de la VCS con Doppler pulsado (flujo de VCS como marcador de flujo sistémico superior en el prematuro)','']]}
];

// IndexedDB para las imágenes
let dbp = null;
function db(){
  if (dbp) return dbp;
  dbp = new Promise((res, rej) => { try { const r = indexedDB.open('calcneo-eco', 1); r.onupgradeneeded = () => r.result.createObjectStore('img'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); } catch (e) { rej(e); } });
  return dbp;
}
const idb = (mode, fn) => db().then(d => new Promise((res, rej) => { const t = d.transaction('img', mode); const st = t.objectStore('img'); const q = fn(st); t.oncomplete = () => res(q && q.result); t.onerror = () => rej(t.error); }));
const imgGet = k => idb('readonly', s => s.get(k));
const imgPut = (k, b) => idb('readwrite', s => s.put(b, k));
const imgDel = k => idb('readwrite', s => s.delete(k));

function resize(file){
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file), im = new Image();
    im.onload = () => { const M = 1400, s = Math.min(1, M / Math.max(im.width, im.height)); const c = document.createElement('canvas'); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); URL.revokeObjectURL(url); c.toBlob(b => b ? res(b) : rej(new Error('blob')), 'image/jpeg', 0.86); };
    im.onerror = () => { URL.revokeObjectURL(url); rej(new Error('img')); };
    im.src = url;
  });
}
const urls = {};
function showImg(id){
  const box = $('ei_' + id);
  imgGet(id).then(b => {
    if (urls[id]) { URL.revokeObjectURL(urls[id]); delete urls[id]; }
    if (b) { urls[id] = URL.createObjectURL(b); box.innerHTML = `<img src="${urls[id]}" alt="Imagen cargada: ${VW.find(w => w.id === id).n}">`; $('eb_' + id).textContent = 'Cambiar imagen'; $('ed_' + id).hidden = false; }
    else { box.innerHTML = `<div class="eimg-empty"><b>Sin imagen</b><span>Tocá "Cargar imagen" y elegí una foto o captura de tu galería. Queda guardada solo en este teléfono.</span></div>`; $('eb_' + id).textContent = 'Cargar imagen'; $('ed_' + id).hidden = true; }
  }).catch(() => { box.innerHTML = `<div class="eimg-empty"><span>Este navegador no permite guardar imágenes (modo privado).</span></div>`; });
}
function buildVW(){
  $('eVW').innerHTML = VW.map(w => `<details class="ac evw" id="ev_${w.id}"><summary>${w.n}</summary><div class="abody">
    <div class="eimg" id="ei_${w.id}"></div>
    <div class="eact"><label class="btn ebtn"><span id="eb_${w.id}">Cargar imagen</span><input type="file" accept="image/*" data-k="${w.id}" hidden></label><button type="button" class="btn" id="ed_${w.id}" data-k="${w.id}" hidden>Quitar</button></div>
    <p class="esonda"><b>Sonda:</b> ${w.sonda}</p>
    <div class="ecols"><div><div class="agrp">Qué se ve</div><ul>${w.ve.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div><div class="agrp">Qué se mide</div><ul>${w.mide.map(([t, l]) => `<li>${l ? `<a href="#${l}" class="ego">${t}</a>` : t}</li>`).join('')}</ul></div></div>
  </div></details>`).join('');
  VW.forEach(w => {
    $('ev_' + w.id).addEventListener('toggle', e => { if (e.target.open) showImg(w.id); }, {once:false});
    $('ev_' + w.id).querySelector('input[type=file]').addEventListener('change', async e => {
      const file = e.target.files && e.target.files[0]; if (!file) return;
      try { const b = await resize(file); await imgPut(w.id, b); showImg(w.id); } catch (err) { alertBox(w.id, 'No se pudo leer la imagen. Probá con otra.'); }
      e.target.value = '';
    });
    $('ed_' + w.id).addEventListener('click', async () => { if (!confirmDel(w.id)) return; await imgDel(w.id).catch(() => {}); showImg(w.id); });
  });
  document.querySelectorAll('#viewEco a.ego').forEach(a => a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); const vw = t.closest('.view'); if (vw && vw.hidden) { const b = document.querySelector('#sView [data-v=' + (vw.id === 'viewTools' ? 'tools' : 'eco') + ']'); if (b) b.click(); } t.scrollIntoView({behavior:'smooth', block:'start'}); } }));
}
function alertBox(id, t){ $('ei_' + id).insertAdjacentHTML('afterend', pill('crit', t)); }
const pendingDel = {};
function confirmDel(id){ // doble toque en lugar de confirm() (los diálogos bloquean en algunos WebView)
  const b = $('ed_' + id);
  if (pendingDel[id]) { clearTimeout(pendingDel[id]); delete pendingDel[id]; b.textContent = 'Quitar'; return true; }
  b.textContent = '¿Quitar? Tocá de nuevo'; pendingDel[id] = setTimeout(() => { b.textContent = 'Quitar'; delete pendingDel[id]; }, 3000); return false;
}

// ---------- Calculadoras ----------
function grade(x, rows){ for (const [lim, cls, t] of rows) if (x < lim) return [cls, t]; return rows[rows.length - 1].slice(1); }

function cVI(){
  const dd = num('eDd'), ds = num('eDs'), map = num('eMap'), T = num('eDpT');
  let h = '';
  if (dd > 0 && ds > 0) {
    if (ds >= dd) h += pill('crit', 'El diámetro sistólico debe ser menor que el diastólico.');
    else {
      const fa = (dd - ds) / dd * 100;
      const D = dd / 10, S = ds / 10, vd = 7 / (2.4 + D) * D * D * D, vs = 7 / (2.4 + S) * S * S * S, fe = (vd - vs) / vd * 100;
      const [cfa, tfa] = fa > 45 ? ['info', 'Hiperdinámico'] : grade(fa, [[15,'crit','Disfunción grave'],[20,'warn','Disfunción moderada'],[25,'warn','Disfunción leve'],[Infinity,'ok','Normal']]);
      const [cfe, tfe] = grade(fe, [[30,'crit','Disfunción grave'],[40,'warn','Disfunción moderada'],[50,'warn','Disfunción leve'],[60,'warn','Limítrofe (50–60 %)'],[Infinity,'ok','Normal']]);
      h += tiles([tile('FA', `${f(fa,0)}<small>%</small>`, 'Normal 25–45 %', true), tile('FE Teichholz', `${f(fe,0)}<small>%</small>`, 'Normal &gt; 60 %', true), tile('VTD', `${f(vd,1)}<small>mL</small>`), tile('VTS', `${f(vs,1)}<small>mL</small>`)]);
      h += pill(cfa, `FA: ${tfa}.`) + pill(cfe, `FE: ${tfe}.`);
      h += pill('info', 'Teichholz asume un VI de geometría normal: no es fiable con septo aplanado o paradójico, cardiopatía congénita o dilatación. En ese caso usá Simpson.');
    }
  }
  if (map > 0) {
    const pa = pac(), cm = map / 10;
    let t = `MAPSE ${f(cm,2)} cm. Normal en el neonato 0,57 cm (z ±2: 0,38–0,76 cm); en el adolescente 1,63 cm (1,31–1,95 cm).`;
    let cls = 'info';
    if (pa.neo) { cls = cm < 0.38 ? 'warn' : cm > 0.76 ? 'info' : 'ok'; t += cm < 0.38 ? ' Por debajo del rango neonatal.' : cm > 0.76 ? ' Por encima del rango neonatal.' : ' Dentro del rango neonatal.'; }
    h += pill(cls, t);
  }
  if (T > 0) {
    const dp = 32 / (T / 1000);
    const [c, t] = grade(dp, [[800,'crit','Disfunción grave'],[1200,'warn','Disfunción moderada'],[Infinity,'ok','Normal']]);
    h += tiles([tile('dP/dt', `${f(dp,0)}<small>mmHg/s</small>`, 'Normal &gt; 1200')]) + pill(c, `dP/dt: ${t}.`);
  }
  $('rEvi').innerHTML = h || empty('Cargá los diámetros del VI en modo M (PEL o PEC).');
}

function cGC(){
  const d = num('eTs'), ivt = num('eIvt'), fc = num('eFc'), pa = pac();
  if (!(d > 0 && ivt > 0)) { $('rEgc').innerHTML = empty('Cargá el diámetro del TSVI y la IVT.'); return; }
  const area = 0.785 * Math.pow(d / 10, 2), vs = area * ivt;
  const a = [tile('Área TSVI', `${f(area,2)}<small>cm²</small>`), tile('VS', `${f(vs,1)}<small>mL</small>`, pa.kg > 0 ? `${f(vs / pa.kg,2)} mL/kg` : '')];
  let h = '';
  if (fc > 0) {
    const gc = vs * fc / 1000; a.push(tile('GC', `${f(gc,2)}<small>L/min</small>`, '', true));
    if (pa.sc > 0) a.push(tile('IC', `${f(gc / pa.sc,2)}<small>L/min/m²</small>`, `SC ${f(pa.sc,3)} m² · ${pa.scTxt}`, true));
    if (pa.kg > 0) a.push(tile('GC por kg', `${f(gc * 1000 / pa.kg,0)}<small>mL/kg/min</small>`));
    h = tiles(a);
    if (pa.sc > 0 && !pa.neo) { const ic = gc / pa.sc; h += pill(ic < 3 ? 'warn' : ic > 5 ? 'info' : 'ok', `IC ${ic < 3 ? 'bajo' : ic > 5 ? 'alto' : 'normal'} (referencia pediátrica 3–5 L/min/m²).`); }
    if (pa.neo && pa.kg > 0) { const k = gc * 1000 / pa.kg; h += pill(k < 150 ? 'warn' : k > 300 ? 'info' : 'ok', `Gasto del VI ${f(k,0)} mL/kg/min. En el neonato suele expresarse por kg: referencia habitual 150–300 mL/kg/min (no figura en el documento). El rango de IC 3–5 L/min/m² del documento es pediátrico. Con ductus amplio de izquierda a derecha, el gasto del VI sobrestima el flujo sistémico.`); }
  } else h = tiles(a) + pill('info', 'Agregá la FC para calcular el gasto y el índice cardíaco.');
  if (!(pa.kg > 0)) h += pill('info', 'Sin peso del paciente no se puede indexar. Cargalo en la barra superior.');
  h += pill('info', 'El diámetro se eleva al cuadrado: 1 mm de error en un TSVI de 6 mm cambia el gasto un 30 %. Medí en mesosístole, en la inserción de las valvas, y con ángulo Doppler &lt; 20°.');
  $('rEgc').innerHTML = h;
}

function cDia(){
  const E = num('eE'), A = num('eA'), Ep = num('eEp'), td = num('eTd'), pa = pac();
  let h = '', a = [];
  if (E > 0 && A > 0) a.push(tile('E/A', f(E / A, 2), 'Normal &gt; 1 y &lt; 2', true));
  if (E > 0 && Ep > 0) a.push(tile('E/E′', f(E * 100 / Ep, 1), '&lt; 8 normal · &gt; 12 PAI alta', true));
  if (td > 0) a.push(tile('TD onda E', `${f(td,0)}<small>ms</small>`, '&lt; 180 ms sugiere PAI alta'));
  if (!a.length) { $('rEdia').innerHTML = empty('Cargá las ondas E y A del Doppler transmitral (A4C).'); return; }
  h = tiles(a);
  if (E > 0 && A > 0) {
    const r = E / A;
    if (pa.neo) h += pill('info', `En el neonato, sobre todo el prematuro, el llenado depende más de la contracción auricular: una E/A &lt; 1 es habitual en las primeras semanas y no indica disfunción por sí sola. Los valores del documento (E/A &gt; 1; en niños 2,3 ± 0,6) son pediátricos.${r > 2 ? ' Una E/A &gt; 2 sí sugiere presión de AI elevada (patrón restrictivo).' : ''}`);
    else h += pill(r > 2 ? 'warn' : r < 1 ? 'warn' : 'ok', r > 2 ? 'E/A &gt; 2: patrón restrictivo, sugiere presión de AI elevada.' : r < 1 ? 'E/A &lt; 1: alteración de la relajación (grado I).' : 'E/A en rango normal. La pseudonormalización (grado II) se distingue con Doppler tisular o de venas pulmonares.');
  }
  if (E > 0 && Ep > 0) { const r = E * 100 / Ep; h += pill(r > 12 ? 'warn' : r < 8 ? 'ok' : 'info', r > 12 ? 'E/E′ &gt; 12: presión de AI elevada (&gt; 15 mmHg).' : r < 8 ? 'E/E′ &lt; 8: presión de AI normal.' : 'E/E′ 8–12: zona gris.'); }
  if (td > 0 && td < 180) h += pill('warn', 'Tiempo de desaceleración &lt; 180 ms: compatible con presión de AI elevada.');
  $('rEdia').innerHTML = h;
}

let septo = '';
function cVD(){
  const avd = num('eAvd'), avi = num('eAvi'), d1 = num('eD1'), d2 = num('eD2'), tap = num('eTap'), tsv = num('eTsv');
  let h = '', a = [];
  if (avd > 0 && avi > 0) a.push(tile('VD/VI', f(avd / avi, 2), 'Normal &lt; 0,6', true));
  if (d1 > 0 && d2 > 0) a.push(tile('Excentricidad', f(d1 / d2, 2), 'Normal ≈ 1'));
  if (tap > 0) a.push(tile('TAPSE', `${f(tap / 10,2)}<small>cm</small>`));
  if (tsv > 0) a.push(tile('TAPSV', `${f(tsv,1)}<small>cm/s</small>`, 'Normal &gt; 10'));
  if (a.length) h = tiles(a);
  if (avd > 0 && avi > 0) { const r = avd / avi; const [c, t] = grade(r, [[0.6,'ok','VD de tamaño normal'],[0.9,'warn','Dilatación moderada del VD'],[Infinity,'crit','Dilatación grave del VD']]); h += pill(c, `Relación de áreas ${f(r,2)}: ${t}.`); }
  if (d1 > 0 && d2 > 0) { const r = d1 / d2; h += pill(r > 1.1 ? 'warn' : 'ok', r > 1.1 ? 'Índice de excentricidad &gt; 1: el septo se desplaza hacia el VI (sobrecarga de presión o de volumen del VD).' : 'Índice de excentricidad cercano a 1: VI circular.'); }
  if (tap > 0) h += pill('info', 'El TAPSE normal depende de la edad y la superficie corporal: compará con la tabla de referencia pediátrica del documento.');
  if (tsv > 0) h += pill(tsv > 10 ? 'ok' : 'warn', tsv > 10 ? 'TAPSV normal.' : 'TAPSV ≤ 10 cm/s: función sistólica del VD disminuida.');
  if (septo) h += pill(septo === 'I' ? 'ok' : septo === 'II' ? 'warn' : 'crit', {I:'Septo tipo I: abomba hacia el VD. Presión del VI mayor que la del VD (normal).', II:'Septo tipo II: aplanado. Presiones de VD y VI similares.', III:'Septo tipo III: abomba hacia el VI. Presión del VD suprasistémica.', P:'Movimiento paradójico: normal en diástole pero hacia el VI en sístole. La presión del VD supera a la del VI en sístole.'}[septo]);
  $('rEvd').innerHTML = h || empty('Cargá alguna medida del VD o elegí la posición del septo.');
}

const PAI = [['ai','AI dilatada'],['fl','Septo interauricular sin flapping, abombado hacia la AD'],['dis','Disfunción sistólica o diastólica grave del VI'],['hvi','Hipertrofia del VI'],['ea','E/A &gt; 2'],['ee','E/E′ &gt; 12–15'],['td','Tiempo de desaceleración de la onda E &lt; 180 ms'],['hp','Presión pulmonar elevada sin enfermedad pulmonar']];
function cPre(){
  const mx = num('eVmx'), mn = num('eVmn'), g = num('eGcia'), pvc = num('ePvc');
  let h = '';
  if (mx > 0 && mn >= 0) {
    if (mn > mx) h += pill('crit', 'El diámetro mínimo no puede superar al máximo.');
    else {
      const c = (mx - mn) / mx * 100;
      h += tiles([tile('Colapsabilidad VCI', `${f(c,0)}<small>%</small>`, '', true)]);
      if ($('eVd').checked) h += pill('crit', 'VCI dilatada sin variación inspiratoria: PAD &gt; 20 mmHg (insuficiencia cardíaca derecha, hipervolemia, taponamiento).');
      else h += pill(c > 50 ? 'ok' : 'warn', c > 50 ? 'Colapso &gt; 50 %: PAD &lt; 10 mmHg. Un colapso completo con VCI pequeña sugiere hipovolemia.' : 'Colapso &lt; 50 %: PAD &gt; 10 mmHg.');
      h += pill('info', 'Solo es fiable en respiración espontánea, sin ventilación invasiva ni no invasiva. Con ventilación usá la distensibilidad (sección de fluidos).');
    }
  }
  if (g >= 0 && isFinite(g) && pvc >= 0 && isFinite(pvc)) h += tiles([tile('PAI estimada', `${f(g + pvc,0)}<small>mmHg</small>`, 'Gradiente medio trans-CIA + PVC')]);
  const n = PAI.filter(([k]) => $('ep_' + k).checked).length;
  if (n) h += pill(n >= 2 ? 'warn' : 'info', `${n} signo${n > 1 ? 's' : ''} de presión de AI elevada.${n >= 2 ? ' Varios signos juntos la hacen probable.' : ''}`);
  $('rEpre').innerHTML = h || empty('Cargá los diámetros de la VCI, el gradiente a través de la CIA o marcá signos.');
}

function cFlu(){
  const pmx = num('eVpx'), pmn = num('eVpn'), di = num('eDi'), de = num('eDe'), se = num('eSe'), si = num('eSi'), at = num('eAt'), pa = pac();
  let h = '';
  if (pmx > 0 && pmn > 0) {
    const vv = (pmx - pmn) / ((pmx + pmn) / 2) * 100;
    h += tiles([tile('VVPs aórtica', `${f(vv,1)}<small>%</small>`, 'Respondedor &gt; 12 %', true)]);
    h += pill(vv > 12 ? 'ok' : 'info', vv > 12 ? 'VVPs &gt; 12 %: predice respuesta a la carga de volumen. Es el único parámetro consistente en niños (metaanálisis de Gan, 2013).' : 'VVPs ≤ 12 %: respuesta a volumen poco probable.');
  }
  if (di > 0 && de > 0) { const d = (di - de) / di * 100; h += tiles([tile('Distensibilidad VCI', `${f(d,0)}<small>%</small>`, 'Respondedor &gt; 18 %')]) + pill(d > 18 ? 'ok' : 'info', `${d > 18 ? 'Distensibilidad &gt; 18 %: sugiere respuesta a volumen.' : 'Distensibilidad ≤ 18 %.'} Validado solo en adultos ventilados y relajados; no validado en neonatos.`); }
  if (se > 0 && si >= 0) { const c = (se - si) / se * 100; h += tiles([tile('Colapsabilidad VCS', `${f(c,0)}<small>%</small>`, 'Respondedor &gt; 36 %')]) + pill(c > 36 ? 'ok' : 'info', `${c > 36 ? 'Colapsabilidad &gt; 36 %: sugiere respuesta a volumen.' : 'Colapsabilidad ≤ 36 %.'} Validado solo en adultos ventilados (requiere eco transesofágico); no validado en neonatos.`); }
  if (at > 0) {
    if (pa.sc > 0) { const i = at / pa.sc; h += tiles([tile('AtdVI indexada', `${f(i,1)}<small>cm²/m²</small>`, '&lt; 5,5 predice respuesta')]) + pill(i < 5.5 ? 'ok' : 'info', i < 5.5 ? 'Área telediastólica del VI reducida: predice respuesta a volumen.' : 'Área telediastólica del VI no reducida.'); }
    else h += pill('info', 'Para indexar el área telediastólica falta el peso del paciente.');
  }
  if ($('eKw').checked) h += pill('warn', 'Colapso sistólico de la cavidad del VI ("kissing walls"): signo de hipovolemia grave. Menos valorable con inotrópicos altos, hipertrofia o insuficiencia mitral grave.');
  $('rEflu').innerHTML = h || empty('Cargá alguna medida dinámica o estática.');
}

function cTei(){
  const a = num('eTa'), b = num('eTb');
  if (!(a > 0 && b > 0)) { $('rEtei').innerHTML = empty('Cargá el tiempo total (cierre a apertura de la válvula AV) y el tiempo de eyección.'); return; }
  if (b >= a) { $('rEtei').innerHTML = pill('crit', 'El tiempo de eyección debe ser menor que el tiempo total.'); return; }
  const t = (a - b) / b;
  $('rEtei').innerHTML = tiles([tile('Índice de Tei', f(t,2), 'Niños 0,36 ± 0,07', true)]) + pill(t > 0.5 ? 'warn' : 'ok', t > 0.5 ? 'Índice de Tei aumentado (&gt; media + 2 DE pediátrica): disfunción global (sistólica, diastólica o ambas).' : 'Índice de Tei en rango normal pediátrico.') + pill('info', 'Es independiente de la precarga y se puede calcular con mala ventana acústica. Valores neonatales propios difieren de los pediátricos: interpretá con cautela en prematuros.');
}

const DER = [['col','Colapso diastólico de la AD'],['colv','Colapso diastólico del VD'],['vci','VCI dilatada sin variación respiratoria'],['pp','Caída del llenado mitral en inspiración profunda ("pulso paradójico ecográfico")'],['sw','Corazón oscilante ("swinging heart")']];
function cDer(){
  const mm = num('eDmm'), on = DER.filter(([k]) => $('ed_' + k + '_c').checked).map(([k]) => k);
  let h = '';
  if (mm > 0) h += tiles([tile('Derrame en telediástole', `${f(mm,1)}<small>mm</small>`)]);
  if (on.length) {
    const sev = on.includes('colv') || on.includes('pp') || on.length >= 2;
    h += pill(sev ? 'crit' : 'warn', sev ? 'Signos de compromiso hemodinámico: compatible con taponamiento. La repercusión depende más de la velocidad de acumulación que del volumen.' : 'Un signo aislado: vigilar evolución.');
  }
  if (on.includes('col') || on.includes('colv')) h += pill('info', 'El colapso de las cavidades derechas es el signo más sensible; la alteración del llenado ventricular, el más específico.');
  if (on.includes('vci')) h += pill('info', 'Con ventilación mecánica la VCI puede estar dilatada sin taponamiento: no es diagnóstica.');
  $('rEder').innerHTML = h || empty('Cargá el tamaño del derrame o marcá los signos que veas.');
}

function all(){ cVI(); cGC(); cDia(); cVD(); cPre(); cFlu(); cTei(); cDer(); }

function init(){
  if (!$('viewEco')) return;
  buildVW();
  $('ePAI').innerHTML = PAI.map(([k, t]) => `<label class="ck"><input type="checkbox" id="ep_${k}"><span class="t">${t}</span></label>`).join('');
  $('eDER').innerHTML = DER.map(([k, t]) => `<label class="ck"><input type="checkbox" id="ed_${k}_c"><span class="t">${t}</span></label>`).join('');
  $('viewEco').querySelectorAll('input:not([type=file])').forEach(i => i.addEventListener(i.type === 'checkbox' ? 'change' : 'input', all));
  $('eSep').querySelectorAll('button').forEach(b => b.onclick = () => { septo = septo === b.dataset.v ? '' : b.dataset.v; $('eSep').querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x.dataset.v === septo)); cVD(); });
  ['zPeso', 'zTalla'].forEach(id => $(id) && $(id).addEventListener('input', () => { cGC(); cFlu(); cVI(); }));
  window.addEventListener('message', e => { if (e.data && e.data.type === 'pac') setTimeout(all, 50); });
  const example = () => {
    const set = {eDd:'18', eDs:'12', eMap:'5,5', eTs:'6', eIvt:'15', eFc:'140', eE:'0,6', eA:'0,7', eEp:'7', eAvd:'5', eAvi:'7', eTap:'9', eVmx:'5', eVmn:'2', eVpx:'0,9', eVpn:'0,8', eTa:'260', eTb:'190', eDmm:''};
    for (const [k, val] of Object.entries(set)) $(k).value = val; all();
  };
  const clear = () => { $('viewEco').querySelectorAll('input:not([type=file])').forEach(i => { if (i.type === 'checkbox') i.checked = false; else i.value = ''; }); septo = ''; $('eSep').querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', false)); all(); };
  document.addEventListener('click', e => { if ($('viewEco').hidden) return; const t = e.target.closest && e.target.closest('#ej,#clr'); if (!t) return; e.stopPropagation(); e.preventDefault(); (t.id === 'ej' ? example : clear)(); }, true);
  all();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
window.EcoFuncional = { recalc: all };
})();
