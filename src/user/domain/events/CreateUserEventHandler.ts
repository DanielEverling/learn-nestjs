import { OnEvent } from "@nestjs/event-emitter";
import { CreateUserEvent } from "src/crosscutting/domain/events/CreateUserEvent";

export class CreateUserEventHandler {

    @OnEvent('person.created')
    handleOrderCreatedEvent(payload: CreateUserEvent) {
        console.log(`Consuming event ${JSON.stringify(payload)}`)
    }
}