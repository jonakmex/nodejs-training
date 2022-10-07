import {Request} from './ds/request/Request';
import {Response} from './ds/response/Response';

export interface UseCase {
    execute(request:Request) : Response;
}