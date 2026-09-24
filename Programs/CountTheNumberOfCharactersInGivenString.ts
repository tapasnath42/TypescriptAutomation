// Duplicates of given string

let str = "automation";
let map = new Map();
let arr = Array.from(str.split(""));

for(let i=0; i<arr.length; i++){
  if(map.has(arr[i])){
    map.set(arr[i], map.get(arr[i])+1);
  }else map.set(arr[i], 1);
}

//console.log(map);

map.forEach((value, key) => {
  if(value===2){
    console.log(key +" : " + value);
  }
});