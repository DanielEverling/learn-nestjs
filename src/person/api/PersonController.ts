import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatePersonCommand} from "../application/command/CreatePersonCommand";
import { CreatePersonCommandHandler} from "../application/command/CreatePersonCommandHandler";

@Controller('persons')
export class PersonController {

    constructor(private createPersonCommandHandler: CreatePersonCommandHandler) {}

    @Post()
    create(@Body() createPersonCommand: CreatePersonCommand): string {
        this.createPersonCommandHandler.handler(createPersonCommand)
        return "Ok"
    }

    @Get(':name')
    findByName(@Param('name') name: string): string {
        return `Person with ${name} not found.`
    }
    
}