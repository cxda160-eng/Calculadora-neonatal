/* Módulo 7 · Prematuro extremo (22–25 semanas, < 750 g) — nivel experto */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'ep23',mod:7,mods:[7,2,5],nivel:'experto',sim:'ev_ep23_2',
titulo:'23 semanas, 540 g: de la sala de partos a la tercera semana',
sub:'Insuflación sostenida, tubo, VT con espacio muerto del sensor, surfactante con o sin budesonida, pCO₂ y HIV, VT creciente y corticoides',
pres:{
 'Edad gestacional':'23 + 2 semanas',
 'Edad postnatal':'Nacimiento',
 'Peso al nacer':'540 g',
 'Antecedentes perinatales':'Amenaza de parto prematuro; dos dosis de betametasona (la última 36 h antes) y sulfato de magnesio. La familia y el equipo acordaron cuidados activos. Parto vaginal.',
 'Diagnóstico':'Prematuro periviable con SDR esperable.',
 'Motivo':'Esfuerzo respiratorio débil y FC de 90 lpm a los 30 segundos.',
 'Hemodinamia':'FC 90 lpm al inicio.',
 'Estado respiratorio':'Boqueos aislados.',
 'Examen físico':'Piel gelatinosa, hipotonía.',
 'Radiografía de tórax':'Pendiente.',
 'Gases':'Pendientes.',
 'Oxigenación':'SpO₂ preductal no detectable todavía.',
 'Soporte actual':'Pieza en T con mezclador, bolsa de polietileno, servocuna.'},
