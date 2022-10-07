import {Given, When, Then} from '@cucumber/cucumber';
import { assert } from 'chai';
import {Greet} from '../../src/usecases/Greet';

Given('guest user', function () {
    this.usecase = new Greet();
    this.name = '';
});

When('User Greets', function () {
    this.greeting = this.usecase.sayHello('');
});

Then('Say Hello World', function () {
   assert.equal(this.greeting, 'Hello Empty');
});