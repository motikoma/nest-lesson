import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto as CreateProductDto } from './dto/create-user.dto';
import { UsersService as ProductsService } from './users.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  create(@Body(ValidationPipe) createProduct: CreateProductDto) {
    return this.productsService.create(createProduct);
  }
}
