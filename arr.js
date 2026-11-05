// Cardiología · ECG: enfoque de la taquicardia y criterios de marcapasos.
// Basado en Moss & Adams, 10.ª ed., cap. 22 (Cannon y Snyder), resumen propio.
(function(){
const $ = id => document.getElementById(id);
const num = id => { const s = String($(id).value).trim(); if (s === '') return NaN; const n = parseFloat(s.replace(',', '.')); return isFinite(n) ? n : NaN; };
const f = (n, d=0) => isFinite(n) ? n.toLocaleString('es-AR', {maximumFractionDigits:d, minimumFractionDigits:0}) : '–';
const pill = (cls, t) => `<div class="pill ${cls}"><span>${t}</span></div>`;
const kgPac = () => { try { const p = JSON.parse(localStorage.getItem('pac') || '{}'); return +p.kg; } catch (e) { return NaN; } };

// FC normal en reposo por edad (Moss & Adams, tabla 22.1)
const FC = [['0–7 días',90,160,0],['1 semana–1 año',100,170,0.5],['1–2 años',80,150,1.5],['3–7 años',70,135,5],['7–10 años',65,130,8.5],['11–15 años',60,120,13]];
const QW = [80, 80, 90, 100, 100, 100]; // QRS ancho (ms) por grupo: < 1 año 80; 1–4 años 90; después 100
const sel = { reg:'reg', p:'', ini:'', ade:'np' };
const segs = { tqReg:'reg', tqP:'p', tqIni:'ini', tqAde:'ade' };

function taq(){
  const g = +$('tqEdad').value, fc = num('tqFc'), qrs = num('tqQrs'), [ed, lo, hi, años] = FC[g];
  const kg = kgPac();
  if (!(fc > 0)) { $('rTaq').innerHTML = '<div class="empty">Cargá al menos la frecuencia cardíaca.</div>'; return; }
  let h = '';
  const fcmax = 220 - años;
  if (fc <= hi) h += pill('ok', `FC dentro de lo normal en reposo para ${ed} (${lo}–${hi} lpm).`);
  else if (fc > 220) h += pill('crit', `FC de ${f(fc)} lpm: por encima de 220 lpm es muy improbable que sea sinusal.`);
  else if (fc > fcmax - 10) h += pill('warn', `FC de ${f(fc)} lpm, cerca del máximo sinusal esperable (≈ ${f(fcmax)} lpm).`);
  else h += pill('info', `FC alta para la edad (normal en reposo ${lo}–${hi} lpm). Puede ser sinusal (fiebre, dolor, llanto, hipovolemia) o una arritmia.`);
  const wide = qrs > QW[g];
  const dx = [];
  const add = (score, t) => dx.push([score, t]);
  if (!isFinite(qrs)) h += pill('info', 'Sin la duración del QRS no se puede separar en estrecho o ancho.');
  else if (wide) {
    h += pill('crit', `<b>QRS ancho (${f(qrs)} ms; &gt; ${QW[g]} ms para la edad): tratala como TV hasta demostrar lo contrario.</b> Si está inestable, cardioversión sincronizada${kg > 0 ? ` (0,5–1 J/kg = ${f(0.5 * kg, 1)}–${f(kg, 1)} J; luego 2 J/kg = ${f(2 * kg, 1)} J)` : ' 0,5–1 J/kg, luego 2 J/kg'}.`);
    if (sel.reg === 'irr') { add(9, '<b>FA preexcitada (WPW)</b>: ancha e irregularmente irregular. Evitar adenosina, digoxina y bloqueantes cálcicos; cardioversión.'); add(6, '<b>TV polimorfa / torsades</b>: QRS que cambian latido a latido; magnesio si hay QT largo.'); add(4, '<b>FA o aleteo con aberrancia o bloqueo de rama previo</b>.'); }
    else {
      add(sel.p === 'menos' ? 9 : 7, '<b>Taquicardia ventricular</b>: disociación AV (menos P que QRS), latidos de captura y de fusión. En el lactante el QRS puede medir solo 60–80 ms.');
      add(sel.ade === 'term' ? 8 : 5, '<b>TSV con aberrancia</b> (BRI más común en neonatos, BRD en niños): se estrecha a la misma FC. Si termina con adenosina, es dependiente del nodo AV.');
      add(sel.ade === 'term' ? 7 : 4, '<b>TRAV antidrómica o fibra de Mahaim</b> (imagen de BRI): QRS igual a la preexcitación basal pero máxima.');
      if (fc < 170) add(5, '<b>Ritmo idioventricular acelerado</b> si la FC está dentro del 10–20 % de la sinusal: benigno.');
    }
    if (sel.ade === 'nada' || sel.ade === 'bloq') add(8, 'La adenosina no la terminó: más a favor de TV (puede verse bloqueo VA) o de una taquicardia auricular con aberrancia.');
  } else {
    if (sel.reg === 'irr') {
      add(8, '<b>Fibrilación auricular</b>: sin P, línea de base fibrilatoria, RR irregularmente irregular. Rara en niños: buscar WPW, cirugía auricular, hipertiroidismo, miocarditis.');
      add(7, '<b>Taquicardia auricular caótica</b>: ≥ 3 morfologías de P con línea isoeléctrica entre ellas.');
      add(6, '<b>Aleteo o TRIA con conducción variable</b>.');
      add(4, '<b>Extrasístoles auriculares frecuentes</b> (algunas bloqueadas o aberradas) o arritmia sinusal.');
    } else {
      if (sel.ini === 'gradual' && fc <= 220) add(sel.p === 'mas' ? 3 : 8, '<b>Taquicardia sinusal</b>: P normal (positiva en DI y aVF), inicio y fin progresivos, FC que varía con el estado del niño. Tratar la causa.');
      if (sel.p === 'nv' || sel.p === 'corto' || !sel.p) {
        add(g <= 1 ? 9 : 7, '<b>TRAV ortodrómica (vía accesoria)</b>: la más frecuente en el lactante; P′ retrógrada en el ST (RP corto &gt; 70 ms).');
        add(g <= 1 ? 4 : 7, '<b>TRNAV</b>: P dentro o al final del QRS (pseudo-r′ en V1); más frecuente desde la edad escolar.');
      }
      if (sel.p === 'largo') {
        add(sel.ini === 'ince' ? 9 : 7, '<b>PJRT</b>: RP largo con P′ muy negativas en DII, DIII y aVF, FC 140–200, a menudo incesante; riesgo de miocardiopatía.');
        add(sel.ini === 'gradual' || sel.ini === 'ince' ? 9 : 6, '<b>Taquicardia auricular ectópica</b>: P de morfología distinta a la sinusal, calentamiento y enfriamiento; a menudo incesante.');
        add(3, '<b>TRNAV atípica</b>.');
      }
      if (sel.p === 'mas') {
        add(fc > 0 ? 8 : 0, '<b>Aleteo auricular</b>: ondas F en serrucho a 300–600/min con conducción 2:1 o variable. Neonatal: primeros días de vida.');
        add(6, '<b>TRIA</b> (posoperatorio auricular): P pequeñas con línea isoeléctrica; una P escondida en el QRS o la T.');
        add(5, '<b>Taquicardia auricular con bloqueo AV</b>.');
      }
      if (sel.p === 'menos') add(9, '<b>JET</b>: QRS igual al sinusal con disociación AV (más QRS que P). Típica en las primeras 24–48 h tras cirugía cardíaca; la congénita es rara y grave.');
    }
    if (sel.ade === 'term') { dx.forEach(d => { if (/TRAV|TRNAV|PJRT/.test(d[1])) d[0] += 3; }); h += pill('ok', 'Terminó con adenosina: reentrada que usa el nodo AV (TRAV, TRNAV, PJRT) o una TA focal no automática. Si se reinicia enseguida, una extrasístole la volvió a disparar.'); }
    if (sel.ade === 'bloq') { dx.forEach(d => { if (/Aleteo|TRIA|ectópica|bloqueo AV/.test(d[1])) d[0] += 3; }); h += pill('info', 'Bloqueo AV transitorio con las P que siguen: el circuito o el foco está en la aurícula (aleteo, TRIA, taquicardia auricular). La adenosina desenmascara las ondas auriculares pero no la termina.'); }
    if (sel.ade === 'tran') { dx.forEach(d => { if (/sinusal/.test(d[1])) d[0] += 3; }); h += pill('info', 'Se frenó y volvió a la misma FC: típico de la taquicardia sinusal (o de un foco automático).'); }
    if (sel.ade === 'nada') h += pill('warn', 'Sin ninguna respuesta: revisá la técnica (bolo rápido, vía cercana al corazón, lavado inmediato). Si fue bien administrada: JET, TV o foco automático (puede haber bloqueo VA sin cambiar la taquicardia).');
  }
  if (dx.length) {
    dx.sort((a, b) => b[0] - a[0]);
    h += `<div class="agrp">Diagnósticos a considerar (de más a menos probable)</div><ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:.88rem">${dx.slice(0, 5).map(d => `<li>${d[1]}</li>`).join('')}</ol>`;
  }
  if (!wide && isFinite(qrs) && sel.reg === 'reg') {
    h += pill('info', `<b>Paciente estable con QRS estrecho:</b> maniobras vagales (bolsa con hielo y agua sobre toda la cara 10–15 s; evitar la compresión ocular y el masaje carotídeo) y luego adenosina${kg > 0 ? ` 0,1 mg/kg = <b>${f(0.1 * kg, 2)} mg</b>; si no responde, 0,2 mg/kg = <b>${f(Math.min(0.2 * kg, 12), 2)} mg</b> (máx. 12 mg)` : ' 0,1 mg/kg, luego 0,2 mg/kg (máx. 12 mg)'}, en bolo rápido por una vía cercana al corazón, con lavado inmediato y registro continuo del ECG. Con trasplante cardíaco, usar ¼ a ½ de la dosis.`);
  }
  h += pill('info', 'Verapamilo contraindicado en menores de 1 año (colapso cardiovascular) y en el WPW. Amiodarona: hipotiroidismo en más del 50 % de los lactantes.');
  $('rTaq').innerHTML = h;
}

// Indicaciones de marcapasos (ACC/AHA/HRS 2008, tabla 22.7 del Moss & Adams)
const MP = [
  ['I', 'sint', 'BAV de 2.º grado avanzado o 3.er grado con bradicardia sintomática, disfunción ventricular o bajo gasto'],
  ['I', 'snd', 'Disfunción sinusal con síntomas que coinciden con la bradicardia'],
  ['I', 'pop', 'BAV avanzado o completo posoperatorio que persiste ≥ 7 días o no se espera que resuelva'],
  ['I', 'esc', 'BAV completo congénito con escape de QRS ancho, ectopia ventricular compleja o disfunción ventricular'],
  ['I', 'lact', 'BAV completo congénito en lactante con FC ventricular < 55 lpm, o < 70 lpm si tiene cardiopatía'],
  ['IIa', 'media', 'BAV completo congénito después del primer año con FC media < 50 lpm, pausas de 2–3 veces el ciclo de base o síntomas por incompetencia cronotrópica'],
  ['IIa', 'cc40', 'Bradicardia sinusal con cardiopatía compleja: FC en reposo < 40 lpm o pausas > 3 s'],
  ['IIa', 'hemo', 'Cardiopatía con deterioro hemodinámico por bradicardia sinusal o pérdida de la sincronía AV'],
  ['IIa', 'tria', 'Cardiopatía con bradicardia sinusal, para prevenir episodios recurrentes de TRIA'],
  ['IIb', 'asint', 'BAV completo congénito asintomático con FC aceptable, QRS estrecho y función ventricular normal'],
  ['IIb', 'bifa', 'BAV posoperatorio transitorio que revirtió, con bloqueo bifascicular residual'],
  ['III', 'tran', 'BAV posoperatorio transitorio con conducción normal recuperada y sin síntomas'],
  ['III', 'w1', 'BAV de 2.º grado Mobitz I asintomático'],
  ['III', 'sb', 'Bradicardia sinusal asintomática con FC mínima > 40 lpm y pausas < 3 s']
];
const CL = { I:['crit','Clase I: recomendado'], IIa:['warn','Clase IIa: razonable'], IIb:['info','Clase IIb: puede considerarse'], III:['ok','Clase III: no recomendado'] };
function mp(){
  const on = MP.filter(([, k]) => $('mp_' + k).checked);
  if (!on.length) { $('rMp').innerHTML = '<div class="empty">Marcá los hallazgos del paciente.</div>'; return; }
  const best = ['I','IIa','IIb','III'].find(c => on.some(m => m[0] === c));
  let h = pill(CL[best][0], `<b>${CL[best][1]}.</b> ${on.filter(m => m[0] === best).map(m => m[2]).join('; ')}.`);
  if (best !== 'III' && on.some(m => m[0] === 'III')) h += pill('info', 'Hay hallazgos de clase III marcados, pero prevalece el de mayor indicación.');
  h += pill('info', 'BAV posquirúrgico: mantener estimulación temporal disponible aunque el escape parezca adecuado (sin marcapasos, mortalidad de hasta 60 % en el primer año). Umbrales de captura con margen de al menos el doble. Revisar a diario si vuelve la conducción.');
  h += pill('info', 'BAV completo congénito asintomático: Holter (FC media, pausas, ectopia, escape ancho), ergometría cuando la edad lo permita y ecocardiograma anual. Considerar marcapasos profiláctico al final de la adolescencia.');
  $('rMp').innerHTML = h;
}

function init(){
  if (!$('s-taq')) return;
  $('tqTab').innerHTML = FC.map(r => `<tr><td>${r[0]}</td><td>${r[1]}–${r[2]}</td></tr>`).join('');
  for (const [id, key] of Object.entries(segs)) $(id).querySelectorAll('button').forEach(b => b.onclick = () => {
    sel[key] = (key !== 'reg' && key !== 'ade' && sel[key] === b.dataset.v) ? '' : b.dataset.v;
    $(id).querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x.dataset.v === sel[key])); taq(); });
  ['tqFc','tqQrs'].forEach(id => $(id).addEventListener('input', taq)); $('tqEdad').addEventListener('change', taq);
  $('mpList').innerHTML = ['I','IIa','IIb','III'].map(c => `<div class="crit-g">${CL[c][1]}</div>` + MP.filter(m => m[0] === c).map(([, k, t]) => `<label class="ck"><input type="checkbox" id="mp_${k}"><span class="t">${t}</span></label>`).join('')).join('');
  MP.forEach(([, k]) => $('mp_' + k).addEventListener('change', mp));
  taq(); mp();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
