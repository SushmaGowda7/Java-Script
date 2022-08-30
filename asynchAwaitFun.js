console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const movie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrinks`));
    
    let ticket = await promiseWifeBringingTicks;

    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no im hungry');

    // let popcorn = await getPopcorn;

    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await getButter;

    // console.log(`husband: i got some ${butter} on popcorn`);
    // console.log('husband: shall we go in?');
    // console.log('wife: I need cold drinks');

    // let ColdDrinks = await getColdDrinks;

    // console.log(`husband: i got some ${ColdDrinks}`);
    // console.log('husband: Anything else darling');
    // console.log('wife: Lets go we are getting late');
    // console.log('husband: Thank you for the remainder *Grins*');
   
    //Promise.all

    let[popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks])

    console.log(`${popcorn}, ${butter}, ${coldDrinks}`);
    return ticket;
}

movie().then((m) => console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');


