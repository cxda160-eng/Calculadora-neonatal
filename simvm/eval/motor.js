/* Motor de casos evaluables: navegación, preguntas, puntaje, historial y recursos.
   Depende de window.EVAL (refs.js, casos-*.js, recursos.js) y del simulador (window.__sim). */
(function(){
"use strict";
const E=window.EVAL;if(!E)return;
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const MODS={1:'Ventilación no invasiva',2:'Ventilación convencional',3:'Alta frecuencia',4:'Mecánica respiratoria',5:'Gases en sangre',6:'Patologías',7:'Prematuro extremo',8:'Hemodinamia e inotrópicos'};
const NIV={basico:'Básico',intermedio:'Intermedio',avanzado:'Avanzado',experto:'Experto'};
const EVL={F:['Evidencia fuerte','Ensayos aleatorizados o metaanálisis, o guías basadas en ellos.'],E:['Consenso o expertos','Recomendación de guías o expertos basada en fisiología y estudios observacionales.'],I:['Práctica institucional','Los valores o umbrales varían entre unidades: seguir el protocolo local.'],C:['Controversia','Evidencia insuficiente o contradictoria; decisión individual.']};
const LS='simvent_eval_v1';
let st={hist:[],cur:null};
try{const s=JSON.parse(localStorage.getItem(LS));if(s&&Array.isArray(s.hist))st=s}catch(e){}
const save=()=>{try{localStorage.setItem(LS,JSON.stringify(st))}catch(e){}};
const byId=id=>E.casos.find(c=>c.id===id);
const flat=c=>{const L=[];c.etapas.forEach((e,ei)=>e.q.forEach(q=>L.push({e:ei,q})));return L};
const best=id=>{const h=st.hist.filter(x=>x.id===id);return h.length?Math.max(...h.map(x=>x.score)):null};
const fecha=t=>new Date(t).toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'2-digit'})+' '+new Date(t).toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
const resLabel=p=>p>=80?['Excelente','ok']:p>=60?['Aprobado','mid']:['Repasar','bad'];
const refLink=k=>{const r=E.refs[k];if(!r)return esc(k);const u=r.doi?'https://doi.org/'+r.doi:r.url;return `${esc(r.c)}${u?` <a href="${esc(u)}" target="_blank" rel="noopener">${r.doi?'doi:'+esc(r.doi):'enlace'}</a>`:''}`};
const evBadge=k=>`<span class="evb ev${k}" title="${esc(EVL[k][1])}">${esc(EVL[k][0])}</span>`;
const shuffle=n=>{const a=[...Array(n).keys()];for(let i=n-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const tiles=o=>`<div class="ev-tiles">${Object.entries(o).map(([k,v])=>`<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div>`;

/* ---------- vistas ---------- */
const VIEWS=['sim','casos','recursos'];
let view='sim',sub={casos:'lib',rec:'glos'},filt={mod:'0',niv:''};
function setView(v,push){
  if(!VIEWS.includes(v))v='sim';view=v;document.body.dataset.view=v;
  $('vSim').hidden=v!=='sim';$('vCasos').hidden=v!=='casos';$('vRec').hidden=v!=='recursos';
  document.querySelectorAll('#vnav button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
  const h=$('hCase');
  if(v==='sim'){try{h.textContent=window.__sim.P.n}catch(e){}}else h.textContent=v==='casos'?'Casos clínicos evaluables':'Glosario, modos y bibliografía';
  if(push!==false){const hs=v==='sim'?'#sim':v==='casos'?(st.view&&st.view.id?'#casos/'+st.view.id:'#casos'):'#recursos';if(location.hash!==hs)history.replaceState(null,'',hs)}
  if(v==='casos')renderCasos();if(v==='recursos')renderRec();
  window.scrollTo(0,0);
}
function route(){
  const h=location.hash.replace('#','');
  if(h.startsWith('casos/')){const id=h.slice(6);if(byId(id)){st.view={id};setView('casos',false);return}}
  if(h==='casos'){st.view=null;setView('casos',false);return}
  if(h==='recursos'){setView('recursos',false);return}
  setView('sim',false);
}

/* ---------- biblioteca ---------- */
function renderCasos(){
  if(st.view&&st.view.id&&byId(st.view.id))return renderCaso(byId(st.view.id));
  const V=$('vCasos');
  const done=new Set(st.hist.map(h=>h.id));
  const L=E.casos.filter(c=>(filt.mod==='0'||c.mods.includes(+filt.mod))&&(!filt.niv||c.nivel===filt.niv));
  const tot=E.casos.length,nd=E.casos.filter(c=>done.has(c.id)).length;
  const avg=nd?Math.round(E.casos.filter(c=>done.has(c.id)).reduce((s,c)=>s+best(c.id),0)/nd):0;
  V.innerHTML=`<section class="card">
    <div class="ev-seg"><button class="${sub.casos==='lib'?'on':''}" data-s="lib">Biblioteca</button><button class="${sub.casos==='prog'?'on':''}" data-s="prog">Mi progreso</button></div>
    <div class="ev-sum"><div><b>${nd}/${tot}</b><span>casos completados</span></div><div><b>${nd?avg:'–'}</b><span>promedio del mejor puntaje</span></div><div><b>${st.hist.length}</b><span>intentos</span></div></div>
    <div class="ev-bar"><i style="width:${tot?nd/tot*100:0}%"></i></div>
  </section>`+(sub.casos==='prog'?progHTML():`<section class="card">
    <div class="ev-filt"><label>Módulo<select id="fMod"><option value="0">Todos</option>${Object.entries(MODS).map(([k,v])=>`<option value="${k}" ${filt.mod===k?'selected':''}>${k}. ${v}</option>`).join('')}</select></label>
    <label>Dificultad<select id="fNiv"><option value="">Todas</option>${Object.entries(NIV).map(([k,v])=>`<option value="${k}" ${filt.niv===k?'selected':''}>${v}</option>`).join('')}</select></label></div>
    <div class="ev-list">${L.map(c=>{const b=best(c.id),n=flat(c).length,cur=st.cur&&st.cur.id===c.id;
      return `<button class="ev-item" data-id="${c.id}"><span class="ev-meta"><span class="mod m${c.mod}">M${c.mod} · ${esc(MODS[c.mod])}</span><span class="niv ${c.nivel}">${NIV[c.nivel]}</span></span>
      <b>${esc(c.titulo)}</b><small>${esc(c.sub)}</small>
      <span class="ev-meta2">${c.etapas.length} etapas · ${n} preguntas${b!=null?` · <span class="sc ${resLabel(b)[1]}">mejor ${b}/100</span>`:''}${cur?' · <span class="sc mid">en curso</span>':''}</span></button>`}).join('')||'<p class="info">No hay casos con ese filtro.</p>'}</div>
    <p class="info">Cada caso evoluciona por etapas. Tras cada respuesta verás la explicación fisiopatológica, por qué las otras opciones no son correctas, el nivel de evidencia y la bibliografía.</p>
  </section>`);
  V.querySelectorAll('.ev-seg button').forEach(b=>b.onclick=()=>{sub.casos=b.dataset.s;renderCasos()});
  V.querySelectorAll('.ev-item').forEach(b=>b.onclick=()=>openCase(b.dataset.id));
  V.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openCase(b.dataset.open));
  const fm=$('fMod'),fn=$('fNiv');if(fm)fm.onchange=()=>{filt.mod=fm.value;renderCasos()};if(fn)fn.onchange=()=>{filt.niv=fn.value;renderCasos()};
  const cl=$('evClear');if(cl)cl.onclick=()=>{if(confirm('¿Borrar todo el historial de casos de este dispositivo?')){st={hist:[],cur:null};save();renderCasos()}};
}
function progHTML(){
  const mods=Object.keys(MODS).map(m=>{const cs=E.casos.filter(c=>c.mod===+m),d=cs.filter(c=>best(c.id)!=null);
    return `<div class="ev-mrow"><span>M${m} · ${esc(MODS[m])}</span><span>${d.length}/${cs.length}</span><div class="ev-bar"><i style="width:${cs.length?d.length/cs.length*100:0}%"></i></div></div>`}).join('');
  // errores frecuentes por tema
  const cnt={};st.hist.forEach(h=>(h.wrong||[]).forEach(w=>{const c=byId(h.id);if(!c)return;const f=flat(c).find(x=>x.q.id===w);if(!f)return;const k=h.id+'|'+w;cnt[k]=cnt[k]||{n:0,tema:f.q.tema,id:h.id,t:c.titulo};cnt[k].n++}));
  const top=Object.values(cnt).sort((a,b)=>b.n-a.n).slice(0,10);
  const hist=[...st.hist].reverse().slice(0,30);
  return `<section class="card"><h2>Progreso por módulo</h2>${mods}</section>
  <section class="card"><h2>Errores frecuentes</h2>${top.length?`<ul class="ev-err">${top.map(x=>`<li><b>${esc(x.tema)}</b> <span class="cnt">${x.n}×</span><br><button class="lnk" data-open="${x.id}">${esc(x.t)}</button></li>`).join('')}</ul>`:'<p class="info">Todavía no hay errores registrados.</p>'}</section>
  <section class="card"><h2>Historial</h2>${hist.length?`<table class="ev-tab"><tr><th>Fecha</th><th>Caso</th><th>Puntaje</th></tr>${hist.map(h=>{const c=byId(h.id);return `<tr><td>${fecha(h.t)}</td><td><button class="lnk" data-open="${h.id}">${esc(c?c.titulo:h.id)}</button></td><td><span class="sc ${resLabel(h.score)[1]}">${h.score}</span></td></tr>`}).join('')}</table>`:'<p class="info">Sin intentos todavía.</p>'}
  ${hist.length?'<button class="btn2" id="evClear">Borrar historial</button>':''}<p class="info">El historial se guarda solo en este dispositivo.</p></section>`;
}
function openCase(id){if(st.cur&&st.cur.id===id&&st.cur.fin)st.cur=null;st.view={id};save();if(view!=='casos'){setView('casos');return}history.replaceState(null,'',`#casos/${id}`);renderCasos();window.scrollTo(0,0)}

/* ---------- caso ---------- */
function renderCaso(c){
  const V=$('vCasos'),F=flat(c);
  const cur=st.cur&&st.cur.id===c.id?st.cur:null;
  const head=`<button class="lnk back" id="evBack">← Casos</button>
   <section class="card ev-head"><span class="ev-meta"><span class="mod m${c.mod}">M${c.mod} · ${esc(MODS[c.mod])}</span><span class="niv ${c.nivel}">${NIV[c.nivel]}</span></span>
   <h2 class="ev-t">${esc(c.titulo)}</h2><p class="info">${esc(c.sub)} · ${c.etapas.length} etapas · ${F.length} preguntas</p></section>`;
  if(!cur||cur.fin===undefined&&cur.i==null){
    V.innerHTML=head+`<section class="card"><h2>A · Presentación</h2>${tiles(c.pres)}</section>
    <section class="card"><h2>B · Situación inicial</h2><p class="ev-p">${esc(c.inicial)}</p></section>
    <section class="card"><h2>C · Objetivos de aprendizaje</h2><ul class="ev-obj">${c.obj.map(o=>`<li>${esc(o)}</li>`).join('')}</ul></section>
    <div class="ev-act"><button class="btn" id="evStart">${cur?'Continuar':'Comenzar el caso'}</button>${c.sim?`<button class="btn2" id="evSim">Abrir en el simulador</button>`:''}</div>`;
  }else if(cur.fin){V.innerHTML=head+resHTML(c,cur);}
  else{
    const it=F[cur.i],et=c.etapas[it.e],q=it.q,ord=cur.ord[q.id],a=cur.ans[q.id];
    const prev=c.etapas.slice(0,it.e);
    V.innerHTML=head+`<section class="card ev-prog"><div class="ev-pl"><span>Pregunta ${cur.i+1} de ${F.length}</span><span>Etapa ${it.e+1} de ${c.etapas.length}</span><span>${Object.values(cur.ans).filter(x=>x.ok).length} correctas</span></div>
      <div class="ev-bar"><i style="width:${(cur.i+(a?1:0))/F.length*100}%"></i></div>
      <div class="ev-dots">${F.map((f,i)=>{const r=cur.ans[f.q.id];return `<i class="${r?(r.ok?'ok':'bad'):i===cur.i?'cur':''}"></i>`}).join('')}</div></section>
     <section class="card"><h2>${esc(et.t)}</h2>${tiles(et.d)}${et.sim?`<button class="btn2 ev-simst" data-sim="${et.sim}">🫁 Ver esta etapa en el simulador</button>`:''}
      ${prev.length?`<details class="ev-prev"><summary>Datos de las etapas anteriores</summary>${prev.map(p=>`<h4>${esc(p.t)}</h4>${tiles(p.d)}`).join('')}<h4>Presentación</h4>${tiles(c.pres)}</details>`:`<details class="ev-prev"><summary>Ver la presentación del caso</summary>${tiles(c.pres)}</details>`}</section>
     <section class="card"><p class="ev-tema">${esc(q.tema)}</p><p class="ev-q">${esc(q.p)}</p>
      <div class="ev-ops">${ord.map((oi,k)=>{const L='ABCDE'[k];let cls='';if(a){if(oi===q.ok)cls='ok';else if(oi===a.sel)cls='bad';else cls='dim'}
        return `<button class="ev-op ${cls}" data-oi="${oi}" ${a?'disabled':''}><span class="L">${L}</span><span>${esc(q.o[oi])}</span></button>`}).join('')}</div>
      ${a?fbHTML(q,a,ord):''}</section>
     ${a?`<div class="ev-act"><button class="btn" id="evNext">${cur.i+1<F.length?'Siguiente pregunta':'Ver resultados'}</button></div>`:''}`;
    V.querySelectorAll('.ev-op').forEach(b=>b.onclick=()=>answer(c,q,+b.dataset.oi));
    const nx=$('evNext');if(nx)nx.onclick=()=>{if(cur.i+1<F.length){cur.i++}else finish(c,cur);save();renderCaso(c);window.scrollTo(0,0)};
  }
  $('evBack').onclick=()=>{st.view=null;save();history.replaceState(null,'','#casos');renderCasos();window.scrollTo(0,0)};
  const sb=$('evStart');if(sb)sb.onclick=()=>{if(!cur)start(c);else if(cur.i==null)cur.i=0;save();renderCaso(c);window.scrollTo(0,0)};
  V.querySelectorAll('.evSimB,#evSim').forEach(b=>b.onclick=()=>goSim(c.sim));
  V.querySelectorAll('.ev-simst').forEach(b=>b.onclick=()=>goSim(b.dataset.sim));
  const rp=$('evRep');if(rp)rp.onclick=()=>{start(c);save();renderCaso(c);window.scrollTo(0,0)};
  const bl=$('evLib');if(bl)bl.onclick=()=>{st.view=null;st.cur=null;save();history.replaceState(null,'','#casos');renderCasos();window.scrollTo(0,0)};
}
function start(c){const ord={};flat(c).forEach(f=>ord[f.q.id]=shuffle(f.q.o.length));st.cur={id:c.id,i:0,ans:{},ord,t0:Date.now()}}
function answer(c,q,oi){const cur=st.cur;if(!cur||cur.ans[q.id])return;cur.ans[q.id]={sel:oi,ok:oi===q.ok};save();renderCaso(c);
  const fb=document.querySelector('.ev-fb');if(fb)fb.scrollIntoView({behavior:'smooth',block:'start'})}
function fbHTML(q,a,ord){
  const why=ord.filter(oi=>oi!==q.ok).map(oi=>`<li><b>${'ABCDE'[ord.indexOf(oi)]}.</b> ${esc(q.no[oi]||'')}</li>`).join('');
  return `<div class="ev-fb ${a.ok?'ok':'bad'}"><p class="ev-verd">${a.ok?'✓ Correcto':'✗ Incorrecto'} · la respuesta es la <b>${'ABCDE'[ord.indexOf(q.ok)]}</b></p>
   <h4>Explicación fisiopatológica</h4><p>${esc(q.exp)}</p>
   <h4>Por qué las otras opciones no son correctas</h4><ul>${why}</ul>
   <h4>Fundamento clínico y ventilatorio</h4><p>${esc(q.base)}</p>
   <p class="ev-evl">${evBadge(q.ev)} <span>${esc(EVL[q.ev][1])}</span></p>
   <h4>Referencias</h4><ul class="refs">${q.refs.map(r=>`<li>${refLink(r)}</li>`).join('')}</ul></div>`;
}
function finish(c,cur){
  const F=flat(c),nc=F.filter(f=>cur.ans[f.q.id]&&cur.ans[f.q.id].ok).length,score=Math.round(nc*100/F.length);
  cur.fin=true;cur.score=score;cur.nc=nc;
  st.hist.push({id:c.id,t:Date.now(),score,nc,n:F.length,wrong:F.filter(f=>!(cur.ans[f.q.id]&&cur.ans[f.q.id].ok)).map(f=>f.q.id)});
  if(st.hist.length>300)st.hist=st.hist.slice(-300);
}
function resHTML(c,cur){
  const F=flat(c),pts=100/F.length,[lab,cls]=resLabel(cur.score);
  const wrong=F.filter(f=>!cur.ans[f.q.id].ok);
  return `<section class="card ev-res"><div class="ev-score ${cls}"><b>${cur.score}</b><span>/ 100</span></div>
   <p class="ev-rl"><span class="sc ${cls}">${lab}</span> · ${cur.nc} de ${F.length} correctas (${Math.round(cur.nc/F.length*100)} %) · ${fx1(pts)} puntos por pregunta</p></section>
   <section class="card"><h2>Puntaje por pregunta</h2><table class="ev-tab"><tr><th>#</th><th>Tema</th><th>Puntos</th></tr>
   ${F.map((f,i)=>{const a=cur.ans[f.q.id];return `<tr><td>${i+1}</td><td>${a.ok?'✓':'✗'} ${esc(f.q.tema)}</td><td>${a.ok?fx1(pts):'0'}</td></tr>`}).join('')}</table></section>
   <section class="card"><h2>Conceptos con dificultades</h2>${wrong.length?`<ul class="ev-obj">${wrong.map(f=>`<li><b>${esc(f.q.tema)}</b>: ${esc(f.q.base)}</li>`).join('')}</ul>`:'<p class="ev-p">Ninguno: respondiste todo correctamente.</p>'}</section>
   <section class="card"><h2>Resumen del aprendizaje</h2><p class="ev-p">${esc(c.cierre)}</p><ul class="ev-obj">${c.obj.map(o=>`<li>${esc(o)}</li>`).join('')}</ul></section>
   <section class="card"><h2>Revisar las respuestas</h2>${F.map((f,i)=>{const a=cur.ans[f.q.id],ord=cur.ord[f.q.id];return `<details class="ev-rev"><summary>${a.ok?'✓':'✗'} ${i+1}. ${esc(f.q.tema)}</summary><p class="ev-q">${esc(f.q.p)}</p><p class="info">Tu respuesta: ${esc(f.q.o[a.sel])}${a.ok?'':`<br>Correcta: ${esc(f.q.o[f.q.ok])}`}</p>${fbHTML(f.q,a,ord)}</details>`}).join('')}</section>
   <div class="ev-act"><button class="btn" id="evRep">Repetir el caso</button>${c.sim?`<button class="btn2 evSimB">Practicar en el simulador</button>`:''}<button class="btn2" id="evLib">Volver a la biblioteca</button></div>`;
}
const fx1=v=>(Math.round(v*10)/10).toLocaleString('es-AR');
function goSim(k){
  const s=window.__sim;
  setView('sim');
  try{const sel=$('caseSel');if(s&&k&&sel&&[...sel.options].some(o=>o.value===k)){sel.value=k;s.loadCase(k);$('hCase').textContent=s.P.n}}catch(e){}
}

/* ---------- recursos ---------- */
function renderRec(){
  const V=$('vRec');
  const tabs=[['glos','Glosario'],['modos','Comparación de modos'],['ev','Niveles de evidencia'],['bib','Bibliografía']];
  let body='';
  if(sub.rec==='glos'){
    body=`<input id="gq" class="ev-in" placeholder="Buscar en el glosario…" autocomplete="off"><dl class="ev-glos" id="gl">${E.glos.slice().sort((a,b)=>a[0].localeCompare(b[0],'es')).map(([t,d])=>`<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>`;
  }else if(sub.rec==='modos'){
    body=`<div class="ev-modos">${E.modos.map(m=>`<div class="ev-modo"><h4>${esc(m.m)}</h4><dl>
      <dt>Qué entrega</dt><dd>${esc(m.que)}</dd><dt>Sincronía</dt><dd>${esc(m.sinc)}</dd><dt>Ventaja</dt><dd>${esc(m.ven)}</dd><dt>Limitación</dt><dd>${esc(m.lim)}</dd><dt>Cuándo pensarlo</dt><dd>${esc(m.cuando)}</dd></dl>
      <p class="info">Fuentes: ${m.refs.map(r=>esc((E.refs[r]&&E.refs[r].c||r).split('.')[0]+' '+(r.match(/\d{4}/)||[''])[0])).join('; ')}</p></div>`).join('')}</div>`;
  }else if(sub.rec==='ev'){
    body=`<div class="ev-evlist">${Object.entries(EVL).map(([k,[t,d]])=>`<p>${evBadge(k)} ${esc(d)}</p>`).join('')}</div>
    <p class="info">Cada pregunta indica su nivel. Las recomendaciones deben individualizarse según la edad gestacional, el peso, la fisiopatología y la evolución, y adaptarse al protocolo de cada unidad.</p>`;
  }else{
    const used={};E.casos.forEach(c=>flat(c).forEach(f=>f.q.refs.forEach(r=>{(used[r]=used[r]||new Set()).add(c.titulo)})));
    body=`<ul class="refs ev-bib">${Object.keys(E.refs).sort((a,b)=>E.refs[a].c.localeCompare(E.refs[b].c)).map(k=>`<li>${refLink(k)}<br><small>${esc(E.refs[k].tipo||'')}${used[k]?' · usada en: '+[...used[k]].map(esc).join('; '):''}</small></li>`).join('')}</ul>`;
  }
  V.innerHTML=`<section class="card"><div class="ev-seg">${tabs.map(([k,l])=>`<button class="${sub.rec===k?'on':''}" data-s="${k}">${l}</button>`).join('')}</div>${body}</section>`;
  V.querySelectorAll('.ev-seg button').forEach(b=>b.onclick=()=>{sub.rec=b.dataset.s;renderRec()});
  const gq=$('gq');if(gq)gq.oninput=()=>{const t=gq.value.toLowerCase();document.querySelectorAll('#gl>div').forEach(d=>d.style.display=d.textContent.toLowerCase().includes(t)?'':'none')};
}

/* ---------- inicio ---------- */
document.querySelectorAll('#vnav button').forEach(b=>b.onclick=()=>{if(b.dataset.v==='casos'&&view==='casos'){st.view=null;save()}setView(b.dataset.v)});
window.addEventListener('hashchange',route);
st.view=null;route();
window.__eval={E,get st(){return st},setView,openCase,flat};
})();
