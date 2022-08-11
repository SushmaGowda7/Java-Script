const person = {
    firstName: 'Sushma',
    lastName: 'Gowda',
    age: 23,
    hobbies:['music', 'movies', 'sports'],
    adress:{
        street:'57 main',
        city: 'Malur',
        state: 'Karnataka'
    }
}
console.log(person.hobbies[1]);
console.log(person.adress.state);
const {age, adress: { state }} = person;
console.log(age);
console.log(state);