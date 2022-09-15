function reverseTheValue(num) {
    // Write code here
    let bag="";
    let number= num+"";
    for(i=number.length-1; i>=0; i--){
        bag=bag+number[i];
        
    }
    console.log(bag);
}
