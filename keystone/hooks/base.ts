import { withAuditingFields } from './withAuditingFields'
import { disableHardDelete } from './disableHardDelete'

export const baseHooks = {
  resolveInput: (input) => withAuditingFields(input),
  ...disableHardDelete,
}
