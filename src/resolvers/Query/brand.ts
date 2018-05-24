import { Context } from '../../utils'

export const brand = {
  async brands (parent, args, ctx: Context, info) {
    return ctx.db.query.brands({}, info)
  }
}