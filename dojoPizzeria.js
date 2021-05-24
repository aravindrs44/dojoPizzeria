function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    console.log(pizza);
    return pizza;
}

var crust = ["deep dish", "traditional", "hand tossed", "pan", "thin crust", "brooklyn style"];
var cheese = ["mozzarella", "feta"];
var sauce = ["marinara", "alfredo", "garlic parmesan", "tomato", "bbq", "ranch"];
var toppings = ["olives", "jalapenos", "pineapple", "mushrooms", "onions", "diced tomatoes", "pepperoni", "sausage", "ham", "beef", "salami", "chicken", "bacon", "philly steak", "banana peppers", "green peppers", "spinach", "roasted"];


function randomPizza () {
    var pizzaRand = {};
    pizzaRand.crustType = crust[Math.trunc(Math.random() * 5)];
    pizzaRand.sauceType = sauce[Math.trunc(Math.random() * 5)];
    pizzaRand.cheeses = cheese[Math.trunc(Math.random() * 1)];
    pizzaRand.toppings = [toppings[Math.trunc(Math.random() * 17)], toppings[Math.trunc(Math.random() * 17)], toppings[Math.trunc(Math.random() * 17)]];

    console.log("Your random pizza is: ");
    console.log(pizzaRand);
    return pizzaRand;
}

    var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
    var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
    var famfavorite = pizzaOven("pan", "marinara", ["mozzarella"], ["diced tomatoes", "jalapenos","pineapple"]);
    var notfavorite = pizzaOven("pan", "marinara", ["mozzarella"], ["olives", "onions", "diced tomatoes"]);
    var myPizza = randomPizza();

