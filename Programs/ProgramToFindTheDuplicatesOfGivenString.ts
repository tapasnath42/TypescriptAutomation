// Duplicates of given string

let strr = "hello how all are you all ";
let map1 = new Map();
let arr1 = Array.from(strr.split(" "));

for(let i=0; i<arr1.length; i++){
  if(map1.has(arr1[i])){
    map1.set(arr1[i], map1.get(arr1[i])+1);
  }else map1.set(arr1[i], 1);
}

//console.log(map);

map1.forEach((value, key) => {
  if(value===2){
    console.log(key +" : " + value);
  }
});