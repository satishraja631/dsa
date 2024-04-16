const sort=(array)=>{

    let temp;
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                temp=array[j];
                array[j]=array[j+1]
                array[j+1]=temp;
            }
        }
    }
    console.log(array);
}

sort([5,4,3,2,1]);