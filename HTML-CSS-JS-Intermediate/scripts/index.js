const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 299,
    category: "electronics",
    rating: 4,
    tags: ["new", "popular"],
    details:
      "A high-end smartphone with a powerful processor and a stunning display.",
  },
  {
    id: 2,
    name: "T-shirt",
    price: 20,
    category: "clothing",
    rating: 3,
    tags: ["sale"],
    details:
      "A comfortable cotton T-shirt available in various sizes and colors.",
  },
  {
    id: 3,
    name: "Vacuum Cleaner",
    price: 150,
    category: "home",
    rating: 5,
    tags: ["popular"],
    details: "A powerful vacuum cleaner with advanced suction technology.",
  },
  {
    id: 4,
    name: "Laptop",
    price: 999,
    category: "electronics",
    rating: 4,
    tags: ["new"],
    details:
      "A high-performance laptop suitable for gaming and professional use.",
  },
  {
    id: 5,
    name: "Jeans",
    price: 50,
    category: "clothing",
    rating: 4,
    tags: ["sale"],
    details: "Stylish and comfortable jeans available in various sizes.",
  },
  {
    id: 6,
    name: "Lipstick",
    price: 25,
    category: "beauty",
    rating: 5,
    tags: ["new"],
    details: "A long-lasting lipstick available in various shades.",
  },
  {
    id: 7,
    name: "Basketball",
    price: 30,
    category: "sports",
    rating: 4,
    tags: ["popular"],
    details: "A high-quality basketball suitable for indoor and outdoor play.",
  },
  {
    id: 8,
    name: "Headphones",
    price: 199,
    category: "electronics",
    rating: 5,
    tags: ["new"],
    details: "Noise-cancelling headphones with superior sound quality.",
  },
  {
    id: 9,
    name: "Sneakers",
    price: 75,
    category: "clothing",
    rating: 4,
    tags: ["sale"],
    details: "Comfortable and stylish sneakers available in various sizes.",
  },
  {
    id: 10,
    name: "Blender",
    price: 60,
    category: "home",
    rating: 3,
    tags: ["popular"],
    details: "A powerful blender suitable for making smoothies and shakes.",
  },
  {
    id: 11,
    name: "Perfume",
    price: 45,
    category: "beauty",
    rating: 5,
    tags: ["new"],
    details: "A long-lasting perfume with a pleasant fragrance.",
  },
  {
    id: 12,
    name: "Yoga Mat",
    price: 35,
    category: "sports",
    rating: 4,
    tags: ["popular"],
    details: "A non-slip yoga mat suitable for all types of yoga.",
  },
  {
    id: 13,
    name: "Smartwatch",
    price: 150,
    category: "electronics",
    rating: 4,
    tags: ["new"],
    details: "A smartwatch with various health and fitness tracking features.",
  },
  {
    id: 14,
    name: "Jacket",
    price: 120,
    category: "clothing",
    rating: 5,
    tags: ["sale"],
    details: "A stylish and warm jacket suitable for winter.",
  },
  {
    id: 15,
    name: "Coffee Maker",
    price: 80,
    category: "home",
    rating: 4,
    tags: ["popular"],
    details: "A coffee maker with advanced brewing technology.",
  },
];

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const ratingFilter = document.getElementById("rating-filter");
const tagFilter = document.getElementById("tag-filter");
const sortFilter = document.getElementById("sort-filter");
const createProductForm = document.getElementById("create-product-form");
const createProductSection = document.getElementById("create-product");
const showCreateProductButton = document.getElementById("show-create-product");
const toggleFiltersButton = document.getElementById("toggle-filters");
const sortOrderButton = document.getElementById("sort-order");

let sortOrder = "asc";

function displayProducts(filteredProducts) {
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
        <p>${getStars(product.rating)}</p>
        <p>${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")}</p>
        <div class="product-details">
          <h4>${product.name}</h4>
          <p>${product.details}</p>
        </div>
      `;
      productGrid.appendChild(productCard);
    });

    productGrid.classList.remove("hidden");
  }, 300);
}

function getStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<i class="fas fa-star"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

function filterProducts() {
  let filtered = products;

  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;
  const selectedRating = ratingFilter.value;
  const selectedTag = tagFilter.value;

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
    } else if (selectedPrice === "100-200") {
      filtered = filtered.filter(
        (product) => product.price >= 100 && product.price <= 200,
      );
    } else if (selectedPrice === "above-200") {
      filtered = filtered.filter((product) => product.price > 200);
    }
  }

  if (selectedRating !== "all") {
    filtered = filtered.filter(
      (product) => product.rating >= parseInt(selectedRating),
    );
  }

  if (selectedTag !== "all") {
    filtered = filtered.filter((product) => product.tags.includes(selectedTag));
  }

  if (sortFilter.value !== "default") {
    if (sortFilter.value === "price") {
      filtered.sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price,
      );
    } else if (sortFilter.value === "rating") {
      filtered.sort((a, b) =>
        sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating,
      );
    }
  }

  displayProducts(filtered);
}

function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = parseFloat(document.getElementById("product-price").value);
  const category = document.getElementById("product-category").value;
  const rating = parseInt(document.getElementById("product-rating").value);
  const tags = document
    .getElementById("product-tags")
    .value.split(",")
    .map((tag) => tag.trim());
  const details = document.getElementById("product-details").value;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category,
    rating,
    tags,
    details,
  };

  products.push(newProduct);
  filterProducts();
  createProductForm.reset();
  createProductSection.classList.add("hidden");
}

function toggleCreateProduct() {
  createProductSection.classList.toggle("hidden");
}

function toggleFilters() {
  document.querySelector(".sidebar").classList.toggle("hidden");
}

function setSortOrder() {
  sortOrder = sortOrder === "asc" ? "desc" : "asc";
  sortOrderButton.innerHTML =
    sortOrder === "asc"
      ? '<i class="fas fa-sort-amount-up"></i>'
      : '<i class="fas fa-sort-amount-down"></i>';
  filterProducts();
}

displayProducts(products);

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
ratingFilter.addEventListener("change", filterProducts);
tagFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);
createProductForm.addEventListener("submit", addProduct);
showCreateProductButton.addEventListener("click", toggleCreateProduct);
toggleFiltersButton.addEventListener("click", toggleFilters);
sortOrderButton.addEventListener("click", setSortOrder);
