import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty} from 'class-validator'

export class GetRutaDto {

  @ApiProperty({ example: 63 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'Gran Terminal de Transporte de Albrook' })
  @IsString()
  nombreTo: string;

  @ApiProperty({ example: 'Terminal de David' })
  @IsString()
  nombreTd: string;

  @ApiProperty({ example: 250 })
  @IsInt()
  distancia: number;


  @ApiProperty({ example: '30' })
  @IsString()
  anden: string;

  @ApiProperty({ example: '8:00 a.m' })
  @IsString()
  horaEntrada: string;

  @ApiProperty({ example: '8:30 p.m' })
  @IsString()
  horaSalida: string;

}