inicial:'Nace un prematuro de 23 semanas con esfuerzo pobre y bradicardia. Hay que decidir cómo ventilar, intubar, elegir el VT y luego mantenerlo en las semanas siguientes.',
obj:['Conocer el resultado del ensayo SAIL sobre insuflaciones sostenidas.','Elegir la profundidad del tubo según la edad gestacional.','Programar el VT en < 800 g considerando el espacio muerto del sensor.','Conocer la evidencia de la budesonida mezclada con surfactante.','Relacionar los extremos y las fluctuaciones de la pCO₂ con la HIV grave.','Anticipar el aumento del VT necesario en la tercera semana.','Diferenciar la evidencia de dexametasona en dosis baja e hidrocortisona tardía.'],
etapas:[
{t:'Etapa 1 · Sala de partos',d:{'FC':'90 lpm','Respiración':'Boqueos','FiO₂ inicial':'0,30','Equipo':'Pieza en T, PEEP 6'},
q:[
{id:'q1',tema:'Insuflación sostenida en el prematuro extremo',p:'Un colega propone dos insuflaciones sostenidas de 15 segundos a 25 cmH₂O para «abrir el pulmón». ¿Qué mostró el ensayo SAIL en prematuros de 23–26 semanas?',
o:['Redujo displasia o muerte; se recomienda en < 27 semanas','No redujo displasia o muerte y hubo más muertes en 48 h','Redujo la intubación en sala de partos sin efectos adversos','Fue útil solo en < 25 semanas, donde redujo la muerte'],ok:1,
exp:'El ensayo SAIL comparó hasta dos insuflaciones sostenidas de 25 cmH₂O durante 15 segundos con ventilación intermitente estándar en prematuros de 23–26 semanas que necesitaban reanimación. No redujo la displasia o muerte a las 36 semanas (63,7 % frente a 59,2 %) y la muerte en las primeras 48 horas fue mayor (7,4 % frente a 1,4 %). Se detuvo tras 426 pacientes por la revisión de eventos adversos. Por eso no se recomienda de rutina; se ventila con insuflaciones intermitentes y PEEP.',
no:['No redujo la displasia o muerte.',null,'No se demostró ese beneficio y hubo más muertes precoces.','Los efectos adversos preocuparon justamente en los más pequeños.'],
base:'El objetivo es airear el pulmón y establecer la capacidad residual con PEEP e insuflaciones intermitentes guiadas por la FC.',ev:'F',refs:['kirpalani2019','aha2025']},
{id:'q2',tema:'Profundidad del tubo en el periviable',p:'Se intuba con tubo de 2,5 mm. ¿A qué profundidad en el labio se fija inicialmente?',
o:['6,5 cm, por la regla «6 + peso en kg»','≈ 5,5 cm según la tabla por edad gestacional','≈ 6,0 cm, la profundidad de las 25–26 semanas','≈ 4,5 cm, para evitar la intubación selectiva'],ok:1,
exp:'La regla «6 + peso en kg» sobrestima la profundidad en los más pequeños y lleva a intubaciones selectivas. Kempley y col. propusieron una tabla por edad gestacional: a las 23–24 semanas corresponde alrededor de 5,5 cm en el labio. Siempre se confirma con la auscultación, el CO₂ espirado y la radiografía (punta en T1–T2).',
no:['En < 750 g la regla del peso tiende a dejar el tubo demasiado profundo.',null,'Corresponde a una edad gestacional mayor: a las 23 semanas quedaría profundo.','Demasiado superficial: riesgo de extubación.'],
base:'La tráquea de un prematuro de 23 semanas mide pocos centímetros: un centímetro de error cambia todo.',ev:'E',refs:['kempley2008']}
]},
{sim:'ev_ep23_2',t:'Etapa 2 · Ingreso a la UCIN',d:{'Modo':'AC-VG','Peso':'540 g','FiO₂':'0,50','Gases':'pH 7,20 · pCO₂ 62','Sensor de flujo':'En la pieza en Y'},
q:[
{id:'q3',tema:'VT inicial en < 800 g y espacio muerto del sensor',p:'El sensor de flujo agrega unos 2,7 mL de espacio muerto. ¿Qué VT inicial programa?',
o:['4 mL/kg (2,2 mL), como en los prematuros más grandes','5–6 mL/kg (≈ 3 mL) y ajustar por la pCO₂','8 mL/kg para compensar todo el espacio muerto del sensor','Sin VG ni sensor: presión limitada con PIP según el tórax'],ok:1,
exp:'Nassabeh-Montazami y col. midieron un espacio muerto instrumental de 2,7 mL. En < 800 g, un VT inicial de 5–6 mL/kg se asoció a normocapnia en AC o PSV, y el VT por kilo necesario fue mayor cuanto menor era el peso. A pesar de ese espacio muerto, el intercambio se mantiene porque, con flujos altos y tiempos inspiratorios cortos, el gas fresco penetra a través del espacio muerto: no hace falta renunciar al volumen objetivo.',
no:['Con 2,2 mL el VT es menor que el espacio muerto instrumental: suele producir hipercapnia.',null,'Compensar todo el espacio muerto expone a volutrauma.','El estudio muestra que el VG funciona en estos pesos.'],
base:'En los más pequeños, el espacio muerto fijo del equipo representa una fracción mayor del VT.',ev:'E',refs:['nassabeh2009','klingenberg2017']},
{id:'q4',tema:'Budesonida mezclada con surfactante',p:'Se da poractant 200 mg/kg. ¿Conviene agregar budesonida intratraqueal al surfactante?',
o:['Sí: el PLUSS mostró más supervivencia sin displasia','No de rutina: el PLUSS mostró poco o ningún efecto','Sí, pero solo administrada por catéter fino (LISA)','Sí, a 1 mg/kg para lograr un efecto antiinflamatorio mayor'],ok:1,
exp:'Tras ensayos pequeños prometedores, el PLUSS (doble ciego, 21 unidades) comparó budesonida 0,25 mg/kg mezclada con poractant frente a surfactante solo. La supervivencia sin displasia fue 25,6 % frente a 22,6 % (diferencia ajustada 2,7 %, IC 95 % −2,1 a 7,4). Los autores concluyen que tiene poco o ningún efecto; los resultados a 2 años y otros ensayos definirán su papel.',
no:['La diferencia no fue significativa.',null,'El PLUSS incluyó administración por tubo o catéter fino, sin un beneficio que justifique esa conclusión.','La dosis estudiada fue 0,25 mg/kg y no mostró beneficio claro: no hay base para usar más.'],
base:'Los corticoides locales buscaban reducir la inflamación pulmonar sin los efectos sistémicos; el beneficio no se confirmó en el ensayo grande.',ev:'F',refs:['manley2024','sweet2023']}
]},
{sim:'ev_ep23_3',t:'Etapa 3 · Primeras 72 horas',d:{'Gases seriados':'pCO₂ 34 → 68 → 38 → 61 en 24 h','Ecografía cerebral':'HIV grado I izquierda el día 1','FiO₂':'0,30','Respirador':'Ajustes frecuentes del VT y la FR'},
q:[
{id:'q5',tema:'pCO₂ y hemorragia intraventricular',p:'¿Qué relación hay entre la pCO₂ de los primeros días y la HIV grave?',
o:['Solo la hipocapnia se asoció a HIV grave','Extremos y fluctuaciones se asociaron a HIV grave','Solo el promedio de pCO₂ de los primeros días predijo HIV','Conviene mantener la pCO₂ en 30–35 para proteger'],ok:1,
exp:'En la cohorte de Fabres y col. (primeros 4 días), los bebés con HIV grave tuvieron pCO₂ máximas más altas, mínimas más bajas y mayor fluctuación; el promedio ponderado en el tiempo predijo peor. La pCO₂ regula el flujo sanguíneo cerebral: los cambios bruscos someten a la matriz germinal a variaciones de flujo. Ajustes pequeños y medición continua (transcutánea) ayudan a estabilizarla.',
no:['También la hipercapnia y las fluctuaciones se asociaron.',null,'El promedio ponderado fue el que peor predijo.','Una pCO₂ de 30–35 es hipocapnia, asociada a leucomalacia.'],
base:'Es una asociación observacional: no prueba causalidad, pero es plausible y no tiene costo evitar extremos.',ev:'E',refs:['fabres2007','sweet2023']}
]},
{sim:'ev_ep23_4',t:'Etapa 4 · Día 18',d:{'Peso':'610 g','Modo':'AC-VG, VT 5 mL/kg','PIP de trabajo':'16','FiO₂':'0,40','Gases':'pH 7,22 · pCO₂ 66','Rx':'Opacidad difusa leve, sin colapso'},
q:[
{id:'q6',tema:'Aumento del VT necesario en la tercera semana',p:'Con el mismo VT por kilo que la primera semana, la pCO₂ subió. ¿Qué explica el cambio y qué hace?',
o:['Fatiga diafragmática: pasar a SIMV con PS','Más espacio muerto (traqueomegalia): subir el VT','Más demanda metabólica: subir la FR a 70','Neumonía asociada: cambiar antibióticos y mantener VT'],ok:1,
exp:'Keszler y col. describieron en < 800 g ventilados con VG que el VT necesario para mantener normocapnia aumenta durante las primeras 3 semanas, más en la tercera, probablemente por distensión de la vía aérea superior (traqueomegalia adquirida) y mayor heterogeneidad del pulmón (espacio muerto alveolar). Mantener el VT de la primera semana produce hipercapnia y más trabajo respiratorio.',
no:['La SIMV con frecuencia baja empeoraría la carga por el espacio muerto.',null,'Más FR con VT insuficiente ventila sobre todo el espacio muerto.','Nada indica infección; el patrón coincide con lo descrito por Keszler.'],
base:'Ventilación alveolar = (VT − espacio muerto) × FR: si el espacio muerto crece, el VT debe crecer.',ev:'E',refs:['keszler2009','nassabeh2009']},
{id:'q7',tema:'Corticoides posnatales tardíos',p:'Sigue intubado a los 18 días con FiO₂ 0,40. ¿Qué afirmación sobre los corticoides es correcta?',
o:['Hidrocortisona días 14–28: más supervivencia sin displasia','DART facilita extubar; hidrocortisona tardía sin beneficio','Ningún corticoide facilitó la extubación en ensayos','Budesonida tardía con surfactante: tratamiento estándar'],ok:1,
exp:'En el DART (70 prematuros ventilados tras la primera semana), más bebés se extubaron a los 10 días con dexametasona en dosis baja (60 % frente a 12 %), sin efectos claros sobre la mortalidad o la oxigenoterapia a las 36 semanas. En el ensayo de Watterberg (800 bebés, días 14–28), la hidrocortisona no aumentó de forma significativa la supervivencia sin displasia moderada o grave (16,6 % frente a 13,2 %) ni cambió la supervivencia sin discapacidad. La decisión se individualiza y se habla con la familia.',
no:['La diferencia no fue significativa.',null,'La dexametasona en dosis baja sí facilitó la extubación.','No hay evidencia para ese uso.'],
base:'El balance riesgo-beneficio de los corticoides mejora cuanto mayor es el riesgo de displasia del bebé.',ev:'F',refs:['doyle2006','watterberg2022','sweet2023']}
]}
],
cierre:'En el periviable, la ventilación empieza sin insuflaciones sostenidas, con el tubo a la profundidad de la tabla por edad gestacional y un VT de 5–6 mL/kg que considera el espacio muerto del sensor. La budesonida con surfactante no mostró beneficio en el ensayo grande. Hay que evitar extremos y fluctuaciones de la pCO₂ y, a las 3 semanas, esperar que el VT necesario aumente. La dexametasona en dosis baja facilita la extubación; la hidrocortisona tardía no mejoró la supervivencia sin displasia.'
},

