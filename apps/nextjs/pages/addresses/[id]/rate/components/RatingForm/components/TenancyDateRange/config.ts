export const currentYear = new Date().getFullYear()
export const years = Array.from({ length: 20 }, (_, i) => currentYear - i)
