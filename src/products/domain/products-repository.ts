import { Product } from './product';

export interface IProductsRepository {
  create(product: Product): Promise<Product>;
}
