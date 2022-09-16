function detectPalindrome(num){
    //write code here
   let number= num+"";
   let bag="";
   for(i=number.length-1; i>=0; i--){
       bag=bag+number[i];
   }
   if(number==bag){
       console.log("Yes");
   }else{
       console.log("No");
   }
}
