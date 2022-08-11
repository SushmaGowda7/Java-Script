function getMin(A,N){
    let res = A[0];
    for(let i=1;i<N; i++)
        res = Math.min(res,A[i]);
        return res;
}
function getMax(A,N){
    let res = A[0];
    for(let i=1;i<N; i++)
        res = Math.max(res,A[i]);
        return res;
}
function findSum(A,N){
    let min= getMin(A,N);
    let max= getMax(A,N);
    return min+max;
}
let A=[1,2,3,4,-1];
let N=A.length;
console.log(findSum(A,N));
