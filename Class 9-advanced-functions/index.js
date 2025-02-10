//Exercise 1

// function applyDiscount(prices, callback) {
//     const discountedPrices = prices.map(callback);
//     console.log("Final Prices:", discountedPrices);
// }


// function discount(price) {
//     return price * 0.8;
// }


// const prices = [100, 200, 300, 400];
// applyDiscount(prices, discount);



//Exercise 2

// const squareAndPrint = (numbers) => {

//     const squared = numbers.map((number) => number * number);
//     console.log(squared);
// }


// squareAndPrint([5,9,3,5,8,])


//Exercise 3

const reversedArray = (numbers) => {
    let reverse = numbers.reverse()
    console.log(reverse);

}

reversedArray([10, 20, 30, 40, 50]);

//Exercise 4
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

