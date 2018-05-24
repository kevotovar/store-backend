import { getUserId, Context } from '../../utils'

export const brand = {
  async createBrand(parent, {name}, ctx: Context, info) {
    return ctx.db.mutation.createBrand({data: { name }})
  }
}