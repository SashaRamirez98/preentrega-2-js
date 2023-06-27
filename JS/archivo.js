let products = []; // Array para almacenar los productos

// Array de precios predefinidos
let priceOptions = [
  { value: 500, label: "$500" },
  { value: 1000, label: "$1,000" },
  { value: 2000, label: "$2,000" },
  { value: 5000, label: "$5,000" },
  { value: 10000, label: "$10,000" }
];

// Llenar el select con las opciones de precios
let priceSelect = document.getElementById("priceSelect");
for (let i = 0; i < priceOptions.length; i++) {
  let option = document.createElement("option");
  option.value = priceOptions[i].value;
  option.text = priceOptions[i].label;
  priceSelect.appendChild(option);
}

function updatePriceInput() {
  let priceSelect = document.getElementById("priceSelect");
  let customPriceInput = document.getElementById("customPriceInput");
  
  if (priceSelect.value === "") {
    customPriceInput.style.display = "block";
  } else {
    customPriceInput.style.display = "none";
  }
}

function addProduct() {
  let productName = document.getElementById("productName").value;
  let productPrice = document.getElementById("priceSelect").value;
  
  if (productPrice === "") {
    productPrice = document.getElementById("customPriceInput").value;
  }
  
  let product = { name: productName, price: productPrice }; // Objeto para representar un producto
  products.push(product); // Agregar el producto al array de productos
  
  let table = document.getElementById("productTable");
  let row = table.insertRow(-1);
  let nameCell = row.insertCell(0);
  let priceCell = row.insertCell(1);
  
  nameCell.innerHTML = productName;
  priceCell.innerHTML = formatPrice(productPrice);
  
  document.getElementById("productName").value = "";
  document.getElementById("priceSelect").value = "";
  document.getElementById("customPriceInput").value = "";
  updatePriceInput();
}

// Covertidor de precios con simbolo $ y separaciones
function formatPrice(price) {
  return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}