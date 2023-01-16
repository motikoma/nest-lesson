import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateProductRequest {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  readonly productName: string;

  @IsString()
  @MinLength(0)
  @MaxLength(100000000)
  readonly yen: number;
}
