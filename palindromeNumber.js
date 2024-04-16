function palindrome(num){
    let reverse=0;
    let number=num
    while(number>0){
        let lastDigit=number%10;
        reverse=reverse*10+lastDigit;
        number=Math.floor(number/10);

    }
    
    return reverse===num
}

console.log(palindrome(232));