//Given a string swap the case and print the output
//Sample Input - Test
//Sample Output - tEST
//NOTE: Use multiple functions to achieve the result, NOT one single code block
let str="Test";
let lower="qwertyuiopasdfghjklzxcvbnm";
let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
let bag="";
for(i=0; i<=str.length-1;i++){
  
  for(j=0; j<=lower.length-1; j++){
    if(str[i]==lower[j]){
      bag=bag+upper[j];
    }else if(str[i]==upper[j]){
      bag=bag+lower[j];
    }
  }
}
 console.log(bag);