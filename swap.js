let a=7;
let b=17;
//[a,b] = [b,a];
a = a^b;
b = a^b;
a = a^b;
console.log(a);
console.log(b);