const pizzas = [
    { name: "Chicken Tikka", price: 890 },
    { name: "Pepperoni", price: 950 },
    { name: "BBQ Chicken", price: 1100 },
    { name: "Veggie", price: 700 }
];

const sides = [
    { name: "Garlic Bread", price: 200 },
    { name: "Cheesy Breadsticks", price: 350 },
    { name: "Wings", price: 550 }
];

const drinks = [
    { name: "Soda", price: 70 },
    { name: "Water", price: 100 },
    { name: "Juice", price: 120 }
];

const pizzaList = document.getElementById("pizza-list");
const pizzaSelect = document.getElementById("pizza");
const sidesList = document.getElementById("sides-list");
const sidesSelect = document.getElementById("sides");
const drinksList = document.getElementById("drinks-list");
const drinksSelect = document.getElementById("drinks");
const orderForm = document.getElementById("order");
const summary = document.getElementById("summary");

// Function to populate the menu and dropdowns
function populateMenu() {
    pizzas.forEach((pizza, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${pizza.name} - KSH ${pizza.price.toFixed(2)}`;
        pizzaList.appendChild(listItem);

        const option = document.createElement("option");
        option.value = index;
        option.textContent = pizza.name;
        pizzaSelect.appendChild(option);
    });

    sides.forEach((side, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${side.name} - KSH ${side.price.toFixed(2)}`;
        sidesList.appendChild(listItem);

        const option = document.createElement("option");
        option.value = index;
        option.textContent = side.name;
        sidesSelect.appendChild(option);
    });

    drinks.forEach((drink, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${drink.name} - KSH ${drink.price.toFixed(2)}`;
        drinksList.appendChild(listItem);

        const option = document.createElement("option");
        option.value = index;
        option.textContent = drink.name;
        drinksSelect.appendChild(option);
    });
}

// Call the function to populate the menu
populateMenu();

// Handle order submission
orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get customer information
    const customerName = document.getElementById("name").value;
    const customerContact = document.getElementById("contact").value;
    const customerAddress = document.getElementById("address").value;

    // Get selected pizza and quantity
    const selectedPizza = pizzas[pizzaSelect.value];
    const pizzaQuantity = parseInt(document.getElementById("pizza-quantity").value);
    const pizzaTotal = (selectedPizza.price * pizzaQuantity).toFixed(2);

    // Get selected sides and quantity
    const selectedSide = sides[sidesSelect.value];
    const sidesQuantity = parseInt(document.getElementById("sides-quantity").value);
    const sidesTotal = (selectedSide.price * sidesQuantity).toFixed(2);

    // Get selected drinks and quantity
    const selectedDrink = drinks[drinksSelect.value];
    const drinksQuantity = parseInt(document.getElementById("drinks-quantity").value);
    const drinksTotal = (selectedDrink.price * drinksQuantity).toFixed(2);

    // Calculate total order amount
    const totalAmount = (
        parseFloat(pizzaTotal) +
        parseFloat(sidesTotal) +
        parseFloat(drinksTotal)
    ).toFixed(2);

    // Create order summary
    let orderSummary = `Customer Name: ${customerName}\n`;
    orderSummary += `Contact: ${customerContact}\n`;
    orderSummary += `Address: ${customerAddress}\n\n`;
    orderSummary += `Order Details:\n`;
    orderSummary += `${pizzaQuantity} x ${selectedPizza.name} - $${pizzaTotal}\n`;
    orderSummary += `${sidesQuantity} x ${selectedSide.name} - $${sidesTotal}\n`;
    orderSummary += `${drinksQuantity} x ${selectedDrink.name} - $${drinksTotal}\n\n`;
    orderSummary += `Total: $${totalAmount}`;

    // Display summary in the page
    summary.textContent = orderSummary.replace(/\n/g, "\n");
});
