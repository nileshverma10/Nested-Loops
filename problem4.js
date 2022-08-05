//Problem 2: Print Prime Numbers from 1 to given limi

let num=5;
 let count=0;
for(let i=1;i<=num; i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  console.log("Number is prime");
}else{
  console.log("Number is not prime");
}