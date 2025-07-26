import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerminalesService } from './terminales.service';
import { CreateTerminaleDto } from './dto/create-terminale.dto';
import { UpdateTerminaleDto } from './dto/update-terminale.dto';

@Controller('terminales')
export class TerminalesController {
  constructor(private readonly terminalesService: TerminalesService) {}

  @Post()
  create(@Body() createTerminaleDto: CreateTerminaleDto) {
    return this.terminalesService.create(createTerminaleDto);
  }

  @Get()
  findAll() {
    return this.terminalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terminalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerminaleDto: UpdateTerminaleDto) {
    return this.terminalesService.update(+id, updateTerminaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terminalesService.remove(+id);
  }
}
