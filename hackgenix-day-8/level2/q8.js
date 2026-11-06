//Count how many times each word appears in a sentence, using an object.

const sentence = "apple banana apple orange banana apple";

const words=sentence.split(" ");
const result={};
for(const word of words){
    if(result[word]){
     result[word] = result[word] + 1;
    }
    else{
    result[word] = 1;
    }
}
console.log(result);