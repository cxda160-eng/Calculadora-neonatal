/* Módulo 1 · Ventilación no invasiva */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'sdr30',mod:1,mods:[1,5,6],nivel:'intermedio',sim:'ev_sdr30_2',
titulo:'Prematuro de 30 semanas con SDR: CPAP, surfactante mínimamente invasivo y apneas',
sub:'Del soporte en sala de partos al destete de la CPAP',
pres:{
 'Edad gestacional':'30 + 2 semanas',
 'Edad postnatal':'1 hora',
 'Peso al nacer / actual':'1400 g / 1400 g',
 'Antecedentes perinatales':'Madre de 28 años con preeclampsia grave; cesárea sin trabajo de parto. Una sola dosis de betametasona 10 h antes del nacimiento (esquema incompleto). Sin rotura prolongada de membranas ni fiebre materna. Apgar 6 y 8.',
 'Diagnóstico presuntivo':'Síndrome de dificultad respiratoria (enfermedad de membrana hialina).',
 'Motivo de ingreso':'Dificultad respiratoria progresiva desde el nacimiento.',
 'Hemodinamia':'FC 158 lpm, PA media 36 mmHg, relleno capilar 2 s, lactato 2,1 mmol/L.',
 'Estado respiratorio':'FR 74 rpm, quejido audible, tiraje subcostal e intercostal, aleteo nasal.',
 'Examen físico':'Hipoventilación bibasal simétrica. Sin soplos. Abdomen blando.',
 'Radiografía de tórax':'Volumen pulmonar disminuido, patrón reticulogranular difuso con broncograma aéreo. Sin neumotórax.',
 'Gases (capilar, 1 h)':'pH 7,26 · pCO₂ 58 mmHg · HCO₃⁻ 25 mmol/L · EB −2',
 'Oxigenación':'SpO₂ preductal 88 % con FiO₂ 0,40',
 'Soporte actual':'CPAP 6 cmH₂O con piezas binasales cortas'},
