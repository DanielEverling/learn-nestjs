
import { Notification } from '@crosscutting/domain/Notification';
import { CPF } from '@crosscutting/domain/valueobjects/CPF';
import { Person } from "@base/person/application/domain/Person"

describe('Should test the domain person', () => {

    test('should create a person with success', () =>  {
        const person = Person.create('Daniel', CPF.of('63948511080')) as Person  
        
        expect(person.name).toEqual('Daniel')
        expect(person.document).toEqual(CPF.of('63948511080'))
    })

    test('should validate with empty fields', () =>  {
        const notifications = Person.create('', CPF.of(''))
        const expectedNotifications = [
            Notification.of('Name is required.'), 
            Notification.of('Document is required.')
        ]
        expect(notifications).toEqual(expectedNotifications)
    })
    
})