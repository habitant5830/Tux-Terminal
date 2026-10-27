function switchGreeting() {
  if (homeGreeting.textContent === "Welcome to Tux & Terminal") {
    homeGreeting.textContent = "Your Personal Corner to Read Tech Blogs";
  } else {
    homeGreeting.textContent = "Welcome to Tux & Terminal";
  }
}

let homeGreeting = document.getElementById("homeGreeting");
homeGreeting.textContent = "Welcome to Tux & Terminal";
setTimeout(switchGreeting, 3200);

homeGreeting.addEventListener("animationiteration", function () {
  setTimeout(switchGreeting, 3200);
});
