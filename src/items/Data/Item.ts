export class Item {
  constructor(
    public id: number,
    public displayName: string,
    public price: number,
    public amount: number
  ) {}

  public canBeSell = (
    quantity: number = 1
  ) => this.amount >= quantity
}
