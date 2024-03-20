import { faker } from '@faker-js/faker';

export class UserModel {
    private firstname: string;
    private lastname: string;
    private email: string;
    private password: string;

    constructor() {
        this.firstname = faker.person.firstName();
        this.lastname = faker.person.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

    public setFirstname(): string {
        return this.firstname;
    }

    public setLastname(): string {
        return this.lastname;
    }

    public setEmail(): string {
        return this.email;
    }

    public setPassword(): string {
        return this.password;
    }
}
