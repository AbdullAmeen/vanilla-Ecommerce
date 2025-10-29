const signUp = document.querySelector(".signup");
const login = document.querySelector(".login");
const loginFailed = document.querySelector(".login-failed");
const loginSuccess = document.querySelector(".login-success");
const signUpSuccess = document.querySelector(".signup-success");

function handleSignUp() {
  login.style.display = "none";
  signUp.style.display = "block";
  loginFailed.style.display = "none";
}
function handleLogin() {
  login.style.display = "block";
  signUp.style.display = "none";
  loginFailed.style.display = "none";
  loginSuccess.style.display = "none";
  signUpSuccess.style.display = "none";
}

// Initialize users array
let users = [];

//fetch products
async function fetchUsers() {
  try {
    const response = await fetch("./data/users.json");
    const dataBox = await response.json();
    users = dataBox.users;

    console.log(users);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchUsers();

// login check

const loginForm = document.querySelector(".login form");
const loginInput = document.querySelector('.login form input[type="email"]');
const loginPassword = document.querySelector(
  '.login form input[type="password"]'
);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // ✅ Stops refresh ALWAYS

  if (!loginInput.checkValidity() || !loginPassword.checkValidity()) {
    return; // Let browser show validation
  }

  const email = loginInput.value.trim();
  const password = loginPassword.value.trim();

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  if (userFound) {
    loginSuccess.style.display = "block";
    login.style.display = "none";

    localStorage.setItem("user", "true");
  } else {
    loginFailed.style.display = "block";
    login.style.display = "none";
  }

  loginForm.reset();
});

// signup check
const signupForm = document.querySelector(".signup form");
const signupInput = document.querySelector('.signup form input[type="text"]');
const signupEmail = document.querySelector('.signup form input[type="email"]');
const signupPassword = document.querySelector(
  '.signup form input[type="password"]'
);

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // ✅ STOP browser from refreshing

  const name = signupInput.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  if (!name || !email || !password) return;

  const newUser = { name, email, password };

  try {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    // ✅ Hide the form, show success message
    signUp.style.display = "none";
    signUpSuccess.style.display = "block";
  } catch (error) {
    console.error("Signup failed:", error);
  }

  signupForm.reset();
});
