let length1: number = 0
function checkPrime(arr: number[]): boolean {
    for(let i=0; i<arr.length; i++){
        let count : number = 0  
        for(let j = 1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++
            }
        }
        if(count==2){
            arr5.push(arr[i])
            length1++
        }
    }
    if(length1==arr.length) return true
    else return false
    
}
let arr5: number[] =[]
console.log(checkPrime([2,3,7])
);


