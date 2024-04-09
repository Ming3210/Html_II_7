function checkFalsely(obj:any){
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    console.log(obj);
    
}

let objB:{
    a:null,
    b:boolean,
    d:number,
    c:string
        } = {
    d:1231323,
    a:null ,
    b:true,
    c:"a"
}
checkFalsely(objB)
// console.log(checkFalsely(objB) );
