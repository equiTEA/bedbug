import { withAuditingFields } from './withAuditingFields'
import { disableHardDelete } from './disableHardDelete'

import type { KeystoneHookInput } from '../types/KeystoneHookInput'

export const baseHooks = {
  resolveInput: (input: KeystoneHookInput) => withAuditingFields(input),
  ...disableHardDelete,
}
