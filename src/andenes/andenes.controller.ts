import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AndenesService } from './andenes.service';
import { CreateAndeneDto } from './dto/create-andene.dto';
import { UpdateAndeneDto } from './dto/update-andene.dto';

@Controller('andenes')
export class AndenesController {
  constructor(private readonly andenesService: AndenesService) {}

  @Post()
  create(@Body() createAndeneDto: CreateAndeneDto) {
    return this.andenesService.create(createAndeneDto);
  }

  @Get()
  findAll() {
    return this.andenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.andenesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAndeneDto: UpdateAndeneDto) {
    return this.andenesService.update(+id, updateAndeneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.andenesService.remove(+id);
  }
}
