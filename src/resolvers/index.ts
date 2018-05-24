import { Query } from './Query'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { brand } from './Mutation/brand'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...brand,
  },
  AuthPayload,
}
