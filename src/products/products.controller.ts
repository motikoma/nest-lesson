import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateProductRequest } from './request/create-products-request';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body(ValidationPipe) createProduct: CreateProductRequest) {
    return this.productsService.create(createProduct);
  }
}
