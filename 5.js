
function primeCheck (num){
    if (num < 2){
        return "not prime";
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++)

    if(num % i === 0){
        return "not prime";
    } 
    else{
        return "prime";
    }
}
console.log(primeCheck(6));