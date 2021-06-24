import { Person } from './';

export class PersonChars {
    public weight(this: Person) {
        console.log(`${this.name} needs to miss a meal or two`);
    }
}
