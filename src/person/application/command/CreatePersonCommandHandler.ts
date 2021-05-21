import { Injectable } from '@nestjs/common'
import { CreateUserEvent } from 'src/crosscutting/domain/events/CreateUserEvent';
import { EventPusblisher } from 'src/crosscutting/domain/events/EventPusblisher';
import { CPF } from "src/crosscutting/domain/valueobjects/CPF"
import { DomainInvalidException } from 'src/crosscutting/exception/DomainInvalidException';
import { PersonRepository } from 'src/person/infrastructure/repository/PersonRepository';
import { Person } from "../domain/Person";
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