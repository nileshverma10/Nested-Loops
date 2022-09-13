function playingWithArray(N, arr){
    // Write your code here! 
           let x=0;
       for(i=0; i<=arr.length-1; i++){
           if(arr[i]%2==0){
               x=x+arr[i];
              // console.log(x);
           }
       }
       let y=0;
         for(j=0; j<=arr.length-1; j++){
           if(arr[j]%2!=0){
               y=y+arr[j];
              // console.log(y);
           }
       }
       let pro=x*y;
       console.log(pro);
    }