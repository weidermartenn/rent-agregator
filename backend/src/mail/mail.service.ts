import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private readonly resend = new Resend(process.env.RESEND_API_KEY);

  async sendOtp(email: string, code: string): Promise<void> {
    const templatePath: string = join(__dirname, 'templates', 'otp.hbs');
    const html: string = readFileSync(templatePath, 'utf-8').replace(
      '{{code}}',
      code,
    );

    await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Код подтверждения — Meter+',
      html,
    });
  }
}
