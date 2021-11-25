let selectionSort = [5,1,9,3,7,23,21,30,40,55,50,48];
let n = selectionSort.length;
let i, j,index_min,temp;

for(i=0; i<n-1;i++){
    // Finding the smallest number in the array
    index_min =i;
    for(j=i+1; j < n; j++){
        if(selectionSort[j] < selectionSort[index_min]){
            index_min = j;
        }
    }
    if(index_min != i){
        //swapping the elements
        temp = selectionSort[i];
        selectionSort[i] = selectionSort[index_min];
        selectionSort[index_min] = temp;
    }
}
console.log(selectionSort);