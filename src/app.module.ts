import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from './mail/mail.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: 'smtps://uladzimir.yubko@leverx.com:vovayubko2003@smtp.gmail.com',
      defaults: {
        from: '"Uladzimir Yubko" <uladzimir.yubko@leverx.com>',
      },
    }),
    MailModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
