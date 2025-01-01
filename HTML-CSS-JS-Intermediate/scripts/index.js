const products = [
  { id: 1, name: "Smartphone", price: 299, category: "electronics" },
  { id: 2, name: "T-shirt", price: 20, category: "clothing" },
  { id: 3, name: "Vacuum Cleaner", price: 150, category: "home" },
  { id: 4, name: "Laptop", price: 999, category: "electronics" },
  { id: 5, name: "Jeans", price: 50, category: "clothing" },
];

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");

function displayProducts(filteredProducts) {
  // Add fade-out animation
  productGrid.classList.add("hidden");

  setTimeout(() => {
    productGrid.innerHTML = "";
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      `;
      productGrid.appendChild(productCard);
    });

    // Add fade-in animation
    productGrid.classList.remove("hidden");
  }, 300); // Match the transition duration
}

function filterProducts() {
  let filtered = products;

  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;

  if (searchQuery) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchQuery),
    );
  }

  if (selectedCategory !== "all") {
    filtered = filtered.filter(
      (product) => product.category === selectedCategory,
    );
  }

  if (selectedPrice !== "all") {
    if (selectedPrice === "below-50") {
      filtered = filtered.filter((product) => product.price < 50);
    } else if (selectedPrice === "50-100") {
      filtered = filtered.filter(
        (product) => product.price >= 50 && product.price <= 100,
      );
    } else if (selectedPrice === "above-100") {
      filtered = filtered.filter((product) => product.price > 100);
    }
  }

  displayProducts(filtered);
}

// Initial display
displayProducts(products);

// Add event listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
