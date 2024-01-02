
// function myFunction(a,b){
//     let min = Math.min(a,b);
//     let hcf = 1;
//     for(let i = 1; i<= min;i++){
//         if(a%i===0 && b%i===0){
//             hcf = i;
//         }
//     }
//     return hcf
    
// }
const gcdA = (a,b) => {
    if(b===0) return a;
    
    return gcdA(b , a%b)
}

function gcdOfArr(arr){
    let gcd = 0
    for(let i=0;i<arr.length;i++){
        gcd = gcdA(gcd,arr[i])
    }
    return gcd
}
console.log(gcdOfArr([12,4,8,36]));