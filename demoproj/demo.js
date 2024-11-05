// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    
    dishData.forEach(element => {
        let finalPrice;
        if (taxBoolean) {
            finalPrice = element.price * tax;
        } else if (!taxBoolean) {
            finalPrice = element.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
        console.log(`Dish: ${element.name} Price: $${finalPrice}`)
    });
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    // console.log('isnum', isNumber(guests));
    // console.log('range', isValidRange(guests));
    if (isNumber(guests) && isValidRange(guests)) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: $${discount}`);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

function isNumber(guests) {
    return typeof guests === 'number';
}
function isValidRange(guests) {
    return guests > 0 && guests < 30;
}
// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
