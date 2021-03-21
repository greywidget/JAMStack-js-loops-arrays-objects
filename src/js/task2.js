// Define an Array of my favourite foods.
// Print some to the screen.

function chooseRandomFoodItem() {

    var favouriteFoods = [
        "Chicken Balti (HOT)",
        "Roast Leg of Lamb",
        "Pork Belly",
        "Lamb Koftas",
        "Pil Pil Prawns"
    ];

    var randomChoice = favouriteFoods[Math.floor(Math.random() 
        * Math.floor(favouriteFoods.length))];

    document.getElementById('js-output').innerHTML = randomChoice;
}
