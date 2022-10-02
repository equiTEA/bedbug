import {
  KeystoneContextFromListTypeInfo,
  BaseListTypeInfo,
} from '@keystone-6/core/dist/declarations/src/types'

export type KeystoneHookInput = {
  context: KeystoneContextFromListTypeInfo<BaseListTypeInfo>
  resolvedData: Record<string, any>
  operation: 'create' | 'update'
}
