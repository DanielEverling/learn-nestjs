import { Notification } from "../domain/Notification";

declare global {
    interface String {
        isEmpty(message: string): Notification;
    }

    interface Array<T> {
        toJson() : string
    }
}


String.prototype.isEmpty = function (message: string) : Notification {
    if (this.length === 0) {
        return Notification.of(message);
    }
    return Notification.empty()
}


Array.prototype.toJson = function () : string {
    return JSON.stringify(this)
}