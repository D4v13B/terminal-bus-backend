import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty} from 'class-validator'

export class GetParadaRuta{

    @ApiProperty({ example: 'Penonome' })
    @IsString()
    nombre: string;

    @ApiProperty({ example: 1.50 })
    @IsInt()
    precio: number;

    @ApiProperty({ example: 1234 })
    @IsString()
    long: string;

    @ApiProperty({ example: 1234 })
    @IsString()
    lat: string;
}

