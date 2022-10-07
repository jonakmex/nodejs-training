import { UseCase } from "../../../src/boundary/UseCase";
import { UseCaseFactory } from "../../../src/factory/UseCaseFactory";
import { GreetUseCase } from "../../../src/usecases/GreetUseCase";

export class UseCaseFactoryMock implements UseCaseFactory{
    make(useCaseName: string): UseCase {
        return new GreetUseCase();
    }
}