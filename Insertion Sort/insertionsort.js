const insertionSort = (inputArray) =>{
    let n = inputArray.length;
    let i, j, item;
    for(i =1; i<n; i++){
         item = inputArray[i];
         j = i-1;
         while(j >= 0 && inputArray[j] > item){
             inputArray[j+1] = inputArray[j];
             j = j-1;   
         }
         inputArray[j+1] = item;
    }  
    return inputArray;
}
const inputArray=[3,44,38,2,45,42,48,47,49,40,50];
insertionSort(inputArray);
console.log(inputArray);