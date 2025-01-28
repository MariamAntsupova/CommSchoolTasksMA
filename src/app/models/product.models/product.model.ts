export class Product {
  constructor(
    public id: number,
    public name: string,
    public oldPrice: number,
    public newPrice: number,
    public category: string,
    public image: string
  ) {}
}
