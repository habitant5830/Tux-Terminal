const searchBoxContainer = document.getElementById("searchBox");

searchBoxContainer.addEventListener("input", function () {
  const searchTerm = searchBoxContainer.value.toLowerCase();

  const filteredGridPosts = gridPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.summary.toLowerCase().includes(searchTerm)
    );
  });

  let searchResults = "";

  for (let i = 0; i < filteredGridPosts.length; i++) {
    searchResults += `
  <div class="grid-items">
  <span class="pill-tags">${filteredGridPosts[i].tag}</span><br />
    <div class="grid-item-title">
            <a href="${filteredGridPosts[i].link}">
${filteredGridPosts[i].title}</a
                >
          </div>
          <p>${filteredGridPosts[i].summary}</p> 
          </div>
    `;
  }

  const gridContainer =
    document.getElementById("postsGrid") ||
    document.getElementById("indexPostsGrid");

  if (gridContainer) {
    gridContainer.innerHTML = searchResults;
  }
});
