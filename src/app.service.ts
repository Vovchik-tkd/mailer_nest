import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailService) {}

  @Cron('0 */10 * * * *')
  sendMail() {
    this.mailService
      .sendMail({
        to: process.env.MAIL_TO,
        subject: 'Hello',
        text: 'Hello world',
      })
      .then(() => console.log('mail is send'))
      .catch((err) => console.log('error' + err));
  }
}
