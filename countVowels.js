const countVowels=(string)=>{
    let count =0;
    let vowels="AaEeIiOoUu";
    for(i=0;i<string.length;i++){
        if(vowels.includes(string.charAt(i))){
            count++;
        }
    }
    console.log(count);
}

countVowels("Germany");
countVowels("Phillipines");