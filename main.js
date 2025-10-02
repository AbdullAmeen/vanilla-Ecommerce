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
  { img: "./images/more-content-cart/order.png", title: "Your Cart", desc: "View your cart" },
  { img: "./images/more-content-cart/electronic.png", title: "Electronics", desc: "Big Sale on Electronics 50%" },
  { img: "./images/more-content-cart/cloth.png", title: "Clothing", desc: "Sale on Clothing" },
  { img: "./images/more-content-cart/accessories.png", title: "Accessories", desc: "Best Deals on Accessories" },
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
