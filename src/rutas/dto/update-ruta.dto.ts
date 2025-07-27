import { PartialType } from '@nestjs/mapped-types';
import { CreateRutaDto } from './create-ruta.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class UpdateRutaDto extends PartialType(CreateRutaDto) {

    @ApiPropertyOptional({ example: 1 })
    @IsInt()
    id?: number;
    
    @ApiProperty({ example: 250 })
    @IsInt()
    distancia: number;
    
    @ApiProperty({ example: 'A5' })
    @IsString()
    anden: string;
    
    @ApiProperty({ example: '08:00' })
    @IsString()
    horaEntrada: string;
    
    @ApiProperty({ example: '08:00 a.m' })
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
