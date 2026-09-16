# Agentes editoriales de REpaso

Estos archivos describen los gates que debe atravesar cualquier contenido antes de pasar a `approved`.
En v0.1 el script `npm run validate:content` ejecuta chequeos determinísticos. La siguiente etapa conectará estos gates a un modelo y exigirá evidencia estructurada.

Orden propuesto:
1. curriculum-checker
2. content-writer
3. factual-checker
4. independent-verifier
5. pedagogy-checker
6. age-language-checker
7. ambiguity-checker
8. distractor-checker
9. perspective-bias-checker
10. license-checker
11. duplicate-checker
12. deterministic validation

Regla: el agente que redacta un ítem no puede ser el mismo que da la aprobación factual final.
