# Invitación de cumpleaños de Santiago 🍓🍉🍊

Invitación digital mobile-first para el tercer cumpleaños de Santiago.

- **Fecha:** domingo 27 de septiembre de 2026
- **Hora:** 09:30 – 15:00
- **Lugar:** Salón de Eventos Infantiles Chiquilladas, La Barqueta de Achumani

Los invitados confirman su asistencia por WhatsApp eligiendo la cantidad de
personas; el mensaje se genera automáticamente para mamá (Valeria) o papá
(Mauricio).

## Experiencia

- Escena de scroll cinematográfica: el héroe se fija, el texto se desvanece y
  las frutas se mueven en parallax mientras la sección azul sube como cortina.
- Botón flotante «Confirmar asistencia» que aparece al bajar y se oculta al
  llegar al formulario o al pie de página.
- Mapa con entrada suave de zoom y desfile de frutas animado.
- Todo el movimiento se desactiva con `prefers-reduced-motion`.

## Compartir por WhatsApp

La vista previa usa `public/og.png` (1200×630). La URL en la etiqueta
`og:image` de `index.html` está fijada a
`https://mauriville.github.io/invisanti/og.png`; **actualízala si el sitio se
publica en otro dominio** (WhatsApp solo acepta URLs absolutas).

## Tecnología

- React 19 + TypeScript
- Vite
- CSS moderno con design tokens (sin framework de estilos)
- Ilustraciones SVG propias

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo
npm run build   # build de producción (tsc + vite)
npm run lint    # oxlint
npm run preview # previsualizar el build
```