inicial:'Llega a la UCIN desde sala de partos, donde se estabilizó con CPAP por máscara. Ahora está en CPAP nasal de 6 cmH₂O y necesita FiO₂ 0,40 para mantener una SpO₂ de 88 %. La enfermera comenta que el quejido aumentó en la última media hora.',
obj:['Elegir la FiO₂ inicial y la estrategia de estabilización de un prematuro de 30 semanas.','Reconocer el criterio de surfactante de rescate en CPAP y el método de administración preferido en el bebé que respira.','Interpretar una acidosis respiratoria aguda y conocer los límites de la hipercapnia permisiva.','Aplicar las metas de saturación basadas en evidencia.','Indicar cafeína en la apnea del prematuro y descartar causas secundarias.','Ubicar la cánula nasal de alto flujo frente a la CPAP según la evidencia.'],
etapas:[
{t:'Etapa 1 · Sala de partos (retrospectiva)',d:{'Situación':'Nacimiento, respira de forma espontánea con quejido','FC':'> 100 lpm','SpO₂ a los 5 min':'Pendiente de titular'},
q:[
{id:'q1',tema:'FiO₂ inicial en la reanimación del prematuro',p:'Al nacer respira de forma espontánea con FC > 100 lpm y signos de dificultad respiratoria. ¿Con qué FiO₂ conviene iniciar el soporte?',
o:['FiO₂ 0,60 inicial y descenso progresivo cuando la SpO₂ preductal supere 90 %','FiO₂ 0,21–0,30 con mezclador, titulada según la SpO₂ preductal de cada minuto','FiO₂ 0,30 fija los primeros 10 minutos para no generar oscilaciones de oxigenación','Aire ambiente sin titular hasta los 10 minutos si la FC se mantiene > 100 lpm'],ok:1,
exp:'En el prematuro de 28 a 31 semanas el consenso europeo sugiere iniciar con FiO₂ 0,21–0,30 y la guía AHA/AAP 2025 propone 0,21–0,30 entre 32 y 34 semanas y 0,30–1,0 por debajo de 32 semanas. En todos los casos la FiO₂ se titula con un mezclador según la SpO₂ preductal (mano derecha) y las metas por minuto de vida. La hiperoxia en la transición genera estrés oxidativo y la hipoxemia prolongada se asocia a mortalidad; por eso la clave no es un número fijo sino arrancar bajo y titular.',
no:['Arrancar con 0,60 expone a hiperoxia en la transición: a esta edad las guías proponen empezar con 0,21–0,30 y subir según la SpO₂.',null,'La FiO₂ no se fija: se ajusta minuto a minuto según la SpO₂ preductal y sus metas.','Una FC > 100 lpm no asegura una oxigenación adecuada: la FiO₂ se titula siempre según la SpO₂ preductal.'],
base:'La SpO₂ normal sube de forma gradual durante los primeros 10 minutos. La FiO₂ se ajusta a esas metas con oximetría preductal y mezclador.',ev:'E',refs:['sweet2023','aha2025']},
{id:'q2',tema:'Estabilización con CPAP en sala de partos',p:'Respira espontáneamente pero tiene quejido y tiraje. ¿Cuál es la conducta inicial más adecuada?',
o:['Intubación y surfactante profiláctico por tener < 32 semanas, quejido y tiraje','CPAP ≥ 6 cmH₂O por máscara o piezas nasales y surfactante de rescate si hace falta','Pieza en T con PIP 20–25 hasta que desaparezca el quejido y luego pasar a CPAP','Oxígeno a flujo libre al 40 % y reevaluar a los 10 minutos antes de indicar presión'],ok:1,
exp:'Ensayos como el SUPPORT mostraron que la CPAP desde la sala de partos es una alternativa a la intubación con surfactante, con menos necesidad de intubación, de corticoides posnatales y de días de ventilación mecánica, sin aumentar la muerte ni la displasia. Por eso el consenso europeo recomienda estabilizar con CPAP a los prematuros que respiran y reservar el surfactante para el rescate.',
no:['La profilaxis sistemática se abandonó: la CPAP temprana mostró resultados iguales o mejores con menos intubaciones.',null,'Ventilar con presión positiva a un bebé que respira no está indicado y expone a volutrauma.','El flujo libre no da presión de distensión: el pulmón sin surfactante sigue colapsando.'],
base:'La presión de distensión continua estabiliza la capacidad residual funcional, reduce el trabajo respiratorio y mejora la relación ventilación/perfusión en el pulmón con déficit de surfactante.',ev:'F',refs:['support2010','sweet2023']}
]},
{sim:'ev_sdr30_2',t:'Etapa 2 · UCIN, 1 hora de vida',d:{'Soporte':'CPAP 6 cmH₂O','FiO₂':'0,40','SpO₂':'88 %','FR':'74 rpm, quejido','Gases':'pH 7,26 · pCO₂ 58 · HCO₃⁻ 25','Rx':'Patrón reticulogranular con broncograma'},
q:[
{id:'q3',tema:'Criterio de surfactante de rescate',p:'Con CPAP 6 cmH₂O necesita FiO₂ 0,40 y la radiografía es compatible con SDR. ¿Qué corresponde?',
o:['Esperar: en CPAP el umbral de surfactante es FiO₂ > 0,40 sostenida 2 horas','Dar surfactante ahora: necesita FiO₂ > 0,30 con CPAP ≥ 6 cmH₂O','Subir la CPAP a 8 y dar surfactante si la FiO₂ sigue > 0,30 a las 6 horas','Intubar, ventilar y decidir el surfactante según la radiografía de control'],ok:1,
exp:'El consenso europeo 2022 indica surfactante de rescate cuando el bebé con SDR empeora y necesita FiO₂ > 0,30 con CPAP ≥ 6 cmH₂O (la ecografía pulmonar puede ayudar a decidir antes). Cuanto antes se da el surfactante en la evolución de la enfermedad, mejores son los resultados; esperar a FiO₂ más altas prolonga la exposición a oxígeno y aumenta el riesgo de fuga aérea.',
no:['El umbral del consenso europeo es FiO₂ > 0,30, no 0,40: esperar retrasa el tratamiento.',null,'Demorar 6 horas sin indicación prolonga la exposición a oxígeno y aumenta el riesgo de fuga aérea; el criterio ya se cumple.','No hace falta ventilar para dar surfactante, y la radiografía ya es compatible con SDR.'],
base:'El surfactante reduce la tensión superficial alveolar, estabiliza el volumen al final de la espiración y mejora la compliance en minutos.',ev:'E',refs:['sweet2023']},
{id:'q4',tema:'LISA/MIST frente a INSURE',p:'Se decide dar surfactante. El bebé respira bien y el equipo tiene experiencia en técnicas mínimamente invasivas. ¿Qué método se prefiere?',
o:['INSURE: intubar, dar surfactante, ventilar 1–2 horas y extubar a CPAP','LISA/MIST: catéter fino en la tráquea con el bebé en CPAP','Surfactante nebulizado por la interfaz de CPAP para evitar la laringoscopia','Intubar y ventilar en VG hasta que la FiO₂ baje de 0,30, luego extubar'],ok:1,
exp:'Para los bebés que respiran en CPAP, el consenso europeo 2022 recomienda la administración mínimamente invasiva (LISA/MIST) como método preferido cuando el equipo tiene experiencia. Evita la ventilación con presión positiva y la intubación, y en los ensayos y metaanálisis se asoció a menos muerte o displasia.',
no:['El INSURE es una alternativa válida, pero cuando el equipo tiene experiencia se prefiere LISA porque evita la ventilación con presión positiva.',null,'La nebulización sigue siendo experimental y no se recomienda de rutina.','Mantener la ventilación tras el surfactante expone a lesión pulmonar sin beneficio.'],
base:'La ventilación con presión positiva, aunque sea breve, inicia la lesión pulmonar; dar el surfactante con el bebé respirando en CPAP evita ese paso.',ev:'F',refs:['sweet2023']},
{id:'q5',tema:'Acidosis respiratoria e hipercapnia permisiva',p:'Gases: pH 7,26 · pCO₂ 58 · HCO₃⁻ 25 · EB −2. ¿Cuál es la interpretación correcta?',
o:['Acidosis respiratoria crónica compensada: el HCO₃⁻ de 25 ya refleja retención renal','Acidosis respiratoria aguda; tolerable mientras el pH se mantenga > 7,22','Acidosis mixta: el EB −2 indica un componente metabólico que hay que corregir','Acidosis respiratoria aguda que obliga a intubar porque la pCO₂ supera 55'],ok:1,
exp:'La pCO₂ alta con bicarbonato normal y pH bajo define una acidosis respiratoria aguda (todavía no hubo tiempo de compensación renal). En el prematuro se acepta una hipercapnia moderada si el pH se mantiene por encima de 7,22; el consenso europeo lo plantea como parte de la estrategia de protección pulmonar. Por sí sola no es indicación de intubar: lo que define el fracaso es la combinación con la evolución, la FiO₂ y las apneas.',
no:['Un HCO₃⁻ de 25 es normal: en la acidosis crónica estaría claramente elevado.',null,'Un EB de −2 está dentro del rango normal: no hay componente metabólico relevante.','La pCO₂ aislada no define la intubación: se integra con el pH, la FiO₂, las apneas y el trabajo respiratorio.'],
base:'pH = 6,1 + log [HCO₃⁻ / (0,03 × pCO₂)]. Un aumento agudo de la pCO₂ baja el pH porque el riñón tarda días en retener bicarbonato.',ev:'E',refs:['sweet2023']}
]},
{sim:'ev_sdr30_2',t:'Etapa 3 · Dos horas después del surfactante (LISA)',d:{'Soporte':'CPAP 6 cmH₂O','FiO₂':'0,25','SpO₂':'96 %','FR':'58 rpm, quejido leve','Gases':'pH 7,31 · pCO₂ 49'},
q:[
{id:'q6',tema:'Metas de SpO₂ en el prematuro',p:'Con FiO₂ 0,25 la SpO₂ es de 96 %. ¿Qué rango de saturación conviene mantener mientras recibe oxígeno?',
o:['85–89 %, con alarmas en 84 y 90 %','90–94 %, con alarmas en 89 y 95 %','91–95 %, con alarmas en 90 y 96 %','88–92 %, con alarmas en 87 y 93 %'],ok:1,
exp:'El metaanálisis NeOProM (5 ensayos, prematuros < 28 semanas) mostró que el rango bajo (85–89 %) no cambió el resultado combinado de muerte o discapacidad, pero aumentó la mortalidad y la enterocolitis necrotizante; el rango alto (91–95 %) aumentó el tratamiento de la retinopatía. Por eso el consenso europeo recomienda 90–94 % con alarmas en 89 y 95 %. Aquí corresponde bajar la FiO₂.',
no:['En NeOProM el rango bajo aumentó la mortalidad y la enterocolitis.',null,'Es el rango alto de los ensayos: más tratamiento de retinopatía; el consenso europeo recomienda 90–94 %.','No es el rango recomendado; su límite inferior se superpone con el rango asociado a mayor mortalidad.'],
base:'Por encima de ~95 % la curva de disociación es plana: la PaO₂ puede subir mucho sin cambios en la SpO₂, y la hiperoxia pasa inadvertida.',ev:'F',refs:['askie2018','sweet2023']}
]},
{sim:'ev_sdr30_4',t:'Etapa 4 · Día 3: pausas respiratorias',d:{'Soporte':'CPAP 5 cmH₂O, FiO₂ 0,21','Eventos':'6 pausas > 20 s en 6 horas con bradicardia a 80 lpm; ceden con estímulo','Temperatura':'36,8 °C','Hemograma y PCR':'Normales','Glucemia':'72 mg/dL','Hematocrito':'45 %'},
q:[
{id:'q7',tema:'Apnea del prematuro y cafeína',p:'Las causas secundarias se descartaron (temperatura, glucemia, hematocrito e infección normales). ¿Cuál es la conducta más adecuada?',
o:['Cafeína a 20 mg/kg/día de citrato sin carga y bajar la CPAP a 4','Citrato de cafeína: carga 20 mg/kg y mantenimiento 5–10 mg/kg/día','Teofilina: su efecto sobre el diafragma supera al de la cafeína','Pasar a NIPPV y diferir la cafeína hasta confirmar las apneas con poligrafía'],ok:1,
exp:'Es una apnea del prematuro. La cafeína estimula el centro respiratorio y aumenta la sensibilidad al CO₂. En el ensayo CAP redujo la displasia broncopulmonar y permitió retirar la presión positiva una semana antes. El informe de la AAP recomienda dosis de carga de 20 mg/kg de citrato y mantenimiento de 5–10 mg/kg/día. La CPAP ayuda en las apneas obstructivas y mixtas.',
no:['Ese esquema no corresponde a las dosis recomendadas (carga 20 mg/kg y mantenimiento 5–10 mg/kg/día) y bajar la CPAP no ayuda.',null,'La cafeína es la metilxantina de elección: mayor margen terapéutico y vida media que permite una dosis diaria.','Las apneas con bradicardia ya están documentadas: diferir la cafeína no tiene justificación.'],
base:'La apnea del prematuro refleja la inmadurez del control respiratorio (respuesta bifásica a la hipoxia, menor respuesta al CO₂, reflejos laríngeos exagerados).',ev:'F',refs:['schmidt2006','eichenwald2016']}
]},
{t:'Etapa 5 · Día 6: destete',d:{'Soporte':'CPAP 5 cmH₂O, FiO₂ 0,21','Pausas':'Ninguna en 48 h con cafeína','FR':'48 rpm, sin tiraje','Problema':'Lesión incipiente en el tabique nasal'},
q:[
{id:'q8',tema:'Cánula nasal de alto flujo frente a CPAP',p:'Los padres preguntan si puede pasar a cánula de alto flujo, que es más cómoda. ¿Qué afirmación es correcta?',
o:['Es equivalente a la CPAP como soporte primario si el flujo es ≥ 6 L/min','Como soporte primario fracasa más que la CPAP; como destete es razonable','Fue no inferior tras la extubación solo en ≥ 32 semanas, así que aquí no aplica','Con la boca cerrada genera una PEEP medible y estable, equivalente a la CPAP'],ok:1,
exp:'En el ensayo HIPSTER (soporte primario en prematuros ≥ 28 semanas) el alto flujo tuvo más fracasos que la CPAP, aunque muchos se rescataron con CPAP sin intubar. Tras la extubación de menores de 32 semanas, el ensayo de Manley mostró no inferioridad frente a la CPAP y menos trauma nasal. En un bebé estable que se está destetando, pasar a alto flujo es una opción razonable si se vigila la evolución.',
no:['En HIPSTER el alto flujo tuvo más fracasos que la CPAP como soporte primario.',null,'El ensayo de Manley incluyó menores de 32 semanas.','La presión que genera es variable y no se mide de rutina.'],
base:'El alto flujo lava el espacio muerto nasofaríngeo y genera una presión variable; la CPAP mantiene una presión definida.',ev:'F',refs:['roberts2016','manley2013','cummings2016']}
]}
],
cierre:'La secuencia CPAP temprana → surfactante de rescate por LISA cuando la FiO₂ supera 0,30 → metas de SpO₂ 90–94 % → cafeína para las apneas → destete escalonado resume el manejo actual del SDR en el prematuro que respira. La hipercapnia moderada con pH > 7,22 es aceptable y no obliga a intubar.'
},

