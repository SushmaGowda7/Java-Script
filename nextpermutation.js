function nextPermutation(n,arr){
    if(n==1)
    {
        return arr;
    }
    let i=0;
    for(i=n-1; i>0; i--)
    {
        if(arr[i] > arr[i-1])
        break;
    }
    if(i!=0)
    {
    for(let j=n-1; j>=i; j--)
    {
        if(arr[i-1] < arr[j])
        {
            let temp = arr[i-1];
            arr[i-1] = arr[j];
            arr[j] = temp;
            break;
        }
    }
    
    }
    arr = arr.slice(0,i).concat(arr.slice(i,arr.length).reverse());
    return arr;
}
let v = [3,2,1];
let n = 3;
let res = nextPermutation(n,v);
for(let i=0; i<res.length;i++)
{
    console.log(res[i]+"");
}