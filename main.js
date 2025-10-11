// <!-- Navbar, footer, common scripts -->

// load header and footer
fetch("header.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("header").innerHTML = html));
fetch("footer.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

