let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().
str.split();
console.log(str);
str.split('e');
console.log(str);
str.split(" ");
console.log(str);
str.split("");
console.log(str);

arr.join();
console.log(arr);
arr.join("a");
console.log(arr);
arr.join(" ");
console.log(arr);
arr.join("");
console.log(arr);
//b) Use the join method on the array to identify the purpose of the parameter inside the ().
str.join;
console.log(str);

//c) Do split or join change the original string/array?

//not visually

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
splitArray = cargoHold.split(',');
console.log(splitArray);
cargoHold = splitArray.sort().join();
console.log(cargoHold);