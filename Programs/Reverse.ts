let arr = [4,2,9,5,7,3,6];

arr.sort((a, b) => a - b);

arr.forEach((value) => {
    if(value%2===0){
        console.log(value);
        
    }
});

let arr1 = ['a','c','b', 'e'];
console.log(arr1.sort().reverse());

let str = "Automation";
const al = Array.from(str.toLowerCase().split(""));
let newstr = "";
for(let i=al.length-1; i>=0; i--){
    newstr += al[i];
}
console.log(newstr);


console.log(str.toLowerCase().split("").reverse().join(""));




//console.log(arr);



// node Programs/FirstProgram.ts
