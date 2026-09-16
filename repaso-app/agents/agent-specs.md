# Especificación de gates

## curriculum-checker
Confirma que el tema y la habilidad son compatibles con el año escolar y registra el documento curricular utilizado. Si la jurisdicción difiere, marca `jurisdiction_review`.

## factual-checker
Descompone pregunta, respuesta y explicación en afirmaciones verificables. Cada afirmación debe estar respaldada por `sourceIds`. Wikipedia no otorga aprobación factual.

## independent-verifier
Revisa de cero sin leer la justificación del redactor. Si discrepa, bloquea publicación.

## pedagogy-checker
Comprueba que la actividad evalúe comprensión y no solo memoria cuando la dificultad es media/difícil.

## age-language-checker
Evalúa longitud, vocabulario, carga cognitiva y claridad para el curso.

## ambiguity-checker
Todo ítem debe ser autosuficiente: detecta pronombres sin referente, nombres propios sin rol y referencias a una pregunta previa.

## distractor-checker
En multiple choice, las alternativas incorrectas deben ser plausibles, inequívocamente falsas y de longitud comparable.

## perspective-bias-checker
Especialmente para historia y ciudadanía, exige separar hechos de interpretaciones y representar perspectivas pertinentes sin falsa equivalencia.

## license-checker
Clasifica cada fuente como `ingest`, `transform`, `display-only` o `reference-only`. Bloquea copiar texto/imágenes NC/ND en una versión comercial.

## duplicate-checker
Detecta preguntas equivalentes, respuestas memorizables por posición y repeticiones excesivas del mismo concepto.
