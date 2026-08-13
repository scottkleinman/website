window.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("footnote-container");
  var footnotes = document.querySelector("div.footnote");
  if (!container || !footnotes) {
    return;
  }
  container.appendChild(footnotes);
  Array.from(container.childNodes).forEach(function (node) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("///Footnotes Go Here///")) {
      node.remove();
    }
  });
});
