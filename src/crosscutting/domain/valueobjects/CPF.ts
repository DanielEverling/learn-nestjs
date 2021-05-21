import { Notification } from "../Notification"
import { ValidationAware } from "../ValidationAware"

export class CPF implements ValidationAware {

    private constructor(readonly value: string) {}

    static of(value: string): CPF {
        return new CPF(value)
    }

    validators() : Notification[] {
        return [
            this.value.isEmpty('Document is required.')
        ]
    }
    
}