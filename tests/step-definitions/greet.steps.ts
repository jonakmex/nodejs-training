import {Before,Given, When, Then} from '@cucumber/cucumber';
import { assert } from 'chai';
import { RequestFactoryMock } from './support/RequestFactoryMock';
import { UseCaseFactoryMock } from './support/UseCaseFactoryMock';

Before(function () {
   let useCaseFactory = new UseCaseFactoryMock(); 
   this.usecase = useCaseFactory.make("GreetUseCase");
   this.requestFactory = new RequestFactoryMock();
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