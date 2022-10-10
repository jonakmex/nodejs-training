import { UseCase } from "../../../src/boundary/UseCase";
import { UseCaseFactory } from "../../../src/factory/UseCaseFactory";
import { GreetUseCase } from "../../../src/usecases/GreetUseCase";
import "reflect-metadata";
import {container} from "tsyringe";

export class UseCaseFactoryMock implements UseCaseFactory{
    make(useCaseName: string): UseCase {
        return container.resolve(GreetUseCase);
    }
}