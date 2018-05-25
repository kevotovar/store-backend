import { getUserId, Context } from '../../utils'
import { brand } from './brand'

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  ...brand
}
