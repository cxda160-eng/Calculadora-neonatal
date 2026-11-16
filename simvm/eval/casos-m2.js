/* Módulo 2 · Ventilación convencional */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'elgan26',mod:2,mods:[2,4,5,6],nivel:'avanzado',sim:'ev_elgan_1',
titulo:'Prematuro extremo de 26 semanas: AC-VG desde la intubación hasta la extubación',
sub:'Caso integrador: modo, parámetros, surfactante, gases, complicaciones y destete',
pres:{
 'Edad gestacional':'26 + 0 semanas',
 'Edad postnatal':'40 minutos',
 'Peso al nacer / actual':'800 g / 800 g',
 'Antecedentes perinatales':'Parto vaginal precipitado. Una dosis de betametasona; sulfato de magnesio. Apgar 4 y 7. Bradicardia con esfuerzo respiratorio pobre pese a CPAP y ventilación con pieza en T: intubado en sala de partos.',
 'Diagnóstico':'SDR grave en prematuro extremo.',
 'Motivo de ingreso':'Ventilación invasiva desde sala de partos.',
 'Hemodinamia':'FC 165 lpm, PA media 28 mmHg, relleno capilar 3 s, lactato 3,2 mmol/L.',
 'Estado respiratorio':'Intubado con tubo 2,5 a 6,0 cm en el labio; ventilado con pieza en T (PIP 25, PEEP 6).',
 'Examen físico':'Expansión torácica escasa, entrada de aire disminuida y simétrica.',
 'Radiografía de tórax':'Hipoaireación grave (6 espacios), vidrio esmerilado con broncograma. Punta del tubo en T2.',
 'Gases (arterial umbilical)':'pH 7,18 · pCO₂ 64 · PaO₂ 48 · HCO₃⁻ 23 · EB −5',
 'Oxigenación':'SpO₂ 86 % con FiO₂ 0,60',
 'Soporte actual':'Ventilación manual con pieza en T'},
