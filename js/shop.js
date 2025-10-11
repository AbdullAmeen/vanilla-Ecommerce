//fetch products
async function fetchProducts() {
  try {
    const response = await fetch("data/products.json");
    const dataBox = await response.json();
    const data = dataBox.products;

    const productCardWrapper = document.querySelector("#product-card-wrapper");
    console.log(data);

    for (item of data) {
      const newProductCard = document.createElement("div");
      newProductCard.className = "product-card";
      productCardWrapper.appendChild(newProductCard);

      console.log("hel");

      newProductCard.innerHTML = `
       <div class="product-image">
           <img src="${item.img}" alt="${item.category}">
        </div>
        <div class="product-info">
          <div class="product-category">${item.category}</div>
          <h2 class="product-title">${item.name}</h2>
          <div class="product-description">
            <p>${item.des}.</p>
          </div>
          <div class="product-bottom">
            <div class="product-price">
              <span class="price-now">${item.price}</span>
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
        </div>`;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
