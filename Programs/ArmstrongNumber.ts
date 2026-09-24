// Armstrong number

let num = 111;
let total = 0;

let count:number = String(num).length;
console.log(count);

while(num>0){
  let n:number = num%10;
  total += Math.pow(n, count);
  num = num/10;
}

console.log(total);