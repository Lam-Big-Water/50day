//  Translate border-left-width to borderLeftWidth
const camelize = (str) => {
    return str
    .split('-')
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
};

alert(camelize('a-b-c')); //  aBC

//  Filter range
const filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); //  5,3,8,1 (not modified)

// Filter range "in place"

const filterRangeInPlace = (arr, a, b) => {
    
    for (let i = 0; i < arr.lenght; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
} 

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); //[3, 1]