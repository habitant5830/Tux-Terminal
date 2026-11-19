const aside = `
<aside>
  <a href="/index.html">
    <img src="/images/profile/home.png" alt="home-picture" />
  </a>

  <div class="nav-items">
    <a href="/index.html">
      <img src="/images/home.png" alt="home" class="home" />
    </a>

    <a href="/notebook.html"
      ><img src="/images/notes.png" alt="notes" class="notes"
    /></a>

    <a href="/profile.html"
      ><img src="/images/user.png" alt="profile" class="profile"
    /></a>
  </div>

  <div class="theme-toggle">
    <img id="themeSwitchButton" src="/images/theme-toggle.png" alt="" />
  </div>
</aside>
`;

const sidebarPlace = document.getElementById("sidebar");

sidebar.innerHTML = aside;
