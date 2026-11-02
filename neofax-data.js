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

  { id: "adrenalina", n: "Adrenalina (epinefrina)", en: "EPINEPHrine (Adrenaline)", pg: 340, cat: "Cardiovascular",
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
    mon: ["Superficie corporal: SC (m²) = 0,05 × kg + 0,05.", "Crisis suprarrenal en lactantes: 25 mg IV y luego 6,25 mg c/6 h."] },

  /* ================= TANDA 2 (v52) ================= */
  { id: "adenosina", n: "Adenosina", en: "Adenosine", pg: 27, cat: "Cardiovascular",
    regs: [
      { t: "TPSV: dosis inicial", via: "IV en bolo rápido", u: "mg/kg", kind: "once", d: [0.05, 0.1], note: "Si no revierte en 1–2 min, repetir aumentando 0,05–0,1 mg/kg por dosis c/1–2 min." },
      { t: "TPSV: dosis máxima", via: "IV en bolo rápido", u: "mg/kg", kind: "once", d: [0.3], note: "Máximo 0,3 mg/kg por dosis o 12 mg por dosis." }],
    adm: ["Bolo IV rápido, central o periférico, lo más cerca posible del paciente, seguido de lavado rápido con SF. La vía IO es una opción en reanimación."],
    prep: ["Vial 3 mg/mL (6 mg/2 mL), sin conservantes. No refrigerar (cristaliza).", "Para dosis menores de 0,2 mL: 1 mL (3 mg) + 9 mL de SF = 300 mcg/mL."],
    mon: ["ECG continuo durante la administración."] },

  { id: "amiodarona", n: "Amiodarona", en: "Amiodarone", pg: 69, cat: "Cardiovascular",
    regs: [
      { t: "Carga", via: "IV en 20–60 min (preferible central)", u: "mg/kg", kind: "once", d: [5], note: "Diluir la carga a 1,5 mg/mL." },
      { t: "Mantenimiento", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [7, 15], conc: 1500, cu: "mcg/mL", note: "Empezar en 7 mcg/kg/min y titular (= 10–20 mg/kg/día). Pasar a VO en 24–48 h." },
      { t: "Vía oral", via: "VO", u: "mg/kg/dosis", d: [5, 10], int: "c/12 h" }],
    adm: ["Infusión: 1–6 mg/mL; si dura más de 1 h, no superar 2 mg/mL salvo por vía central. Usar filtro en línea; preferir catéter central.", "Corregir antes hipopotasemia, hipomagnesemia e hipocalcemia."],
    prep: ["Preferido: Nexterone® premezclado 1,5 mg/mL o 1,8 mg/mL (sin alcohol bencílico ni polisorbato).", "Genérico 50 mg/mL con alcohol bencílico y polisorbato 80. Proteger de la luz."],
    mon: ["ECG continuo, presión arterial y función tiroidea y hepática en tratamientos prolongados."] },

  { id: "propranolol", n: "Propranolol", en: "Propranolol", pg: 792, cat: "Cardiovascular",
    regs: [
      { t: "Hipertensión y taquiarritmias: VO", via: "VO", u: "mg/kg/dosis", d: [0.25, 1], int: "c/6 h", note: "Aumentar según necesidad hasta un máximo de 3,5 mg/kg/dosis c/6 h." },
      { t: "Hipertensión y taquiarritmias: IV", via: "IV en 10 min", u: "mg/kg/dosis", d: [0.01], int: "c/6 h", note: "Aumentar según necesidad hasta 0,15 mg/kg/dosis c/6 h." },
      { t: "Hemangioma infantil (desde 5 semanas)", via: "VO", u: "mg/kg/dosis", kind: "seq", seq: [["Semana 1", 0.6], ["Semana 2", 1.1], ["Semana 3 en adelante", 1.7]],
        note: "c/12 h, con al menos 9 h entre dosis. Mantener habitualmente hasta los 8–12 meses de vida. En PHACE, titular lento y dividir en 3 dosis." }],
    adm: ["IV en 10 minutos."],
    prep: ["Ampolla 1 mg/mL: 1 mL + 9 mL de SF = 0,1 mg/mL.", "Solución oral 4 y 8 mg/mL; Hemangeol® 3,75 mg/mL de propranolol."],
    mon: ["FC, presión arterial y glucemia (riesgo de hipoglucemia, sobre todo en ayunas)."] },

  { id: "digoxina", n: "Digoxina", en: "Digoxin", pg: 296, cat: "Cardiovascular",
    regs: [
      { t: "Digitalización: dosis total IV", via: "IV (no IM)", u: "mcg/kg", kind: "day",
        rows: [{ pma: [0, 29], d: [20] }, { pma: [30, 36], d: [25] }, { pma: [37, 48], d: [40] }, { pma: [49, 99], d: [50] }],
        txt: "dosis total, dividida en 3 dosis en 24 h", note: "Solo para arritmias e insuficiencia cardíaca aguda. La dosis VO es un 25 % mayor." },
      { t: "Digitalización: dosis total VO", via: "VO", u: "mcg/kg", kind: "day",
        rows: [{ pma: [0, 29], d: [15] }, { pma: [30, 36], d: [20] }, { pma: [37, 48], d: [30] }, { pma: [49, 99], d: [40] }],
        txt: "dosis total, dividida en 3 dosis en 24 h" },
      { t: "Mantenimiento IV", via: "IV", u: "mcg/kg/dosis",
        rows: [{ pma: [0, 29], d: [5], i: 24 }, { pma: [30, 36], d: [6], i: 24 }, { pma: [37, 48], d: [5], i: 12 }, { pma: [49, 99], d: [6], i: 12 }] },
      { t: "Mantenimiento VO", via: "VO", u: "mcg/kg/dosis",
        rows: [{ pma: [0, 29], d: [4], i: 24 }, { pma: [30, 36], d: [5], i: 24 }, { pma: [37, 48], d: [4], i: 12 }, { pma: [49, 99], d: [5], i: 12 }],
        note: "Titular por respuesta clínica. Reducir en proporción a la caída del clearance de creatinina." }],
    adm: ["IV en 15–30 min, a 20 o 100 mcg/mL. VO siempre igual respecto de las tomas."],
    prep: ["Inyectable 100 mcg/mL; elixir 50 mcg/mL. Diluir en ≥ 4 volúmenes de diluyente y usar enseguida.", "Amiodarona, indometacina y espironolactona disminuyen su clearance."],
    mon: ["ECG, FC, potasio y función renal; vigilar signos de toxicidad (bradicardia, arritmias, vómitos)."] },
  { id: "sildenafil", n: "Sildenafil", en: "Sildenafil", pg: 832, cat: "Cardiovascular",
    regs: [
      { t: "HPPN coadyuvante: carga IV", via: "IV en 3 h", u: "mg/kg", kind: "once", d: [0.4] },
      { t: "HPPN coadyuvante: infusión IV", via: "IV continua", kind: "inf", u: "mg/kg/h", d: [0.067], conc: 0.8, cu: "mg/mL", note: "= 1,6 mg/kg/día. Datos de un ensayo de escalada de dosis (n = 36), no de eficacia." },
      { t: "HPPN coadyuvante: VO", via: "VO", u: "mg/kg/dosis", d: [0.5, 1], int: "c/8 h" }],
    adm: ["Solución IV 0,8 mg/mL; la carga se pasa en 3 h.", "En prematuros extremos, usar solo con la vascularización retiniana completa."],
    prep: ["Revatio® suspensión oral 10 mg/mL (reconstituida: 30 días); comprimidos de 20 mg."],
    mon: ["Oxigenación y presión arterial: titular con cuidado (farmacocinética muy variable). La FDA desaconseja el uso crónico en pediatría."] },

  { id: "espironolactona", n: "Espironolactona", en: "Spironolactone", pg: 860, cat: "Cardiovascular",
    regs: [{ t: "Dosis habitual", via: "VO", u: "mg/kg/dosis", d: [1, 3], int: "c/24 h", note: "En DBP junto con otros diuréticos; en insuficiencia cardíaca como agregado." }],
    adm: [], prep: ["Suspensión 5 mg/mL; comprimidos de 25, 50 y 100 mg. Preparado magistral de 25 mg/mL estable 60 días."],
    mon: ["Potasio y sodio séricos; función renal."] },

  { id: "hidroclorotiazida", n: "Hidroclorotiazida", en: "HydroCHLOROthiazide", pg: 471, cat: "Cardiovascular",
    regs: [{ t: "Dosis habitual", via: "VO con alimento", u: "mg/kg/dosis", d: [1, 2], int: "c/12 h", note: "No confundir con clorotiazida. Efecto mayor junto con furosemida o espironolactona." }],
    adm: ["Dar con la leche: mejora la absorción."], prep: ["Comprimidos de 25, 50 y 100 mg; existe preparado magistral con espironolactona (5 mg + 5 mg por mL)."],
    mon: ["Electrolitos (Na, K, Ca), glucemia y bilirrubina."] },

  { id: "metadona", n: "Metadona", en: "Methadone", pg: 602, cat: "Sedoanalgesia",
    regs: [
      { t: "Síndrome de abstinencia neonatal: inicio", via: "VO", u: "mg/kg/dosis", d: [0.05, 0.1], int: "c/6–24 h", note: "Ajustar de a 10–20 % según los signos de abstinencia." },
      { t: "Esquema de descenso (EG ≥ 34 sem)", via: "VO", u: "mg/kg", kind: "seq",
        seq: [["Paso 1 · c/6 h × 4 dosis", 0.1], ["Paso 2 · c/12 h × 2", 0.07], ["Paso 3 · c/12 h × 2", 0.05], ["Paso 4 · c/12 h × 2", 0.04], ["Paso 5 · c/12 h × 2", 0.03], ["Paso 6 · c/12 h × 2", 0.02], ["Paso 7 · c/12 h × 2", 0.01], ["Paso 8 · c/24 h × 1", 0.01]],
        note: "Empezar en el paso 1 con 3 Finnegan seguidos ≥ 8 o 2 seguidos ≥ 12. Bajar de paso si el promedio de 24 h es < 8; no bajar con 8–12; con ≥ 12, dosis extra o volver al paso anterior. Observar 72 h tras el paso 8." }],
    adm: [], prep: ["Solución oral 1 y 2 mg/mL (8 % de alcohol) y 10 mg/mL sin alcohol."],
    mon: ["Score de Finnegan; FR y saturación. Con benzodiacepinas u otros depresores, usar la menor dosis posible."] },

  { id: "naloxona", n: "Naloxona", en: "Naloxone", pg: 658, cat: "Sedoanalgesia",
    regs: [
      { t: "Depresión por opioides terapéuticos", via: "IV", u: "mg/kg", kind: "once", d: [0.001, 0.005], note: "Titular según efecto." },
      { t: "Reversión opioide completa (PALS)", via: "IV o IO", u: "mg/kg", kind: "once", d: [0.1] },
      { t: "Dosis de la ficha (FDA)", via: "IV, IM o SC", u: "mg/kg", kind: "once", d: [0.01], note: "Repetir c/2–3 min hasta lograr la reversión; puede requerir dosis c/1–2 h." }],
    adm: ["No se recomienda en la reanimación inicial en sala de partos: primero ventilar. Evitar en hijos de madre con dependencia de opioides (riesgo de convulsiones por abstinencia)."],
    prep: ["Ampolla 0,4 mg/mL y 1 mg/mL. No mezclar con soluciones alcalinas."],
    mon: ["FR y saturación: el efecto puede durar menos que el del opioide."] },
  { id: "vecuronio", n: "Vecuronio", en: "Vecuronium", pg: 914, cat: "Sedoanalgesia",
    regs: [{ t: "Parálisis en ARM", via: "IV push en 5–10 s", u: "mg/kg/dosis", d: [0.1], int: "c/1–2 h según necesidad", note: "Rango 0,03–0,15 mg/kg. Siempre con analgesia y sedación adecuadas." }],
    adm: ["Infusión continua: diluir a 0,1–0,2 mg/mL o pasar puro a 1 mg/mL."],
    prep: ["Polvo de 10 y 20 mg: 10 mg + 10 mL = 1 mg/mL (24 h en heladera). Dilución 0,4 mg/mL: 1 mL + 1,5 mL de SF."],
    mon: ["FC, presión arterial y ventilación. Proteger córneas."] },

  { id: "rocuronio", n: "Rocuronio", en: "Rocuronium", pg: 828, cat: "Sedoanalgesia",
    regs: [
      { t: "Intubación", via: "IV push en 5–10 s", u: "mg/kg", kind: "once", d: [0.45, 0.6], note: "Siempre con anestesia o sedación adecuada. En neonatos el bloqueo tarda más en llegar al máximo." },
      { t: "Mantenimiento: bolo", via: "IV", u: "mg/kg", kind: "once", d: [0.15], note: "Al reaparecer T3 en el tren de cuatro." },
      { t: "Mantenimiento: infusión", via: "IV continua", kind: "inf", u: "mcg/kg/min", d: [7, 10], conc: 1000, cu: "mcg/mL", note: "Los neonatos requieren la dosis más baja del rango." }],
    adm: ["Infusión hasta 5 mg/mL. No mezclar con soluciones alcalinas."],
    prep: ["Vial 10 mg/mL, en heladera (a temperatura ambiente: 60 días). 1 mL + 9 mL de SF = 1 mg/mL (24 h)."],
    mon: ["Tren de cuatro, FC y presión arterial."] },

  { id: "atropina", n: "Atropina", en: "Atropine", pg: 122, cat: "Cardiovascular",
    regs: [
      { t: "Bradicardia: IV o IM", via: "IV en 1 min o IM", u: "mg/kg", kind: "once", d: [0.01, 0.03], note: "Repetir c/10–15 min; máximo acumulado 0,04 mg/kg." },
      { t: "Bradicardia: endotraqueal", via: "ET + 1 mL de SF", u: "mg/kg", kind: "once", d: [0.01, 0.03] },
      { t: "Premedicación para intubación", via: "IV en 1 min", u: "mg/kg", kind: "once", d: [0.01, 0.02], note: "Antes que el resto de la premedicación." },
      { t: "Vía oral", via: "VO", u: "mg/kg/dosis", d: [0.02], int: "c/4–6 h", note: "Aumentar gradualmente hasta 0,09 mg/kg/dosis." }],
    adm: [], prep: ["Ampollas de 0,05, 0,1, 0,4 y 1 mg/mL. La forma IV puede darse por VO."],
    mon: ["FC y ECG."] },

  { id: "heparina", n: "Heparina sódica", en: "Heparin", pg: 453, cat: "Otros",
    regs: [
      { t: "Permeabilidad de catéter central", via: "IV continua", kind: "inf", u: "U/kg/h", d: [0.5], conc: 1, cu: "U/mL", note: "En catéter periférico: 0,5–1 U por mL de solución." },
      { t: "Trombosis: carga", via: "IV en 10 min", u: "U/kg", kind: "once", d: [75] },
      { t: "Trombosis: infusión", via: "IV continua", kind: "inf", u: "U/kg/h", d: [28], conc: 100, cu: "U/mL",
        note: "A las 4 h medir KPTT y ajustar a anti-Xa 0,35–0,7 (KPTT ≈ 60–85 s). Tratar 10–14 días; considerar pasar a enoxaparina a los 3–5 días." },
      { t: "ECMO: carga antes de canular", via: "IV", u: "U/kg", kind: "once", d: [100], note: "Luego infusión para ACT 180–220 s." }],
    adm: ["No IM (hematomas). Verificar siempre la concentración: hay de 10 a 20 000 U/mL."],
    prep: ["Tener protamina disponible. Presentaciones de 10, 100, 1000, 5000 U/mL y más."],
    mon: ["KPTT o anti-Xa, plaquetas y signos de sangrado."] },

  { id: "enoxaparina", n: "Enoxaparina", en: "Enoxaparin", pg: 334, cat: "Otros",
    regs: [
      { t: "Tratamiento de trombosis", via: "SC", u: "mg/kg/dosis", rows: [{ ga: [0, 36], d: [2], i: 12 }, { ga: [37, 99], d: [1.7], i: 12 }],
        note: "Ajustar a anti-Xa 0,5–1 U/mL (tarda varios días). En prematuros el requerimiento varía de 0,8 a 3 mg/kg c/12 h." },
      { t: "Profilaxis de bajo riesgo", via: "SC", u: "mg/kg/dosis", d: [0.75], int: "c/12 h", note: "Anti-Xa objetivo 0,1–0,4 U/mL." }],
    adm: ["Descartar trastorno de la coagulación antes de empezar, salvo urgencia."],
    prep: ["Jeringas prellenadas 100 mg/mL sin conservantes (el frasco multidosis tiene alcohol bencílico: no en neonatos). Dilución 20 mg/mL en agua estéril estable 4 semanas."],
    mon: ["Anti-Xa 4 h después de la dosis; plaquetas; signos de sangrado."] },
  { id: "insulina", n: "Insulina regular", en: "Insulin Human Regular", pg: 513, cat: "Otros",
    regs: [
      { t: "Hiperglucemia", via: "IV continua", kind: "inf", u: "U/kg/h", d: [0.01, 0.1], conc: 0.1, cu: "U/mL", note: "Titular con glucemias o tiras reactivas." },
      { t: "Hiperpotasemia", via: "IV continua", kind: "inf", u: "U/kg/h", d: [0.1, 0.2], conc: 0.1, cu: "U/mL", note: "Junto con dextrosa 0,5 g/kg/h. Ajustar según glucemia y potasio." }],
    adm: ["Solo la insulina regular va por vía IV. Concentración para infusión 0,05–1 U/mL.", "Purgar la tubuladura con la solución antes de conectar (la insulina se adsorbe al plástico)."],
    prep: ["Frasco 100 U/mL: preparar 10 U/mL con agua estéril y luego diluir a 0,05–1 U/mL. Conservar en heladera."],
    mon: ["Glucemia frecuente (c/30–60 min al iniciar o cambiar) y potasio."] },

  { id: "gluconatoca", n: "Gluconato de calcio 10 %", en: "Calcium Gluconate", pg: 177, cat: "Otros",
    regs: [
      { t: "Hipocalcemia sintomática: bolo", via: "IV en 10–30 min", u: "mg/kg", kind: "once", d: [100, 200], note: "= 1–2 mL/kg de gluconato 10 % (10–20 mg/kg de calcio elemental)." },
      { t: "Hipocalcemia sintomática: infusión", via: "IV continua", u: "mg/kg/día", kind: "day", d: [538, 860], txt: "durante 48 h; luego bajar 50 % por 24 h y suspender",
        note: "= 50–80 mg/kg/día de calcio elemental." },
      { t: "Hipocalcemia leve o mantenimiento", via: "IV o VO", u: "mg/kg/día", kind: "day", d: [430, 860], txt: "en 3–4 dosis", note: "= 40–80 mg/kg/día de calcio elemental. Calciuria objetivo < 4 mg/kg/día." },
      { t: "Reanimación (hipocalcemia, hiperpotasemia o hipermagnesemia documentadas)", via: "IV lenta o IO", u: "mg/kg", kind: "once", d: [60, 100], note: "Máx. 2 g por dosis. No es de uso rutinario en la reanimación." }],
    adm: ["Exanguinotransfusión: 1 mL de gluconato 10 % por cada 100 mL de sangre citratada recambiada, en 10 min.", "Necesidad en NP: prematuros 2–4 mEq/kg/día; término 0,5–4 mEq/kg/día."],
    prep: ["Gluconato 10 % = 100 mg/mL de sal = 9,3 mg/mL de calcio elemental (0,46 mEq/mL). Osmolaridad 700 mOsm/L."],
    mon: ["Calcio iónico, FC y ECG durante el bolo. Vigilar extravasación."] },

  { id: "bicarbonato", n: "Bicarbonato de sodio", en: "Sodium Bicarbonate", pg: 839, cat: "Otros",
    regs: [
      { t: "Hiperpotasemia con acidosis metabólica", via: "IV o IO en 10–15 min", u: "mEq/kg", kind: "once", d: [1], note: "Solo la solución 4,2 % (0,5 mEq/mL) = 2 mL/kg. Máx. 50 mEq." },
      { t: "Acidosis metabólica: dosis según déficit", via: "IV lenta", u: "mEq/kg", kind: "once", d: [0.3], note: "Esta es la dosis por cada mEq/L de déficit de HCO₃: mEq = déficit × 0,3 × kg. Dar la mitad y reevaluar." }],
    adm: ["IV lenta; nunca rápido (hipernatremia, HIC). Máx. 8 mEq/kg/día. No por vía ET. No se recomienda en la reanimación neonatal."],
    prep: ["En neonatos, concentración máxima 4,2 % (0,5 mEq/mL): diluir el 8,4 % 1:1 con agua estéril. No mezclar con calcio ni fosfato."],
    mon: ["Gases, sodio y potasio."] },

  { id: "piptazo", n: "Piperacilina-tazobactam", en: "Piperacillin/Tazobactam", pg: 772, cat: "Antimicrobianos",
    regs: [{ t: "Dosis habitual", via: "IV en 30 min", u: "mg/kg/dosis", d: [100], rows: PMA_STD(8), note: "Dosis del componente piperacilina. Basado en estudios farmacocinéticos limitados." }],
    adm: [], prep: ["Viales de 2,25, 3,375 y 4,5 g; reconstituidos ≈ 180 mg/mL de piperacilina. Aportan sodio."],
    mon: ["Función renal (ajustar en insuficiencia renal), hemograma y electrolitos."] },
  { id: "clindamicina", n: "Clindamicina", en: "Clindamycin", pg: 245, cat: "Antimicrobianos",
    regs: [
      { t: "Infecciones graves (ficha FDA)", via: "IV", u: "mg/kg/dosis", rows: [{ pma: [0, 32], d: [5], i: 8 }, { pma: [33, 40], d: [7], i: 8 }], note: "En < 1 mes, rango 15–20 mg/kg/día en 3–4 dosis." },
      { t: "Toxoplasmosis congénita", via: "VO o IV", u: "mg/kg/dosis", d: [5, 7.5], int: "c/6 h", note: "Junto con pirimetamina y ácido folínico." }],
    adm: ["No en bolo sin diluir. Diluir a ≤ 18 mg/mL en SG 5% o SF."],
    prep: ["Ampolla 150 mg/mL (con alcohol bencílico); solución oral 15 mg/mL."],
    mon: ["Diarrea (colitis por C. difficile) y función hepática."] },

  { id: "metronidazol", n: "Metronidazol", en: "MetroNIDAZOLE", pg: 613, cat: "Antimicrobianos",
    regs: [
      { t: "Infecciones por anaerobios: carga", via: "IV o VO", u: "mg/kg", kind: "once", d: [15] },
      { t: "Infecciones por anaerobios: mantenimiento", via: "IV o VO", u: "mg/kg/dosis",
        rows: [{ pma: [24, 25], d: [7.5], i: 24 }, { pma: [26, 27], d: [10], i: 24 }, { pma: [28, 33], d: [7.5], i: 12 }, { pma: [34, 40], d: [7.5], i: 8 }, { pma: [41, 99], d: [7.5], i: 6 }],
        note: "Esquemas basados en farmacocinética; seguridad y eficacia no establecidas." },
      { t: "Profilaxis quirúrgica", via: "IV 60 min antes de la incisión", u: "mg/kg", kind: "once", rows: [{ wt: [0, 1199], d: [7.5] }, { wt: [1200, 99999], d: [15] }], note: "Si sigue después de la cirugía, menos de 24 h." }],
    adm: ["Insuficiencia hepática grave: reducir la dosis 50 %."],
    prep: ["Solución lista 5 mg/mL (no refrigerar). El vial reconstituido debe diluirse a ≤ 8 mg/mL y neutralizarse con bicarbonato."],
    mon: ["Hemograma; signos neurológicos en tratamientos prolongados."] },

  { id: "anfolip", n: "Anfotericina B liposomal", en: "Amphotericin B Liposome", pg: 86, cat: "Antimicrobianos",
    regs: [{ t: "Infección fúngica sistémica", via: "IV en 2 h", u: "mg/kg/dosis", d: [2.5, 7], int: "c/24 h", note: "Alternativa a la deoxicolato; precaución si hay compromiso urinario." }],
    adm: ["Diluir en SG 5% a < 2 mg/mL. No lavar ni mezclar con SF (precipita)."],
    prep: ["Vial 50 mg + 12 mL de agua estéril = 4 mg/mL; agitar 30 s. Para 1 mg/mL: 1 mL filtrado (5 µm) + 3 mL de SG 5%. Usar dentro de 6 h."],
    mon: ["Potasio, magnesio, función renal y hepática, hemograma."] },

  { id: "dexametasona", n: "Dexametasona", en: "Dexamethasone", pg: 273, cat: "Respiratorio",
    regs: [{ t: "Facilitar la extubación (esquema DART)", via: "IV lenta o VO", u: "mg/kg/dosis", kind: "seq",
      seq: [["Días 1–3 · c/12 h", 0.075], ["Días 4–6 · c/12 h", 0.05], ["Días 7–8 · c/12 h", 0.025], ["Días 9–10 · c/12 h", 0.01]],
      note: "Dosis total 0,89 mg/kg en 10 días. AAP: no usar dosis altas; si no hay respuesta en 72 h, no continuar. No junto con indometacina." }],
    adm: [], prep: ["Ampolla 4 mg/mL (con alcohol bencílico) y 10 mg/mL; solución oral 0,1 y 1 mg/mL."],
    mon: ["Glucemia, presión arterial, signos de infección y de perforación intestinal."] },

  { id: "surfactante", n: "Surfactante (poractant · beractant)", en: "Poractant alfa / Beractant", pg: 780, cat: "Respiratorio",
    regs: [
      { t: "Poractant alfa (Curosurf®): dosis inicial", via: "Intratraqueal, 1–2 alícuotas", u: "mL/kg", kind: "once", d: [2.5], note: "= 200 mg/kg. Rescate: lo antes posible, idealmente < 2 h de vida." },
      { t: "Poractant alfa: repetición", via: "Intratraqueal", u: "mL/kg", kind: "once", d: [1.25], note: "= 100 mg/kg, c/12 h, hasta 2 dosis más. Máximo total 5 mL/kg (400 mg/kg)." },
      { t: "Beractant (Survanta®)", via: "Intratraqueal, 4 alícuotas", u: "mL/kg", kind: "once", d: [4], note: "= 100 mg/kg de fosfolípidos (NeoFax pág. 135). Hasta 4 dosis en las primeras 48 h, no antes de c/6 h." }],
    adm: ["Preferir CPAP desde el nacimiento y surfactante selectivo. Considerar rescate en falla respiratoria por déficit secundario (meconio, sepsis/neumonía)."],
    prep: ["Curosurf® 80 mg/mL (viales 1,5 y 3 mL); Survanta® 25 mg/mL (4 y 8 mL). Entibiar a temperatura ambiente sin calor artificial; no agitar."],
    mon: ["Saturación, FiO₂ y ventilación inmediatamente después (bajar parámetros según respuesta)."] }
  ];
})();
