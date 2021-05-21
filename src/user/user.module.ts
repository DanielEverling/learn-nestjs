import { Module } from '@nestjs/common';
import { CrossModule } from 'src/crosscutting/cross.module';
import { CreateUserEventHandler } from './domain/events/CreateUserEventHandler';


@Module({
  imports: [
    CrossModule
  ],
  controllers: [],
  providers: [CreateUserEventHandler],
})
export class UserModule {}
