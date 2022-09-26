export const disableHardDelete = {
  validateDelete: async ({ addValidationError }) =>
    addValidationError(
      'Hard deletes are disabled; use soft deletes by updating with { isDeleted: true } instead',
    ),
}
