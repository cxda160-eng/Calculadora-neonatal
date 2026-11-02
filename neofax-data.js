/* NeoFax (Micromedex, nov. 2024) — resumen en castellano, redactado con palabras propias.
   Cada fármaco remite a su página de NeoFax para verificar. No reemplaza la fuente. */
(function () {
  // Tablas de intervalo por EPM (semanas cumplidas) y EPN (días)
  const PMA_STD = (last) => [
    { pma: [0, 29], pna: [0, 28], i: 12 }, { pma: [0, 29], pna: [29, 9999], i: 8 },
    { pma: [30, 36], pna: [0, 14], i: 12 }, { pma: [30, 36], pna: [15, 9999], i: 8 },
    { pma: [37, 44], pna: [0, 7], i: 12 }, { pma: [37, 44], pna: [8, 9999], i: 8 },
    { pma: [45, 99], pna: [0, 9999], i: last }];

  window.NEOFAX = [
  /* ================= ANTIMICROBIANOS ================= */
  { id: "ampicilina", n: "Ampicilina", en: "Ampicillin", pg: 97, cat: "Antimicrobianos",
    regs: [
      { t: "Dosis general", via: "IV lenta o IM", u: "mg/kg/dosis", d: [25, 50], rows: PMA_STD(6),
        note: "La EPM define el intervalo; la EPN lo ajusta." },
      { t: "Bacteriemia por SGB (guía 2019)", via: "IV", u: "mg/kg/dosis",
        rows: [{ ga: [0, 34], pna: [0, 7], d: [50], i: 12 }, { ga: [0, 34], pna: [8, 9999], d: [75], i: 12 },
               { ga: [35, 99], pna: [0, 9999], d: [50], i: 8 }],
        note: "Bacteriemia sin foco: 10 días. En RN de término ≤ 7 días, empírico junto con aminoglucósido." },
      { t: "Meningitis por SGB (guía 2019)", via: "IV", u: "mg/kg/dosis",
        rows: [{ pna: [0, 7], d: [100], i: 8 }, { pna: [8, 9999], d: [75], i: 6 }],
        note: "Meningitis no complicada: 14 días." }],
    adm: ["≤ 500 mg: IV lenta en 3–5 min; ≥ 1 g: en 10–15 min.", "Concentraciones IV habituales 30–100 mg/mL; IM 250 mg/mL."],
    prep: ["Polvo para reconstituir con agua estéril. Máx. 100 mg/mL IV.", "Usar dentro de la hora de preparada (pierde potencia)."],
    mon: ["Tratamientos prolongados: función renal, hepática y hemograma."] },

  { id: "gentamicina", n: "Gentamicina", en: "Gentamicin", pg: 441, cat: "Antimicrobianos",
    warn: ["No usar la pomada oftálmica en neonatos (reacciones oculares graves)."],
    regs: [
      { t: "Dosis estándar por EPM/EPN", via: "IV", u: "mg/kg/dosis",
        rows: [{ pma: [0, 29], pna: [0, 7], d: [5], i: 48 }, { pma: [0, 29], pna: [8, 28], d: [4], i: 36 }, { pma: [0, 29], pna: [29, 9999], d: [4], i: 24 },
               { pma: [30, 34], pna: [0, 7], d: [4.5], i: 36 }, { pma: [30, 34], pna: [8, 9999], d: [4], i: 24 },
               { pma: [35, 99], pna: [0, 9999], d: [4], i: 24 }],
        note: "Usar la fila de ≤ 29 sem también ante asfixia significativa, DAP o tratamiento con indometacina." },
      { t: "Intervalo extendido (alternativa)", via: "IV", u: "mg/kg/dosis", d: [5], int: "c/36 h" }],
    adm: ["Infusión en 30–120 min, a 2 o 10 mg/mL.", "Separada de las penicilinas. La vía IM tiene absorción variable."],
    prep: ["Solución pediátrica 10 mg/mL."],
    mon: ["Niveles si el tratamiento supera 48 h: pico 30 min después de terminar la infusión; valle antes de la dosis.",
          "Pico ≥ 5 mg/L (8–13 con intervalo extendido). Valle ≤ 2 mg/L (idealmente < 1).",
          "Nivel a las 22 h de la 1.ª dosis de 5 mg/kg: ≤ 1,2 → c/24 h · 1,3–2,6 → c/36 h · 2,7–3,5 → c/48 h · ≥ 3,6 → suspender y repetir nivel.",
          "Hipotermia terapéutica: menor depuración; alargar intervalo y monitorear."] },

  { id: "amikacina", n: "Amikacina", en: "Amikacin", pg: 52, cat: "Antimicrobianos",
    regs: [
      { t: "Por EPM y EPN", via: "IV", u: "mg/kg/dosis",
        rows: [{ pma: [0, 29], pna: [0, 7], d: [14], i: 48 }, { pma: [0, 29], pna: [8, 28], d: [12], i: 36 }, { pma: [0, 29], pna: [29, 9999], d: [12], i: 24 },
               { pma: [30, 34], pna: [0, 7], d: [12], i: 36 }, { pma: [30, 34], pna: [8, 9999], d: [12], i: 24 },
               { pma: [35, 99], pna: [0, 9999], d: [12], i: 24 }] },
      { t: "Por peso y EPN (alternativa)", via: "IV", u: "mg/kg/dosis",
        rows: [{ wt: [0, 800], pna: [0, 13], d: [16], i: 48 }, { wt: [0, 800], pna: [14, 9999], d: [20], i: 42 },
               { wt: [801, 1200], pna: [0, 13], d: [16], i: 42 }, { wt: [801, 1200], pna: [14, 9999], d: [20], i: 36 },
               { wt: [1201, 2000], pna: [0, 13], d: [15], i: 36 }, { wt: [1201, 2000], pna: [14, 9999], d: [18], i: 30 },
               { wt: [2001, 2800], pna: [0, 13], d: [15], i: 36 }, { wt: [2001, 2800], pna: [14, 9999], d: [18], i: 24 },
               { wt: [2801, 99999], pna: [0, 13], d: [15], i: 30 }, { wt: [2801, 99999], pna: [14, 9999], d: [18], i: 20 }],
        note: "Con ibuprofeno o asfixia: alargar el intervalo 10 h." }],
    adm: ["Diluir a 2,5–10 mg/mL; infusión con bomba (NeoFax: 60–120 min; en estudios neonatales 20–30 min).", "Separada de las penicilinas."],
    prep: ["Viales de 250 mg/mL."],
    mon: ["Niveles si el tratamiento supera 48 h. Pico 20–30 mcg/mL; valle 2–5 mcg/mL.",
          "Nivel a las 24 h: ≤ 5 → c/24 h · 5,1–8 → c/36 h · 8,1–10,5 → c/48 h · ≥ 10,6 → repetir nivel en 24 h."] },

  { id: "vancomicina", n: "Vancomicina", en: "Vancomycin", pg: 898, cat: "Antimicrobianos",
    regs: [
      { t: "Dosis inicial", via: "IV", u: "mg/kg/dosis", d: [10, 15], rows: [
          { pma: [0, 29], pna: [0, 14], i: 18 }, { pma: [0, 29], pna: [15, 9999], i: 12 },
          { pma: [30, 36], pna: [0, 14], i: 12 }, { pma: [30, 36], pna: [15, 9999], i: 8 },
          { pma: [37, 44], pna: [0, 7], i: 12 }, { pma: [37, 44], pna: [8, 9999], i: 8 },
          { pma: [45, 99], pna: [0, 9999], i: 6 }] },
      { t: "Infección grave por SAMR", via: "IV", u: "mg/kg/dosis", d: [10, 20], int: "c/8 a 48 h según EPM, peso y creatinina", note: "Ajustar al AUC objetivo." },
      { t: "ECMO", via: "IV", u: "mg/kg/dosis", d: [25], int: "c/18 h (dosis de inicio)" }],
    adm: ["Infusión en 60–120 min (≤ 10 mg/min), a ≤ 5 mg/mL; hasta 10 mg/mL si hay restricción hídrica."],
    prep: ["Viales de 500 mg y 1 g: reconstituir a 50 mg/mL; luego diluir en D5% o SF."],
    mon: ["Monitoreo por AUC: objetivo ≈ 400 mg·h/L (CIM 1). Ya no se recomienda guiarse solo por valle de 15–20.",
          "Iniciar el monitoreo a las 24–48 h. Función renal; hemograma si es prolongado; audición si hay otros ototóxicos."] },

  { id: "cefotaxima", n: "Cefotaxima", en: "Cefotaxime", pg: 209, cat: "Antimicrobianos",
    regs: [
      { t: "Sepsis", via: "IV", u: "mg/kg/dosis",
        rows: [{ pna: [0, 6], d: [50], i: 12 }, { ga: [0, 31], pna: [7, 9999], d: [50], i: 8 }, { ga: [32, 99], pna: [7, 9999], d: [50], i: 6 }] },
      { t: "Meningitis", via: "IV", u: "mg/kg/día", kind: "day",
        rows: [{ pna: [0, 7], d: [100, 150], txt: "dividido c/8–12 h" }, { pna: [8, 9999], d: [150, 200], txt: "dividido c/6–8 h" }],
        note: "En < 2 kg considerar dosis menores e intervalos más largos." }],
    adm: ["IV directa en 3–5 min (50–100 mg/mL) o infusión en 10–30 min (10–40 mg/mL). También IM."],
    prep: ["Reconstituida para IV: 24 h a temperatura ambiente, 7 días en heladera."],
    mon: ["No requiere niveles. Hemograma periódico."] },

  { id: "ceftazidima", n: "Ceftazidima", en: "CefTAZidime", pg: 219, cat: "Antimicrobianos",
    regs: [
      { t: "Dosis habitual", via: "IV o IM", u: "mg/kg/dosis", d: [30], rows: PMA_STD(8) },
      { t: "Meningitis", via: "IV", u: "mg/kg/día", kind: "day",
        rows: [{ pna: [0, 7], d: [100, 150], txt: "dividido c/8–12 h" }, { pna: [8, 28], d: [150], txt: "dividido c/8 h" }],
        note: "En < 2000 g pueden necesitarse dosis menores e intervalos más largos." }],
    adm: ["IV directa en 3–5 min (≤ 100 mg/mL) o infusión en 30 min (1–40 mg/mL). IM profunda (puede mezclarse con lidocaína 1 % sin epinefrina)."],
    prep: ["Vial de 500 mg + 10 mL de agua estéril = 50 mg/mL. Estable 12 h a temperatura ambiente, 3 días en heladera. Libera CO₂ al reconstituir."],
    mon: ["No requiere niveles."] },

  { id: "cefepime", n: "Cefepime", en: "Cefepime", pg: 203, cat: "Antimicrobianos",
    regs: [
      { t: "Dosis por edad", via: "IV", u: "mg/kg/dosis", rows: [{ pna: [0, 28], d: [30], i: 12 }, { pna: [29, 9999], d: [50], i: 12 }] },
      { t: "Meningitis o infección grave por Pseudomonas / Enterobacter", via: "IV", u: "mg/kg/dosis", d: [50], int: "c/12 h" }],
    adm: ["Infusión en 30 min (1–100 mg/mL; habitual 40 mg/mL). IM a 280 mg/mL."],
    prep: ["Reconstituido y diluido: 24 h a temperatura ambiente, 7 días en heladera."],
    mon: ["No requiere niveles."] },

  { id: "meropenem", n: "Meropenem", en: "Meropenem", pg: 596, cat: "Antimicrobianos",
    regs: [
      { t: "Infección intraabdominal y no SNC", via: "IV", u: "mg/kg/dosis",
        rows: [{ ga: [0, 31], pna: [0, 13], d: [20], i: 12 }, { ga: [0, 31], pna: [14, 9999], d: [20], i: 8 },
               { ga: [32, 99], pna: [0, 13], d: [20], i: 8 }, { ga: [32, 99], pna: [14, 9999], d: [30], i: 8 }],
        note: "Considerar asociar un aminoglucósido." },
      { t: "Meningitis bacteriana", via: "IV", u: "mg/kg/dosis",
        rows: [{ ga: [0, 31], pna: [0, 13], d: [40], i: 12 }, { ga: [0, 31], pna: [14, 9999], d: [40], i: 8 }, { ga: [32, 99], pna: [0, 9999], d: [40], i: 8 }],
        note: "Datos limitados para SNC." }],
    adm: ["Infusión en 30 min a 1–20 mg/mL. Hay datos de infusión prolongada (4 h) para gérmenes resistentes."],
    prep: ["En SF (1–20 mg/mL): 1 h a temperatura ambiente o 15 h en heladera. En D5%: usar de inmediato."],
    mon: ["Hemograma (trombocitosis, eosinofilia) y transaminasas. Vigilar el sitio IV."] },

  { id: "aciclovir", n: "Aciclovir", en: "Acyclovir", pg: 20, cat: "Antimicrobianos",
    regs: [
      { t: "Herpes simple (aprobado FDA)", via: "IV en 1 h", u: "mg/kg/dosis",
        rows: [{ pma: [0, 33], d: [20], i: 12 }, { pma: [34, 99], d: [20], i: 8 }] },
      { t: "Herpes simple (alternativa fuera de prospecto)", via: "IV", u: "mg/kg/dosis",
        rows: [{ pma: [0, 29], d: [20], i: 12, txt: "c/8–12 h" }, { pma: [30, 99], d: [20], i: 8 }],
        note: "Localizado 14 días; diseminado o SNC 21 días (seguir 7 días más si la PCR en LCR sigue positiva). Preventivo sin enfermedad probada: 10 días." },
      { t: "Supresión oral posterior (herpes)", via: "VO", u: "mg/m²/dosis", kind: "m2", d: [300], int: "c/8 h por 6 meses" },
      { t: "Varicela-zóster", via: "IV", u: "mg/kg/dosis", d: [10, 15], int: "c/8 h por 5–10 días" }],
    adm: ["Infusión en 1 h a ≤ 7 mg/mL en D5% o SF.", "Extravasación: es alcalino (pH 11)."],
    prep: ["Solución 50 mg/mL o polvo (500 mg + 10 mL agua estéril). No refrigerar."],
    mon: ["Ajuste renal: Cr 0,8–1,1 → c/12 h · Cr 1,2–1,5 → c/24 h · Cr > 1,5 o diuresis < 1 mL/kg/h → mitad de dosis c/24 h."] },

  { id: "fluconazol", n: "Fluconazol", en: "Fluconazole", pg: 406, cat: "Antimicrobianos",
    regs: [
      { t: "Candidiasis invasiva: carga", via: "IV o VO", u: "mg/kg", kind: "once", d: [12, 25] },
      { t: "Candidiasis invasiva: mantenimiento", via: "IV o VO", u: "mg/kg/dosis", d: [6, 12],
        rows: [{ ga: [0, 29], pna: [0, 14], i: 48 }, { ga: [0, 29], pna: [15, 9999], i: 24 }, { ga: [30, 99], pna: [0, 7], i: 48 }, { ga: [30, 99], pna: [8, 9999], i: 24 }],
        note: "Se recomienda 12 mg/kg. Duración: 2 semanas después del hemocultivo negativo y sin síntomas." },
      { t: "Profilaxis (PN < 1000 g o < 1500 g)", via: "IV o VO", u: "mg/kg/dosis", d: [3, 6], int: "2 veces por semana, 6 semanas", note: "En unidades con alta incidencia de Candida." },
      { t: "Muguet", via: "VO", u: "mg/kg/dosis", d: [3], int: "c/24 h (6 mg/kg el día 1)" }],
    adm: ["Infusión a 2 mg/mL en 1–2 h. VO con o sin alimento."],
    prep: ["Solución premezclada 2 mg/mL. Suspensión oral 10 y 40 mg/mL."],
    mon: ["Insuficiencia renal: misma carga y 50 % de la dosis diaria. ECMO: carga 35 mg/kg y mantenimiento 9–12 mg/kg/día."] },

  /* ================= CARDIOVASCULAR ================= */
  { id: "alprostadil", n: "Alprostadil (PGE1)", en: "Alprostadil", pg: 43, cat: "Cardiovascular",
    regs: [
      { t: "Inicio", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [0.05, 0.1], conc: 10, cu: "mcg/mL" },
      { t: "Mantenimiento", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [0.01, 0.05], conc: 10, cu: "mcg/mL",
        note: "Titular según oxigenación o perfusión frente a efectos adversos; puede bajar hasta 0,01. Dosis iniciales más altas no suelen ser más eficaces." }],
    adm: ["Vena grande o catéter arterial umbilical cerca del ductus. Diluir a 2–20 mcg/mL.", "Ejemplo: 500 mcg en 50 mL ≈ 10 mcg/mL; 0,01 mL/kg/min = 0,1 mcg/kg/min."],
    prep: ["Ampolla 500 mcg/1 mL (heladera). Preparar cada 24 h."],
    mon: ["Apnea, hipotensión, fiebre, rubor, bradicardia (6–15 %).", "Más de 120 h: vigilar hiperplasia antral y obstrucción del vaciado gástrico.", "Eficacia: mejora de la oxigenación o de la presión y el pH."] },

  { id: "dopamina", n: "Dopamina", en: "DOPamine", pg: 305, cat: "Cardiovascular",
    regs: [{ t: "Dosis habitual", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [2, 20], conc: 1600, cu: "mcg/mL",
      note: "Empezar bajo y titular. En shock refractario a fluidos, iniciar < 10." }],
    adm: ["Vena grande o IO; no en bolo. Concentración estándar neonatal 1600 mcg/mL (máx. 3200)."],
    prep: ["Diluida: estable 24 h. Descartar si cambia de color."],
    mon: ["FC y presión arterial invasiva idealmente; diuresis y perfusión. Vigilar extravasación."] },

  { id: "dobutamina", n: "Dobutamina", en: "DOBUTamine", pg: 300, cat: "Cardiovascular",
    regs: [{ t: "Dosis habitual", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [2, 25], conc: 2000, cu: "mcg/mL", note: "Empezar bajo y titular." }],
    adm: ["Vena grande o IO; no en bolo. Concentración recomendada 2000 mcg/mL (máx. 4000)."],
    prep: ["Vial 12,5 mg/mL. Usar dentro de 24 h; la coloración rosada no implica pérdida de potencia."],
    mon: ["FC y presión arterial; perfusión."] },

  { id: "adrenalina", n: "Adrenalina (epinefrina)", en: "EPINEPHrine", pg: 340, cat: "Cardiovascular",
    regs: [
      { t: "Reanimación y bradicardia grave: IV", via: "IV (solución 0,1 mg/mL)", u: "mg/kg", kind: "once", d: [0.01, 0.03], note: "Seguir con 0,5–1 mL de SF." },
      { t: "Reanimación: endotraqueal", via: "ET (0,1 mg/mL)", u: "mg/kg", kind: "once", d: [0.05, 0.1], note: "Nunca dar estas dosis por vía IV. Preferir IV." },
      { t: "Infusión continua", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [0.1, 1], conc: 10, cu: "mcg/mL", note: "Iniciar 0,1 y titular; máx. 1." },
      { t: "Shock séptico refractario a fluidos y dopamina", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [0.05, 0.3], conc: 10, cu: "mcg/mL" },
      { t: "Hipotensión o bradicardia con pulso (dosis baja)", via: "IV/IO central", u: "mcg/kg", kind: "once", d: [1], note: "Luego 0,01–0,2 mcg/kg/min si hace falta." },
      { t: "Hemorragia pulmonar", via: "ET", u: "mL/kg de 1:10.000", kind: "once", d: [0.1] }],
    adm: ["Bolos siempre con la solución 0,1 mg/mL; infusión preparada a partir de 1 mg/mL. Concentración recomendada 10 mcg/mL."],
    prep: ["Proteger de la luz. No usar si cambia de color."],
    mon: ["FC, presión arterial, perfusión; vigilar extravasación."] },

  { id: "noradrenalina", n: "Noradrenalina", en: "Norepinephrine", pg: 687, cat: "Cardiovascular",
    regs: [{ t: "Shock séptico (EG > 35 sem)", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [0.2, 2], conc: 16, cu: "mcg/mL",
      note: "Inicio 0,2–0,5; titular cada 30 min hasta la presión objetivo. Pueden requerirse dosis mayores." }],
    adm: ["Vena grande; controlar el sitio con frecuencia.", "Extravasación: infiltrar fentolamina 1–5 mg en 5 mL de SF."],
    prep: ["Ampollas 1 mg/mL. Proteger de la luz."],
    mon: ["PA cada 2 min hasta el objetivo y luego cada 5 min. Término: FC 110–160 y presión de perfusión ≈ 55 mmHg."] },

  { id: "milrinona", n: "Milrinona", en: "Milrinone", pg: 634, cat: "Cardiovascular",
    regs: [
      { t: "Carga (opcional)", via: "IV", u: "mcg/kg", kind: "once", d: [50, 75], note: "50 mcg/kg en 15 min o 75 mcg/kg en 60 min. En < 30 sem de EG, pasar la carga en 3 h." },
      { t: "Mantenimiento (bajo gasto, poscirugía cardíaca)", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [0.3, 0.75], conc: 200, cu: "mcg/mL",
        note: "Datos mayormente de lactantes y niños. Ajustar a la respuesta." }],
    adm: ["Mantenimiento a 200 mcg/mL (máximo)."],
    prep: ["Viales 1 mg/mL; premezcla 200 mcg/mL en D5%."],
    mon: ["PA, FC y ECG continuos; líquidos, electrolitos y función renal."] },

  { id: "furosemida", n: "Furosemida", en: "Furosemide", pg: 432, cat: "Cardiovascular",
    regs: [{ t: "Dosis inicial", via: "IV, IM o VO", u: "mg/kg/dosis", d: [1],
      rows: [{ ga: [0, 36], txt: "prematuro", i: 24 }, { ga: [37, 99], pna: [0, 30], txt: "término", i: 12 }, { ga: [37, 99], pna: [31, 9999], txt: "término > 1 mes", i: 6, it: "c/6–8 h" }],
      note: "Máximo 2 mg/kg/dosis IV o 6 mg/kg/dosis VO. En uso prolongado, considerar días alternos." }],
    adm: ["2–10 mg/mL en 15–30 min."],
    prep: ["Inyectable 10 mg/mL; solución oral 8 y 10 mg/mL. Proteger de la luz."],
    mon: ["Electrolitos (sobre todo K) y función renal; diuresis y peso. En prematuros, ecografía renal (nefrocalcinosis)."] },

  { id: "ibuprofeno", n: "Ibuprofeno (DAP)", en: "Ibuprofen", pg: 482, cat: "Cardiovascular",
    warn: ["NeoFax: tratar solo prematuros seleccionados con DAP sintomático; alta tasa de cierre espontáneo y el manejo expectante fue no inferior."],
    regs: [
      { t: "Cierre de DAP: esquema estándar", via: "VO o IV", u: "mg/kg", kind: "seq", seq: [["1.ª dosis", 10], ["a las 24 h", 5], ["a las 48 h", 5]], note: "Puede repetirse un segundo ciclo." },
      { t: "Cierre de DAP: dosis alta", via: "VO", u: "mg/kg", kind: "seq", seq: [["1.ª dosis", 15, 20], ["a las 24 h", 7.5, 10], ["a las 48 h", 7.5, 10]] }],
    adm: [], prep: [], mon: ["Función renal, plaquetas, diuresis. Con amikacina, alargar su intervalo 10 h."] },

  /* ================= SEDOANALGESIA ================= */
  { id: "fentanilo", n: "Fentanilo", en: "FentaNYL", pg: 394, cat: "Sedoanalgesia",
    warn: ["Tener naloxona disponible."],
    regs: [
      { t: "Analgesia: bolo", via: "IV lenta", u: "mcg/kg/dosis", d: [0.5, 3], int: "repetir c/2–4 h" },
      { t: "Analgesia: infusión", via: "IV continua", kind: "inf", u: "mcg/kg/h", d: [0.5, 2], conc: 10, cu: "mcg/mL", note: "Tolerancia rápida." },
      { t: "Sedación: bolo", via: "IV", u: "mcg/kg/dosis", d: [0.5, 4], int: "repetir c/2–4 h" },
      { t: "Sedación: infusión", via: "IV continua", kind: "inf", u: "mcg/kg/h", d: [1, 5], conc: 10, cu: "mcg/mL" },
      { t: "Anestesia", via: "IV", u: "mcg/kg/dosis", d: [5, 50] }],
    adm: ["Infusión a 10 mcg/mL (alternativas 2–50 mcg/mL). Dosis intermitentes en 15–30 min."],
    prep: ["Ampollas 50 mcg/mL; 1 mL + 4 mL de SF = 10 mcg/mL."],
    mon: ["Respiración y hemodinamia; distensión abdominal, rigidez muscular (tórax rígido)."] },

  { id: "morfina", n: "Morfina", en: "Morphine", pg: 640, cat: "Sedoanalgesia",
    regs: [
      { t: "Bolo", via: "IV, IM o SC", u: "mg/kg/dosis", d: [0.05, 0.2], int: "repetir c/4 h" },
      { t: "Dolor: carga para infusión", via: "IV", u: "mg/kg", kind: "once", d: [0.1] },
      { t: "Dolor: infusión", via: "IV continua", kind: "inf", u: "mg/kg/h", d: [0.01, 0.02], conc: 0.1, cu: "mg/mL", note: "0,02 en el posoperatorio." },
      { t: "Síndrome de abstinencia neonatal", via: "VO", u: "mg/kg/dosis", d: [0.03, 0.1], int: "c/3–4 h", note: "Máx. 0,2 mg/kg/dosis. Descender 10–20 % cada 2–3 días según puntaje." }],
    adm: ["Infusión a 0,1 mg/mL; intermitente a 0,1–0,5 mg/mL en 15–30 min.", "Dependencia: VO ≈ 3–5 veces la dosis IV."],
    prep: [], mon: ["Respiración y hemodinamia, tránsito, retención urinaria. Finnegan o Lipsitz en abstinencia.", "Hipotermia terapéutica: puede requerir dosis menores."] },

  { id: "midazolam", n: "Midazolam", en: "Midazolam", pg: 629, cat: "Sedoanalgesia",
    warn: ["Evitar en muy bajo peso: riesgo de hemorragia intraventricular grave, LPV o muerte (lista KIDs)."],
    regs: [
      { t: "Sedación: bolo", via: "IV (o IM)", u: "mg/kg/dosis", d: [0.05, 0.15], int: "repetir c/2–4 h" },
      { t: "Sedación: infusión", via: "IV continua", kind: "inf", u: "mg/kg/h", d: [0.01, 0.06], conc: 0.5, cu: "mg/mL", note: "Puede requerir aumento por tolerancia." },
      { t: "Intranasal", via: "IN (5 mg/mL)", u: "mg/kg/dosis", d: [0.2, 0.3] },
      { t: "Anticonvulsivante: carga", via: "IV", u: "mg/kg", kind: "once", d: [0.15] },
      { t: "Anticonvulsivante: infusión", via: "IV continua", kind: "inf", u: "mg/kg/h", d: [0.06, 0.4], conc: 0.5, cu: "mg/mL" }],
    adm: ["Bolo lento en 10 min a 1 mg/mL. Infusión a 0,5 mg/mL en SF o D5%."],
    prep: ["Preferir viales sin conservante (algunos tienen alcohol bencílico)."],
    mon: ["Respiración y presión, más con opioides. Función hepática. Abstinencia al suspender."] },

  /* ================= NEUROLOGÍA ================= */
  { id: "fenobarbital", n: "Fenobarbital", en: "PHENobarbital", pg: 749, cat: "Neurología",
    regs: [
      { t: "Convulsiones: carga", via: "IV en 15–30 min", u: "mg/kg", kind: "once", d: [20],
        note: "Si persisten: 10–20 mg/kg más (prematuro) o 20 mg/kg (término). Luego 10 mg/kg c/20–30 min hasta 40 mg/kg en total." },
      { t: "Convulsiones: mantenimiento", via: "IV, VO o IM", u: "mg/kg/día", kind: "day", d: [3, 5], txt: "en 1–2 dosis, desde 12 h después de la carga",
        note: "< 1500 g: carga < 15 mg/kg y mantenimiento < 3 mg/kg/día." },
      { t: "Síndrome de abstinencia: carga", via: "VO", u: "mg/kg", kind: "once", d: [16] },
      { t: "Síndrome de abstinencia: mantenimiento", via: "VO", u: "mg/kg/dosis", d: [1, 4], int: "c/12 h", note: "Descender 20 % día por medio." }],
    adm: ["IV en 15–30 min, a 10 mg/mL (vena periférica grande)."],
    prep: [], mon: ["Nivel terapéutico 15–40 mcg/mL (abstinencia 20–30). Acumulación en las primeras 2 semanas."] },

  { id: "levetiracetam", n: "Levetiracetam", en: "LevETIRAcetam", pg: 541, cat: "Neurología",
    regs: [
      { t: "Convulsiones: carga", via: "IV", u: "mg/kg", kind: "once", d: [40], note: "Si hace falta, segunda carga de 20 mg/kg." },
      { t: "Convulsiones: mantenimiento", via: "IV o VO", u: "mg/kg/día", kind: "day", d: [40, 60], txt: "dividido c/8 h" }],
    adm: ["Diluir a ≤ 15 mg/mL; infundir en 15 min."],
    prep: ["Vial 100 mg/mL; solución oral 100 mg/mL. Diluido: hasta 4 h a temperatura ambiente."],
    mon: ["Eliminación renal: sin recomendaciones neonatales de ajuste."] },

  /* ================= RESPIRATORIO ================= */
  { id: "cafeina", n: "Cafeína citrato", en: "Caffeine Citrate", pg: 164, cat: "Respiratorio",
    regs: [
      { t: "Apnea del prematuro: carga", via: "IV en 30 min", u: "mg/kg", kind: "once", d: [20], note: "20 mg/mL: 1 mL/kg." },
      { t: "Apnea del prematuro: mantenimiento", via: "IV en 10 min o VO", u: "mg/kg/dosis", d: [5], int: "c/24 h, desde 24 h después de la carga",
        note: "Aprobado para 28 a < 33 sem. En 22–28 sem se usó una mediana de 8 mg/kg/día (5–10)." }],
    adm: [], prep: ["20 mg/mL de cafeína citrato = 10 mg/mL de cafeína base."],
    mon: ["Niveles en general innecesarios; si se miden, valle el día 5: 5–25 mcg/mL (tóxico > 40–50).", "Glucemia periódica; vigilar ECN."] },

  /* ================= OTROS ================= */
  { id: "paracetamol", n: "Paracetamol", en: "Acetaminophen", pg: 1, cat: "Otros",
    regs: [
      { t: "Fiebre: IV (EG ≥ 32 sem)", via: "IV en 15 min", u: "mg/kg/dosis", d: [12.5], int: "c/6 h", note: "Máx. 50 mg/kg/día sumando todas las vías." },
      { t: "Dolor o fiebre: VO", via: "VO", u: "mg/kg/dosis", d: [12, 15],
        rows: [{ pma: [0, 31], i: 12 }, { pma: [32, 36], i: 8 }, { pma: [37, 99], i: 6 }], note: "Carga 20–25 mg/kg. En término, intervalo c/6 h." },
      { t: "Dolor o fiebre: rectal", via: "Rectal", u: "mg/kg/dosis", d: [12, 18],
        rows: [{ pma: [0, 31], i: 12 }, { pma: [32, 36], i: 8 }, { pma: [37, 99], i: 6 }], note: "Carga 30 mg/kg. Dosificación imprecisa por los supositorios." },
      { t: "Cierre de DAP", via: "VO o IV", u: "mg/kg/dosis", d: [15], int: "c/6 h por 3 días" }],
    adm: ["IV a 10 mg/mL en 15 min; volumen ≤ 7,5 mL. Cuidado al pasar de mg a mL."],
    prep: ["Vial IV de 1000 mg/100 mL: usar dentro de 6 h de abierto."],
    mon: ["Dolor, temperatura, función hepática. El nivel sérico solo sirve para toxicidad."] },

  { id: "hidrocortisona", n: "Hidrocortisona", en: "Hydrocortisone", pg: 473, cat: "Otros",
    regs: [
      { t: "Hipotensión refractaria a volumen y vasopresores", via: "IV", u: "mg/kg/dosis", d: [1], int: "c/8 h", note: "Alternativa: 20–30 mg/m²/día en 2–3 dosis." },
      { t: "Reemplazo fisiológico", via: "IV o VO", u: "mg/m²/día", kind: "m2day", d: [7, 9], txt: "en 2–3 dosis" },
      { t: "Hiperplasia suprarrenal congénita: mantenimiento", via: "VO", u: "mg/m²/día", kind: "m2day", d: [10, 15], txt: "en 3 dosis" },
      { t: "Profilaxis de DBP, dosis baja", via: "IV", u: "mg/kg/dosis", d: [0.5], int: "c/12 h × 7 días; luego 0,5 mg/kg/día × 3 días" },
      { t: "RN < 1000 g expuestos a corioamnionitis", via: "IV", u: "mg/kg/dosis", d: [0.5], int: "c/12 h × 12 días; luego 0,25 mg/kg c/12 h × 3 días" }],
    adm: [], prep: [],
    mon: ["Superficie corporal: SC (m²) = 0,05 × kg + 0,05.", "Crisis suprarrenal en lactantes: 25 mg IV y luego 6,25 mg c/6 h."] }
  ];
})();
