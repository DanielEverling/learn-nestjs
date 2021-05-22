import { SendEmail } from "@base/user/infra/SendEmail";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { CreateUserEvent } from "src/crosscutting/domain/events/CreateUserEvent";

@Injectable()
export class CreateUserEventHandler {

    constructor(private sendEmail: SendEmail) {}

    @OnEvent('person.created')
    handleOrderCreatedEvent(payload: CreateUserEvent) {
        console.log(`Consuming event ${JSON.stringify(payload)}`)
        this.sendEmail.send(payload.name)
    }
}