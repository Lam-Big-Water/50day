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

// Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10

// Copy and sort array 

const copySorted = (arr) => {
    return arr.slice().sort();
}

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

// Create an extendable calculator

function Calculator() {
    
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };

    this.calculator = function(str) {

        let split = str.splice(''),
        a = +split[0],
        op = split[1],
        b = +split[2];

        if(!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let result = Calculator('12 - 2');
alert(result);

// Map to names

let john = {name: 'John', age: 25};
let pete = {name: 'Pete', age: 30};
let mary = {name: 'Mary', age: 28};

let users = [john, pete, mary];

let names = users.map(item => item.name);

alert(names); // John, Pete, Mary

// Map to objects

let john = {name: 'John', surname: 'Smith', id: 25};
let pete = {name: 'Pete', surname: 'Hunt', id: 30};
let mary = {name: 'Mary', surname: 'Key', id: 28};

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert(usersMapped[0].id); // 25
alert(usersMapped[0].fullName); // John Smith

// Sort users by age

const sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// Shuffle an array

const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for(let i = 0; i < 10000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

// Get average age

const getAverageAge = (users) => {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    alert( getAverageAge(arr) ); // 28
}

// Filter unique array members

const unique = (arr) => {
    let result = [];

    for(let str of arr) {
        if(!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let string = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// Create keyed object from array

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
        alert(obj);
    }, {})
}


let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

groupById(users);
