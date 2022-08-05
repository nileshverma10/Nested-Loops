//Problem 3: Print a box patterns using *

for(j=1; j<=10; j++){
 let bag="";
for(i=1; i<=10; i++){
  if(j==1 || j==10){
    bag=bag+"*";
  }else{
    if(i==1|| i==10){
     bag=bag+"*";
    }else{
      bag=bag+" ";
    }
  }
  
 
}
   console.log(bag);
}
