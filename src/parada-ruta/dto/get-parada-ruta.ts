import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, IsIn } from 'class-validator';

export class GetParadaRuta {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: '1' })
  @IsString()
  paradaId: number;

  @ApiProperty({ example: 'A1' })
  @IsString()
  anden: string;

  @ApiProperty({ example: '10:30' })
  @IsString()
  horaSalida;

  @ApiProperty({ example: 'Penonome' })
  @IsString()
  nombreRuta: string;

  @ApiProperty({ example: 'Penonome' })
  @IsString()
  nombreParada: string;

  @ApiProperty({ example: 1.5 })
  @IsInt()
  precio: number;

  @ApiProperty({ example: 1234 })
  @IsString()
  long: string;

  @ApiProperty({ example: 1234 })
  @IsString()
  lat: string;

  @ApiProperty({ example: 63 })
  @IsInt()
  rutaId: number;
}
