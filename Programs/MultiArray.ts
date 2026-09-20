let arr:any[] = [1,"Apple"];
console.log("hello");

arr.forEach((value) => {
    if(typeof value === 'string'){
        console.log(`This is the value ${value}`);
    }
})