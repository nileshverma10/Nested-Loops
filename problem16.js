function checkVowel(N, str) {
  //write code here
  let flag="false";
  for(i=0; i<=str.length-1; i++){
      if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
          flag="true";
      }
  }
  if(str[i]==true){
      console.log("true");
  }else{
      console.log("false");
  }
  
}
