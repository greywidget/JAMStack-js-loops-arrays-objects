// Create an object to hold a Recipe.
// Output the Details

function listRecipe() {

    var recipe = {
        title: 'Easy No Knead Bread',
        serves: 4,
        ingredients: [
            "450g all-purpose flour",
            "2tsp active dry yeast",
            "1½tsp sea salt",
            "350ml warm water (40°C)"
        ],
        directions: [
            "Combine the flour, yeast and salt in a large bowl and stir to combine",
            "Add the water and mix until the dough forms a ball",
            "Cover the bowl with plastic wrap and a damp tea towel",
            "Let the dough sit covered at room temperature for 18-24 hours",
            "Place a 2.4L lidded oven dish in the oven and pre-heat to 220°C",
            "While oven is pre-heating, transfer dough to a floured surface",
            "Form the dough into a rough ball. It is a wet mix and will be floppy",
            "Carefully remove the oven dish and sprinkle a little flour on the bottom",
            "Gently put the dough ball into the oven dish so it is evenly distributed",
            "Cover and cook for 30 minutes",
            "Remove the lid and cook for a further 15 minutes or until golden brown"
        ]
    };

    var outStr = `<h3 class="text-danger">${recipe.title} (serves ${recipe.serves})</h3>`;

    outStr += `<h4 class="pt-1">Ingredients</h4>`;

    for (i = 0; i < recipe.ingredients.length; i++) {
        outStr += "<li>"
               + recipe.ingredients[i]
               + "</li>"
    }

    outStr += "</ul>"

    outStr += `<h4 class="pt-3">Directions</h4>`;

    for (i = 0; i < recipe.directions.length; i++) {
        outStr += "<li>"
               + recipe.directions[i]
               + "</li>"
    }

    outStr += "</ul>"

    document.getElementById('js-output').innerHTML = outStr;
}
