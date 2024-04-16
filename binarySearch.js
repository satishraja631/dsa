const binarySearch=(array,x)=>{
    let first=0;
    let last=array.length-1;
    let mid;

    while(first<=last){
        mid=first+(last-first)/2
        if(array[mid]==x){
            return mid;
        }

        else if(array[mid]<x){
            first=mid+1;
        }
        else if(array[mid]>x){
            last=mid-1;
        }
        
    }
    return -1;
}

const result=binarySearch([5,4,6,8,2,1,9],9);
console.log(result);