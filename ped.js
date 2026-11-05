// Cardiología · ECG: arritmias en el posoperatorio, arritmias fetales y antiarrítmicos pediátricos.
// Basado en «Arritmias en Pediatría. Un enfoque práctico» (Scaglione J y col.). Resumen propio.
(function(){
const $ = id => document.getElementById(id);
const num = id => { const el = $(id); if (!el) return NaN; const s = String(el.value).trim(); if (s === '') return NaN; const n = parseFloat(s.replace(',', '.')); return isFinite(n) ? n : NaN; };
const f = (n, d=0) => isFinite(n) ? n.toLocaleString('es-AR', {maximumFractionDigits:d, minimumFractionDigits:0}) : '–';
const pill = (cls, t) => `<div class="pill ${cls}"><span>${t}</span></div>`;
function pac(){
  let p = {}; try { p = JSON.parse(localStorage.getItem('pac') || '{}'); } catch (e) {}
  let kg = num('zPeso') / 1000; if (!(kg > 0)) kg = +p.kg;
  const h = num('zTalla');
  let sc = NaN; if (kg > 0) sc = h > 0 ? 0.024265 * Math.pow(kg, 0.5378) * Math.pow(h, 0.3964) : (4 * kg + 7) / (kg + 90);
  return { kg, sc, dias: +p.dias };
}
const segPick = (id, obj, key, cb) => $(id).querySelectorAll('button').forEach(b => b.onclick = () => {
  obj[key] = obj[key] === b.dataset.v ? '' : b.dataset.v;
  $(id).querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x.dataset.v === obj[key])); cb(); });

