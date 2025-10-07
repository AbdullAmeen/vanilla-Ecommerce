async function fetchProducts() {
  try {
    const response = await fetch("data/products.json");
    const data = await response.json();

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
        </div>`;
      } catch (error) {
        returnGetDiv.innerHTML = `<h1>Product not found</h1>`;
      }
    });
    
    // edit item function
    const editInput = document.querySelector(".edit-input-container input");
    const editBtn = document.querySelector("#edit-btn");
    const returnEditDiv = document.querySelector(".return-edit");
    const editForm = document.querySelector(".edit-form");

    editBtn.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        if (editInput.value == "" || editInput.value <= 0) return;
        index = editInput.value - 1;
        editInput.value = "";
        console.log(data[index].name);   
      } catch (error) {
        editForm.style.display = "none";
        returnEditDiv.innerHTML = `<h1>Product not found</h1>`;
      }
    }
    );


  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
fetchProducts();
