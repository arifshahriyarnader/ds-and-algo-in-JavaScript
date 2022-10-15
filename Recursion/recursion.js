 function recursionFactorial(num){
        if(num ==1){
          //base case
            return 1;
        }
        else{
          return num*recursionFactorial(num-1);
        }
 }
 const result = recursionFactorial(5);
 console.log(result);
