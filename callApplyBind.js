// //Q1CALL
// var obj = {num:7};

// var product = function(a,b,c)
// {
//     return this.num * a * b * c;
// };

// var call = product.call(obj, 1,2,3);
// console.log(call);

// //Q2APPLY
// var arr = [1,2,3];

// var apply = product.apply(obj, arr);
// console.log(apply);

// //Q3BIND
// var bound = product.bind(obj);
// console.log(bound(1,2,3));

//Q4
var student = {age:20};

var studentFun = function()
{
    return this.age;
};

var bound1 = studentFun.bind(student);
console.log(bound1(this.age));