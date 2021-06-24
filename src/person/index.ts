import { extendClass } from '../util';
import { PersonActions } from './actions';
import { PersonChars } from './characteristics';

export class Person {
    protected name: string;

    constructor (name: string) {
        this.name = name;
    }
}

extendClass(Person, PersonActions);
extendClass(Person, PersonChars);

declare module '.' {
    interface Person extends PersonActions { }
    interface Person extends PersonChars { }
}
