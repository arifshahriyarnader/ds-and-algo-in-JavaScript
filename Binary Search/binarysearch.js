let numberArray =[1,4,5,6,7,8,15,18,20,22,24,30,35,38,40,42,45,47,50,55];
let low_index = 0;
let high_index = 19;
let mid_index;
let num = 8;

while(low_index <= high_index){
    mid_index = Math.floor((low_index + high_index) / 2);
    if(num == numberArray[mid_index]){
        break;
    }
    if(num < numberArray[mid_index]){
        high_index = mid_index - 1;
    }
    else{
        low_index = mid_index + 1;
    }
}
if(low_index > high_index){
    console.log("Element not Found");
}
else{
    console.log("Element found");
}