/* ---------- Posoperatorio ---------- */
const po = { ini:'', av:'', q:'', r:'' };
function poCalc(){
  const k = pac().kg, mg = (x, d=1) => k > 0 ? ` = <b>${f(x * k, d)} mg</b>` : '';
  let h = '', dx = [];
  if (!po.ini && !po.av && !po.q && !po.r) { $('rPo').innerHTML = '<div class="empty">Elegí lo que ves para orientar el mecanismo.</div>'; return; }
  const auto = po.ini === 'g' || po.r === 'n', reent = po.ini === 'b' || po.r === 't';
  if (auto && !reent) h += pill('warn', '<b>Probable mecanismo automático:</b> no responde a cardioversión ni a sobreestimulación. Objetivo: bajar la frecuencia y recuperar la sincronía AV.');
  else if (reent && !auto) h += pill('info', '<b>Probable reentrada:</b> responde a adenosina (si usa el nodo AV), sobreestimulación auricular o cardioversión.');
  if (po.q === 'a') {
    dx.push('<b>TV</b> (rara en el PO pediátrico, &lt; 3 %): pensar en isquemia, lesiones residuales o cicatriz. Corregir K y Mg, reducir inotrópicos; inestable → cardioversión; estable → amiodarona o lidocaína 1 mg/kg' + mg(1) + ' y luego 20–50 µg/kg/min.');
    dx.push('<b>TSV con aberrancia o bloqueo de rama posquirúrgico</b>, o <b>antidrómica</b>: comparar con el ECG posoperatorio en ritmo sinusal (el BRD es casi constante tras cerrar una CIV o reparar un Fallot).');
  } else {
    if (po.av === 'vm') dx.push('<b>JET</b>: QRS igual al sinusal, frecuencia ventricular mayor que la auricular (disociación) o P retrógradas. Típica de lactantes de 4–18 meses tras CIV, canal AV, Fallot, switch arterial, Norwood. Ver el manejo escalonado abajo.');
    if (po.av === 'am') dx.push('<b>Aleteo o TRIA</b>: frecuencia auricular rápida y regular, inicio brusco, conducción AV variable (en niños suele ser atípico, 190–400/min, y puede conducir 1:1). Adenosina: aumenta el bloqueo sin cortarla. Tratamiento: cardioversión o sobreestimulación auricular.', '<b>TA ectópica con bloqueo AV</b> (si el inicio es gradual).');
    if (po.av === '11') {
      if (po.ini === 'g' || po.r === 'n') dx.push('<b>Taquicardia auricular ectópica</b>: P distinta de la sinusal, a menudo sobre la T, FC 100–280, calentamiento y enfriamiento. Bajar catecolaminas, sedoanalgesia; controlar la respuesta ventricular (digoxina si la función está deprimida; esmolol o amiodarona). Suele resolver en días.');
      dx.push('<b>Taquicardia sinusal</b> (diagnóstico diferencial principal): P normal, varía con la respiración, el dolor, la fiebre o la volemia.');
      if (po.ini !== 'g') dx.push('<b>TSV por vía accesoria</b>: P retrógrada &gt; 70 ms del QRS. Maniobras vagales (25 %), adenosina o cardioversión, o sobreestimulación auricular. Prevenir recurrencias con betabloqueantes o amiodarona.', '<b>TRNAV</b>: P retrógrada &lt; 70 ms (dentro del QRS); muy rara en el PO.');
    }
  }
  if (dx.length) h += `<div class="agrp">A considerar</div><ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:.88rem">${dx.map(d => `<li>${d}</li>`).join('')}</ol>`;
  $('rPo').innerHTML = h;
}
function poAcc(){
  const k = pac().kg, mg = (x, d=1) => k > 0 ? ` (${f(x * k, d)} mg)` : '', jk = x => k > 0 ? ` (${f(x * k, 1)} J)` : '';
  const A = [
    ['Registro auricular con los cables epicárdicos', `<ul><li>Conectá los dos cables auriculares a los electrodos de los brazos (blanco y negro) del electrocardiógrafo; las piernas, como siempre.</li><li>En DI queda un registro bipolar con una onda auricular grande y el QRS pequeño; DII y DIII muestran la aurícula con un QRS mayor.</li><li>Sin cables auriculares: electrodo bipolar transesofágico (sirve también para estimular la aurícula).</li></ul>`],
    ['Sobreestimulación auricular (reentradas)', `<ul><li>Marcapasos externo a los cables auriculares (o transesofágico).</li><li>Frecuencia 10–20 % mayor que la frecuencia auricular de la taquicardia, durante 3–5 s.</li><li>Si no corta, aumentar progresivamente frecuencia y duración en los intentos siguientes.</li><li>Riesgo: fibrilación auricular (tener el desfibrilador listo). No sirve en la FA ni en arritmias automáticas.</li></ul>`],
    ['JET posoperatoria: manejo escalonado', `<ul><li><b>Meta:</b> FC &lt; 180 lpm en lactantes y &lt; 150 lpm en niños mayores; luego recuperar la sincronía AV.</li><li><b>1.</b> Reducir catecolaminas exógenas y endógenas (dolor, fiebre, anemia); optimizar sedoanalgesia; suspender vagolíticos (pancuronio, meperidina). Corregir el Mg.</li><li><b>2.</b> Hipotermia moderada 33–35 °C (requiere intubación y relajación; riesgo de FV y acidosis si se profundiza).</li><li><b>3.</b> Amiodarona: carga 5 mg/kg${mg(5)} en alícuotas de 1 mg/kg cada 5 min o 2 bolos de 2,5 mg/kg, y luego infusión continua 48–72 h. Alternativas: esmolol, digoxina. Dexmedetomidina con buenos resultados comunicados.</li><li><b>4.</b> Con FC más baja: marcapaseo auricular por encima de la JET, o AV sensando el QRS, para recuperar la sincronía.</li><li><b>5.</b> Refractaria con inestabilidad: marcapaseo ventricular apareado (especialista), ECMO o ablación del nodo AV.</li></ul>`],
    ['Bloqueo AV posquirúrgico', `<ul><li>Riesgo en cirugías cerca del nodo AV: CIV, canal AV, Fallot, Ebstein, L-TGA con CIV, Ross, Konno, miectomía.</li><li>Agudo con mala tolerancia: marcapaseo AV con los cables epicárdicos temporales (umbral con margen de al menos el doble).</li><li>El 50–60 % es transitorio y casi todos revierten en los primeros 10 días.</li><li>Marcapasos definitivo: el libro lo indica si el BAV de 3.er grado o el Mobitz II persiste 10–14 días. ⚠️ Las guías ACC/AHA/HRS y PACES lo indican si persiste ≥ 7 días.</li><li>Si el BAV completo ya existía antes de la cirugía, conviene implantar el marcapasos antes de operar.</li><li>BAV de 1.er grado, bloqueos de rama o bifasciculares aislados no requieren marcapasos.</li></ul>`],
    ['Disfunción sinusal en el PO', `<ul><li>Tras Mustard, Senning, Fontan, CIA seno venoso, canulación de la VCS; también en heterotaxia con isomerismo izquierdo.</li><li>Descartar causas secundarias: antiarrítmicos, hipoxia, acidosis, hipercalcemia, hipotiroidismo.</li><li>Agudo: marcapaseo auricular con los cables epicárdicos (o transesofágico). Alternativa: isoproterenol.</li><li>Si es sintomática, con dilatación progresiva o taqui-bradi: marcapasos definitivo.</li></ul>`],
    ['TV, torsades y FV en el PO', `<ul><li>Prevención: K y Mg en rango alto-normal, inotrópicos al mínimo necesario.</li><li>TV inestable: cardioversión sincronizada; FV: RCP y desfibrilación 2 J/kg${jk(2)}.</li><li>Lidocaína 1 mg/kg${mg(1)} en bolo, luego 20–50 µg/kg/min.</li><li>Torsades: sulfato de magnesio 25 mg/kg${mg(25, 0)} en 5–15 min; evitar amiodarona y procainamida; marcapaseo a frecuencia algo alta o isoproterenol acortan el QT.</li><li>Extrasístoles aisladas o bigeminismo: observar y corregir la causa metabólica. Ectopia repetitiva que persiste días: Holter o EEF.</li></ul>`]
  ];
  $('poAcc').innerHTML = A.map(([t, b]) => `<details class="ac"><summary>${t}</summary><div class="abody">${b}</div></details>`).join('');
}

