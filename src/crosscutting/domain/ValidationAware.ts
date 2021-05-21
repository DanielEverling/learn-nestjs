import { Notification } from "./Notification";

export interface ValidationAware {
    validators() : Notification[]
}