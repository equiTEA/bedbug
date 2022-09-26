import type { KeystoneHookInput } from '../types/helpers/KeystoneHookInput'

export const withAuditingFields = ({
  operation: mutationOperation,
  context,
  resolvedData,
}: KeystoneHookInput) => {
  let operation: typeof mutationOperation | 'delete' = mutationOperation

  /** Soft deletions are issued by passing {isDeleted: true} to update mutations */
  if (resolvedData.isDeleted && operation === 'update') operation = 'delete'

  const auditingField = {
    create: {
      createdBy: {
        connect: { id: context.session.itemId },
      },
    },
    update: {
      updatedBy: {
        connect: { id: context.session.itemId },
      },
    },
    delete: {
      deletedBy: {
        connect: {
          id: context.session.itemId,
        },
      },
    },
  }[operation]

  return { ...resolvedData, ...auditingField }
}
