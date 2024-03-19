//create unsorted list

let unsortedList = []
let size = 20;
for (let i =0; i< size; i++){
    let number = Math.floor(Math.random()*100); //array of size itens, random number.
    unsortedList.push(number);
}

//search the lowest index function

function searchLowest(array){
    let lowestNumber = array[0]; //initial value
    let lowestIndex = 0; //initial index

    //check if less or greater of every value inside the array.
    for (i = 1; i < array.length; i++){
        let value = array[i];
        
        if (value < lowestNumber){
            lowestNumber = value;
            lowestIndex = i;
        }
    }

    return lowestIndex //return index. We need the index to use the method slice.
}


function selectionSort(array){
    let sortedArray = [];
    const arrayLength = array.length; //make sure the for loop goes for the var len array.

    if (arrayLength === 0){
        return null //array empty
    }

    for (let i = 0; i < arrayLength; i++){
        
        let lowest = searchLowest(array); //return index
        sortedArray.push(array.splice(lowest,1)[0]); //output the value, remove it from array.

    }

    return sortedArray //sorted array
}


console.log(selectionSort(unsortedList))