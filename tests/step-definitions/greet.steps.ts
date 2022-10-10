import {Before,Given, When, Then} from '@cucumber/cucumber';
import { assert } from 'chai';
import { RequestFactoryMock } from './support/RequestFactoryMock';
import { UseCaseFactoryMock } from './support/UseCaseFactoryMock';
import "reflect-metadata";
import {container} from "tsyringe";
import { GreetRepositoryMock } from './support/GreetRepositoryMock';

Before(function () {
   let useCaseFactory = container.resolve(UseCaseFactoryMock); 
   this.requestFactory = container.resolve(RequestFactoryMock); 
   container.register("GreetRepository",{
    useClass : GreetRepositoryMock
   });
   this.usecase = useCaseFactory.make("GreetUseCase");
});

Given('guest user', function () {
    let request = this.requestFactory.make('GreetRequest',new Map<string,any>([
        ["name", ""]
    ]));

    this.request = request;
});

When('User Greets', function () {
    let response = this.usecase.execute(this.request);
    this.greeting = response.greeting;
});

Then('Say Hello World', function () {
   assert.equal(this.greeting, 'Hello World');
});