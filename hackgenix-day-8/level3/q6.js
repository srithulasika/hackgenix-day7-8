//Read 5 products from a JSON text, filter by price range, sort by price, map to display labels and show them as a list on the page.

const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 500, category: "Electronics" },
    { id: 3, name: "Chair", price: 3000, category: "Furniture" },
    { id: 4, name: "Keyboard", price: 1500, category: "Electronics" },
    { id: 5, name: "Table", price: 7000, category: "Furniture" },
    { id: 6, name: "Headphones", price: 2500, category: "Electronics" }
];

const jsonData = JSON.stringify(products);
const parsedProducts = JSON.parse(jsonData);

//filter
const filteredProducts = parsedProducts.filter(
    (product) => product.price >= 1000 && product.price <= 10000
);

//sort
const sortedProducts = filteredProducts.sort(
    (a, b) => a.price - b.price
);

//map
const labels = sortedProducts.map((product) => {
    return `${product.name} : ₹${product.price}`;
});

const list = document.getElementById("productList");

list.innerHTML = labels.map((label) => {
    return `<li>${label}</li>`;
}).join("");