import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailService) {}

  @Cron('0 */10 * * * *')
  sendMail() {
    this.mailService.sendMail({
      to: 'vova.yubko200w@gmail.com',
      subject: 'Hello',
      text: 'Hello world',
    });
  }
}
