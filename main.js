// <!-- Navbar, footer, common scripts -->

// load header and footer
fetch("header.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("header").innerHTML = html));
fetch("footer.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

  
//fetch products
async function fetchProducts() {
  try {
    const response = await fetch("data/products.json");
    const data = await response.json();

    // Shuffle the data array
    const shuffledData = shuffleArray(data);

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card, index) => {
      const product = shuffledData[index]; // match card with product

      if (!product) return; // in case more cards than products
      card.innerHTML = `
        <div class="product-image">
          <img src="${product.img}" alt="${product.category}">
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h2 class="product-title">${product.name}</h2>
          <div class="product-description">
            <p>${product.des}.</p>
          </div>
          <div class="product-bottom">
            <div class="product-price">
              <span class="price-now">${product.price}</span>
            </div>
            <button class="product-button">
              <span class="button-text">Add to Cart</span>
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
            </button>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

fetchProducts();
