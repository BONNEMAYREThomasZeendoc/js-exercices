import faker from 'faker';

export default function x3() {
    const dico = {};

    for (let i = 0; i < 30; i++) {
        const id = faker.datatype.uuid();
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            city: faker.address.cityName(),
            country: faker.address.country(),
            accountChecked: faker.datatype.boolean(),
        }
        dico[id] = user;
    }

    console.log(dico);
}

