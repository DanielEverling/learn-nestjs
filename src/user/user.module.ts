import { Module } from '@nestjs/common';
import { CrossModule } from 'src/crosscutting/cross.module';
import { CreateUserEventHandler } from './domain/events/CreateUserEventHandler';
import { SendEmail } from './infra/SendEmail';


@Module({
  imports: [
    CrossModule
  ],
  controllers: [],
  providers: [CreateUserEventHandler, SendEmail],
})
export class UserModule {}
