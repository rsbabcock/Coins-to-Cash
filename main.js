
// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.

// quarters
// nickels
// dimes
// pennies
// For each coin type, give yourself as many as you like.

// // I like pennies
// const piggyBank = { pennies: 342 }
// let dollarAmount = 0
// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

// When done, output the value to the browser console.

// For example, if my piggy bank only held those pennies from above, when I type the variable name of dolllarAmount into the console, the output would be.

// > dollarAmount
// $3.42

const piggyBank = {
    pennies: 200,
    nickels: 15,
    dimes: 30,
    quarters: 50
}
let dollarAmount = () => {
    // 100 pennies go into 1 dollar, so 200 pennies would be $2.00
    const pennyVal = piggyBank.pennies * .01;
    // 20 nickels go into 1 dollar, so 15 nickes would be .75
    const nickelVal =piggyBank.nickels * .05;
    // 10 dimes go into 1 dollar, so 30 dimes would be $3.00
    const dimeVal = piggyBank.dimes * .10;
    // 4 quarters go into 1 dollar, so 50 quarters would be $12.50
    const quarterVal = piggyBank.quarters * .25;

    let sum = pennyVal + nickelVal + dimeVal + quarterVal;

    if(sum > .99) {
        return '$' + sum;
    } else sum + ' cents'
        
}

console.log(dollarAmount());