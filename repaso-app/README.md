# REpaso — v0.1

Prototipo paralelo de una app escolar lúdica para estudiantes de aproximadamente 10–16 años.

## Principios
- Año escolar y dificultad son dimensiones separadas.
- Cada ítem es autosuficiente y muestra sus fuentes después de responder.
- El contenido vive separado del motor de juego.
- No requiere registro ni datos personales: el perfil queda en `localStorage`.
- Wikipedia puede servir para descubrir referencias, pero no aprueba factualidad.
- Fuentes con restricciones NC/ND se tratan como `reference-only` salvo permiso explícito.

## Juegos del MVP
- Opción múltiple
- Verdadero/Falso
- Unir pares (tap–tap)
- Orden cronológico
- ¿Quién soy?

## Temas piloto
- Revolución de Mayo
- Roma antigua
- 12 de Octubre y diversidad cultural

## Ejecutar
```bash
npm install
npm run validate:content
npm run dev
```

## Arquitectura editorial
Ver `/agents` y `/src/content`. La versión 0.1 tiene gates determinísticos y un esquema para incorporar agentes de IA independientes en una etapa posterior.

## Estado editorial
Los ítems de Roma están marcados `curricular: review` porque la ubicación exacta por año depende del diseño jurisdiccional. El sistema deja visible esa incertidumbre en vez de inventarla.
