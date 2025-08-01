import { Module } from '@nestjs/common';
import { BotApiController } from './bot-api.controller';
import { BotApiService } from './bot-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BotApiController],
  providers: [BotApiService],
  exports: [BotApiService],
})
export class BotApiModule {}