{
id:'hp24',mod:7,mods:[7,2,3],nivel:'experto',sim:'ev_hp24_1',
titulo:'24 semanas: hemorragia pulmonar en el día 3',
sub:'Ductus, PEEP, VAFO, surfactante sin ensayos y obstrucción del tubo',
pres:{
 'Edad gestacional':'24 + 1 semanas',
 'Edad postnatal':'3 días',
 'Peso al nacer / actual':'640 g / 610 g',
 'Antecedentes perinatales':'Corticoides incompletos. Surfactante al nacer. Ductus de 2 mm sin tratamiento.',
 'Diagnóstico':'SDR en mejoría; ductus permeable.',
 'Motivo':'Secreción rosada espumosa por el tubo y desaturación brusca.',
 'Hemodinamia':'FC 175, PA 34/16 (diastólica baja), relleno 4 s.',
 'Estado respiratorio':'AC-VG VT 5,5 mL/kg: la PIP llegó a la Pmax y el VT cayó; FiO₂ de 0,25 a 0,70.',
 'Examen físico':'Crepitantes difusos, pulsos saltones.',
 'Radiografía de tórax':'Opacidad difusa bilateral nueva.',
 'Gases':'pH 7,10 · pCO₂ 70',
 'Oxigenación':'SpO₂ 75–80 % con FiO₂ 0,70',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'Prematuro de 24 semanas que venía mejorando tras el surfactante presenta sangrado por el tubo con caída de la compliance.',
obj:['Explicar el mecanismo de la hemorragia pulmonar.','Aplicar las medidas ventilatorias inmediatas.','Usar la VAFO como rescate.','Conocer el nivel de evidencia del surfactante en la hemorragia pulmonar.','Integrar el manejo del ductus y la coagulación.','Diferenciar obstrucción y caída de compliance en la curva.'],
etapas:[
{sim:'ev_hp24_1',t:'Etapa 1 · El sangrado',d:{'PIP':'En la Pmax (25)','VT':'3 mL/kg','FiO₂':'0,70','Ductus':'2 mm, izquierda a derecha','Rx':'Opacidad bilateral nueva'},
q:[
{id:'q1',tema:'Mecanismo de la hemorragia pulmonar',p:'¿Cuál es el mecanismo más aceptado?',
o:['Trauma de la mucosa por aspiraciones repetidas','Edema hemorrágico por más flujo pulmonar ductal','Infección por gérmenes productores de hemolisinas','Coagulopatía primaria sin cambios hemodinámicos'],ok:1,
exp:'Se piensa que la caída rápida de la resistencia pulmonar, que sigue al surfactante, aumenta el cortocircuito de izquierda a derecha por un ductus permeable y el flujo pulmonar: el capilar se congestiona y se produce un edema hemorrágico. Los factores de riesgo incluyen la prematurez, la restricción de crecimiento, el ductus, la coagulopatía y la ventilación mecánica.',
no:['La aspiración puede lesionar la mucosa, pero no explica un sangrado difuso.',null,'La infección es un factor posible, no el mecanismo principal.','La coagulopatía favorece el sangrado, pero la diastólica baja y los pulsos saltones indican un cambio hemodinámico.'],
base:'Más flujo pulmonar y más presión capilar = edema; con capilares frágiles, edema hemorrágico.',ev:'E',refs:['aziz2020','goldsmith2022']},
{id:'q2',tema:'Ventilación inmediata en la hemorragia pulmonar',p:'¿Qué ajuste ventilatorio es prioritario?',
o:['Aspirar hasta que no salga sangre por el tubo','Subir PEEP/MAP y dar margen a la Pmax','Bajar la PEEP para mejorar el retorno venoso','Bajar el VT a 4 para no aumentar la presión'],ok:1,
exp:'La presión de distensión mayor reduce la filtración hacia el alvéolo y mantiene abiertos los alvéolos inundados. Las aspiraciones repetidas pierden PEEP y pueden reactivar el sangrado; se aspira si hay obstrucción del tubo. Con la PIP en el límite, hay que dar margen a la Pmax para que el VG entregue el VT.',
no:['Cada aspiración despresuriza la vía aérea y puede reactivar el sangrado.',null,'Menos PEEP empeora el edema y el colapso.','Con la compliance caída, bajar el VT agrava la hipoventilación.'],
base:'La PEEP actúa contra la presión hidrostática que empuja líquido al alvéolo.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_hp24_2',t:'Etapa 2 · Rescate en VAFO',d:{'Modo':'VAFO-VG, MAP 14, 12 Hz, VThf 1,8 mL/kg','FiO₂':'0,55','Ecocardiograma':'Ductus 2,2 mm con sobrecarga izquierda','Coagulación':'Plaquetas 60 000; TP prolongado'},
q:[
{id:'q3',tema:'VAFO en la hemorragia pulmonar',p:'¿Por qué es razonable la VAFO de rescate aquí?',
o:['Porque la VAFO ayuda a cerrar el ductus al subir la MAP','MAP alta y estable con VT mínimo; base observacional','Porque redujo la mortalidad en ensayos aleatorizados','Porque permite bajar la FiO₂ a 0,21 de inmediato'],ok:1,
exp:'La VAFO sostiene una presión media alta sin grandes oscilaciones de presión alveolar, lo que ayuda a mantener abiertos los alvéolos inundados y a oxigenar. Su uso en la hemorragia pulmonar se basa en la fisiología y en experiencia clínica, no en ensayos aleatorizados.',
no:['No actúa sobre el ductus.',null,'No hay ensayos que lo demuestren.','La mejoría es gradual.'],
base:'Presión media alta + VT pequeño = volumen pulmonar estable con menos lesión.',ev:'C',refs:['goldsmith2022','nhsggc']},
{id:'q4',tema:'Surfactante tras la hemorragia pulmonar',p:'¿Qué dice la revisión Cochrane sobre el surfactante en la hemorragia pulmonar?',
o:['Reduce la mortalidad a la mitad en ensayos','Sin ensayos aleatorizados; decisión individual','Está contraindicado por el riesgo de resangrado','Solo hay evidencia en recién nacidos de término'],ok:1,
exp:'La sangre y las proteínas plasmáticas inactivan el surfactante, por lo que tiene lógica fisiológica reponerlo. La revisión de Aziz y Ohlsson no encontró ensayos aleatorizados ni cuasi aleatorizados; solo reportes de casos y un estudio prospectivo no controlado con resultados prometedores. No se puede hacer una recomendación basada en ensayos.',
no:['No hay ensayos que lo muestren.',null,'No hay evidencia de que esté contraindicado.','Los reportes incluyen prematuros.'],
base:'Ausencia de evidencia no es evidencia de ausencia, pero sí obliga a decidir caso por caso.',ev:'C',refs:['aziz2020']},
{id:'q5',tema:'Ductus y coagulación en la hemorragia pulmonar',p:'¿Qué más corresponde además del soporte ventilatorio?',
o:['Nada más: es un problema exclusivamente pulmonar','Ductus, coagulopatía y balance hídrico','Expansión con 20 mL/kg para sostener la PA','Óxido nítrico para bajar la presión pulmonar'],ok:1,
exp:'El cortocircuito ductal es parte del mecanismo; la coagulopatía y la trombocitopenia favorecen el sangrado. El manejo integra la ventilación, la hemodinamia y la hemostasia.',
no:['Ignora el mecanismo.',null,'La sobrecarga de volumen empeora el edema.','No hay indicación de vasodilatador pulmonar: el problema es el hiperflujo.'],
base:'La hemorragia pulmonar es una complicación cardiovascular con expresión pulmonar.',ev:'E',refs:['aziz2020','goldsmith2022']}
]},
{t:'Etapa 3 · Lectura de curvas',d:{'Situación':'De nuevo en AC-VG días después','Curvas':'VT espirado bajo, PIP en la Pmax, fuga 3 %, curva de flujo inspiratorio que cae enseguida a cero'},
q:[
{id:'q6',tema:'Obstrucción frente a caída de compliance',p:'¿Qué sugiere el patrón: flujo inspiratorio que se interrumpe enseguida, VT bajo y PIP en la Pmax sin fuga?',
o:['Fuga alrededor del tubo: revisar la fijación','Obstrucción del tubo: aspirar o cambiarlo','Autociclado por agua en el circuito','Sobredistensión: bajar la PEEP de inmediato'],ok:1,
exp:'Cuando la resistencia aumenta bruscamente (coágulo en el tubo), el flujo inspiratorio cae casi a cero porque no hay gradiente útil y el VT queda bajo con la presión al límite. Si el problema fuera solo la compliance, el flujo tendría una forma más normal pero el volumen sería bajo. Ante un tubo obstruido se aspira; si no mejora, se cambia el tubo.',
no:['Sin fuga, no puede ser una fuga.',null,'No hay ciclos sin esfuerzo.','La sobredistensión no corta el flujo inspiratorio de esa manera.'],
base:'Resistencia alta = poco flujo para la misma presión.',ev:'E',refs:['goldsmith2022','hoellering2008']}
]}
],
cierre:'La hemorragia pulmonar del prematuro extremo suele ser un edema hemorrágico por el ductus tras la caída de la resistencia pulmonar. Se maneja con más PEEP y MAP (VAFO si hace falta), evitando aspiraciones innecesarias, corrigiendo la coagulación y evaluando el ductus. El surfactante es una opción razonable sin ensayos que lo respalden.'
},

{
id:'hfo24',mod:7,mods:[7,3],nivel:'experto',sim:'ev_hfo24_1',
titulo:'24 semanas en VAFO-VG: frecuencia, fuga aérea y óxido nítrico',
sub:'Cálculo de DCO₂, neumotórax a tensión, fístula y evidencia del óxido nítrico en el prematuro',
pres:{
 'Edad gestacional':'24 + 5 semanas',
 'Edad postnatal':'2 días',
 'Peso al nacer / actual':'700 g / 690 g',
 'Antecedentes perinatales':'Corioamnionitis, sin corticoides. Dos dosis de surfactante.',
 'Diagnóstico':'SDR grave en VAFO.',
 'Motivo':'Pasó a VAFO-VG por necesidad de PIP > 25 en convencional.',
 'Hemodinamia':'FC 165, PA media 27.',
 'Estado respiratorio':'VAFO-VG: MAP 12, 15 Hz, VThf 1,6 mL/kg, I:E 1:2.',
 'Examen físico':'Vibración simétrica.',
 'Radiografía de tórax':'8 espacios, vidrio esmerilado.',
 'Gases':'pH 7,30 · pCO₂ 49',
 'Oxigenación':'SpO₂ 91 % con FiO₂ 0,40',
 'Soporte actual':'Tubo 2,5 · VAFO-VG'},
inicial:'El equipo discute si bajar la frecuencia y cómo mantener la misma eliminación de CO₂.',
obj:['Calcular el VThf necesario al cambiar la frecuencia con el mismo DCO₂.','Manejar el neumotórax a tensión en VAFO.','Reducir la presión ante una fuga persistente.','Conocer la evidencia del óxido nítrico en el prematuro.'],
etapas:[
{sim:'ev_hfo24_1',t:'Etapa 1 · Frecuencia y volumen',d:{'MAP':'12','Frecuencia':'15 Hz','VThf':'1,6 mL/kg','DCO₂ (por kg²)':'15 × 1,6² ≈ 38'},
q:[
{id:'q1',tema:'DCO₂ al cambiar la frecuencia',p:'Para bajar a 10 Hz manteniendo el mismo DCO₂ (15 × 1,6²), ¿qué VThf hace falta?',
o:['≈ 1,6 mL/kg','≈ 2,0 mL/kg','≈ 2,4 mL/kg','≈ 1,1 mL/kg'],ok:1,
exp:'DCO₂ = f × VT². A 15 Hz con 1,6 mL/kg: 15 × 2,56 = 38,4. A 10 Hz: VT = √(38,4/10) = √3,84 ≈ 1,96 mL/kg. Con frecuencias más altas se logra el mismo transporte de CO₂ con volúmenes más pequeños, lo que puede proteger al pulmón, siempre que el equipo pueda entregarlos.',
no:['Con 1,6 a 10 Hz el DCO₂ caería un tercio.',null,'Excede lo necesario (DCO₂ ≈ 58).','Reduciría mucho el DCO₂.'],
base:'Para un DCO₂ fijo, VT ∝ 1/√f.',ev:'E',refs:['nhsggc','goldsmith2022']}
]},
{sim:'ev_hfo24_2',t:'Etapa 2 · Neumotórax',d:{'SpO₂':'60 %','PA media':'20','VThf medido':'Cae','Vibración':'Disminuida a la izquierda','Transiluminación':'Positiva a la izquierda'},
q:[
{id:'q2',tema:'Neumotórax a tensión en el prematuro extremo',p:'¿Conducta inmediata?',
o:['Subir la MAP a 16 para recuperar volumen','Punción con aguja y después drenaje','Esperar la radiografía antes de punzar','Subir la amplitud para recuperar el VThf'],ok:1,
exp:'La caída de la presión, la saturación y el VThf, con vibración asimétrica y transiluminación positiva, indican un neumotórax a tensión. En el bebé inestable se descomprime de inmediato.',
no:['Agravaría la fuga y la hemodinamia.',null,'Esperar con un bebé inestable puede costar la vida.','Más amplitud no corrige el aire pleural.'],
base:'El aire a tensión colapsa el retorno venoso.',ev:'E',refs:['aha2025','goldsmith2022']},
{id:'q3',tema:'Fuga aérea persistente',p:'Tras el drenaje, el tubo burbujea de forma continua (fístula). ¿Qué ajuste ayuda?',
o:['Subir la MAP para mantener el reclutamiento','MAP mínima con oxigenación aceptable','Pasar a convencional con PIP 30 y Ti corto','Sedación profunda sin cambiar parámetros'],ok:1,
exp:'El flujo por una fístula depende de la presión transpulmonar: bajar la MAP (y la amplitud si la pCO₂ lo permite) reduce la fuga y facilita el cierre. Se aceptan saturaciones y pCO₂ en el límite aceptable.',
no:['Aumentaría la fuga por la fístula.',null,'Las presiones pico altas empeoran la fuga.','No corrige el mecanismo.'],
base:'Menos presión media = menos gas por la fístula.',ev:'E',refs:['goldsmith2022']}
]},
{t:'Etapa 3 · Hipoxemia persistente',d:{'FiO₂':'0,80','IO':'22','Ecocardiograma':'Hipertensión pulmonar moderada, función biventricular conservada'},
q:[
{id:'q4',tema:'Óxido nítrico en el prematuro',p:'¿Qué dice la evidencia sobre el óxido nítrico de rescate en el prematuro?',
o:['Reduce muerte y displasia, como en el término','Sin efecto en muerte o DBP; no de rutina','Indicado siempre que la FiO₂ supere 0,60','Reduce la HIV grave en el rescate temprano'],ok:1,
exp:'Barrington y col. agruparon 17 ensayos en prematuros: el rescate temprano por oxigenación no cambió la muerte ni la displasia (RR 0,94) y se asoció a un aumento no significativo de HIV grave. El uso rutinario y el tardío tampoco mostraron beneficios claros. El informe de la AAP (2014) concluye que los datos no apoyan su uso rutinario. Puede considerarse en casos seleccionados con hipertensión pulmonar documentada, como una decisión individual.',
no:['El beneficio del término no se reproduce en el prematuro.',null,'No hay un umbral de FiO₂ que lo indique en el prematuro.','No la reduce: la tendencia fue a aumentarla.'],
base:'La fisiopatología de la hipoxemia del prematuro es distinta: predominan el déficit de surfactante y el cortocircuito intrapulmonar.',ev:'F',refs:['barrington2017p','kumar2014']},
{id:'q5',tema:'Antes de pensar en vasodilatadores',p:'Antes de considerar cualquier vasodilatador pulmonar, ¿qué hay que verificar?',
o:['Nada: si la FiO₂ es alta, se inicia directamente','Reclutamiento, eco y causas tratables','Que la pCO₂ esté por debajo de 35 mmHg','Que el ductus esté cerrado por ecografía'],ok:1,
exp:'La causa más frecuente de hipoxemia en el prematuro ventilado es el cortocircuito intrapulmonar por pulmón poco reclutado; un vasodilatador no lo corrige. El ecocardiograma confirma la hipertensión pulmonar y evalúa la función ventricular; con disfunción izquierda, vasodilatar el lecho pulmonar puede empeorar el edema.',
no:['La FiO₂ alta no distingue el mecanismo.',null,'La hipocapnia no es un requisito y es perjudicial.','El ductus puede ser una vía de descarga del ventrículo derecho.'],
base:'Primero volumen pulmonar, después vasos.',ev:'E',refs:['abman2015','goldsmith2022']}
]},
{t:'Etapa 4 · Destete de la VAFO',d:{'MAP':'9','FiO₂':'0,28','VThf':'1,8 mL/kg a 12 Hz','Gases':'pH 7,32 · pCO₂ 50','Esfuerzo propio':'Regular'},
q:[
{id:'q6',tema:'Extubar desde VAFO o pasar a convencional',p:'¿Qué afirmación es correcta?',
o:['Siempre pasar a convencional antes de extubar','Ambas estrategias; seguir el protocolo local','Contraindicado extubar desde VAFO','Bajar la MAP a 4 antes de extubar'],ok:1,
exp:'Las dos estrategias se usan. Lo importante es que el pulmón esté estable con presión media baja, FiO₂ baja, esfuerzo respiratorio propio y cafeína, y que el soporte no invasivo posterior esté listo. Los umbrales de MAP para extubar varían entre unidades.',
no:['No es obligatorio.',null,'No está contraindicado.','Es una MAP demasiado baja para un prematuro extremo: perdería volumen pulmonar.'],
base:'El objetivo es extubar con el pulmón abierto y estable.',ev:'I',refs:['nhsggc','goldsmith2022']}
]}
],
cierre:'En VAFO, el DCO₂ = f × VT² permite cambiar la frecuencia sin perder eliminación de CO₂. Ante una fuga aérea, hay que descomprimir y luego bajar la presión media. El óxido nítrico no mejora los resultados del prematuro de forma rutinaria y se reserva para casos seleccionados.'
},

{
id:'dbp25',mod:7,mods:[7,6,2],nivel:'experto',sim:'ev_dbp25_1',
titulo:'25 semanas, día 21: displasia en evolución',
sub:'VT creciente, dexametasona, hidrocortisona, budesonida, óxido nítrico tardío y clasificación',
pres:{
 'Edad gestacional':'25 + 0 semanas (hoy 28 + 0)',
 'Edad postnatal':'21 días',
 'Peso al nacer / actual':'690 g / 820 g',
 'Antecedentes perinatales':'SDR, sepsis tardía tratada, ductus cerrado.',
 'Diagnóstico':'Displasia broncopulmonar en evolución.',
 'Motivo':'Necesidades de oxígeno y presión en aumento; no se logra extubar.',
 'Hemodinamia':'Estable.',
 'Estado respiratorio':'AC-VG VT 5 mL/kg, FR 40, PEEP 6, FiO₂ 0,45, PIP de trabajo 20.',
 'Examen físico':'Tiraje leve, sibilancias ocasionales.',
 'Radiografía de tórax':'Opacidades difusas finas con áreas de mayor transparencia.',
 'Gases':'pH 7,25 · pCO₂ 64 · HCO₃⁻ 28',
 'Oxigenación':'SpO₂ 91 % con FiO₂ 0,45',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'A las 3 semanas sigue ventilado con FiO₂ en aumento. Hay que decidir ajustes y opciones farmacológicas basadas en evidencia.',
obj:['Ajustar el VT a la evolución del espacio muerto.','Conocer la evidencia de la dexametasona en dosis baja.','Conocer el resultado de la hidrocortisona tardía.','Saber qué no funciona: budesonida con surfactante, óxido nítrico tardío.','Clasificar la displasia a las 36 semanas.'],
etapas:[
{sim:'ev_dbp25_1',t:'Etapa 1 · Ajuste del respirador',d:{'VT':'5 mL/kg','PIP':'20','pCO₂':'64','FiO₂':'0,45'},
q:[
{id:'q1',tema:'VT en la tercera semana',p:'¿Qué ajuste del VT es razonable?',
o:['Bajar a 4 mL/kg para proteger el pulmón','Subir de a poco a ~6 mL/kg y reevaluar','Mantener 5 mL/kg y subir la FR a 70','Pasar a SIMV 20 con presión de soporte 5'],ok:1,
exp:'El VT necesario aumenta en las primeras semanas en < 800 g por traqueomegalia adquirida y mayor espacio muerto alveolar. Un VT «protector» de la primera semana ya no alcanza y la hipercapnia y el trabajo respiratorio aumentan.',
no:['Aumentaría la proporción de espacio muerto.',null,'Ventilaría sobre todo el espacio muerto y acortaría el Te.','Con soporte mínimo, las espontáneas por el tubo siguen fatigando.'],
base:'El espacio muerto creciente exige un VT creciente.',ev:'E',refs:['keszler2009']}
]},
{t:'Etapa 2 · Opciones farmacológicas',d:{'Situación':'Ventilado a los 21 días con FiO₂ 0,45','Familia':'Pregunta por los riesgos de los corticoides'},
q:[
{id:'q2',tema:'Dexametasona en dosis baja (DART)',p:'¿Qué mostró el ensayo DART?',
o:['No cambió la extubación frente a placebo','60 % frente a 12 % extubados a los 10 días','Redujo claramente la mortalidad a las 36 semanas','Causó perforación intestinal en el 10 % de los casos'],ok:1,
exp:'El DART incluyó 70 prematuros (< 28 semanas o < 1000 g) dependientes del respirador tras la primera semana. La dexametasona en dosis baja facilitó la extubación y acortó la intubación, sin efectos claros sobre la glucemia o la presión arterial y sin perforaciones intestinales. No mostró reducción clara de la mortalidad ni de la oxigenoterapia a las 36 semanas; es un ensayo pequeño.',
no:['Sí cambió la extubación.',null,'No hubo una reducción clara de la mortalidad.','No hubo perforaciones intestinales.'],
base:'Los corticoides reducen la inflamación y el edema pulmonar que mantienen la dependencia del respirador.',ev:'F',refs:['doyle2006']},
{id:'q3',tema:'Hidrocortisona tardía',p:'¿Y la hidrocortisona entre los días 14 y 28?',
o:['Aumentó la supervivencia sin displasia (p < 0,01)','16,6 % frente a 13,2 %, sin significación','Aumentó la discapacidad moderada o grave a 2 años','Se suspendió precozmente por hiperglucemia grave'],ok:1,
exp:'El ensayo de Watterberg (NICHD) administró hidrocortisona durante 10 días a prematuros intubados entre los días 14 y 28. No hubo diferencias significativas en la supervivencia sin displasia ni en la supervivencia sin discapacidad moderada o grave a los 22–26 meses.',
no:['La diferencia no fue significativa.',null,'No hubo diferencias en el neurodesarrollo.','No se suspendió por ese motivo.'],
base:'Un resultado neutro en un ensayo grande es información valiosa: evita tratamientos sin beneficio.',ev:'F',refs:['watterberg2022']},
{id:'q4',tema:'Lo que no funcionó',p:'¿Cuál de estas intervenciones mostró beneficio claro en ensayos grandes para prevenir la displasia?',
o:['Budesonida con surfactante en las primeras 48 h (PLUSS)','Óxido nítrico tardío según el riesgo de displasia','Ninguna de las dos mostró un beneficio claro','Ambas mostraron un beneficio claro y significativo'],ok:2,
exp:'El PLUSS no mostró un aumento significativo de la supervivencia sin displasia con budesonida y surfactante. En la revisión Cochrane, el óxido nítrico tardío según el riesgo de displasia tuvo un RR de 0,92 con un intervalo que incluye la ausencia de efecto. Ninguno se recomienda de rutina.',
no:['El PLUSS no mostró un aumento significativo de la supervivencia sin displasia.','El efecto fue pequeño (RR 0,92) y no significativo.',null,'Ninguna mostró un beneficio claro.'],
base:'La prevención de la displasia sigue apoyándose en la cafeína, la ventilación no invasiva, el volumen objetivo y la dexametasona en dosis baja en casos seleccionados.',ev:'F',refs:['manley2024','barrington2017p']}
]},
{t:'Etapa 3 · 36 semanas',d:{'Soporte':'NIPPV','FiO₂':'0,30'},
q:[
{id:'q5',tema:'Clasificación de Jensen',p:'¿Qué grado de displasia tiene?',
o:['Grado 1','Grado 2','Grado 3','No tiene displasia'],ok:1,
exp:'En la definición de Jensen, la presión positiva no invasiva (o la cánula > 2 L/min) a las 36 semanas es grado 2.',
no:['Corresponde a cánula ≤ 2 L/min.',null,'Corresponde a ventilación invasiva.','Cualquier soporte a las 36 semanas define displasia.'],
base:'El modo de soporte predice mejor la evolución que la FiO₂.',ev:'F',refs:['jensen2019']}
]}
],
cierre:'En la displasia en evolución del prematuro extremo, el VT debe crecer con el espacio muerto. La dexametasona en dosis baja facilita la extubación; la hidrocortisona tardía, la budesonida con surfactante y el óxido nítrico tardío no mostraron beneficios claros en los ensayos grandes.'
},

{
id:'ext24',mod:7,mods:[7,1,2],nivel:'experto',sim:'ev_ext24_1',
titulo:'Extubar a un prematuro de 24 semanas',
sub:'Espacio muerto del sensor en SIMV, NIPPV o VAFO nasal, distensión abdominal y criterios',
pres:{
 'Edad gestacional':'24 + 3 semanas',
 'Edad postnatal':'10 días',
 'Peso al nacer / actual':'680 g / 720 g',
 'Antecedentes perinatales':'Corticoides completos. Surfactante al nacer. Cafeína desde el día 1.',
 'Diagnóstico':'SDR en resolución.',
 'Motivo':'Planificar la extubación.',
 'Hemodinamia':'Estable.',
 'Estado respiratorio':'AC-VG VT 5,5 mL/kg, PIP de trabajo 12–14, PEEP 6, FR de respaldo 30 (dispara 50), FiO₂ 0,28.',
 'Examen físico':'Buena entrada de aire.',
 'Radiografía de tórax':'Opacidad difusa leve.',
 'Gases':'pH 7,30 · pCO₂ 52',
 'Oxigenación':'SpO₂ 92 % con FiO₂ 0,28',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'El equipo quiere «entrenarlo» en SIMV antes de extubar. Hay que decidir el destete y el soporte posterior.',
obj:['Entender la carga del espacio muerto instrumental en SIMV.','Reconocer que no hay umbrales universales de extubación.','Elegir entre CPAP, NIPPV y VAFO nasal según la evidencia y sus límites.','Prevenir y manejar la distensión abdominal en soporte no invasivo.'],
etapas:[
{sim:'ev_ext24_1',t:'Etapa 1 · Destete',d:{'PIP':'12–14','FiO₂':'0,28','Disparo':'50 rpm'},
q:[
{id:'q1',tema:'SIMV y espacio muerto instrumental',p:'¿Por qué no conviene «entrenar» con SIMV de frecuencia baja?',
o:['Porque la SIMV no aplica PEEP durante las espontáneas','Espacio muerto instrumental en espontáneas sin soporte','Porque la SIMV produce hipocapnia y alcalosis','Porque la SIMV aumenta la fuga alrededor del tubo'],ok:1,
exp:'Estay y col. mostraron que durante el destete en SIMV los prematuros aumentan su ventilación espontánea para compensar y que al reducir el espacio muerto instrumental mantenían el intercambio con menor ventilación minuto: el espacio muerto del equipo impone una carga. En un bebé de 720 g, esa carga es proporcionalmente grande. En AC-VG el respirador ayuda a cada respiración.',
no:['La SIMV tiene PEEP.',null,'Tiende a la hipercapnia, no a la hipocapnia.','La fuga no depende del modo.'],
base:'Cada respiración espontánea debe mover también el espacio muerto del equipo.',ev:'E',refs:['estay2010','nassabeh2009']},
{id:'q2',tema:'Criterios de extubación',p:'¿Qué afirmación sobre los umbrales de extubación es correcta?',
o:['PIP ≤ 10 cmH₂O está validada como umbral universal','No hay umbral universal; se combinan criterios','Extubar al llegar a 1000 g de peso','Prueba de 2 horas en CPAP endotraqueal'],ok:1,
exp:'Los ensayos y protocolos usan criterios distintos. La decisión integra parámetros bajos y estables, oxigenación aceptable, esfuerzo respiratorio, gases y la cafeína. Las pruebas largas de respiración por el tubo sin soporte agotan al prematuro extremo.',
no:['No existe tal umbral validado.',null,'El peso no es un criterio.','Respirar 2 horas por un tubo de 2,5 mm sin soporte es agotador.'],
base:'Extubar es una decisión probabilística: se busca el momento de mayor probabilidad de éxito.',ev:'I',refs:['goldsmith2022','sweet2023']},
{id:'q2b',tema:'Bajar el VT para «entrenar»',p:'Alguien propone bajar el VT objetivo a 3,5 mL/kg antes de extubar para que «trabaje más». ¿Qué pasa?',
o:['Entrena el diafragma y facilita la extubación','Sube pCO₂ y trabajo: el VG ya desteta la PIP','No cambia la ventilación alveolar','Reduce el espacio muerto instrumental'],ok:1,
exp:'Con un VT de 3,5 mL/kg (≈ 2,5 mL) en un bebé de 720 g, buena parte del volumen es espacio muerto (el del sensor solo ronda 2,7 mL). El bebé tiene que compensar con más frecuencia y esfuerzo. En VG, la PIP baja automáticamente cuando el bebé respira mejor: ese es el destete.',
no:['No hay evidencia de que entrene el diafragma; sí aumenta la carga.',null,'Cambia la ventilación alveolar.','El espacio muerto instrumental es fijo.'],
base:'Ventilación alveolar = (VT − espacio muerto) × FR.',ev:'E',refs:['nassabeh2009','estay2010']}
]},
{sim:'ev_ext24_2',t:'Etapa 2 · Soporte postextubación',d:{'Opciones':'CPAP, NIPPV o VAFO nasal','Equipo disponible':'Los tres'},
q:[
{id:'q3',tema:'CPAP, NIPPV o VAFO nasal',p:'¿Qué mostró el ensayo NASONE (China, 25 a 32 + 6 semanas)?',
o:['La CPAP fue superior a la NIPPV y también a la VAFO nasal','Menos reintubación con VAFO nasal y NIPPV; ≥ 25 sem','La VAFO nasal tuvo más eventos adversos','No hubo diferencias entre los tres soportes'],ok:1,
exp:'El NASONE aleatorizó prematuros de 25 a 32 + 6 semanas a CPAP, NIPPV no sincronizada o VAFO nasal tras la primera extubación. La VAFO nasal redujo levemente la duración de la ventilación invasiva, y la VAFO nasal y la NIPPV tuvieron menos reintubaciones que la CPAP, con seguridad similar. Este bebé tiene 24 semanas: estaba fuera de la población estudiada, por lo que la extrapolación debe ser cautelosa.',
no:['La CPAP tuvo más reintubaciones.',null,'Los tres soportes fueron igual de seguros.','Hubo diferencias.'],
base:'Antes de aplicar un ensayo, revisar si el paciente estaba en la población estudiada.',ev:'F',refs:['zhu2022','lemyre2017']},
{id:'q4',tema:'Distensión abdominal en soporte no invasivo',p:'A las 24 horas en NIPPV tiene el abdomen distendido y más pausas. ¿Qué hace primero?',
o:['Reintubar de inmediato por fracaso del soporte','Sonda orogástrica abierta y descartar enterocolitis','Bajar la PEEP a 3 para reducir la aerofagia','Suspender la cafeína porque aumenta la distensión gástrica'],ok:1,
exp:'El gas que entra al estómago con la presión nasal distiende el abdomen, eleva el diafragma, empeora la mecánica y favorece las pausas. La sonda orogástrica abierta suele resolverlo. Siempre hay que descartar una enterocolitis.',
no:['Antes hay que corregir una causa mecánica simple.',null,'La PEEP baja hace perder volumen pulmonar.','La cafeína ayuda a prevenir las pausas.'],
base:'Diafragma elevado = menor compliance del sistema respiratorio.',ev:'E',refs:['cummings2016','goldsmith2022']}
]},
{t:'Etapa 3 · Fracaso a las 36 horas',d:{'Soporte':'NIPPV PEEP 7, PIP 20','Eventos':'Pausas con bradicardia que requieren bolsa','Gases':'pH 7,17 · pCO₂ 74','FiO₂':'0,45'},
q:[
{id:'q5',tema:'Plan tras el fracaso de extubación',p:'Se reintuba. ¿Qué plan es coherente con la evidencia?',
o:['Reintentar la extubación en 6 horas sin cambios','Corregir causas y considerar dexametasona baja','Mantener intubado hasta las 36 semanas','SIMV de frecuencia baja para fortalecerlo'],ok:1,
exp:'Un fracaso precoz obliga a revisar causas corregibles. Si el bebé sigue dependiente del respirador después de la primera semana, el ensayo DART mostró que la dexametasona en dosis baja facilita la extubación; el consenso europeo sugiere considerarla tras 1–2 semanas de ventilación. La decisión se comparte con la familia.',
no:['Repetir sin cambios suele repetir el fracaso.',null,'La ventilación prolongada es un factor de riesgo de displasia.','La SIMV con frecuencia baja suma la carga del espacio muerto.'],
base:'Cada intento fallido tiene costo: conviene llegar al siguiente con las causas corregidas.',ev:'E',refs:['doyle2006','sweet2023']}
]}
],
cierre:'En el prematuro extremo, la SIMV con frecuencia baja suma la carga del espacio muerto del equipo. No hay umbrales universales de extubación. Tras extubar, la NIPPV y la VAFO nasal tienen ventajas frente a la CPAP, con la advertencia de que los menores de 25 semanas estuvieron poco o nada representados. La distensión abdominal es una causa evitable de fracaso.'
},

{
id:'nec24',mod:7,mods:[7,2,6],nivel:'experto',sim:'ev_nec24_1',
titulo:'24 semanas con enterocolitis: el abdomen que ventila mal',
sub:'Compliance de la pared, Pmax en VG, sepsis con hipertensión pulmonar y óxido nítrico',
pres:{
 'Edad gestacional':'24 + 6 semanas',
 'Edad postnatal':'16 días',
 'Peso al nacer / actual':'750 g / 780 g',
 'Antecedentes perinatales':'Extubado el día 9 a NIPPV; alimentación enteral en progreso.',
 'Diagnóstico':'Enterocolitis necrotizante con sepsis.',
 'Motivo':'Distensión abdominal, apneas, inestabilidad: reintubado.',
 'Hemodinamia':'FC 185, PA media 26, relleno 4 s, lactato 4,2.',
 'Estado respiratorio':'AC-VG VT 5,5 mL/kg: la PIP de trabajo subió de 15 a 22–24.',
 'Examen físico':'Abdomen tenso, brillante, con asas visibles.',
 'Radiografía':'Neumatosis intestinal; diafragmas elevados.',
 'Gases':'pH 7,16 · pCO₂ 62 · HCO₃⁻ 22',
 'Oxigenación':'SpO₂ pre 90 % · pos 83 % con FiO₂ 0,50',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'El pulmón no cambió, pero el respirador necesita mucha más presión.',
obj:['Explicar cómo la distensión abdominal cambia la mecánica respiratoria.','Ajustar la Pmax y la PEEP en el volumen objetivo.','Reconocer la hipertensión pulmonar en la sepsis del prematuro.','Aplicar la evidencia del óxido nítrico en el prematuro.'],
etapas:[
{sim:'ev_nec24_1',t:'Etapa 1 · El abdomen',d:{'PIP de trabajo':'22–24 (antes 15)','VT':'5,5 mL/kg','Pmax':'25','Diafragmas':'Elevados'},
q:[
{id:'q1',tema:'Distensión abdominal y mecánica',p:'¿Por qué subió la PIP de trabajo?',
o:['Empeoró el pulmón por una neumonía asociada','Menor compliance de la pared por el abdomen','Fuga alrededor del tubo por la reintubación','Mayor resistencia por broncoespasmo séptico'],ok:1,
exp:'La compliance del sistema respiratorio combina la del pulmón y la de la pared (incluido el abdomen). Con un abdomen tenso, el diafragma no desciende y la misma presión moviliza menos volumen: el VG sube la PIP. También se colapsan las bases pulmonares.',
no:['El pulmón puede estar igual; cambió la pared.',null,'Con fuga caería el VT espirado, no subiría tanto la PIP.','El broncoespasmo no explica la elevación diafragmática ni la radiografía.'],
base:'1/C sistema = 1/C pulmón + 1/C pared.',ev:'E',refs:['goldsmith2022']},
{id:'q2',tema:'Pmax y PEEP con abdomen distendido',p:'La PIP de trabajo está a 1 cmH₂O de la Pmax. ¿Qué ajustes son razonables?',
o:['Bajar el VT a 3 mL/kg para no subir la presión','Margen en la Pmax, PEEP +1–2 y descomprimir','Presión limitada con PIP 15 para proteger','Bajar la PEEP para reducir la presión abdominal'],ok:1,
exp:'Con la Pmax demasiado cerca, el VG no alcanza el VT y aparece hipoventilación. Subir la Pmax deja trabajar al VG; la PEEP algo mayor contrarresta el colapso basal. El tratamiento de fondo es descomprimir el abdomen y tratar la enterocolitis.',
no:['Un VT tan bajo produce hipercapnia y atelectasias.',null,'Una PIP de 15 no alcanzaría para ventilar.','Empeoraría el colapso basal.'],
base:'La presión necesaria la fija la mecánica; el VG solo la busca dentro del límite que se le permite.',ev:'E',refs:['goldsmith2022','klingenberg2017']},
{id:'q2b',tema:'Acidosis mixta en la enterocolitis',p:'Gases: pH 7,16 · pCO₂ 62 · HCO₃⁻ 22, lactato 4,2. ¿Interpretación?',
o:['Acidosis respiratoria pura por la mecánica','Mixta: el HCO₃⁻ esperado sería ≈ 26','Metabólica con compensación respiratoria','Gases aceptables para un prematuro séptico'],ok:1,
exp:'En una acidosis respiratoria aguda, el HCO₃⁻ sube alrededor de 1 mmol/L por cada 10 mmHg de pCO₂ por encima de 40: con 62 se esperarían ≈ 26. Un HCO₃⁻ de 22 con lactato elevado indica un componente metabólico agregado por la sepsis y la hipoperfusión.',
no:['El HCO₃⁻ es menor que el esperado.',null,'La pCO₂ está alta, no compensa.','Un pH de 7,16 no es aceptable.'],
base:'Comparar el HCO₃⁻ medido con el esperado detecta trastornos mixtos.',ev:'E',refs:['goldsmith2022']}
]},
{t:'Etapa 2 · Sepsis e hipoxemia',d:{'SpO₂ pre / pos':'88 % / 78 %','FiO₂':'0,80','Ecocardiograma':'Hipertensión pulmonar con cortocircuito ductal bidireccional, función del VD disminuida'},
q:[
{id:'q3',tema:'Óxido nítrico en el prematuro séptico',p:'¿Qué conducta es coherente con la evidencia?',
o:['Óxido nítrico de rutina si la FiO₂ supera 0,60','Reclutar, inotrópicos, sepsis; ONi individual','Óxido nítrico contraindicado en el prematuro','Hiperventilar hasta pCO₂ 30 para vasodilatar'],ok:1,
exp:'Los ensayos en prematuros no mostraron beneficio del óxido nítrico sobre la muerte o la displasia, y la AAP no apoya su uso rutinario. En situaciones con hipertensión pulmonar documentada por ecocardiograma, algunos equipos lo prueban y lo suspenden si no hay respuesta: es una decisión individual sin respaldo de ensayos.',
no:['No hay base para un uso rutinario.',null,'No está contraindicado; no está indicado de rutina.','La hipocapnia reduce el flujo cerebral y no se recomienda.'],
base:'En la sepsis, la hipertensión pulmonar se acompaña de disfunción miocárdica: la hemodinamia es parte del tratamiento.',ev:'C',refs:['kumar2014','barrington2017p']}
]}
],
cierre:'La distensión abdominal reduce la compliance del sistema respiratorio sin que el pulmón cambie: el VG necesita más presión y margen en la Pmax. En la sepsis del prematuro con hipertensión pulmonar, el óxido nítrico es una decisión individual sin respaldo de ensayos.'
}
);
})();
