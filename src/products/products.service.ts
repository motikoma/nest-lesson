import { Injectable } from '@nestjs/common';
import { Product } from './domain/product';
import { ProductId } from './domain/product-id';
import { ProductName } from './domain/product-name';
import { IProductsRepository } from './domain/products-repository';
import { Yen } from './domain/yen';

type RequestParam = {
  readonly productName: string;
  readonly yen: number;
};
type ReadonlyRequestParam = Readonly<RequestParam>;

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: IProductsRepository) {}

  create(productRequestParam: ReadonlyRequestParam) {
    // domainオブジェクトを作成する
    const { productName, yen } = productRequestParam;

    const newProductId = ProductId.create();
    const newProductName = ProductName.create({ productName });
    const newYen = Yen.create({ amount: yen });
    const newProduct = new Product(newProductId, newProductName, newYen);

    // repositoryを呼び出して永続化する
    return this.productsRepository.create(newProduct);
  }
}
