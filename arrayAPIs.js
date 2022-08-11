const lang = ['C', 'C++', 'Python', 'Java', 'J S'];
lang[5] = 'HTML'; // add the element into array at the given index
lang.push('Scala'); // add the element at the end of the array
lang.unshift('CSS'); // add the element at  start of the array
lang.pop();          // it will remove the element from the array
console.log(Array.isArray(lang)); //it return true if it is a array
console.log(lang.indexOf('J S')); //it gives index of perticular element in the array
console.log(lang);