import { IItemRepository } from 'Items/Storage/Repository/IItemRepository'

import { Item } from 'Items/Data/Item'

export class PostgresItemRepository implements IItemRepository {
  public findAll = (): Item[] => {
    try {
      return []
    } catch (err: any) {
      return []
    }
  }

  public findById = () => {
    try {
      return {} as Item
    } catch (err: any) {
      console.error(err)
    }
  }

  public create = () => false

  public update = () => false

  public delete = () => false
}
