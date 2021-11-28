const bubbleSort = (inputArray) =>{
    let n = inputArray.length;
    let i, j,temp;
    for(i =0; i<n; i++){
        for(j=0; j < n-1; j++){
            //Swapping the Elements
            if(inputArray[j] > inputArray[j+1]){
                temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1] = temp;
            }

        }
    }
    return inputArray;
}
const inputArray = [5,2,8,6,3,9,15,10];
bubbleSort(inputArray);
console.log(inputArray);
