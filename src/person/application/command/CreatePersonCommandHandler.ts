import { Injectable } from '@nestjs/common'
import { CreateUserEvent } from '@crosscutting/domain/events/CreateUserEvent';
import { EventPusblisher } from '@crosscutting/domain/events/EventPusblisher';
import { CPF } from "@crosscutting/domain/valueobjects/CPF"
import { DomainInvalidException } from '@crosscutting/exception/DomainInvalidException';
import { PersonRepository } from '@base/person/infrastructure/repository/PersonRepository';
import { Person } from "@base/person/application/domain/Person";
import { CreatePersonCommand } from './CreatePersonCommand';


@Injectable()
export class CreatePersonCommandHandler {

    constructor(private personRepository: PersonRepository, private eventPublisher: EventPusblisher) {}
    
    handler(command: CreatePersonCommand) {
        const newPerson = Person.create(command.name, CPF.of(command.document))

        if (newPerson instanceof Person) {
            this.personRepository.save(newPerson)
            this.eventPublisher.publish('person.created', new CreateUserEvent(newPerson.id, newPerson.name, newPerson.document))
            return
        }
        
        throw new DomainInvalidException(newPerson)
    }
    
}