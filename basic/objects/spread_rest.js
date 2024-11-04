// spread operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

const fruit_berries = [...fruits, ...berries]; //concat 

console.log(fruit_berries);

// Join object
const flying = {wings: 2}
const car = {wheel: 4}
const flyingCar = {...flying, ...car};
console.log(flyingCar)

//Add new members to arrays without using the push() method 

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'beetroot','carrot']
console.log(veggies);

//Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayGreeting = [...greeting];
console.log(arrayGreeting);

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 100;
console.log(car1.speed, car1.color, car2.speed);
console.log(car2);


const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
fruits2.push('mango')
console.log(fruits1, "-----", fruits2)


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

//========================\

let obj = {
    key: 1,
    value: 4
};
let output = { ...obj };
output.value -= obj.key;
console.log(output.value);

//=========================

function count(...basket) {
    basket.forEach(argument => {console.log("helooooo ",argument)})
    console.log(basket.length)
}
count(10, 9, 8, 7, 6);
