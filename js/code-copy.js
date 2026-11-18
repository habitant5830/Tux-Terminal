const preTags = document.querySelectorAll("pre");
preTags.forEach((block) => {
  const divTag = document.createElement("div");
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "copy command";
  block.replaceWith(divTag);
  divTag.appendChild(buttonTag);
  divTag.appendChild(block);

  buttonTag.addEventListener("click", () => {
    navigator.clipboard.writeText(block.innerText);
    alert("Command Copied Successfully!");
  });
});
