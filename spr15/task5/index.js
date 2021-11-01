// Implement the PizzaMaker class, which allows you to create pizza of different types, with different ingredients, calculate the price and calorie content of pizza.

// The pizza comes in 3 sizes: S, M and L.

// There are 4 types of pizza available: meat, fish, cheese and vegetarian.

// When creating a new pizza, be sure to specify the size and appearance.

// Additional ingredients are available that can be added to the pizza at the customer's request: tomatoes, peppers, bacon and olives.

// Each element that makes up pizza has its own name, price and calorie content. All of this data is contained in the pizzaMenu object.

// The PizzaMaker class has a number of methods for generating pizza:

// - addIngredient(ingredient) method adds an additional ingredient to the pizza. A new ingredient is added if it is not included in the pizza, and the message "ingredient_name has been added" is displayed in the console. If such an ingredient has already been added, the message "Such an ingredient already exists!" Is generated.

// - deleteIngredient(ingredient) method removes the specified ingredient from the list of existing ingredients, displays the message "ingredient_name has been deleted" to the console.

// - getIngredients() method displays a list of the attached ingredients with their name, price, calorie content.

// - getSize() method returns the size of the pizza.

// - getKind() method returns the type of pizza.

// - calculatePrice() method calculates and returns the total cost of a pizza, which consists of the sum of the values ​​of all its components.

// - calculateCalories() method calculates and returns the total calorie content of a pizza, which consists of the sum of the calories of all its components.



// Usage example:

// const pizzaMenu = {
//   SIZE_S: {param: "SIZE_S", price: 60, calorie: 300},
//   SIZE_M: {param: "SIZE_M", price: 90, calorie: 450},
//   SIZE_L: {param: "SIZE_L", price: 110, calorie: 600},
//   KIND_MEAT: {param: "KIND_MEAT", price: 55, calorie: 230}, 
//   KIND_FISH: {param: "KIND_FISH", price: 70, calorie: 150},     
//   KIND_CHEESE: {param: "KIND_CHEESE", price: 50, calorie: 200},    
//   KIND_VEGETARIAN: {param: "KIND_VEGETARIAN", price: 35, calorie: 50},
//   INGREDIENT_TOMATOES: {param: "INGREDIENT_TOMATOES", price: 15, calorie: 5},
//   INGREDIENT_PEPPER: {param: "INGREDIENT_PEPPER", price: 18, calorie: 5},
//   INGREDIENT_BACON: {param: "INGREDIENT_BACON", price: 25, calorie: 40},
//   INGREDIENT_OLIVES: {param: "INGREDIENT_OLIVES", price: 20, calorie: 0}
// };

// // your PizzaMaker class implementation

// const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT); 

// console.log("Size:", pizza.getSize());

// console.log("Kind:", pizza.getKind());

// console.log("calculatePrice:", pizza.calculatePrice());

// console.log("calculateCalories:", pizza.calculateCalories());

// console.log("getIngredients:", pizza.getIngredients());

// pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);

// pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);

// console.log("getIngredients:", pizza.getIngredients());

// pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);

// console.log("getIngredients:", pizza.getIngredients());

// console.log("calculatePrice:", pizza.calculatePrice());

// console.log("calculateCalories:", pizza.calculateCalories());


// Output in console:

// Size: SIZE_M

// Kind: KIND_MEAT

// calculatePrice: 145

// calculateCalories: 680

// getIngredients: []

// INGREDIENT_TOMATOES has been added

// INGREDIENT_BACON has been added

// getIngredients: [

//   { param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5 },

//   { param: 'INGREDIENT_BACON', price: 25, calorie: 40 }

// ]

// INGREDIENT_TOMATOES has been deleted

// getIngredients: [ { param: 'INGREDIENT_BACON', price: 25, calorie: 40 } ]

// calculatePrice: 170

// calculateCalories: 720


const pizzaMenu = {
  SIZE_S: {param: "SIZE_S", price: 60, calorie: 300},
  SIZE_M: {param: "SIZE_M", price: 90, calorie: 450},
  SIZE_L: {param: "SIZE_L", price: 110, calorie: 600},
  KIND_MEAT: {param: "KIND_MEAT", price: 55, calorie: 230}, 
  KIND_FISH: {param: "KIND_FISH", price: 70, calorie: 150},     
  KIND_CHEESE: {param: "KIND_CHEESE", price: 50, calorie: 200},    
  KIND_VEGETARIAN: {param: "KIND_VEGETARIAN", price: 35, calorie: 50},
  INGREDIENT_TOMATOES: {param: "INGREDIENT_TOMATOES", price: 15, calorie: 5},
  INGREDIENT_PEPPER: {param: "INGREDIENT_PEPPER", price: 18, calorie: 5},
  INGREDIENT_BACON: {param: "INGREDIENT_BACON", price: 25, calorie: 40},
  INGREDIENT_OLIVES: {param: "INGREDIENT_OLIVES", price: 20, calorie: 0}
};

class PizzaMaker {
    constructor(size, type) {
        this.type = type;
        this.size = size;
        this.ingredients = [this.size, this.type];
    }
    addIngredient(ingredient) {
        if (this.ingredients.includes(ingredient)) {
            console.log(`Such an ingredient already exists!`);
        } else {
            this.ingredients.push(ingredient);
            console.log(`${ingredient.param} has been added`);
        }
    }
    deleteIngredient(ingredient) {
        if (this.ingredients.includes(ingredient)) {
            this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
            console.log(`${ingredient.param} has been deleted`);
        }
    }
    getIngredients() {
        return this.ingredients.slice().splice(2);
    }
    getSize() {
        return this.size.param;
    }
    getKind() {
        return this.type.param;
    }
    calculatePrice() {
        return this.ingredients.reduce((total, ingredient) => total + ingredient.price, 0);
    }
    calculateCalories() {
        return this.ingredients.reduce((total, ingredient) => total + ingredient.calorie, 0);
    }
}
