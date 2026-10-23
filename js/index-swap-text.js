let homeGreeting = document.getElementById("homeGreeting");
homeGreeting.textContent = "Welcome to Tux & Terminal";
homeGreeting.addEventListener("click", function () {
  if (homeGreeting.textContent === "Welcome to Tux & Terminal") {
    homeGreeting.textContent = "Your Personal Corner to Read Tech Blogs";
  } else {
    homeGreeting.textContent = "Welcome to Tux & Terminal";
  }
});
