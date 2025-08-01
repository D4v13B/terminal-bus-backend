import { Body, Controller, Post } from '@nestjs/common';
import { BotApiService } from './bot-api.service';
import { Content } from './entitites/bot-response.entity';
import { Public } from '@thallesp/nestjs-better-auth';

@Public()
@Controller('bot-api')
export class BotApiController {
  constructor(private readonly botApiService: BotApiService) {}

  @Public()
  @Post('respond')
  async respond(@Body() data: { message: string; conversation: Content[] }) {
    return await this.botApiService.getResponseBot(data);
    // return data;
  }
}
