//Build a shopping cart with functions to add, remove and change quantity; compute totals with reduce; print a receipt and the JSON of the cart.


let cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 500, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 }
];

// 1. Add product
function addProduct(product) {
    cart.push(product);
    console.log(`${product.name} added successfully`);
}

// Call addProduct()
addProduct({
    id: 4,
    name: "Printer",
    price: 2000,
    quantity: 3
});


// 2. Remove product
function removeProduct(id) {
    const initialLength = cart.length;

    cart = cart.filter((item) => item.id !== id);

    if (cart.length < initialLength) {
        console.log(`Product with ID ${id} removed successfully`);
    } else {
        console.log("Product not found");
    }
}

// Call removeProduct()
removeProduct(2);


// 3. Change quantity
function changeQuantity(id, quantity) {
    const product = cart.find((item) => item.id === id);

    if (!product) {
        console.log("Product not found");
    } 
    else if (!Number.isInteger(quantity) || quantity <= 0) {
        console.log("Please enter a valid positive quantity");
    } 
    else {
        product.quantity = quantity;
        console.log(`${product.name} quantity updated to ${quantity}`);
    }
}

// Call changeQuantity()
changeQuantity(1, 3);
changeQuantity(3, -2); // Invalid quantity


// 4. Calculate total using reduce()
function calculateTotal() {
    const final = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    return final;
}

// Call calculateTotal()
console.log("Cart Total: ₹" + calculateTotal());


// 5. Print receipt
function printReceipt() {
    console.log("\n========== SHOPPING RECEIPT ==========");
    console.log("Product       Quantity   Price   Subtotal");

    cart.forEach((item) => {
        const subtotal = item.price * item.quantity;

        console.log(
            `${item.name}       ${item.quantity}          ${item.price}     ${subtotal}`
        );
    });

    console.log("--------------------------------------");
    console.log(`Total: ₹${calculateTotal()}`);
    console.log("======================================");
}

// Call printReceipt()
printReceipt();


// 6. Convert cart into JSON
const jsonCart = JSON.stringify(cart, null, 2);
console.log("\nJSON CART:");
console.log(jsonCart);
