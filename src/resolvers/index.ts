import { Query } from './Query'
import { auth } from './Mutation/auth'
import { brand } from './Mutation/brand'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...brand,
  },
  AuthPayload,
}
