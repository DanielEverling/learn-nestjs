import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventPusblisher } from './domain/events/EventPusblisher';


@Module({
  imports: [
    EventEmitterModule.forRoot()
  ],
  controllers: [],
  providers: [EventPusblisher],
  exports: [EventPusblisher]
})
export class CrossModule {}
