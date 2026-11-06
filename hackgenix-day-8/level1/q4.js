//Print every item of an array using for, for...of and forEach.

//using for

console.log("Using for");
const fruits=["Apple","Banana","Grapes","Orange","Watermelon"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// using for...of

console.log("Using for...of");
for(const fruit of fruits){
    console.log(fruit);
}

//using forEach

console.log("Using forEach()");
fruits.forEach(fruit1 => console.log(fruit1));