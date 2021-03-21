// Define an Array of my favourite foods.
// Print all of them to the screen.

function listFoodItems() {

    var favouriteFoods = [
        "Chicken Balti (HOT)",
        "Roast Leg of Lamb",
        "Pork Belly",
        "Lamb Koftas",
        "Pil Pil Prawns"
    ];

    var outStr = "<ul>";

    for (i = 0; i < favouriteFoods.length; i++) {
        outStr += "<li>"
               + favouriteFoods[i]
               + "</li>"
    }

    outStr += "</ul>"

    document.getElementById('js-output').innerHTML = outStr;
}
