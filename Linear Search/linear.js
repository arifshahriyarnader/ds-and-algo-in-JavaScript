let number = [5,9,10,11,20,30,15];
let value = prompt("Enter The Number: ");
let position = -1;

for(i = 0; i < 7; i++){
    if(value == number[i]){
        position = i+1;
        break;
    }
}
if(position == -1){
    console.log("Not Found");
}
else{
    console.log(`The number is found and the position number is  ${position} `);
}
