const aside = `
<aside>
  <a href="/index.html">
    <img
      class="home-logo"
      src="/images/profile/home.png"
      alt="home-picture"
    />
  </a>

  <div class="nav-items">
    <a href="/index.html">
      <i class="fa-solid fa-house"></i>
    </a>

    <a href="/notebook.html"><i class="fa-solid fa-book"></i></a>

    <a href="/profile.html"
      ><i class="fa-jelly-fill fa-regular fa-user"></i
    ></a>
  </div>
  
  <div class="theme-toggle">
    <img id="themeSwitchButton" src="/images/theme-toggle.png" alt="" />
  </div>
</aside>
`;

const sidebarPlace = document.getElementById("sidebar");

sidebar.innerHTML = aside;
