import { CPF } from "../valueobjects/CPF";

export class CreateUserEvent {
    constructor(readonly id: string, readonly name: string, readonly document: CPF) {
    }
}