/* ---------- Fetales ---------- */
const fe = { va:'' };
const CVP = [
  ['Hidrops', [['Ausente',2],['Ascitis, derrame pleural o pericárdico',1],['Edema de piel',0]]],
  ['Doppler venoso (vena umbilical y ductus venoso)', [['Normal',2],['Onda A reversa en el ductus venoso',1],['Pulsaciones en la vena umbilical',0]]],
  ['Tamaño cardíaco (área cardíaca / torácica)', [['0,20–0,35',2],['0,35–0,50',1],['> 0,50 o < 0,20',0]]],
  ['Función cardíaca', [['Normal (FA VD y VI > 0,28, llenado bifásico)',2],['IT holosistólica o FA < 0,28',1],['IM holosistólica, dP/dt de IT < 400 o llenado monofásico',0]]],
  ['Doppler arterial (arteria umbilical)', [['Normal',2],['Ausencia de flujo diastólico',1],['Flujo diastólico reverso',0]]]
];
const cvSel = CVP.map(() => 2);
function cvp(){
  const t = cvSel.reduce((a, b) => a + b, 0);
  $('cvpV').textContent = t;
  $('cvpTxt').textContent = t === 10 ? 'Sin signos de insuficiencia cardíaca' : t >= 8 ? 'Compromiso leve' : 'Insuficiencia cardíaca fetal: peor pronóstico';
}
function feCalc(){
  const fc = num('feFc'), eg = num('feEg');
  let h = '';
  if (isFinite(fc)) {
    if (fc > 180) h += pill('warn', `<b>Taquicardia fetal</b> (FC ventricular &gt; 180 lpm). Representan alrededor del 60 % de las arritmias fetales; la mayoría son supraventriculares.`);
    else if (fc < 100) h += pill('warn', `<b>Bradicardia fetal</b> (&lt; 100 lpm sostenida). Episodios de segundos son normales, sobre todo en el 2.º trimestre y al comprimir con el transductor. Causas: bradicardia sinusal (descartar QT largo, en especial con BAV 2:1 intermitente), BAV completo y bigeminia auricular bloqueada.`);
    else h += pill('ok', 'FC dentro del rango fetal normal (100–180 lpm).');
  }
  const v = fe.va;
  if (v === 'vac') h += pill('info', '<b>VA corto (VA &lt; AV): reentrada por vía accesoria.</b> FC típica 220–300, 1:1, inicio y fin bruscos; al nacer, WPW en ~10 %. Primera línea: <b>digoxina materna</b> 0,25–0,5 mg cada 12 h VO (≈ 80 % de éxito sin hidrops) o <b>sotalol</b> 80–160 mg cada 12 h; se pueden asociar.');
  if (v === 'val') h += pill('info', '<b>VA largo (VA &gt; AV): taquicardia sinusal, auricular ectópica (200–250, con calentamiento y BAV de 2.º grado) o PJRT (~220, 1:1).</b> Responden peor a la digoxina: considerar <b>sotalol</b> desde el inicio; si no responde, flecainida. Monitorear a la madre con ECG (y niveles).');
  if (v === 'al') h += pill('info', '<b>Aleteo auricular</b>: frecuencia auricular mayor que la ventricular. Digoxina materna (60–65 % de éxito) o sotalol. Tras el nacimiento, cardioversión 0,5–1 J/kg.');
  if (v === 'vac' || v === 'val' || v === 'al') {
    h += pill('warn', '<b>¿Cuándo tratar?</b> Insuficiencia cardíaca o hidrops, taquicardia incesante, presentación antes de la semana 32 o cardiopatía estructural (≈ 10 %). Si no, monitoreo estrecho.' + (eg >= 35 ? ' Con ≥ 35 semanas puede plantearse el nacimiento.' : ''));
    h += pill('crit', 'Con hidrops el pasaje transplacentario es pobre: suele requerir 2 o más drogas desde el inicio. El hidrops aparece en el 40–50 % de las formas sostenidas y lleva a muerte fetal hasta en el 35 %.');
  }
  if (v === 'bav') {
    h += pill('warn', '<b>BAV completo fetal:</b> ≈ 45–48 % asociado a cardiopatía estructural (heterotaxia con isomerismo izquierdo, L-TGA: peor pronóstico) y ≈ 45–48 % a anticuerpos maternos anti-Ro/La (BAV en 1–4 % de las madres con anticuerpos; 18–20 % si hubo un hijo previo afectado). Mortalidad 18–43 %.');
    if (isFinite(fc) && fc < 55) h += pill('crit', `FC ventricular de ${f(fc)} lpm (&lt; 55): factor de riesgo de mortalidad junto con disfunción miocárdica e hidrops. Considerar betamiméticos maternos (salbutamol 10 mg cada 8 h VO) y planificar el nacimiento en un centro con marcapasos neonatal.`);
    h += pill('info', 'Dexametasona materna 4–5 mg/día: sin beneficio demostrado una vez instalado el BAV completo (estudio PRIDE) y con efectos adversos (oligoamnios, prematurez, HTA y glucemia maternas). Prevención en madres con anticuerpos: no justificada salvo quizá con un hijo previo afectado.');
  }
  if (v === 'big') h += pill('info', '<b>Bigeminia auricular bloqueada:</b> extrasístoles auriculares que no conducen y simulan bradicardia. Las extrasístoles fetales suelen ser benignas y resolver tras el nacimiento; el 1–3 % se asocia a rachas de taquicardia: control ecográfico cada 1–2 semanas.');
  $('rFe').innerHTML = h || '<div class="empty">Cargá la FC fetal o elegí el patrón.</div>';
}

