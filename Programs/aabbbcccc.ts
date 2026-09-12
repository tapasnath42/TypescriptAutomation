const inputString = "aabbbccccdd";
let compressedString = "";
let currentCount = 1;

for (let i = 0; i < inputString.length; i++) {
  const currentChar = inputString.charAt(i);
  const nextChar = inputString.charAt(i + 1);

  if (nextChar === currentChar) {
    currentCount++;
    continue;
  }

  compressedString += currentChar + currentCount;
  currentCount = 1;
}

console.log(compressedString);