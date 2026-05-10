import { IsString, IsOptional, MaxLength, MinLength } from 'class-validator';
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateCategoryDto {
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name: string;
    @ApiProperty({
        example: 999.99,
        description: 'Ціна у гривнях',
        minimum: 0.01,
    })
    @ApiProperty({
        example: 'iPhone 16',
        description: 'Назва продукту',
        maxLength: 255,
    })
    @ApiPropertyOptional({
        example: 'Flagship smartphone',
        description: 'Опис продукту',
    })
    @ApiPropertyOptional({
        example: 50,
        description: 'Кількість на складі',
        default: 0,
    })
    @ApiPropertyOptional({
        example: 1,
        description: 'ID категорії',})

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description?: string;
}
