import { Request } from "../boundary/ds/request/Request";
import { GreetResponse } from "../boundary/ds/response/GreetResponse";
import { Response } from "../boundary/ds/response/Response";
import { UseCase } from "../boundary/UseCase";

export class GreetUseCase implements UseCase {
    execute(request: Request): Response {
        let response = new GreetResponse();
        response.greeting = "Hello World";
        return response;
    }
}