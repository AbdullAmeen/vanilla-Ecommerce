 # E-Commerce Website (Frontend Only)

This is a **simple e-commerce website** built with **HTML, CSS, JavaScript, and JSON only**.  
It does **not use any frameworks or backend**, making it a perfect learning project for frontend development.

---

## ⚙️ How It Works

- **HTML** → Provides the structure (pages like home, shop, product, cart).  
- **CSS**  → Adds design & styling (global + page-specific).  

- **JavaScript** → Makes pages interactive:
  - `shop.js`    → loads product list from `products.json`  
  - `product.js` → shows single product details  
  - `cart.js`    → adds/removes items, stores cart in localStorage  
  - `auth.js`    → handles login/signup using localStorage  

- **JSON** → Acts as a fake database (products & users).  
- **LocalStorage** → Used instead of a real backend for cart and user sessions.  

---

## 🚀 Features (Frontend Only)

✅ Home page with featured products  
✅ Shop page with dynamic product listing (from JSON)  
✅ Product details page (with query parameter `?id=`)  
✅ Add to Cart + Cart management (localStorage)  
✅ Checkout form validation  
✅ Login & Signup (simulated with localStorage)   

---

## Notes

- This project is for **learning purposes only**.  
- There is **no backend** (no database, no authentication server).  
- Passwords are stored in plain text in localStorage → not secure!  
- A real e-commerce app would use a backend (Node, Django, PHP, etc.) + database.  

---

## How to Run

1. Download or clone this repo.  
2. Open `index.html` in your browser.  
3. Navigate between pages normally.  
4. Products and users load from the `data/` folder.  

👉 No server needed (runs directly in the browser).  

---

## Learning Goals

- Practice **HTML, CSS, JS** structure.  
- Learn to use **JSON** as fake data.  
- Learn **localStorage** for cart & login persistence.  
- Build a **realistic project structure** like professional frontend developers.  
