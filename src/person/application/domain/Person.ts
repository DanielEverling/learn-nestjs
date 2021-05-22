import { DomainEntity } from '@crosscutting/domain/DomainEntity';
import { Notification } from '@crosscutting/domain/Notification';
import { CPF } from '@crosscutting/domain/valueobjects/CPF';
import { v4 as uuid } from 'uuid'

import '../../../crosscutting/extenstion/Extension'

export class Person extends DomainEntity {

    private constructor(readonly id: string, readonly name: string, readonly document: CPF) {
        super();
    }
    
    validators() : Notification[] {
        return [
            this.name.isEmpty('Name is required.'),
            ...this.document.validators()
        ]
    }

    static create(name: string, document: CPF): Notification[] | Person {
        const newPerson = new Person(uuid(), name, document)
        if (newPerson.isValid()) {
            return newPerson
        }
        return newPerson.notifications
    }

}