inicial:'Llega a la UCIN intubado. Hay que conectarlo al respirador, dar surfactante y planificar la ventilación de los próximos días.',
obj:['Justificar la ventilación con volumen objetivo como modo inicial.','Programar el VT inicial según el peso y el espacio muerto.','Anticipar los cambios de mecánica durante y después del surfactante en AC-VG.','Corregir la hipocapnia y la hiperoxia tras la mejoría de la compliance.','Aplicar un enfoque sistemático (DOPE) ante una desaturación aguda.','Elegir el método de aspiración y conocer sus efectos.','Ajustar la PEEP ante edema pulmonar por ductus.','Destetar en AC-VG sin aumentar el trabajo respiratorio.','Usar la cafeína y el soporte no invasivo para la extubación.','Clasificar la displasia con la definición actual.'],
etapas:[
{sim:'ev_elgan_1',t:'Etapa 1 · Elección del modo',d:{'Peso':'800 g','Tubo':'2,5 a 6,0 cm','FiO₂':'0,60','Gases':'pH 7,18 · pCO₂ 64'},
q:[
{id:'q1',tema:'Ventilación con volumen objetivo',p:'¿Qué modo de ventilación invasiva inicial tiene mejor respaldo en este bebé?',
o:['IMV no sincronizada limitada por presión: más estable en < 800 g','AC sincronizada con volumen objetivo (volumen garantizado)','VAFO electiva: en Cochrane redujo la mortalidad frente a la convencional','PSV con volumen garantizado y sin frecuencia de respaldo'],ok:1,
exp:'La revisión Cochrane de Klingenberg (2017) mostró que la ventilación con volumen objetivo, frente a la limitada por presión, reduce el resultado combinado de muerte o displasia, el neumotórax, la hipocapnia, la hemorragia intraventricular grave o la leucomalacia y los días de ventilación. El volumen, no la presión, es lo que lesiona el pulmón; con VG la presión baja sola cuando mejora la compliance.',
no:['La falta de sincronía y la presión fija aumentan la variabilidad del volumen; el volumen objetivo tiene mejor evidencia.',null,'En la revisión de Cools la VAFO electiva no cambió la mortalidad; la reducción de displasia fue pequeña e inconsistente.','Sin frecuencia de respaldo, un prematuro extremo con esfuerzo irregular queda expuesto a apneas.'],
base:'Volutrauma: la sobredistensión por exceso de volumen lesiona más que la presión en sí. El VG ajusta la PIP respiración a respiración para entregar el VT programado.',ev:'F',refs:['klingenberg2017','cools2015']},
{id:'q2',tema:'VT inicial en el prematuro extremo',p:'¿Qué volumen corriente inicial programa?',
o:['3 mL/kg (2,4 mL) para minimizar el volutrauma la primera hora','4–6 mL/kg (≈ 4–5 mL), ajustado luego por la pCO₂ y la mecánica','7–8 mL/kg para compensar el espacio muerto del sensor de flujo','PIP fija de 25 y ajustar según la expansión torácica'],ok:1,
exp:'Para el SDR se usan volúmenes de 4–6 mL/kg. En los bebés más pequeños hace falta un VT por kilo algo mayor, porque el espacio muerto del sensor de flujo y del tubo representa una proporción mayor. Luego se ajusta según la pCO₂, el trabajo respiratorio y la radiografía.',
no:['Por debajo de ~4 mL/kg el VT se acerca al espacio muerto: aumentan la pCO₂ y el trabajo respiratorio.',null,'Compensar todo el espacio muerto con volúmenes altos expone a volutrauma.','Fijar la presión deja que el volumen cambie con la compliance: es lo que el volumen objetivo evita.'],
base:'Ventilación alveolar = (VT − espacio muerto) × FR. Si el VT se acerca al espacio muerto, la ventilación alveolar cae aunque aumente la FR.',ev:'E',refs:['goldsmith2022','klingenberg2017']}
]},
{sim:'ev_elgan_1',t:'Etapa 2 · Surfactante (poractant 200 mg/kg) en AC-VG',d:{'Modo':'AC-VG, VT 4,5 mL/kg','PEEP':'6 cmH₂O','PIP de trabajo antes':'22 cmH₂O','Pmax':'25 cmH₂O','FR de respaldo':'50 rpm','FiO₂':'0,55'},
q:[
{id:'q3',tema:'Surfactante en volumen garantizado',p:'Durante y justo después del surfactante, ¿qué es lo más esperable en AC-VG y cómo debe estar programada la Pmax?',
o:['La PIP baja enseguida: conviene fijar la Pmax igual a la PIP previa','Obstrucción transitoria con PIP en ascenso: dejar margen en la Pmax','El VG compensa todo: la Pmax puede quedar 1 cmH₂O sobre la PIP','Pasar a presión limitada 1 hora para evitar picos durante el surfactante'],ok:1,
exp:'En el estudio de Wheeler (22 prematuros en AC-VG), 21 tuvieron obstrucción completa del flujo en el tubo al dar el surfactante; la PIP subió una mediana de 8 cmH₂O y tardó 30–60 minutos en volver a la basal. Cuando la Pmax estaba cerca de la PIP previa, la mayoría recibió volúmenes por debajo del objetivo. Después, con la mejoría de la compliance, la FiO₂ suele poder bajarse rápido.',
no:['Al principio el surfactante líquido aumenta la resistencia; la mejoría de la compliance llega después.',null,'El VG solo puede subir la PIP hasta la Pmax: con un margen tan chico el VT queda corto.','No hace falta cambiar de modo; sí programar bien la Pmax.'],
base:'El surfactante líquido en la vía aérea aumenta la resistencia de forma transitoria; luego, al distribuirse en los alvéolos, mejora la compliance.',ev:'E',refs:['wheeler2009']},
{id:'q4',tema:'Hipocapnia e hiperoxia después del surfactante',p:'Una hora después: VT 4,5 mL/kg con PIP de 11, FiO₂ 0,25, SpO₂ 98 %. Gases: pH 7,42 · pCO₂ 33. ¿Qué ajusta?',
o:['No cambiar nada: con pCO₂ 33 y pH 7,42 el objetivo está logrado','Bajar la FiO₂ a SpO₂ 90–94 % y el VT objetivo ~0,5 mL/kg','Bajar la FR de respaldo de 50 a 30 y mantener la FiO₂ en 0,25','Subir la PEEP a 8 para estabilizar el volumen y bajar la FiO₂'],ok:1,
exp:'Con la mejor compliance hay hiperoxia (SpO₂ 98 %) e hipocapnia (pCO₂ 33). La hipocapnia reduce el flujo sanguíneo cerebral y se asocia a leucomalacia periventricular y displasia. La FiO₂ se titula a la meta y la ventilación minuto se reduce bajando un poco el VT; el VG baja la PIP solo. Si el bebé dispara por encima del respaldo, bajar la FR de respaldo no cambia la ventilación.',
no:['Una pCO₂ de 33 en un prematuro extremo es hipocapnia, asociada a lesión cerebral; además hay hiperoxia.',null,'Deja sin corregir la hiperoxia (SpO₂ 98 %) y, si el bebé dispara por encima del respaldo, no cambia la ventilación.','Con una compliance que mejora, más PEEP puede sobredistender; no corrige la hipocapnia.'],
base:'pCO₂ ≈ VCO₂ / ventilación alveolar. Bajar la ventilación alveolar sube la pCO₂.',ev:'E',refs:['sweet2023','klingenberg2017']}
]},
{sim:'ev_elgan_3',t:'Etapa 3 · Día 2: desaturación súbita',d:{'SpO₂':'70 %','FC':'90 lpm','VT espirado':'1,5 mL/kg','PIP':'En la Pmax (25)','Fuga':'2 %','Auscultación':'Entrada de aire disminuida bilateral y simétrica'},
q:[
{id:'q5',tema:'Desaturación aguda: enfoque DOPE',p:'¿Qué hace primero?',
o:['Subir la Pmax a 35 y la FiO₂ a 1,0 hasta recuperar el VT','Ventilar a mano, confirmar el tubo con CO₂ espirado y aplicar DOPE','Sedar y relajar: el VT bajo es por lucha con el respirador','Pedir una radiografía urgente antes de tocar el tubo o el circuito'],ok:1,
exp:'El VT espirado muy bajo con la PIP en el límite y sin fuga indica que no entra el gas: obstrucción del tubo (secreciones, acodamiento), extubación o un problema mecánico grave. El enfoque DOPE (Displacement, Obstruction, Pneumothorax, Equipment) ordena la evaluación. Para el desplazamiento, conviene conocer la profundidad esperada según la edad gestacional (a 26 semanas, alrededor de 6,0 cm en el labio) y compararla con la marca del tubo. Ventilar a mano con pieza en T o bolsa y comprobar el CO₂ espirado separa el problema del equipo del problema del paciente.',
no:['Subir la presión sin conocer la causa no resuelve una obstrucción y puede producir neumotórax si el tubo está en un bronquio.',null,'La sedación no corrige un tubo obstruido o desplazado y retrasa el diagnóstico.','Con un VT casi nulo no se espera la radiografía: primero se evalúa el tubo y se ventila a mano.'],
base:'Si la presión llega al límite y el volumen no entra, la resistencia (obstrucción) o la compliance (neumotórax, intubación selectiva) cambiaron bruscamente.',ev:'E',refs:['goldsmith2022','aha2025','kempley2008']},
{id:'q6',tema:'Aspiración abierta frente a cerrada',p:'La causa fue un tapón de secreciones. Al planificar las próximas aspiraciones, ¿qué afirmación es correcta?',
o:['La aspiración abierta breve no cambia el volumen pulmonar','Pérdida similar; recuperación más lenta con la abierta','La cerrada evita toda pérdida de volumen y no altera el VG','Aspirar cada 2 horas de rutina previene nuevos tapones'],ok:1,
exp:'Hoellering y col. compararon aspiración abierta y cerrada en recién nacidos ventilados: la caída de volumen pulmonar fue de magnitud similar, pero el tiempo de recuperación fue mayor con la aspiración abierta. La desconexión del circuito, además, interrumpe la PEEP. La aspiración se hace por necesidad (secreciones visibles, cambios en la curva de flujo, caída del VT), no de rutina.',
no:['Toda aspiración genera presión negativa y la desconexión anula la PEEP.',null,'La aspiración cerrada también quita volumen y altera la medición del VG.','La aspiración de rutina sin indicación expone a derreclutamiento, bradicardia e infección.'],
base:'Tras perder volumen, el pulmón necesita más presión para volver a abrirse (histéresis); por eso la recuperación lleva tiempo.',ev:'E',refs:['hoellering2008','goldsmith2022']}
]},
{sim:'ev_elgan_4',t:'Etapa 4 · Día 5: más oxígeno y más presión',d:{'FiO₂':'0,40 (antes 0,25)','PIP de trabajo':'20 (antes 13) para VT 5 mL/kg','Rx':'Opacidad difusa bilateral nueva','Ecocardiograma':'Ductus de 2,2 mm con cortocircuito de izquierda a derecha y sobrecarga de cavidades izquierdas','PA':'Diastólica baja, pulsos saltones'},
q:[
{id:'q7',tema:'Ductus, edema pulmonar y PEEP',p:'¿Qué ajuste ventilatorio es razonable mientras se decide el manejo del ductus?',
o:['Bajar la PEEP a 4 para mejorar el retorno venoso y el gasto','Subir la PEEP 1–2 cmH₂O y vigilar la hemodinamia','Subir la PEEP a 8 porque reduce el cortocircuito ductal','Subir la FiO₂ para favorecer el cierre ductal por oxígeno'],ok:1,
exp:'El cortocircuito de izquierda a derecha aumenta el flujo pulmonar y el líquido intersticial y alveolar: baja la compliance y suben la FiO₂ y la PIP. Aumentar la PEEP ayuda a mantener los alvéolos abiertos frente al edema. En un estudio fisiológico (Fajardo 2014), subir la PEEP de 5 a 8 cmH₂O no modificó de forma significativa el cortocircuito ductal ni el flujo sistémico: es una medida de soporte pulmonar, no un tratamiento del ductus.',
no:['Bajar la PEEP con edema empeora el colapso alveolar y la oxigenación.',null,'En el estudio de Fajardo, subir la PEEP de 5 a 8 no modificó de forma significativa el cortocircuito ductal: ayuda al pulmón, no trata el ductus.','La FiO₂ alta no es un tratamiento del ductus, expone a hiperoxia y baja la resistencia pulmonar.'],
base:'Más flujo pulmonar → más líquido intersticial → menor compliance. La PEEP contrarresta el colapso por edema.',ev:'E',refs:['fajardo2014','goldsmith2022']}
]},
{sim:'ev_elgan_5',t:'Etapa 5 · Día 8: destete',d:{'Modo':'AC-VG, VT 5 mL/kg','PIP de trabajo':'12–14 cmH₂O','PEEP':'6','FR de respaldo / total':'40 / 55','FiO₂':'0,25','Gases':'pH 7,28 · pCO₂ 56'},
q:[
{id:'q8',tema:'Destete en AC-VG',p:'¿Cómo se desteta en este modo?',
o:['SIMV con FR 10 sin presión de soporte para entrenar los músculos','Dejar que el VG baje la PIP sin llevar el VT bajo ~4 mL/kg','Bajar el VT objetivo 0,5 mL/kg por día hasta llegar a 3 mL/kg','Bajar la FR de respaldo a 10 aunque el bebé dispara a 55'],ok:1,
exp:'En AC cada respiración disparada recibe el VT completo, así que bajar la FR de respaldo casi no reduce el soporte si el bebé dispara por encima. En VG el destete es automático: la PIP baja cuando el pulmón y el esfuerzo mejoran. Reducir el VT por debajo de ~4 mL/kg aumenta el trabajo respiratorio por el espacio muerto. Los umbrales concretos de PIP para extubar varían entre unidades.',
no:['Las respiraciones espontáneas sin soporte por un tubo de 2,5 mm cargan con resistencia y espacio muerto: el bebé se fatiga.',null,'Con VT tan bajos aumenta la ventilación del espacio muerto y el trabajo respiratorio.','Si dispara a 55, bajar el respaldo no cambia la ventilación y lo expone a apneas sin respaldo.'],
base:'El trabajo respiratorio a través de un tubo es inversamente proporcional a la cuarta potencia del radio: los tubos finos suman mucha resistencia.',ev:'E',refs:['goldsmith2022','klingenberg2017']},
{id:'q9',tema:'Cafeína y extubación',p:'Antes de extubar, ¿qué medida con evidencia de ensayo clínico aumenta las chances de éxito?',
o:['Asegurar la cafeína (dosis de carga si no la recibió)','Dexametasona de rutina 24 horas antes de extubar a todos','Prueba de 2 horas en CPAP endotraqueal antes de extubar','Ayuno de 12 horas para reducir el riesgo de aspiración'],ok:0,
exp:'En el ensayo CAP, la cafeína permitió retirar antes la ventilación con presión positiva y redujo la displasia. El consenso europeo la recomienda para facilitar el destete. La prueba de respiración espontánea en CPAP endotraqueal es breve (pocos minutos) en los protocolos que la usan, porque respirar por el tubo sin soporte es agotador.',
no:[null,'Los corticoides no se dan de rutina; se reservan para bebés que siguen ventilados después de 1–2 semanas.','Respirar 2 horas por un tubo de 2,5 mm sin soporte agota al bebé y puede llevar a un falso fracaso.','El ayuno no mejora la extubación y perjudica la nutrición.'],
base:'La cafeína aumenta el impulso respiratorio y la contractilidad diafragmática.',ev:'F',refs:['schmidt2006','sweet2023']}
]},
{t:'Etapa 6 · 36 semanas de edad posmenstrual',d:{'Soporte':'Cánula nasal 1 L/min','FiO₂':'0,25','Situación':'Extubado el día 10 a NIPPV; destetado a CPAP y luego a cánula'},
q:[
{id:'q10',tema:'Definición de displasia (Jensen 2019)',p:'¿Cómo se clasifica la displasia broncopulmonar según la definición de Jensen y col.?',
o:['Sin displasia: ya no recibe presión positiva','Grado 1: cánula ≤ 2 L/min a las 36 semanas','Grado 2: recibe oxígeno suplementario a las 36 semanas','Grado 1 solo si la FiO₂ es < 0,30; si no, grado 2'],ok:1,
exp:'La definición de Jensen (NICHD, 2019) clasifica la displasia según el modo de soporte a las 36 semanas, independientemente del oxígeno: grado 1, cánula ≤ 2 L/min; grado 2, cánula > 2 L/min o presión positiva no invasiva; grado 3, ventilación invasiva. Esta clasificación predijo mejor la muerte o la morbilidad respiratoria grave a los 18–26 meses.',
no:['En esta definición la cánula a las 36 semanas ya define displasia.',null,'El grado depende del modo de soporte, no de recibir oxígeno.','La definición de Jensen no usa la FiO₂ para asignar el grado.'],
base:'El modo de soporte necesario es un marcador más estable de la gravedad que la FiO₂ puntual.',ev:'F',refs:['jensen2019']}
]}
],
cierre:'La ventilación con volumen objetivo protege el pulmón y se ajusta sola a los cambios de compliance, pero exige programar bien la Pmax y el VT. Tras el surfactante, el riesgo cambia de la hipoxemia a la hiperoxia y la hipocapnia. Ante una desaturación aguda, DOPE. El destete en AC-VG se hace dejando que el VG baje la presión, sin quitarle al bebé el soporte de cada respiración.'
},

