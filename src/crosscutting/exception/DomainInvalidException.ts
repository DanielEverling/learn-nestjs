import { HttpStatus } from "@nestjs/common"
import { Json } from "sequelize/types/lib/utils"
import { Notification } from "../domain/Notification"

export class DomainInvalidException extends Error {

    constructor(readonly notifications: Notification[]) {
        super()
        this.message = notifications.map( notification => { return notification.value } ).toJson()
    }

    getStatus() {
        return HttpStatus.BAD_REQUEST
    }
}