// Capitalized letters

let str3 = "AutomatiON";
let arr2 = [];

for(let i=0; i<str3.length; i++){

  let ch = str3.charAt(i);

  if(/[A-Z]/.test(ch)){
    //console.log(ch);
    arr2.push(ch);
  }
}

console.log(arr2);
console.log(arr2.length);