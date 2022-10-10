import { GreetRepository } from "../../../src/repository/GreetRepository";

export class GreetRepositoryMock implements GreetRepository {
    findGreetById(id: string): string {
        return "Hello World";
    }
}