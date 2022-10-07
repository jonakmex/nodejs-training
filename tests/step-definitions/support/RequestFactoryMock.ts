import { GreetRequest } from "../../../src/boundary/ds/request/GreetRequest";
import { Request } from "../../../src/boundary/ds/request/Request";
import { RequestFactory } from "../../../src/factory/RequestFactory";

export class RequestFactoryMock implements RequestFactory{
    make(requestName: string, params: Map<string, any>): Request {
        return this.makeGreetRequest(params);
    }

    private makeGreetRequest(params: Map<string, any>): Request {
        let request = new GreetRequest();
        request.name = params.get('name');
        return request;
    }
}