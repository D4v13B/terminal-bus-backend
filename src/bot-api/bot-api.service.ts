import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { BotResponse, Content } from './entitites/bot-response.entity';

@Injectable()
export class BotApiService {
  constructor(private readonly httpService: HttpService) {}

  async getResponseBot(data: {
    message: string;
    conversation: Content[];
  }): Promise<BotResponse> {
    const url = process.env.API_URL_BOT as string;
    const response = await firstValueFrom(
      this.httpService.post<BotResponse>(url, data),
    );
    return response.data;
  }
}
