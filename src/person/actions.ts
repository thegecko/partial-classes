import { Person } from './';

export class PersonActions {
    public talk(this: Person) {
        console.log(`${this.name} says hi`);
    }
}
