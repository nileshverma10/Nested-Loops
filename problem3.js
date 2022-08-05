//Problem 1: Print the Calendar date in the below format

for(let i=1;i<=12; i++){
  let day =31;
  if(i==2){
    day=28;
  }else if(i==4 || i==6 || i==9 || i==11){
    day=30;
  }
  for( let j=1; j<=day; j++){
    console.log(i, "------", j);
  }
}