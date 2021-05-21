import { Notification } from "./Notification"
import { ValidationAware } from "./ValidationAware"

export abstract class DomainEntity implements ValidationAware {
    
    abstract validators() : Notification[]

    get notifications() : Notification[] {
        return [].concat(this.validators())
    }

    isValid(): boolean {
        return this.notifications
        .filter( notification => { return notification.value })
        .length === 0
    }
    
}