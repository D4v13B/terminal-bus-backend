import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsInt, IsUUID } from "class-validator";

export class CreateBoletoDto {

    @ApiProperty({ example: '2025-07-28' })
    @IsDateString()
    fechaUso: Date; 

    @ApiProperty({ example: 1})
    @IsInt()
    userId: number;

    @ApiProperty({ example: 1})
    @IsInt()
    paradaRutaId: number;
}
