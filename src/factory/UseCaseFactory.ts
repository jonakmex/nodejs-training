import { UseCase } from "../boundary/UseCase";

export interface UseCaseFactory {
    make(useCaseName:string):UseCase;
}