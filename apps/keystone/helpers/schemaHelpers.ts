/** Helpers for [List].fields */

export const hideUIForDefaults = {
  ui: {
    createView: { fieldMode: 'hidden' as const },
    itemView: { fieldMode: 'read' as const },
  },
}
