function removeFromArray(array, ...args) {
    // LOOP OVER THE ARGUMENTS
    for (const arg of args) {
        // LOOP OVER THE ARRAY
        for (const item of array) {
            // GET THE INDEX OF THE CURRENT ARRAY ITEM
            let index = array.indexOf(item)
            // IF THE CURRENT ARRAY ITEM MATCHES THE CURRENT ARGUMENT
            if (item === arg) {
                // STARTING FROM THE CURRENT INDEX, REMOVE 1 ITEM
                array.splice(index, 1)
            }
        }
    }
    return array
}


// Do not edit below this line
module.exports = removeFromArray;
