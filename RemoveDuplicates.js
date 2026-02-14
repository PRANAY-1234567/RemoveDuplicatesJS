function RemoveDuplicate(arr){
    return [...new Set(arr)];
}
console.log(RemoveDuplicate([1,2,3,4,5,4,3,5,3]));