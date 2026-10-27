const aside = `
<aside>
  <a href="/index.html">
    <img
      class="home-logo"
      src="/images/profile/home.png"
      alt="home-picture"
    />
  </a>

  <a href="/index.html">
    <i class="fa-solid fa-house"></i>
  </a>

  <a href="/notebook.html"><i class="fa-solid fa-book"></i></i></a>

  <a href="/profile.html"><i class="fa-jelly-fill fa-regular fa-user"></i></a>
</aside>

`;

const sidebarPlace = document.getElementById("sidebar");

sidebar.innerHTML = aside;
