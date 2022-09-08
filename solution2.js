function patternPrinting(N) {
    // Write code here
    for(i=1; i<=N; i++){
        bag="";
        for(j=1; j<=i; j++){
            bag=bag+"*";
        }
        console.log(bag);
    }
}
