import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty} from 'class-validator'

export class GetRutaDto {

  @ApiProperty({ example: 'Penonome' })
  @IsString()
  provincia: string;

  @ApiProperty({ example: 300 })
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
