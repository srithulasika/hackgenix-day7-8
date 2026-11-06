//Write a function that flattens a nested array like 1, 2], [3, [4].

function flattenArray(arr){
    const result=[];
    for(const num of arr){
        if(Array.isArray(num)){
            result.push(...flattenArray(num));
        }
        else{
            result.push(num);
        }
    }
    return result;
}

const arr = [1, 2, [3, [4, 5], 6], 7];
console.log(flattenArray(arr));

