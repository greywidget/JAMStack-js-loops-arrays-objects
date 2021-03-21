// while loop
var bottlesOfBeer = 99;

while (bottlesOfBeer > 0) {
    console.log(bottlesOfBeer + 'bottles of beer on the wall');
    bottlesOfBeer = bottlesOfBeer -1
}

// for loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// for loop with additional logic
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}

// using break to exit a loop
for (var i = 1; i <= 100; i++) {
    console.log('Testing ' + i);

    if (i % 7 === 0) {
        console.log('Found it!' + i);
        break;
    }
}