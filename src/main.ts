import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigurationService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {
    app: { http },
  }: ConfigurationService = app.get<ConfigurationService>(ConfigurationService);

  await app
    .listen(http.port)
    .then(() => Logger.log(`Service started on http port ${http.port} ...`));
}
bootstrap();
