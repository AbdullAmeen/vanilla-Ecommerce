async function fetchGetProducts() {
  try {
    const response = await fetch("data/products.json");
    const dataBox = await response.json();
    const data = dataBox.products;

    const totalItemDisplay = document.querySelector("#total-items");
    totalItemDisplay.textContent = data.length;

    // get item function
    const getInput = document.querySelector(".get-input-container input");
    const getBtn = document.querySelector("#get-btn");
    const returnGetDiv = document.querySelector(".return-get");

    getBtn.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        if (getInput.value == "" || getInput.value <= 0) return;
        index = getInput.value - 1;
        getInput.value = "";
        

        returnGetDiv.innerHTML = `  
        <div class="product-image">
        <img src="${data[index].img}" alt="${data[index].category}">
        </div>
        <div class="product-info">
        <div class="product-category">${data[index].category}</div>
        <h2 class="product-title">${data[index].name}</h2>
        <div class="product-description">
        <p>${data[index].des}.</p>
        </div>
        <div class="product-bottom">
        <div class="product-price">
        <span class="price-now">${data[index].price}</span>
        </div>
        </div>
        <p class="productID">#Product ID :${data[index].productID}</p>    
        <p class="product-id">ID : ${index + 1}</p>    
        <p class="product-id"> edit & delete ID : ${data[index].id}</p>    
        </div>`;
      } catch (error) {
        returnGetDiv.innerHTML = `<h1>Product not found</h1>`;
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
fetchGetProducts();

// fetch post products (adding products).

document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.querySelector("#postForm");

  if (!postForm) {
    console.error("Form element not found");
    return;
  }

  postForm.addEventListener("submit", async (event) => {
    event.preventDefault();


    const name = document.querySelector("#itemName").value;
    const category = document.querySelector("#itemCategory").value;
    const des = document.querySelector("#itemDes").value;
    const price = document.querySelector("#itemPrice").value;
    const img = document.querySelector("#itemImg").value;
    const productID = "e123";

    if (!name || !category || !des || !price || !img) return;
    const newProduct = { productID, name, price, des, img, category};

    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
  });
});

// fetch delete products (deleting products).
const DeleteBtn = document.querySelector("#delete-btn");
async function deletProduct() {
  let id = document.querySelector("#itemID").value;
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
}

DeleteBtn.addEventListener("click", deletProduct);

// fetch items for edit (put).
const putForm = document.querySelector("#putForm");
putForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = document.querySelector("#putId").value;
  const name = document.querySelector("#putName").value;
  const category = document.querySelector("#putCategory").value;
  const des = document.querySelector("#putDes").value;
  const price = document.querySelector("#putPrice").value;
  const img = document.querySelector("#putImg").value;
  const productID = "e123";
  if(!id, !name, !category, !des, !price, !img) return;
  const updateUser = { name, category, des, price, img, productID };

  await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateUser),
  });
})