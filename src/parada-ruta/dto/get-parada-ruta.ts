import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty, IsDecimal} from 'class-validator'
import { Decimal128 } from "typeorm";

export class GetParadaRuta{

    @ApiProperty({ example: 'Penonome' })
    @IsString()
    nombre: string;

    @ApiProperty({ example: 1.50 })
    @IsDecimal()
    precio: Decimal128;

    @ApiProperty({ example: 1234 })
    @IsString()
    long: string;

    @ApiProperty({ example: 1234 })
    @IsString()
    lat: string;
}

