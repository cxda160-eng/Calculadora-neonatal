/* Módulo 3 · Ventilación de alta frecuencia */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.casos.push(
{
id:'vafo900',mod:3,mods:[3,4,5],nivel:'avanzado',sim:'ev_vafo_1',
titulo:'Rescate con VAFO en un prematuro de 900 g: pulmón abierto, DCO₂ y frecuencia',
sub:'Reclutamiento, radiografía, eliminación de CO₂ y límites del equipo a frecuencias altas',
pres:{
 'Edad gestacional':'25 + 4 semanas',
 'Edad postnatal':'3 días',
 'Peso al nacer / actual':'820 g / 900 g',
 'Antecedentes perinatales':'Corioamnionitis materna. SDR grave con dos dosis de surfactante.',
 'Diagnóstico':'SDR grave con falla de la ventilación convencional.',
 'Motivo':'Necesita presiones crecientes en AC-VG.',
 'Hemodinamia':'FC 160 lpm, PA media 30 mmHg, relleno 2 s.',
 'Estado respiratorio':'AC-VG: VT 5,5 mL/kg con PIP de trabajo 25–28, PEEP 6, FR 60, Ti 0,3 s. MAP 11.',
 'Examen físico':'Tiraje, entrada de aire pobre bilateral.',
 'Radiografía de tórax':'Hipoinsuflación (6–7 espacios), vidrio esmerilado difuso.',
 'Gases (arteriales)':'pH 7,24 · pCO₂ 60 · PaO₂ 50 · HCO₃⁻ 25',
 'Oxigenación':'SpO₂ 88–92 % con FiO₂ 0,60',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'Pese a la ventilación convencional optimizada, necesita PIP de 25–28 para un VT de 5,5 mL/kg, FiO₂ 0,60 y tiene acidosis respiratoria. El equipo decide pasar a VAFO.',
obj:['Situar la VAFO de rescate en la evidencia.','Aplicar la estrategia de pulmón abierto guiada por la oxigenación.','Interpretar la radiografía en VAFO.','Usar la relación DCO₂ = f × VT² para decidir ajustes.','Reconocer el límite de amplitud del equipo a frecuencias altas.','Programar la relación I:E y destetar.','Reconocer el neumotórax a tensión en VAFO.'],
etapas:[
{sim:'ev_vafo_1',t:'Etapa 1 · La decisión',d:{'PIP necesaria':'25–28 cmH₂O para 5,5 mL/kg','FiO₂':'0,60','pH / pCO₂':'7,24 / 60','MAP en convencional':'11 cmH₂O'},
q:[
{id:'q1',tema:'VAFO electiva frente a rescate',p:'¿Qué afirmación sobre el uso de VAFO en este bebé es correcta?',
o:['La VAFO electiva reduce la mortalidad, por eso debió usarse desde el inicio','Rescate razonable, evidencia débil; la electiva no cambió la mortalidad','Contraindicada en < 1000 g por un riesgo de HIV demostrado en ensayos','Sirve solo para el CO₂: la oxigenación se maneja con la FiO₂'],ok:1,
exp:'La revisión Cochrane de Cools (2015) no encontró diferencias en mortalidad con la VAFO electiva; mostró una reducción pequeña y poco consistente de la displasia. El rescate en el bebé que necesita presiones altas en convencional se usa mucho y tiene lógica fisiológica (volúmenes pequeños sobre un pulmón abierto), pero se apoya en estudios observacionales y en la práctica de cada unidad.',
no:['En la revisión de Cools la VAFO electiva no cambió la mortalidad.',null,'No hay contraindicación por peso: se usa en prematuros extremos.','La oxigenación en VAFO depende sobre todo de la MAP.'],
base:'En VAFO, la oxigenación y la ventilación se controlan por separado: la MAP fija el volumen pulmonar; la amplitud y la frecuencia, el VT.',ev:'C',refs:['cools2015','goldsmith2022']},
{id:'q2',tema:'Reclutamiento guiado por oxigenación',p:'¿Cómo se programa la MAP inicial y el reclutamiento?',
o:['MAP igual a la convencional, sin cambios hasta los gases','Subir la MAP en pasos guiados por la SpO₂; luego cierre + 2','MAP de 20 desde el inicio para abrir todo y luego bajar de a 1','Bajar la MAP 2 cmH₂O y compensar la hipoxemia con FiO₂'],ok:1,
exp:'La estrategia de pulmón abierto usa la oxigenación como guía: se sube la MAP en pasos mientras la FiO₂ pueda bajarse, hasta que deja de mejorar (presión de apertura). Luego se baja en pasos hasta que la SpO₂ cae (presión de cierre) y se reabre, quedando un poco por encima del cierre. De Jaegere y col. mostraron que es factible y seguro en prematuros. El punto de partida exacto (1–3 cmH₂O sobre la MAP previa) varía según el protocolo.',
no:['Sin reclutamiento, la VAFO sobre un pulmón colapsado pierde su ventaja.',null,'Empezar con presiones muy altas expone a sobredistensión, caída del gasto y fuga aérea.','La FiO₂ no corrige el cortocircuito de un pulmón colapsado.'],
base:'Histéresis: el pulmón necesita más presión para abrirse que para mantenerse abierto. Por eso se recluta en la rama inspiratoria y se ventila en la rama espiratoria.',ev:'E',refs:['dejaegere2006','nhsggc']},
{id:'q3',tema:'Radiografía en VAFO',p:'Tras reclutar con MAP 16, la radiografía muestra 10 espacios intercostales, diafragmas aplanados y corazón pequeño. La PA media cayó a 26. ¿Qué hace?',
o:['Subir la MAP: todavía hay vidrio esmerilado en las bases','Bajar la MAP: sobredistensión con repercusión hemodinámica','Subir la amplitud para mejorar la ventilación y la PA','Bolo de volumen y mantener la MAP porque el pulmón está óptimo'],ok:1,
exp:'En VAFO suele considerarse adecuada una expansión de ~8–9 espacios posteriores. Diez espacios con diafragmas planos y corazón pequeño indican sobredistensión, que comprime los capilares, reduce el retorno venoso y el gasto cardíaco. Se baja la MAP y se reevalúa.',
no:['Diez espacios con diafragmas planos indican sobredistensión: más MAP empeoraría la hemodinamia.',null,'La amplitud no corrige el volumen pulmonar ni la causa de la hipotensión.','El volumen puede ayudar, pero el pulmón no está óptimo: está sobredistendido.'],
base:'La sobredistensión aumenta la resistencia vascular pulmonar y reduce la precarga del ventrículo izquierdo.',ev:'I',refs:['nhsggc','goldsmith2022']}
]},
{sim:'ev_vafo_2',t:'Etapa 2 · Retención de CO₂ en VAFO-VG',d:{'MAP':'12 cmH₂O','Frecuencia':'15 Hz','VThf objetivo':'1,2 mL/kg','I:E':'1:2','Gases':'pH 7,08 · pCO₂ 86','SpO₂ / FiO₂':'91 % / 0,30'},
q:[
{id:'q4',tema:'DCO₂ y eliminación de CO₂',p:'Retiene CO₂ con VThf 1,2 mL/kg a 15 Hz. ¿Qué cambio aumenta más la eliminación de CO₂?',
o:['Subir la frecuencia de 15 a 18 Hz','Subir el VThf de 1,2 a 1,5 mL/kg','Subir la MAP de 12 a 14 cmH₂O','Subir la FiO₂ de 0,30 a 0,40'],ok:1,
exp:'La eliminación de CO₂ en VAFO es proporcional al coeficiente de transporte DCO₂ = f × VT². Como el VT está al cuadrado, es el factor más potente: pasar de 1,2 a 1,5 mL/kg multiplica el DCO₂ por (1,5/1,2)² = 1,56. Subir la frecuencia sin cambiar el VT aumenta el DCO₂ en forma lineal, pero en la práctica, a amplitud fija, más frecuencia reduce el VT entregado.',
no:['A amplitud fija, más frecuencia acorta cada ciclo y reduce el VT: el DCO₂ suele bajar.',null,'La MAP regula el volumen pulmonar; subirla puede sobredistender y aumentar el espacio muerto.','La FiO₂ no modifica la eliminación de CO₂.'],
base:'DCO₂ = f × VT² (mL²/s). Duplicar la frecuencia duplica el DCO₂; duplicar el VT lo cuadruplica.',ev:'E',refs:['nhsggc','goldsmith2022']},
{id:'q5',tema:'Límite de amplitud a frecuencias altas',p:'Ahora está a 18 Hz con VG, la alarma dice «VThf no alcanzado» y la amplitud está en el máximo. ¿Cuál es la conducta más lógica?',
o:['Subir la amplitud máxima programada a 60 cmH₂O','Bajar la frecuencia (por ejemplo a 15 Hz o menos)','Subir la MAP para mejorar la transmisión de la onda','Pasar a I:E 1:1 manteniendo los 18 Hz'],ok:1,
exp:'Los osciladores generan menos amplitud efectiva a medida que sube la frecuencia, y el tubo fino atenúa más la oscilación a frecuencias altas. Por eso a 18 Hz el VG puede no alcanzar el objetivo aunque la amplitud esté al máximo. Bajar la frecuencia alarga el ciclo, aumenta el volumen por oscilación y permite alcanzar el objetivo con menos amplitud; revisar también la posición y el tamaño del tubo.',
no:['Si el equipo ya no genera más amplitud efectiva a esa frecuencia, subir el límite no cambia lo que llega.',null,'La MAP no resuelve la limitación de volumen a frecuencias altas.','El 1:1 puede aumentar algo el volumen, pero a 18 Hz acorta la espiración y favorece el atrapamiento; la solución más directa es bajar la frecuencia.'],
base:'La impedancia del sistema (tubo + pulmón) aumenta con la frecuencia; menos volumen llega al alvéolo por cada cmH₂O de amplitud.',ev:'E',refs:['nhsggc','goldsmith2022']},
{id:'q6',tema:'Relación I:E en VAFO',p:'¿Por qué la mayoría de los protocolos usan I:E 1:2 en VAFO?',
o:['Porque sube la MAP alveolar y mejora la oxigenación','Porque alarga la espiración y reduce el atrapamiento','Porque es la única relación disponible en los osciladores','Porque aumenta el VThf entregado a igual amplitud'],ok:1,
exp:'Aunque la espiración es activa en VAFO, con frecuencias altas y vías aéreas estrechas puede quedar gas atrapado. Una espiración más larga (1:2) reduce ese riesgo. Algunos protocolos usan 1:1 en situaciones puntuales para aumentar el VT, aceptando más riesgo de atrapamiento.',
no:['Subir la presión alveolar por atrapamiento es un efecto adverso, no un objetivo.',null,'Muchos equipos permiten cambiarla.','Es al revés: el 1:1 entrega algo más de volumen; el 1:2 lo reduce a cambio de menos atrapamiento.'],
base:'El gas atrapado eleva la presión alveolar media por encima de la MAP medida en la vía aérea.',ev:'I',refs:['nhsggc','goldsmith2022']}
]},
{sim:'ev_vafo_3',t:'Etapa 3 · Mejoría y destete',d:{'MAP':'11','FiO₂':'0,25','VThf':'1,7 mL/kg a 13 Hz','Gases':'pH 7,34 · pCO₂ 50','Rx':'8 espacios, sin sobredistensión'},
q:[
{id:'q7',tema:'Destete de la VAFO',p:'¿En qué orden se desteta?',
o:['Primero la MAP a 8 de una vez y después la FiO₂','Primero la FiO₂ a ~0,30; luego la MAP de a 1 cmH₂O','Primero la frecuencia hasta 6 Hz para pasar a convencional','Primero el VThf hasta 0,8 mL/kg para que respire solo'],ok:1,
exp:'Mientras la FiO₂ sea alta, el pulmón todavía necesita volumen: bajar la MAP de golpe provoca derreclutamiento y, por histéresis, cuesta volver a abrirlo. Se baja primero la FiO₂ y luego la MAP de a poco. La ventilación (amplitud o VThf) se ajusta según la pCO₂. El momento de pasar a convencional o extubar varía según la unidad.',
no:['Un descenso brusco de la MAP colapsa el pulmón y, por histéresis, cuesta volver a abrirlo.',null,'La frecuencia no es el parámetro principal del destete.','Un VThf tan bajo produce hipercapnia.'],
base:'La oxigenación es el mejor indicador del volumen pulmonar en VAFO.',ev:'I',refs:['nhsggc','dejaegere2006']}
]},
{sim:'ev_vafo_4',t:'Etapa 4 · Deterioro brusco',d:{'SpO₂':'65 %','FC':'110 lpm','PA media':'22 mmHg','Vibración torácica':'Disminuida en el hemitórax derecho','DCO₂':'Cayó a la mitad','Transiluminación':'Hemitórax derecho brillante'},
q:[
{id:'q8',tema:'Neumotórax a tensión en VAFO',p:'¿Cuál es el diagnóstico y la conducta?',
o:['Tubo obstruido: aspirar y esperar la respuesta','Neumotórax a tensión: punción con aguja y drenaje','Derreclutamiento: subir la MAP a 18 y reclutar de nuevo','Hipovolemia: bolo de 10 mL/kg y reevaluar'],ok:1,
exp:'La asimetría de la vibración, la transiluminación positiva y la caída de PA y saturación indican un neumotórax a tensión, que compromete el retorno venoso. La descompresión con aguja no debe esperar a la radiografía si el bebé está inestable.',
no:['Un tubo obstruido no produce transiluminación ni vibración asimétricas.',null,'Subir la MAP agravaría un neumotórax.','La hipotensión es obstructiva: el volumen no resuelve la causa.'],
base:'El aire a tensión desplaza el mediastino y colapsa las venas cavas.',ev:'E',refs:['aha2025','goldsmith2022']}
]}
],
cierre:'La VAFO se basa en mantener el pulmón abierto con la MAP (guiada por la oxigenación y la radiografía) y ventilar con volúmenes muy pequeños. El VT es el determinante más potente del CO₂ (DCO₂ = f × VT²). A frecuencias altas el equipo y el tubo limitan el volumen entregado: bajar la frecuencia suele ser la solución.'
},

{
id:'pie',mod:3,mods:[3,6],nivel:'avanzado',sim:'ev_pie_1',
titulo:'Enfisema intersticial pulmonar: VAFO de baja frecuencia y ventilación jet',
sub:'Fuga aérea en un prematuro de 700 g',
pres:{
 'Edad gestacional':'24 + 5 semanas',
 'Edad postnatal':'4 días',
 'Peso al nacer / actual':'680 g / 700 g',
 'Antecedentes perinatales':'Sin corticoides prenatales. SDR grave; surfactante en dos dosis.',
 'Diagnóstico':'Enfisema intersticial pulmonar bilateral.',
 'Motivo':'Aumento progresivo de presiones y FiO₂.',
 'Hemodinamia':'FC 170, PA media 27, relleno 3 s.',
 'Estado respiratorio':'AC-VG: VT 5 mL/kg con PIP de trabajo 24, PEEP 6, FR 60.',
 'Examen físico':'Tórax abombado, entrada de aire disminuida.',
 'Radiografía de tórax':'Lucencias quísticas y lineales bilaterales que no siguen el árbol bronquial; pulmones hiperinsuflados.',
 'Gases':'pH 7,29 · pCO₂ 45 · PaO₂ 55',
 'Oxigenación':'SpO₂ 92–94 % con FiO₂ 0,55',
 'Soporte actual':'Tubo 2,5 · AC-VG'},
inicial:'El enfisema empeora y las presiones necesarias siguen subiendo.',
obj:['Comprender la fisiopatología del enfisema intersticial.','Aplicar el principio de minimizar presiones y volúmenes.','Conocer la evidencia de la ventilación jet en el enfisema intersticial.','Conocer la estrategia de VAFO de baja frecuencia y su nivel de evidencia.','Manejar el enfisema unilateral.','Diferenciar la espiración en la ventilación jet y en la VAFO.'],
etapas:[
{sim:'ev_pie_1',t:'Etapa 1 · Comprender el problema',d:{'Rx':'Lucencias quísticas bilaterales','PIP':'24','FiO₂':'0,55'},
q:[
{id:'q1',tema:'Fisiopatología del enfisema intersticial',p:'¿Qué ocurre en el enfisema intersticial?',
o:['Aire en el espacio pleural que colapsa el pulmón','Aire en el intersticio que comprime vías y vasos','Hiperinsuflación por atrapamiento sin rotura alveolar','Neumonía necrotizante con neumatoceles múltiples'],ok:1,
exp:'En el prematuro ventilado, la sobredistensión rompe alvéolos y el aire escapa al intersticio. Allí no participa del intercambio: comprime vías aéreas pequeñas y vasos, empeora la relación ventilación/perfusión y hace al pulmón más rígido. Puede progresar a neumotórax o neumomediastino.',
no:['Eso es un neumotórax.',null,'Las lucencias no siguen el árbol bronquial: hay aire fuera de las vías aéreas.','No hay datos de infección y el patrón es típico de fuga aérea.'],
base:'El aire intersticial se comporta como un compartimento rígido que no ventila.',ev:'E',refs:['goldsmith2022']},
{id:'q2',tema:'Principio ventilatorio en la fuga aérea',p:'¿Cuál es el principio general?',
o:['Subir el VT a 7 mL/kg para mejorar la ventilación','Bajar presiones y Ti aceptando gases permisivos','Subir la PEEP a 10 para estabilizar los alvéolos','Sedación y relajación manteniendo los parámetros'],ok:1,
exp:'Para que el aire intersticial se reabsorba, hay que reducir las presiones que lo alimentan: volúmenes bajos, tiempos inspiratorios cortos, PEEP suficiente pero no excesiva, y tolerar más pCO₂ y metas de oxigenación en el límite inferior aceptable.',
no:['Más volumen aumenta la fuga.',null,'Más PEEP aumenta la presión media y alimenta la fuga.','La sedación sola no cambia el mecanismo.'],
base:'La fuga aumenta con la presión transpulmonar y con el tiempo que se mantiene.',ev:'E',refs:['goldsmith2022']}
]},
{sim:'ev_pie_2',t:'Etapa 2 · Opciones de alta frecuencia',d:{'Opción A':'Ventilación jet de alta frecuencia','Opción B':'VAFO de baja frecuencia'},
q:[
{id:'q3',tema:'Ventilación jet en el enfisema intersticial',p:'¿Qué mostró el ensayo multicéntrico de Keszler (1991)?',
o:['Que la jet aumentó la mortalidad frente a la convencional','Resolución más rápida del enfisema con presiones menores','Que no hubo diferencias en ningún resultado clínico','Que la jet solo fue útil en recién nacidos de término'],ok:1,
exp:'En ese ensayo aleatorizado en recién nacidos con enfisema intersticial, la ventilación jet logró una ventilación adecuada con presiones pico y medias más bajas y una resolución más rápida del enfisema que la convencional. Es un ensayo antiguo, previo a muchas prácticas actuales, pero sigue siendo la base de su uso en esta indicación.',
no:['No mostró aumento de la mortalidad.',null,'Hubo diferencias en la resolución radiológica y en las presiones necesarias.','Incluyó prematuros.'],
base:'La jet entrega pulsos muy breves a alta velocidad; el gas recorre el centro de la vía aérea y la espiración es pasiva.',ev:'F',refs:['keszler1991']},
{id:'q4',tema:'VAFO de baja frecuencia en el enfisema intersticial',p:'No hay ventilación jet en la unidad. ¿Qué estrategia de VAFO se describió en el enfisema intersticial grave?',
o:['15 Hz con MAP alta para reclutar las zonas sanas','5–6 Hz y Ti 30 %, con menor MAP (serie retrospectiva)','20 Hz para reducir al mínimo el VT entregado por ciclo','Pulmón abierto igual que en el SDR, con MAP de cierre + 2'],ok:1,
exp:'Squires y col. describieron 19 prematuros con enfisema grave tratados con VAFO a 5–6 Hz y Ti del 30 %, con espiración más larga: mejoró la oxigenación y la MAP pudo bajarse. Es una cohorte retrospectiva pequeña: plausible fisiológicamente, pero evidencia débil.',
no:['La MAP alta alimenta la fuga.',null,'Una frecuencia tan alta acorta la espiración y favorece el atrapamiento.','En la fuga aérea el objetivo es reducir la presión, no reclutar.'],
base:'Una espiración más larga permite vaciar las regiones con constante de tiempo prolongada.',ev:'C',refs:['squires2013']}
]},
{t:'Etapa 3 · Evolución unilateral',d:{'Rx':'El enfisema persiste solo en el pulmón izquierdo, con desplazamiento mediastínico'},
q:[
{id:'q5',tema:'Enfisema intersticial unilateral',p:'¿Qué medidas se describieron para el enfisema unilateral?',
o:['Drenaje pleural del lado afectado para evacuar el aire','Decúbito del lado afectado o intubar el bronquio sano','Subir la PEEP para comprimir el aire intersticial','Corticoides inhalados para reducir la inflamación local'],ok:1,
exp:'Apoyar el pulmón afectado hacia abajo reduce su ventilación y favorece la reabsorción del aire; la intubación selectiva del bronquio contralateral por un tiempo corto es otra opción. Ambas se basan en series y reportes de casos. En la cohorte de Squires, los casos unilaterales se resolvieron al reexpandirse tras el colapso del pulmón afectado.',
no:['No hay aire en la pleura: el drenaje no saca el aire intersticial.',null,'Más PEEP alimenta la fuga.','No hay evidencia de beneficio.'],
base:'Un pulmón que no se ventila deja de recibir la presión que alimenta la fuga.',ev:'C',refs:['squires2013','goldsmith2022']},
{id:'q6',tema:'Espiración en jet frente a VAFO',p:'¿Qué diferencia fundamental hay entre la ventilación jet y la VAFO?',
o:['La jet tiene espiración activa y la VAFO pasiva','En la jet es pasiva; en la VAFO es activa','Ambas tienen espiración pasiva por retracción elástica','Ambas tienen espiración activa generada por el equipo'],ok:1,
exp:'El oscilador empuja y aspira el gas (espiración activa). La jet entrega pulsos de alta velocidad y el gas sale por la retracción elástica del pulmón (espiración pasiva), lo que exige un tiempo espiratorio suficiente para no atrapar gas.',
no:['Es al revés.',null,'La VAFO tiene espiración activa.','La jet tiene espiración pasiva.'],
base:'Con espiración pasiva, el vaciado depende de la constante de tiempo del pulmón.',ev:'E',refs:['goldsmith2022']}
]}
],
cierre:'El enfisema intersticial es una fuga aérea que exige bajar la presión media y pico. La ventilación jet tiene un ensayo aleatorizado a favor; la VAFO de baja frecuencia es una alternativa con evidencia observacional. En la enfermedad unilateral, la posición o la intubación selectiva pueden ayudar.'
}
);
})();
