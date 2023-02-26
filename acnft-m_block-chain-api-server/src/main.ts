import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // const port = process.env.NODE_SERVER_PORT;
    const configService = app.get(ConfigService);
    const port = configService.get('NODE_SERVER_PORT');
    // const port = configService.get<string>('port');

  await app.listen(port);
  console.log(`acnft-m_block-chain-api-server listening on port ${port}`);
}
bootstrap();
