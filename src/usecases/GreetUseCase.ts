import { GreetResponse } from "../boundary/ds/response/GreetResponse";
import { Response } from "../boundary/ds/response/Response";
import { UseCase } from "../boundary/UseCase";
import { GreetRepository } from "../repository/GreetRepository";
import {inject, injectable} from "tsyringe";
import { GreetRequest } from "../boundary/ds/request/GreetRequest";

@injectable()
export class GreetUseCase implements UseCase {

    constructor(@inject("GreetRepository") private greetRepository:GreetRepository){}

    execute(request: GreetRequest): Response {
        let response = new GreetResponse();
        response.greeting = this.greetRepository.findGreetById(request.name);
        return response;
    }
}