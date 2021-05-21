import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "eventemitter2";

@Injectable()
export class EventPusblisher {
 
    constructor(private eventEmitter: EventEmitter2) {}

    publish(eventName: string, payload : any) {
        this.eventEmitter.emit(eventName, payload)
    }
}