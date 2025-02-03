// script.js
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector("h1");
    title.addEventListener("click", function() {
      alert("You clicked the title!");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector("h2");
    title.addEventListener("click", function() {
      alert("This is a wonderful Web application!");
    });
  });