{
id:'asinc',mod:2,mods:[2,4],nivel:'intermedio',sim:'ev_asinc_1',
titulo:'Asincronías y fugas: cuando el respirador no escucha al bebé',
sub:'Autociclado, PSV que no termina, SIMV con fatiga y disparos fallidos',
pres:{
 'Edad gestacional':'29 semanas',
 'Edad postnatal':'10 días',
 'Peso al nacer / actual':'1150 g / 1100 g',
 'Antecedentes perinatales':'SDR tratado con surfactante; ventilación prolongada por apneas y atelectasias.',
 'Diagnóstico':'SDR en resolución, en destete.',
 'Motivo':'Alarmas repetidas y frecuencia respiratoria alta en el monitor.',
 'Hemodinamia':'Estable. FC 155, PA media 40.',
 'Estado respiratorio':'Tubo 3,0 sin balón. AC-VG, VT objetivo 5 mL/kg, trigger por flujo.',
 'Examen físico':'Sin tiraje. Se escucha un soplido de aire en la boca.',
 'Radiografía de tórax':'Sin cambios: leve opacidad residual.',
 'Gases':'pH 7,38 · pCO₂ 42 · HCO₃⁻ 24',
 'Oxigenación':'SpO₂ 93 % con FiO₂ 0,25',
 'Soporte actual':'AC-VG'},
inicial:'El respirador muestra 95 ciclos por minuto, pero el bebé está quieto y no se le ven esfuerzos. La curva de flujo no vuelve a cero al final de la espiración.',
obj:['Calcular el porcentaje de fuga.','Reconocer el autociclado y corregirlo.','Comprender cómo la fuga afecta al VG.','Explicar por qué la PSV no termina con fuga.','Identificar la fatiga en SIMV con frecuencia baja.','Reconocer los disparos fallidos.'],
etapas:[
{sim:'ev_asinc_1',t:'Etapa 1 · Ciclado de 95 por minuto',d:{'VT inspirado':'7,0 mL','VT espirado':'3,9 mL','FR total':'95 rpm (respaldo 40)','Esfuerzos visibles':'No','Curva de flujo':'No vuelve a la línea de base'},
q:[
{id:'q1',tema:'Cálculo de la fuga',p:'¿Cuál es el porcentaje de fuga?',
o:['18 %','44 %','56 %','79 %'],ok:1,
exp:'Fuga = (VTi − VTe) / VTi = (7,0 − 3,9) / 7,0 = 0,44, es decir, 44 %. Es una fuga grande alrededor de un tubo sin balón.',
no:['No corresponde a la fórmula.',null,'56 % es la relación VTe/VTi, no la fuga.','No corresponde a la fórmula.'],
base:'El gas que entra y no vuelve se perdió alrededor del tubo.',ev:'E',refs:['goldsmith2022']},
{id:'q2',tema:'Autociclado por fuga',p:'¿Qué explica los 95 ciclos sin esfuerzos visibles y qué hace?',
o:['Taquipnea por dolor: analgesia y reevaluar la FR','Autociclado por la fuga: compensarla o ajustar el trigger','Hipoxemia leve que estimula el centro respiratorio: subir la FiO₂','Sepsis temprana con taquipnea: hemocultivos y antibióticos'],ok:1,
exp:'Con trigger por flujo, el respirador dispara cuando detecta un flujo inspiratorio por encima del umbral. Una fuga continua durante la espiración se parece a un esfuerzo y genera ciclos «falsos» (autociclado): hiperventilación y riesgo de atrapamiento. Se corrige compensando la fuga, subiendo el umbral del trigger y, si la fuga es persistente y grande, considerando un tubo mayor o reposicionarlo.',
no:['Sin esfuerzos visibles, los ciclos no son del bebé.',null,'La SpO₂ es adecuada y no hay esfuerzos: la hipoxemia no explica los ciclos.','No hay datos de infección; la explicación es mecánica.'],
base:'El trigger por flujo no distingue el flujo del paciente del flujo de la fuga si no hay compensación.',ev:'E',refs:['goldsmith2022']},
{id:'q3',tema:'Volumen garantizado con fuga grande',p:'Con 44 % de fuga, ¿qué pasa con el VG?',
o:['Funciona igual: el VG regula sobre el VT inspirado, que no tiene fuga','Regula sobre el VTe: con fuga grande la regulación es poco fiable','Sube la PEEP para sellar la fuga y así mantener el VT','Apaga la compensación de fuga para medir mejor el VT espirado'],ok:1,
exp:'Los respiradores neonatales suelen usar el VT espirado para regular el VG, porque se ve menos afectado por la fuga inspiratoria. Pero parte del gas inspirado escapa y parte del espirado también: el valor medido deja de representar lo que llega al pulmón. Con fugas grandes, el VG pierde precisión y puede sobrestimar la necesidad de presión.',
no:['Los respiradores neonatales suelen regular sobre el VT espirado, y el inspirado también incluye la fuga.',null,'El VG ajusta la PIP, no la PEEP; no puede sellar una fuga alrededor del tubo.','La compensación de fuga no se apaga sola, y apagarla empeoraría el trigger.'],
base:'Lo que el respirador no mide, no lo puede controlar.',ev:'E',refs:['goldsmith2022','klingenberg2017']}
]},
{sim:'ev_asinc_2',t:'Etapa 2 · Prueba en PSV',d:{'Modo':'PSV, presión de soporte 10 sobre PEEP 5','Terminación':'Al 10 % del flujo pico','Ti máximo':'0,6 s','Fuga':'40 %','Problema':'Todas las respiraciones duran 0,6 s'},
q:[
{id:'q4',tema:'PSV que no termina por flujo',p:'¿Por qué todas las respiraciones llegan al Ti máximo?',
o:['Esfuerzos inspiratorios prolongados por hambre de aire','La fuga sostiene el flujo sobre el umbral: subir el % de terminación','La presión de soporte es baja y el bebé alarga cada inspiración','El trigger es demasiado sensible y vuelve a disparar dentro de cada ciclo'],ok:1,
exp:'En PSV la inspiración termina cuando el flujo cae a un porcentaje del pico. Con una fuga grande, el flujo que escapa mantiene el flujo medido por encima del umbral y la respiración se prolonga hasta el Ti máximo («hang-up»), con asincronía espiratoria. Se corrige con un criterio de terminación más alto, un Ti máximo razonable, compensación de fuga y, si es posible, reduciendo la fuga.',
no:['Que todas duren exactamente el Ti máximo indica un límite del respirador, no el patrón del bebé.',null,'Más presión aumentaría el flujo de fuga y empeoraría el problema.','La sensibilidad del trigger afecta el inicio de la inspiración, no su terminación.'],
base:'La PSV es ciclada por flujo: cualquier flujo ajeno al paciente altera el ciclado.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_asinc_3',t:'Etapa 3 · SIMV con frecuencia baja',d:{'Modo':'SIMV 20 rpm sin presión de soporte, PIP 16, PEEP 5','FR total':'80 rpm','VT espontáneo':'2,5 mL/kg','Tiraje':'Intenso','Gases':'pH 7,25 · pCO₂ 62'},
q:[
{id:'q5',tema:'SIMV con frecuencia baja y fatiga',p:'¿Por qué empeoró en SIMV 20 y qué conviene?',
o:['Necesita más FiO₂: la taquipnea es por hipoxemia','Espontáneas sin soporte por tubo fino: volver a AC o sumar PS','Bajar la PEEP a 3 para facilitar la espiración y reducir el trabajo','Es el destete esperado: esperar 6 horas y repetir los gases'],ok:1,
exp:'En SIMV solo las respiraciones mandatorias reciben la PIP; las espontáneas pasan por un tubo de 3,0 mm sin ayuda. El VT espontáneo de 2,5 mL/kg se acerca al espacio muerto, la ventilación alveolar cae, sube la pCO₂ y aumenta el trabajo respiratorio. Volver a AC o agregar presión de soporte a las espontáneas reduce el trabajo.',
no:['La SpO₂ no es el problema principal: hay hipoventilación y fatiga.',null,'Una PEEP baja aumenta el colapso alveolar y el trabajo respiratorio.','Taquipnea, tiraje y acidosis respiratoria son un fracaso, no un destete normal.'],
base:'Respiraciones rápidas y superficiales = mucha ventilación del espacio muerto y poca alveolar.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_asinc_4',t:'Etapa 4 · De vuelta en AC, curvas a revisar',d:{'Curva de presión':'Pequeñas deflexiones negativas sin respiración entregada','Disparos':'Muchos esfuerzos sin ciclo','Trigger':'Por flujo, 1,5 L/min'},
q:[
{id:'q6',tema:'Disparos fallidos',p:'¿Qué indican las deflexiones sin respiración entregada?',
o:['Autociclado por agua acumulada en el circuito','Disparos fallidos: bajar el umbral del trigger','Hipo frecuente que no requiere cambios en el respirador','Atrapamiento aéreo por Ti largo: bajar el Ti a 0,25 s'],ok:1,
exp:'Un esfuerzo que mueve la curva pero no gatilla una respiración indica que el umbral es demasiado alto para la fuerza del bebé (o que algo amortigua la señal). En prematuros pequeños se usan umbrales bajos de flujo. Los esfuerzos perdidos aumentan el trabajo respiratorio y la asincronía.',
no:['El autociclado es lo opuesto: ciclos sin esfuerzo.',null,'El hipo tiene un patrón brusco y rítmico; aquí la clave es la relación entre esfuerzo y disparo.','El atrapamiento puede dificultar el disparo, pero el patrón descrito apunta al umbral del trigger.'],
base:'El trigger debe ser lo bastante sensible para detectar al bebé y lo bastante específico para no confundir la fuga con un esfuerzo.',ev:'E',refs:['goldsmith2022']}
]}
],
cierre:'Las fugas alrededor de tubos sin balón alteran el trigger (autociclado), el ciclado en PSV y la regulación del VG. La SIMV con frecuencia baja deja sin soporte las respiraciones espontáneas a través de un tubo fino. Leer las curvas permite distinguir autociclado de disparos fallidos.'
}
);
})();
