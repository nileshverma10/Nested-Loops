function twoPrimes(a,b) {
    //write code here
    isPrime(a,b)
}
    
function isPrime(num){
       let count=0;
    for(i=1;i<=num; i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("True");
    }else{
        console.log("False");
    } 
}
