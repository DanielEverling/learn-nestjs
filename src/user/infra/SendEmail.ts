import { Injectable } from "@nestjs/common";

@Injectable()
export class SendEmail {

    send(name: string) {
        console.log(`sending email to user with name ${name}`)
    }

}