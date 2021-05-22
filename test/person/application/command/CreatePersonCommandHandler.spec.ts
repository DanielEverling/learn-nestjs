import { EventPusblisher } from "@base/crosscutting/domain/events/EventPusblisher"
import { Notification } from "@base/crosscutting/domain/Notification"
import { CreatePersonCommand } from "@base/person/application/command/CreatePersonCommand"
import { CreatePersonCommandHandler } from "@base/person/application/command/CreatePersonCommandHandler"
import { PersonRepository } from "@base/person/infrastructure/repository/PersonRepository"

describe('Should test the created person command handler', () => {

    const personRepository: PersonRepository = jest.createMockFromModule("@base/person/infrastructure/repository/PersonRepository")
    const eventPublisher: EventPusblisher = jest.createMockFromModule("@base/crosscutting/domain/events/EventPusblisher")
    const createPersonCommandHandler: CreatePersonCommandHandler = new CreatePersonCommandHandler(personRepository, eventPublisher)

    it('should proccess command with success', () => {
        personRepository.save = jest.fn()
        eventPublisher.publish = jest.fn()
        const createPersonCommand = new CreatePersonCommand("Renato Portaluppi", "01291813112")
        createPersonCommandHandler.handler(createPersonCommand)

        expect(personRepository.save.call.length).toBe(1)
        expect(eventPublisher.publish.call.length).toBe(1)
    })

    it('should throw exception when command is not valid', () => {
        const createPersonCommand = new CreatePersonCommand("", "")
        try {
            createPersonCommandHandler.handler(createPersonCommand)
        } catch (error) {
            const expectedNotifications = [
                Notification.of('Name is required.'),
                Notification.of('Document is required.')
            ]
            const receivedNotifications = error.notifications as Notification[]
            expect(JSON.stringify(receivedNotifications)).toBe(JSON.stringify(expectedNotifications))
        }
    })
})