function tableOfContents() {
  const articles = document.getElementById("article");
  if (!articles) return; // Stop if this isn't an article page
  const articlesHeadings = articles.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (!articlesHeadings.length) return; // Stop if there are no headings to list
  const tocContainer = document.createElement("div");
  tocContainer.className = "toccontainer";

  articlesHeadings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
    const tocList = document.createElement("ul");
    tocList.className = "toclist";
    const tocListItem = document.createElement("li");
    tocListItem.className = "toclistitem";
    const tocLink = document.createElement("a");
    tocLink.className = "tocitemlink";
    tocLink.textContent = heading.textContent;
    tocLink.href = `#${heading.id}`;
    tocList.appendChild(tocListItem);
    tocListItem.appendChild(tocLink);
    tocContainer.appendChild(tocList);
  });

  articles.prepend(tocContainer);
}

tableOfContents();
