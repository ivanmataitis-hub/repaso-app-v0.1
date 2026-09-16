export const items = [
  {
    id: 'mayo-001', topicId: 'revolucion-mayo', grades: ['5P','6P'], difficulty: 'facil', type: 'multiple_choice', concept: 'primera-junta',
    context: 'El 25 de mayo de 1810, en Buenos Aires, se formó una nueva autoridad de gobierno.',
    prompt: '¿Cómo se llamó ese gobierno?',
    options: ['Primera Junta','Congreso de Tucumán','Directorio','Asamblea del Año XIII'], answer: 'Primera Junta',
    explanation: 'El 25 de mayo de 1810 se estableció la Primera Junta de Gobierno.',
    sourceIds: ['argentina_mayo','educar_mayo'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'mayo-002', topicId: 'revolucion-mayo', grades: ['5P','6P','1S'], difficulty: 'medio', type: 'true_false', concept: 'cisneros',
    context: 'Baltasar Hidalgo de Cisneros era el virrey del Río de la Plata en mayo de 1810.',
    prompt: 'La formación de la Primera Junta ocurrió después de la salida de Cisneros del gobierno.',
    answer: true,
    explanation: 'La renuncia/dimisión de Cisneros abrió paso a la formación de la Primera Junta el 25 de mayo.',
    sourceIds: ['argentina_mayo','educar_mayo'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'mayo-003', topicId: 'revolucion-mayo', grades: ['6P','1S','2S'], difficulty: 'dificil', type: 'multiple_choice', concept: 'legitimidad',
    context: 'La crisis política en España debilitó la autoridad que sostenía a los funcionarios coloniales en América.',
    prompt: '¿Qué problema político abrió esa crisis para el Río de la Plata?',
    options: ['Quién tenía autoridad legítima para gobernar','Qué idioma debía hablarse','Dónde trasladar el puerto','Qué moneda reemplazaría al peso'],
    answer: 'Quién tenía autoridad legítima para gobernar',
    explanation: 'La crisis de la monarquía generó una discusión sobre la legitimidad del poder y quién podía ejercerlo.',
    sourceIds: ['educar_mayo'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'mayo-004', topicId: 'revolucion-mayo', grades: ['5P','6P'], difficulty: 'medio', type: 'who_am_i', concept: 'saavedra',
    prompt: '¿Quién soy?',
    hints: ['Fui un militar nacido en el Alto Perú.','Tuve un papel destacado en las jornadas de mayo.','Fui presidente de la Primera Junta.'],
    options: ['Cornelio Saavedra','Mariano Moreno','Manuel Belgrano','Juan José Paso'], answer: 'Cornelio Saavedra',
    explanation: 'Cornelio Saavedra presidió la Primera Junta.',
    sourceIds: ['argentina_mayo'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'mayo-005', topicId: 'revolucion-mayo', grades: ['5P','6P','1S'], difficulty: 'facil', type: 'timeline', concept: 'semana-mayo',
    prompt: 'Ordená estos hechos del más antiguo al más reciente.',
    events: [
      { id: 'a', label: 'Cabildo Abierto del 22 de mayo', order: 1 },
      { id: 'b', label: 'Junta del 24 de mayo presidida por Cisneros', order: 2 },
      { id: 'c', label: 'Formación de la Primera Junta, 25 de mayo', order: 3 }
    ],
    explanation: 'La Semana de Mayo culminó con la formación de la Primera Junta el 25 de mayo.',
    sourceIds: ['educar_mayo'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'mayo-006', topicId: 'revolucion-mayo', grades: ['5P','6P'], difficulty: 'facil', type: 'match_pairs', concept: 'primera-junta-integrantes',
    prompt: 'Uní cada integrante con su función en la Primera Junta.',
    pairs: [
      ['Cornelio Saavedra','Presidente'],
      ['Mariano Moreno','Secretario'],
      ['Juan José Paso','Secretario']
    ],
    explanation: 'Saavedra presidió la Junta; Moreno y Paso fueron secretarios.',
    sourceIds: ['argentina_mayo'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },

  {
    id: 'roma-001', topicId: 'roma', grades: ['6P','1S'], difficulty: 'facil', type: 'multiple_choice', concept: 'republica-romana',
    context: 'Roma pasó por distintas formas de gobierno. La República comenzó tradicionalmente en 509 a. C.',
    prompt: '¿Qué magistrados compartían la máxima autoridad ejecutiva anual durante la República?',
    options: ['Dos cónsules','Dos faraones','Un emperador y un rey','Tres papas'], answer: 'Dos cónsules',
    explanation: 'En la República romana, dos cónsules eran elegidos y compartían autoridad ejecutiva.',
    sourceIds: ['met_rome_art','met_rome_republic'], validation: { factual: 'approved', curricular: 'review', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'roma-002', topicId: 'roma', grades: ['6P','1S','2S'], difficulty: 'medio', type: 'true_false', concept: 'republica-imperio',
    context: 'Augusto recibió ese título en 27 a. C. y concentró el poder político romano.',
    prompt: 'El ascenso de Augusto marca el comienzo del período imperial romano.',
    answer: true,
    explanation: 'Convencionalmente se considera 27 a. C. como el inicio del Imperio bajo Augusto.',
    sourceIds: ['met_rome_republic'], validation: { factual: 'approved', curricular: 'review', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'roma-003', topicId: 'roma', grades: ['1S','2S'], difficulty: 'dificil', type: 'multiple_choice', concept: 'conflicto-ordenes',
    context: 'Durante la República temprana, patricios y plebeyos tuvieron fuertes disputas políticas y sociales.',
    prompt: '¿Qué buscaban, entre otras cosas, sectores plebeyos?',
    options: ['Alivio de deudas y mayor acceso a tierras','Eliminar toda forma de ciudadanía','Restaurar el dominio egipcio','Prohibir las asambleas populares'],
    answer: 'Alivio de deudas y mayor acceso a tierras',
    explanation: 'Las deudas y la distribución desigual de tierras estuvieron entre las causas centrales del conflicto social.',
    sourceIds: ['met_rome_republic'], validation: { factual: 'approved', curricular: 'review', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'roma-004', topicId: 'roma', grades: ['6P','1S'], difficulty: 'medio', type: 'who_am_i', concept: 'augusto',
    prompt: '¿Quién soy?',
    hints: ['Fui heredero político de Julio César.','Mi nombre original fue Octavio.','En 27 a. C. recibí el título de Augusto.'],
    options: ['Augusto','Nerón','Cicerón','Aníbal'], answer: 'Augusto',
    explanation: 'Octavio recibió el título de Augusto en 27 a. C. y abrió el período imperial.',
    sourceIds: ['met_rome_republic'], validation: { factual: 'approved', curricular: 'review', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'roma-005', topicId: 'roma', grades: ['6P','1S'], difficulty: 'facil', type: 'timeline', concept: 'periodizacion-roma',
    prompt: 'Ordená estos momentos de la historia política romana.',
    events: [
      { id: 'a', label: 'Monarquía romana', order: 1 },
      { id: 'b', label: 'República romana', order: 2 },
      { id: 'c', label: 'Imperio romano', order: 3 }
    ],
    explanation: 'La secuencia tradicional es Monarquía → República → Imperio.',
    sourceIds: ['met_rome_republic'], validation: { factual: 'approved', curricular: 'review', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'roma-006', topicId: 'roma', grades: ['6P','1S'], difficulty: 'medio', type: 'match_pairs', concept: 'instituciones-romanas',
    prompt: 'Uní cada término romano con su descripción general.',
    pairs: [
      ['Cónsules','Magistrados ejecutivos de la República'],
      ['Senado','Cuerpo de gran influencia política'],
      ['Asambleas','Espacios de participación de ciudadanos']
    ],
    explanation: 'Las instituciones romanas repartían funciones, aunque el poder real variaba según la época y el estatus social.',
    sourceIds: ['met_rome_art'], validation: { factual: 'approved', curricular: 'review', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },

  {
    id: 'oct-001', topicId: '12-octubre', grades: ['5P','6P','1S'], difficulty: 'facil', type: 'multiple_choice', concept: 'nombre-efemeride',
    context: 'En Argentina, la conmemoración del 12 de octubre cambió su denominación y su enfoque oficial.',
    prompt: '¿Cómo se denomina actualmente la efeméride?',
    options: ['Día del Respeto a la Diversidad Cultural','Día de la Fundación de Buenos Aires','Día de la Constitución','Día del Congreso'],
    answer: 'Día del Respeto a la Diversidad Cultural',
    explanation: 'El enfoque actual propone reflexión histórica, diálogo intercultural y reconocimiento de los derechos de los pueblos originarios.',
    sourceIds: ['educar_12oct'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'oct-002', topicId: '12-octubre', grades: ['5P','6P','1S'], difficulty: 'medio', type: 'true_false', concept: 'pueblos-originarios',
    context: 'Antes de la llegada de los europeos existían en América numerosas sociedades con lenguas, conocimientos y formas de organización propias.',
    prompt: 'La historia de América comenzó con la llegada europea en 1492.',
    answer: false,
    explanation: 'América estaba habitada desde miles de años antes y tenía una enorme diversidad de pueblos y culturas.',
    sourceIds: ['educar_12oct'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'oct-003', topicId: '12-octubre', grades: ['6P','1S','2S','3S'], difficulty: 'dificil', type: 'multiple_choice', concept: 'perspectivas-historicas',
    context: 'Las formas de nombrar un acontecimiento histórico expresan interpretaciones. Por eso en clase pueden compararse distintas voces y fuentes.',
    prompt: '¿Qué práctica ayuda más a estudiar críticamente la conquista y colonización de América?',
    options: ['Comparar fuentes y perspectivas diferentes','Elegir una sola voz y descartarlas demás','Memorizar una fecha sin contexto','Evitar analizar consecuencias'],
    answer: 'Comparar fuentes y perspectivas diferentes',
    explanation: 'Comparar perspectivas permite distinguir hechos, interpretaciones, experiencias y consecuencias para distintos grupos.',
    sourceIds: ['educar_12oct','nap_sociales'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'oct-004', topicId: '12-octubre', grades: ['5P','6P'], difficulty: 'medio', type: 'who_am_i', concept: 'colon',
    prompt: '¿Quién soy?',
    hints: ['Navegué al servicio de la Corona de Castilla.','Mi viaje de 1492 cruzó el Atlántico.','Llegué al Caribe el 12 de octubre de 1492.'],
    options: ['Cristóbal Colón','Hernán Cortés','José de San Martín','Américo Vespucio'], answer: 'Cristóbal Colón',
    explanation: 'Cristóbal Colón encabezó la expedición castellana que llegó al Caribe en 1492.',
    sourceIds: ['educar_12oct'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'oct-005', topicId: '12-octubre', grades: ['5P','6P','1S'], difficulty: 'facil', type: 'timeline', concept: 'america-colonizacion',
    prompt: 'Ordená estos procesos desde el más antiguo al más reciente.',
    events: [
      { id: 'a', label: 'Desarrollo de pueblos y culturas americanas preexistentes', order: 1 },
      { id: 'b', label: 'Llegada de la expedición de Colón al Caribe en 1492', order: 2 },
      { id: 'c', label: 'Expansión de la conquista y colonización europea', order: 3 }
    ],
    explanation: 'La existencia de pueblos americanos es anterior a 1492; después se desarrolló el proceso de conquista y colonización.',
    sourceIds: ['educar_12oct'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  },
  {
    id: 'oct-006', topicId: '12-octubre', grades: ['6P','1S'], difficulty: 'medio', type: 'match_pairs', concept: 'conceptos-diversidad',
    prompt: 'Uní cada concepto con la idea que mejor lo representa.',
    pairs: [
      ['Diversidad cultural','Convivencia de distintas culturas y tradiciones'],
      ['Pueblos originarios','Pueblos preexistentes a la formación de los Estados actuales'],
      ['Interculturalidad','Diálogo y relación respetuosa entre culturas']
    ],
    explanation: 'Estos conceptos ayudan a analizar la conmemoración desde una mirada histórica y de derechos.',
    sourceIds: ['educar_12oct'], validation: { factual: 'approved', curricular: 'approved', age: 'approved', ambiguity: 'approved', license: 'approved' }
  }
];
