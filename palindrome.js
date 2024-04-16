function palindrome(word){
    const array=word.split("");
    let compare="";
    
    for(let i=array.length-1;i>=0;i--){
         compare+=array[i]
    }
    return compare===word;
    
}

console.log(palindrome("madam"));