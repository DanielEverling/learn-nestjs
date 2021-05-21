import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonSchema } from './person/infrastructure/repository/PersonSchema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'project_with_ts',
      entities: [PersonSchema],
      autoLoadEntities: false,
      retryAttempts:5,
      retryDelay:1000,
      connectTimeoutMS:1000
    })
  ]
})
export class DatabaseModule {}