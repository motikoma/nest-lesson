import { Product } from './domain/product';
import { ProductId } from './domain/product-id';
import { ProductName } from './domain/product-name';
import { IProductsRepository } from './domain/products-repository';
import { Yen } from './domain/yen';

export class ProductsRepository implements IProductsRepository {
  async create(product: Product): Promise<Product> {
    const createdProduct = {
      productId: '1',
      productName: '商品名',
      yen: 100,
    };

    const newProduct = new Product(
      ProductId.reconstruct(createdProduct.productId),
      ProductName.reconstruct(createdProduct.productName),
      Yen.reconstruct(createdProduct.yen),
    );

    return newProduct;
  }
}
