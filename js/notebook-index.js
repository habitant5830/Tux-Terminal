const gridPosts = [
  {
    tag: "DEBIAN",
    title: "Debian Post-Install Guide for Modern Hardwares",
    summary:
      "A basic setup guide for users who prefer debian even if they have a modern hardware. This guide is mainly targeted at Intel based devices. ",
    link: "/notebook/debian-post-install.html",
  },
  {
    tag: "PROGRAMMING",
    title: "Python: OS Module Basics",
    summary: "Basic python os module commands explained.",
    link: "/notebook/os-modules-basics.html",
  },
];

let allGridCards = "";

for (let i = 0; i < gridPosts.length; i++) {
  allGridCards += `
  <div class="grid-items">
    <span class="pill-tags">${gridPosts[i].tag}</span><br />
          <div class="grid-item-title">
            <a href="${gridPosts[i].link}"
              >${gridPosts[i].title}</a
                >
          </div>
          <p>${gridPosts[i].summary}</p> 
          </div>
    `;
}

const gridItems = document.getElementById("postsGrid");

if (gridItems) {
  gridItems.innerHTML = allGridCards;
}