{
id:'postext',mod:1,mods:[1,2],nivel:'avanzado',sim:'ev_postext_1',
titulo:'Después de la extubación: CPAP, NIPPV, criterios de fracaso y segundo intento',
sub:'Prematuro de 27 semanas tras 7 días de ventilación',
pres:{
 'Edad gestacional':'27 + 1 semanas (hoy 28 + 3 de edad posmenstrual)',
 'Edad postnatal':'9 días',
 'Peso al nacer / actual':'950 g / 1010 g',
 'Antecedentes perinatales':'Corticoides prenatales completos. SDR con dos dosis de surfactante. Ventilado en AC-VG desde el día 2. Cafeína desde el día 1.',
 'Diagnóstico':'SDR en resolución; ventilación mecánica prolongada.',
 'Motivo':'Evaluación para extubar.',
 'Hemodinamia':'FC 150 lpm, PA media 38 mmHg. Ecocardiograma sin ductus hemodinámicamente significativo.',
 'Estado respiratorio':'AC-VG: VT 5 mL/kg, PIP de trabajo 13–15, PEEP 6, FR de respaldo 30 (dispara 55), FiO₂ 0,25.',
 'Examen físico':'Buena entrada de aire bilateral, sin tiraje.',
 'Radiografía de tórax':'Campos claros, 8 espacios intercostales, sin atelectasias.',
 'Gases':'pH 7,33 · pCO₂ 50 · HCO₃⁻ 26',
 'Oxigenación':'SpO₂ 92 % con FiO₂ 0,25',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'El equipo decide extubar hoy. Tiene esfuerzo respiratorio propio regular, presiones de trabajo bajas y FiO₂ baja, con cafeína en curso.',
obj:['Elegir el soporte no invasivo postextubación según la evidencia.','Comprender por qué la NIPPV puede reducir el fracaso de extubación.','Aplicar criterios de fracaso del soporte no invasivo e indicaciones de reintubación.','Planificar un segundo intento de extubación.','Reconocer las causas de pérdida de presión en la interfaz nasal.'],
etapas:[
{sim:'ev_postext_1',t:'Etapa 1 · Extubación',d:{'PIP de trabajo':'13–15 cmH₂O','FiO₂':'0,25','Cafeína':'Sí','Disparo':'55 rpm'},
q:[
{id:'q1',tema:'Soporte postextubación en el prematuro extremo',p:'¿Qué soporte postextubación tiene mejor evidencia para reducir el fracaso de extubación en este bebé?',
o:['CPAP 5 cmH₂O: en < 28 semanas la NIPPV no reduce el fracaso de extubación','NIPPV (idealmente sincronizada); la CPAP adecuada es una alternativa','Cánula de alto flujo 6–8 L/min: no inferior a la CPAP en < 28 semanas','VAFO nasal de rutina: es el soporte con evidencia más sólida en < 28 semanas'],ok:1,
exp:'La revisión Cochrane de Lemyre (2017) mostró que la NIPPV, en comparación con la CPAP nasal, reduce el fracaso de extubación y la necesidad de reintubación en la primera semana. El consenso europeo la recomienda tras la extubación. Extubar a un soporte con presión de distensión es esencial: el pulmón del prematuro extremo pierde volumen sin PEEP.',
no:['La revisión Cochrane mostró menos fracaso de extubación con NIPPV frente a CPAP.',null,'Los ensayos de alto flujo incluyeron pocos menores de 28 semanas: no se demostró no inferioridad en ese grupo.','Los ensayos de VAFO nasal incluyeron sobre todo prematuros de 25 semanas o más; no es el soporte con evidencia más sólida en este grupo.'],
base:'La NIPPV suma insuflaciones intermitentes a la PEEP: aumenta la presión media y el volumen corriente y estabiliza la vía aérea superior.',ev:'F',refs:['lemyre2017','sweet2023']},
{id:'q2',tema:'Mecanismo y sincronización de la NIPPV',p:'¿Qué afirmación sobre la NIPPV es correcta?',
o:['Garantiza el VT programado porque el respirador compensa la fuga nasal','Aumenta la MAP y puede aumentar el VT; la ventaja de sincronizar no está clara','Solo funciona sincronizada: la NIPPV no sincronizada no reduce el fracaso','Actúa sobre todo estimulando el centro respiratorio, de forma similar a la cafeína'],ok:1,
exp:'Las insuflaciones nasales aumentan la presión media en la vía aérea y, cuando coinciden con el esfuerzo del bebé, pueden aumentar el volumen corriente y reducir el trabajo respiratorio. Si la insuflación cae en la espiración o con la glotis cerrada, buena parte de la presión no llega al pulmón: de ahí el interés en sincronizar. Sin embargo, que la sincronización mejore los resultados clínicos frente a la NIPPV no sincronizada todavía no está claramente demostrado.',
no:['Con fuga variable y la vía aérea superior en el medio, el volumen que llega al pulmón no está garantizado.',null,'Hay ensayos con NIPPV no sincronizada que redujeron la reintubación frente a la CPAP; la ventaja de sincronizar sigue en estudio.','Su efecto es mecánico (presión media y volumen), no farmacológico sobre el centro respiratorio.'],
base:'La presión que llega a la tráquea depende de la fuga, de la posición de la glotis y del momento del ciclo respiratorio en que se entrega la insuflación.',ev:'C',refs:['lemyre2017','goldsmith2022']}
]},
{sim:'ev_postext_2',t:'Etapa 2 · 24 horas después, en NIPPV',d:{'NIPPV':'PEEP 6, PIP 18, FR 30','FiO₂':'0,45','Eventos':'6 pausas por hora; 2 necesitaron ventilación con bolsa','Gases':'pH 7,09 · pCO₂ 90 · HCO₃⁻ 27','Examen':'Tiraje intenso, quejido'},
q:[
{id:'q3',tema:'Criterios de fracaso del soporte no invasivo',p:'¿Cuál es la conducta más adecuada?',
o:['Subir la PEEP nasal a 9 y la PIP a 25 y repetir los gases en 2 horas','Reintubar: apneas con bolsa, acidosis respiratoria grave y FiO₂ > 0,40','Dar una segunda carga de cafeína y reevaluar antes de decidir la reintubación','Pasar a VAFO nasal y reintubar solo si la pCO₂ supera 100 mmHg'],ok:1,
exp:'Los criterios de fracaso varían entre unidades y ensayos, pero casi todos incluyen apneas que requieren ventilación con presión positiva, acidosis respiratoria (por ejemplo pH < 7,20–7,25 con pCO₂ > 60–65) y FiO₂ por encima de 0,40–0,50. Este bebé cumple los tres. Seguir aumentando el soporte no invasivo solo demora una reintubación inevitable y lo expone a hipoxemia.',
no:['Escalar el soporte nasal con apneas que requieren bolsa y pH 7,09 demora una reintubación inevitable.',null,'Con apneas que ya requieren bolsa y acidosis grave, esperar la respuesta a la cafeína expone a hipoxemia y bradicardia.','Fijar un umbral tan alto ignora las apneas y la FiO₂, que ya definen el fracaso.'],
base:'La acidosis respiratoria refleja hipoventilación alveolar; solo se corrige aumentando la ventilación.',ev:'I',refs:['sweet2023','lemyre2017','goldsmith2022']}
]},
{sim:'ev_postext_1',t:'Etapa 3 · Día 14: segundo intento',d:{'Situación':'Reintubado; AC-VG estable','PIP de trabajo':'14–16 cmH₂O','FiO₂':'0,30','Cafeína':'Sí, a dosis de mantenimiento','Ventilación':'Lleva 12 días acumulados'},
q:[
{id:'q4',tema:'Facilitar la extubación en ventilación prolongada',p:'Sigue en ventilación a las 2 semanas pese a parámetros bajos. ¿Qué medida considera el consenso europeo para facilitar la extubación?',
o:['Hidrocortisona entre los días 14 y 28: mejora la supervivencia sin displasia','Curso corto y decreciente de dexametasona en dosis baja','Dexametasona 0,5 mg/kg/día por 42 días: el esquema con mejor evidencia','Ningún corticoide: están contraindicados por debajo de las 28 semanas'],ok:1,
exp:'El consenso europeo 2022 sugiere considerar un curso corto y decreciente de dexametasona en dosis baja o muy baja para facilitar la extubación en bebés que siguen ventilados después de 1–2 semanas. Los esquemas altos y prolongados de las décadas pasadas se asociaron a efectos adversos neurológicos; los esquemas bajos tienen mejor perfil, aunque la incertidumbre persiste y se discute con la familia.',
no:['En el ensayo de Watterberg la hidrocortisona tardía no aumentó de forma significativa la supervivencia sin displasia.',null,'Los esquemas altos y prolongados se abandonaron por sus efectos adversos neurológicos.','No están contraindicados: un curso corto en dosis baja es una opción reconocida.'],
base:'La inflamación pulmonar mantiene la necesidad de ventilación; los corticoides la reducen pero tienen efectos sobre el cerebro en desarrollo que dependen de la dosis y del momento.',ev:'C',refs:['sweet2023','doyle2006','watterberg2022']},
{id:'q5',tema:'Alto flujo tras la extubación en los más inmaduros',p:'Tras extubar, alguien propone cánula de alto flujo como primer soporte porque «el ensayo de Manley demostró que es igual a la CPAP». ¿Qué responde?',
o:['Fue superior a la CPAP en < 28 semanas, con menos reintubaciones','No inferior en < 32 semanas y menos trauma nasal, con pocos < 28','Fue no inferior solo con flujos ≥ 8 L/min, en cualquier edad gestacional','Fue inferior a la CPAP tras la extubación y por eso dejó de recomendarse'],ok:1,
exp:'El ensayo de Manley (303 prematuros < 32 semanas) mostró no inferioridad del alto flujo frente a la CPAP tras la extubación, con menos trauma nasal y con la mitad de los fracasos rescatados con CPAP sin reintubar. Pero el resultado estuvo cerca del margen de no inferioridad y los más inmaduros fueron pocos. En un bebé con fracaso previo, la NIPPV (o la CPAP) es más prudente.',
no:['No mostró superioridad, y los menores de 28 semanas fueron pocos.',null,'El ensayo no definió la no inferioridad por un umbral de flujo.','El resultado fue de no inferioridad, no de inferioridad.'],
base:'Leer un ensayo incluye saber a quién se aplica: la población estudiada define los límites de la extrapolación.',ev:'F',refs:['manley2013','lemyre2017']}
]},
{t:'Etapa 4 · Tras la segunda extubación, en NIPPV',d:{'Situación':'Llora con la boca abierta','SpO₂':'Cae de 93 % a 84 % mientras llora','Presión medida en la interfaz':'Cae de 6 a 2 cmH₂O'},
q:[
{id:'q6',tema:'Fugas en la interfaz nasal',p:'Cada vez que llora con la boca abierta, la saturación cae. ¿Cuál es la explicación y la conducta?',
o:['Apnea obstructiva por flexión del cuello: reposicionar y subir la PEEP a 9','Pérdida de presión por la boca: chupete o mentonera y revisar la interfaz','Derreclutamiento por fatiga: reintubar porque la NIPPV ya fracasó','Autociclado por la fuga: subir el umbral del trigger nasal'],ok:1,
exp:'La boca abierta es una gran fuga: la presión de distensión cae, el pulmón pierde volumen y aparece la desaturación. Revisar el ajuste de las piezas o la máscara, cerrar la boca con un chupete o un soporte mentoniano y contener al bebé suele resolverlo. Es una causa frecuente y evitable de «fracaso» del soporte no invasivo.',
no:['El patrón es concordante con el llanto y la caída de presión en la interfaz, no con una obstrucción posicional.',null,'Es un problema mecánico transitorio: antes de reintubar se corrige la fuga.','El autociclado agrega ciclos; no explica la caída de la presión medida ni la desaturación con el llanto.'],
base:'La presión entregada por una interfaz nasal depende del sellado; las fugas grandes impiden mantener la PEEP programada.',ev:'E',refs:['cummings2016','goldsmith2022']}
]}
],
cierre:'Tras la extubación del prematuro extremo, el soporte con presión de distensión es esencial y la NIPPV tiene la mejor evidencia para reducir el fracaso. Los criterios de fracaso combinan apneas, acidosis respiratoria y necesidad de oxígeno. Antes de etiquetar un fracaso, hay que buscar causas mecánicas como la fuga por la boca.'
}
);
})();
