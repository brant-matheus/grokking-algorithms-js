//generating a sorted array from 1 up to size list.
let sorted_array = []
let size = 101
for (let i = 1; i < size; i++){
    sorted_array.push(i)
}


//binary search function. 
function binarySearch(array, item){
    //positions
    let low = 0;
    let high = (array.length) - 1;

    while(low <= high){
        let mid = parseInt((low + high) / 2) //mid index array.
        let guess = array[mid] //value of array.

        if (guess === item){
            return mid
        }

        else if (guess > item){
            high = mid -1
        }

        else {
            low = mid +1
        }
    }

    return null //item not in list
}