/* ---------- Antiarrítmicos ---------- */
// u: 'kg' (mg/kg), 'mcg' (µg/kg), 'm2' (mg/m²), 'inf' (µg/kg/min, sin cálculo)
const AA = [
  {n:'Adenosina', v:'IV', d:[[100,150,'mcg']], txt:'bolo rápido + lavado; duplicar hasta 300 µg/kg (máx. 12 mg)', w:''},
  {n:'Amiodarona', v:'IV', d:[[5,5,'kg']], txt:'carga en alícuotas de 1 mg/kg cada 5 min o 2 bolos de 2,5 mg/kg; en D5 %', w:'⚠️ Otras fuentes la indican en 20–60 min. Hipotensión con infusión rápida.'},
  {n:'Amiodarona', v:'VO', d:[[10,15,'kgd']], txt:'carga; mantenimiento 2–5 mg/kg/día en 1 toma', w:'Con digoxina: bajar la digoxina 30–50 %. Control de tiroides, hígado y ojos.'},
  {n:'Lidocaína', v:'IV', d:[[1,1,'kg']], txt:'bolo, repetible; infusión 20–50 µg/kg/min (menos con bajo gasto)', w:''},
  {n:'Procainamida', v:'IV', d:[[7,15,'kg']], txt:'carga lenta con control de TA', w:'Hipotensión. Prueba de la vía accesoria: 10 mg/kg en 5 min.'},
  {n:'Esmolol', v:'IV', d:[[500,500,'mcg']], txt:'carga en 1–2 min; luego 50–200 µg/kg/min', w:'Hipotensión en el bolo, sobre todo en lactantes.'},
  {n:'Propranolol', v:'VO', d:[[1,2,'kgd']], txt:'cada 6 h (lactantes) u 8 h', w:''},
  {n:'Propranolol', v:'IV', d:[[0.1,0.2,'kg']], txt:'dosis lenta, titulando', w:'⚠️ NeoFax indica 0,01 mg/kg en 10 min en neonatos: usar la dosis menor.'},
  {n:'Atenolol', v:'VO', d:[[1,2,'kgd']], txt:'en 1–2 tomas (hasta 3 mg/kg/día)', w:''},
  {n:'Flecainida', v:'VO', d:[[80,110,'m2']], txt:'cada 12 h (lactantes 80–90; mayores 100–110)', w:'Iniciar internado. Evitar en corazones con cardiopatía. Los lácteos cambian la absorción.'},
  {n:'Propafenona', v:'VO', d:[[150,200,'m2']], txt:'cada 8 h', w:'Evitar en cardiopatía estructural.'},
  {n:'Sotalol', v:'VO', d:[[90,200,'m2']], txt:'en 2–3 tomas (inicio 90)', w:'Controlar el QTc; evitar con hipopotasemia o hipomagnesemia.'},
  {n:'Digoxina', v:'IV', d:[[30,50,'mcg']], txt:'carga total (prematuros 20–25 µg/kg): 50 % y luego 2 × 25 %', w:'Evitar en WPW. Ajustar a la función renal.'},
  {n:'Mexiletina', v:'VO', d:[[2,5,'kg']], txt:'por dosis cada 8 h (lactantes hasta 7–8 mg/kg)', w:''},
  {n:'Sulfato de magnesio', v:'IV', d:[[25,25,'kg']], txt:'en 5–15 min (torsades)', w:''}
];
function aar(){
  const P = pac();
  $('aarPac').innerHTML = P.kg > 0 ? `Peso ${f(P.kg * 1000)} g · superficie ${f(P.sc, 3)} m²${num('zTalla') > 0 ? ' (Haycock)' : ' (Costeff, sin talla)'}.` : 'Cargá el peso del paciente en la barra superior para calcular las dosis.';
  const calc = ([a, b, u]) => {
    if (u === 'kgd') return P.kg > 0 ? `${f(a * P.kg, 2)}${b !== a ? '–' + f(b * P.kg, 2) : ''} mg/día` : '—';
    if (u === 'kg') return P.kg > 0 ? `${f(a * P.kg, 2)}${b !== a ? '–' + f(b * P.kg, 2) : ''} mg` : '—';
    if (u === 'mcg') return P.kg > 0 ? `${f(a * P.kg / 1000, 3)}${b !== a ? '–' + f(b * P.kg / 1000, 3) : ''} mg` : '—';
    if (u === 'm2') return P.sc > 0 ? `${f(a * P.sc, 1)}${b !== a ? '–' + f(b * P.sc, 1) : ''} mg/día` : '—';
    return '—';
  };
  const lab = ([a, b, u]) => `${f(a, 2)}${b !== a ? '–' + f(b, 2) : ''} ${u === 'kg' ? 'mg/kg' : u === 'kgd' ? 'mg/kg/día' : u === 'mcg' ? 'µg/kg' : 'mg/m²/día'}`;
  $('aarTab').outerHTML = `<div id="aarTab" class="aarl">${AA.map(a => `<div class="aar"><div class="aar-h"><b>${a.n}</b> <span class="aar-v">${a.v}</span></div><div class="aar-d"><span>${lab(a.d[0])}</span><b>${calc(a.d[0])}</b></div><div class="aar-t">${a.txt}</div>${a.w ? `<div class="aar-w">${a.w}</div>` : ''}</div>`).join('')}</div>`;
  $('rAar').innerHTML = pill('warn', 'Verapamilo contraindicado en menores de 1 año. Antes de asociar antiarrítmicos revisá interacciones: la amiodarona aumenta los niveles de digoxina, flecainida, procainamida y fenitoína y potencia la warfarina.');
}

function init(){
  if (!$('s-po')) return;
  segPick('poIni', po, 'ini', poCalc); segPick('poAV', po, 'av', poCalc); segPick('poQ', po, 'q', poCalc); segPick('poR', po, 'r', poCalc);
  segPick('feVA', fe, 'va', feCalc); ['feFc','feEg'].forEach(id => $(id).addEventListener('input', feCalc));
  $('cvpList').innerHTML = CVP.map(([t, ops], i) => `<div class="crit-g">${t}</div>` + ops.map(([o, p], j) => `<label class="ck"><input type="radio" name="cvp${i}" data-i="${i}" value="${p}" ${j === 0 ? 'checked' : ''}><span class="t">${o}</span><span class="p">${p}</span></label>`).join('')).join('');
  $('cvpList').querySelectorAll('input').forEach(r => r.addEventListener('change', () => { cvSel[+r.dataset.i] = +r.value; cvp(); }));
  poCalc(); poAcc(); feCalc(); cvp(); aar();
  const re = () => { poAcc(); aar(); };
  ['zPeso','zTalla'].forEach(id => $(id) && $(id).addEventListener('input', re));
  window.addEventListener('message', e => { if (e.data && e.data.type === 'pac') setTimeout(re, 60); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
