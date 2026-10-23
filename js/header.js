const header = `
  <header>
    <a href="index.html">
      <img
        class="header-logo"
        src="/images/profile/home.png"
        alt="home-picture"
      />
    </a>
    <div class="header-title">
      <a href="/index.html">Tux & Terminal</a>
    </div>

    <nav>
      <h4>
        <a class="active" href="/index.html">
          Home
        </a>
      </h4>
      <h4>
        <a href="/guides.html">Guides</a>
      </h4>
      <h4>
        <a href="/profile.html">Profile</a>
      </h4>
    </nav>
  </header>,
`;

const headerPlace = document.getElementById("headerPlace");

headerPlace.innerHTML = header;
