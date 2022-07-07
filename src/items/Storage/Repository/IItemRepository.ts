import { Item } from 'Items/Data/Item'

export interface IItemRepository {
  findAll: () => Item[]

  findById: () => Item | undefined

  create: () => boolean

  update: () => boolean

  delete: () => boolean
}
