var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var length = ingredients.length;
var iterator = 0;
while (iterator < length){
	console.log(ingredients[iterator]);
	iterator = iterator + 1;
}

for (i = 0; i < length; i++){
	console.log(ingredients[i]);
}

for (i = 0; i < length; i++){
	console.log(ingredients[length - (i + 1)]);
}