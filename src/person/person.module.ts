import { Module } from '@nestjs/common';
import { CrossModule } from 'src/crosscutting/cross.module';
import { PersonController } from './api/PersonController';
import { CreatePersonCommandHandler } from './application/command/CreatePersonCommandHandler';
import { PersonRepository } from './infrastructure/repository/PersonRepository';


@Module({
  imports: [CrossModule],
  controllers: [PersonController],
  providers: [CreatePersonCommandHandler, PersonRepository]
})
export class PersonModule {}
