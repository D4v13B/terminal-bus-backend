import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty} from 'class-validator'

export class CreateRutaDto {

    @ApiProperty({ example: 250 })
    @IsInt()
    distancia: number;

    @ApiProperty({ example: 'A5' })
    @IsString()
    @IsNotEmpty()
    anden: string;

    @ApiProperty({ example: '08:00 a.m' })
    @IsString()
    horaEntrada: string;

    @ApiProperty({ example: '08:00 p.m' })
    @IsString()
    horaSalida: string;

    @ApiProperty({ example: 1 })
    @IsInt()
    provId: number;

    @ApiProperty({ example: 1 })
    @IsInt()
    toId: number;

    @ApiProperty({ example: 1 })
    @IsInt()
    tdId: number;

}
