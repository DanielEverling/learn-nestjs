import { Person } from "src/person/application/domain/Person";
import { EntityManager, EntityRepository } from "typeorm";
import { PersonSchema } from "./PersonSchema";

@EntityRepository(PersonSchema)
export class PersonRepository {

    constructor(private entityManager : EntityManager) { }

    save(person: Person) {
        this.entityManager.save(PersonSchema, person)
    }

}