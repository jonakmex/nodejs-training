import { Request } from "../boundary/ds/request/Request";

export interface RequestFactory {
   make (requestName:string,params:Map<string,any>):Request;
}