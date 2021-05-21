import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { DomainInvalidExceptionFilter } from './crosscutting/exception/DomainInvalidExceptionFilter';
import { CrossModule } from './crosscutting/cross.module';
import { DatabaseModule } from './database.module';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    PersonModule,
    UserModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: DomainInvalidExceptionFilter,
    },
  ],
})
export class AppModule {}
