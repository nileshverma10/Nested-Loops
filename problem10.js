function primeLoopCheck(num){
	//Enter Code Here
    	for(i=2; i<=num; i++){
	    for(j=2; j<=i; j++){
	        if(i%2==0){
	            continue;
	        }
    	        if(i%j==0){
	            break;
	        }
	    }
	
	if(i==j){
	    console.log(j);
	}
	}
   
 }
 
