// <!-- Navbar, footer, common scripts -->

// load header and footer
fetch("header.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("header").innerHTML = html));
fetch("footer.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

// load more-content cart
const items = [
  {
    img: "./images/more-content-cart/order.png",
    title: "Your Cart",
    desc: "View your cart",
  },
  {
    img: "./images/more-content-cart/electronic.png",
    title: "Electronics",
    desc: "Big Sale on Electronics 50%",
  },
  {
    img: "./images/more-content-cart/cloth.png",
    title: "Clothing",
    desc: "Sale on Clothing",
  },
  {
    img: "./images/more-content-cart/accessories.png",
    title: "Accessories",
    desc: "Best Deals on Accessories",
  },
];

const container = document.getElementById("more-content");

items.forEach((item) => {
  container.innerHTML += `
      <div id="more-cart">
        <div id="more-cart-img"><img src="${item.img}" alt="img"></div>
        <div id="more-cart-content">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
});


//fetch products

// load products
const productCard = document.querySelectorAll(".product-card");

productCard.forEach((card)=>{
  let price = Math.floor(Math.random() * 1000);
  card.innerHTML = `
    <div class="product-image">
    <img
      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      alt="Premium Watch">
    </div>
    </div>

    <div class="product-info">
      <div class="product-category">Luxury Timepiece</div>
      <h2 class="product-title">Chrono S-Series Watch</h2>
      <div class="product-description">
      <p>Precision engineering meets timeless design. Swiss movement with sapphire crystal and genuine
        leather band.</p>
      </div>
      <div class="product-bottom">
        <div class="product-price">
          <span class="price-now">$${price}</span>
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
    </div>
  `;
});
