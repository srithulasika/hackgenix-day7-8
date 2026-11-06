function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].qty;
    }
    return total;
}
const cart = [
    { name: "Pen", price: 10, qty: 5 },
    { name: "Book", price: 120, qty: 2 },
    { name: "Bag", price: 750, qty: 1 },
];
let result = calculateTotal(cart);
console.log("Total: " + result.toFixed(2));

// Get item names
const names = cart.map(item => item.name);
console.log("Names:", names);

// Get costly items
const costly = cart.filter(item => item.price >= 100);
console.log("Costly items:", costly);

// Calculate total price
const sum = cart.reduce(
    (s, item) => s + item.price * item.qty,
    0
);
console.log("Sum:", sum);

// Sort items by price (ascending)
const sorted = cart.sort((a, b) => a.price - b.price);
console.log("Sorted:", sorted);

// Find the bag
const bag = cart.find(item => item.name === "Bag");
console.log("Bag:", bag);

// Create a separate array copy
const copy = [...cart];
copy.push({ name: "Cap", price: 200, qty: 1 });

console.log("Original cart:", cart);
console.log("Copied cart:", copy);

// User greeting
const user = {
    name: "Asha",
    greet() {
        console.log("Hi " + this.name);
    }
};

user.greet();

// Parse JSON
const data = JSON.parse('{"name": "Asha", "age": 20}');
console.log("Data:", data);

// Convert cart to JSON
let json = JSON.stringify(cart);
console.log("JSON length:", json.length);

// Get last item
console.log("Last item:", cart[cart.length - 1]);
