const insertionSort = (inputArray) =>{
    let n = inputArray.length;
    let i,j,item;
    for(i=1; i<n; i++){
        item = inputArray[i];
        j = i-1;
        while(j >=0 && inputArray[j] > item){
            inputArray[j+1] = inputArray[j];
            j = j-1;
        }
        inputArray[j+1] = item;
    }
    return inputArray;
}
const inputArray = [4,2,3,5,9,7,8,6,15,12,20,18];
insertionSort(inputArray);
console.log(inputArray);