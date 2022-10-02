import type { KeystoneHookInput } from '../types/KeystoneHookInput'

type UserAuditingFields = 'createdBy' | 'updatedBy' | 'deletedBy'

export const withAuditingFields = ({
  operation: mutationOperation,
  context,
  resolvedData,
}: KeystoneHookInput) => {
  let operation: typeof mutationOperation | 'delete' = mutationOperation

  /** Soft deletions are issued by passing {isDeleted: true} to update mutations */
  if (resolvedData.isDeleted && operation === 'update') operation = 'delete'

  const appliedUserAuditingField = context.session
    ? {
        connect: {
          id: context.session.itemId,
        },
      }
    : undefined

  const auditingField = {
    create: {
      createdBy: appliedUserAuditingField,
    },
    update: {
      updatedBy: appliedUserAuditingField,
    },
    delete: {
      deletedBy: appliedUserAuditingField,
    },
  }[operation]

  return { ...resolvedData, ...auditingField }
}
