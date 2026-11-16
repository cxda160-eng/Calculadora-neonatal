/* Glosario y comparación de modos */
(function(){
const E=window.EVAL=window.EVAL||{refs:{},casos:[],glos:[],modos:[]};
E.glos.push(
['Auto-PEEP','Presión alveolar al final de la espiración mayor que la PEEP programada, por vaciado incompleto cuando el tiempo espiratorio es corto frente a la constante de tiempo.'],
['Autociclado','Ciclos que el respirador entrega sin esfuerzo del paciente porque una fuga u otra señal supera el umbral del trigger.'],
['Compliance (C)','Cambio de volumen por cada cmH₂O de presión: C = VT / (PIP − PEEP). Baja en el SDR, la TTN y el edema.'],
['Constante de tiempo (τ)','τ = C × R. En 3 τ se completa ~95 % del llenado o vaciado; en 5 τ, ~99 %.'],
['CPAP','Presión positiva continua en la vía aérea. Mantiene la capacidad residual funcional en el bebé que respira.'],
['DCO₂','Coeficiente de transporte de CO₂ en VAFO: f × VT². El VT pesa más que la frecuencia.'],
['Diferencia A-a','PAO₂ − PaO₂. PAO₂ = FiO₂ × (Patm − 47) − PaCO₂/0,8. Aumenta con el cortocircuito y los trastornos de V/Q.'],
['DOPE','Desplazamiento del tubo, Obstrucción, neumotórax (Pneumothorax), falla del Equipo: enfoque ante el deterioro agudo del bebé intubado.'],
['Espacio muerto','Volumen que se ventila sin intercambiar gas (vía aérea, tubo, sensor). Pesa más cuanto menor es el VT.'],
['Fuga (%)','(VTi − VTe) / VTi × 100. Altera el trigger, el ciclado y la medición del volumen.'],
['Hipercapnia permisiva','Aceptar una pCO₂ moderadamente alta (con pH aceptable) para evitar volúmenes y presiones lesivos.'],
['Histéresis','El pulmón necesita más presión para abrirse que para mantenerse abierto. Base del reclutamiento en VAFO.'],
['I:E','Relación entre tiempo inspiratorio y espiratorio. Te = 60/FR − Ti.'],
['Índice de oxigenación (IO)','IO = MAP × FiO₂ × 100 / PaO₂. ≥ 25 grave; > 40 sostenido, criterio clásico de ECMO.'],
['LISA / MIST','Administración de surfactante por un catéter fino con el bebé respirando en CPAP, sin ventilación con presión positiva.'],
['MAP','Presión media en la vía aérea durante el ciclo. Principal determinante del volumen pulmonar y la oxigenación.'],
['NIPPV / SNIPPV','Ventilación nasal con insuflaciones intermitentes sobre la PEEP; sincronizada (SNIPPV) si las insuflaciones coinciden con el esfuerzo.'],
['Óxido nítrico inhalado','Vasodilatador pulmonar selectivo. Dosis habitual de inicio: 20 ppm.'],
['Qp:Qs','Relación entre flujo pulmonar y sistémico. En el ventrículo único: (SaO₂ − SvO₂) / (SpvO₂ − SaO₂).'],
['Resistencia (R)','Presión necesaria por unidad de flujo (cmH₂O/L/s). Aumenta con tubos finos, secreciones y broncoespasmo.'],
['Trigger','Umbral (de flujo o presión) con el que el respirador detecta el esfuerzo del paciente.'],
['VAFO','Ventilación de alta frecuencia oscilatoria: volúmenes menores que el espacio muerto, espiración activa, oxigenación por MAP.'],
['Ventilación jet (HFJV)','Pulsos breves de alta velocidad con espiración pasiva; se combina con ventilación convencional de fondo.'],
['Volumen garantizado (VG) / VTV','Modos en que el respirador ajusta la PIP respiración a respiración para entregar el VT programado.'],
['Volumen minuto','VT × FR. La ventilación alveolar es (VT − espacio muerto) × FR.'],
['Alfa-stat / pH-stat','Formas de interpretar los gases en hipotermia: valores a 37 °C (alfa-stat) o corregidos a la temperatura del paciente (pH-stat).'],
['Displasia (Jensen 2019)','Grado según el soporte a las 36 semanas: 1, cánula ≤ 2 L/min; 2, cánula > 2 L/min o presión positiva no invasiva; 3, ventilación invasiva.']
);
E.modos.push(
{m:'Cánula de alto flujo',que:'Flujo calentado y humidificado (≈ 2–8 L/min en prematuros); presión variable no medida',sinc:'No aplica',ven:'Cómoda, menos trauma nasal',lim:'Presión impredecible; como soporte primario fracasa más que la CPAP',cuando:'Destete de CPAP; tras la extubación en < 32 semanas (con cautela en los más inmaduros)',refs:['roberts2016','manley2013']},
{m:'CPAP',que:'Presión continua (PEEP)',sinc:'No aplica',ven:'Evita la intubación; mantiene la capacidad residual',lim:'No ayuda en las apneas centrales; fuga por la boca',cuando:'SDR en el bebé que respira; TTN; postextubación',refs:['support2010','sweet2023']},
{m:'NIPPV / SNIPPV',que:'PEEP más insuflaciones nasales',sinc:'Opcional (SNIPPV)',ven:'Reduce el fracaso de extubación frente a la CPAP',lim:'Volumen entregado variable; sincronización limitada en muchos equipos',cuando:'Postextubación; fracaso inminente de la CPAP',refs:['lemyre2017','lemyre2023']},
{m:'AC (A/C, SIPPV)',que:'Cada esfuerzo disparado recibe una insuflación completa; FR de respaldo',sinc:'Sí',ven:'Menor trabajo respiratorio',lim:'Hiperventilación con taquipnea o autociclado',cuando:'Modo inicial habitual en el prematuro (con volumen objetivo)',refs:['klingenberg2017','goldsmith2022']},
{m:'SIMV',que:'Solo un número fijo de respiraciones sincronizadas recibe la PIP',sinc:'Parcial',ven:'Destete clásico en adultos',lim:'Las espontáneas por tubo fino no tienen soporte: fatiga',cuando:'Agregar presión de soporte si se usa en prematuros',refs:['goldsmith2022']},
{m:'PSV',que:'Soporte de presión que termina cuando el flujo cae a un % del pico',sinc:'Sí (inicio y fin)',ven:'El bebé controla el Ti',lim:'Con fuga no termina (hang-up); necesita esfuerzo fiable',cuando:'Destete en bebés con buen impulso respiratorio',refs:['goldsmith2022']},
{m:'Volumen objetivo (VG/VTV)',que:'La PIP se ajusta para entregar el VT programado',sinc:'Se combina con AC, SIMV o PSV',ven:'Menos muerte o displasia, neumotórax, hipocapnia y HIV grave',lim:'Depende de la medición del volumen; fugas grandes; Pmax',cuando:'Primera elección en la ventilación invasiva convencional',refs:['klingenberg2017','wheeler2009']},
{m:'VAFO',que:'Oscilaciones con espiración activa sobre una MAP constante',sinc:'No',ven:'Desacopla la oxigenación (MAP) de la ventilación (VT, f)',lim:'Sobredistensión; límite de amplitud a frecuencias altas',cuando:'Rescate cuando la convencional necesita presiones altas; fuga aérea',refs:['cools2015','dejaegere2006','nhsggc']},
{m:'Ventilación jet (HFJV)',que:'Pulsos breves de alta velocidad con espiración pasiva',sinc:'No (con ventilación de fondo)',ven:'Presiones pico y medias bajas',lim:'Atrapamiento si el Te es corto; disponibilidad',cuando:'Enfisema intersticial; fuga aérea',refs:['keszler1991']}
);
})();
