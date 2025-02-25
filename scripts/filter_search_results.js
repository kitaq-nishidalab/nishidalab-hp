// 研究成果のフィルタリング
function filterPapers(category) {
  const papers = document.querySelectorAll(".paper");

  papers.forEach((paper) => {
    if (category === "all" || paper.classList.contains(category)) {
      paper.style.display = "block";
    } else {
      paper.style.display = "none";
    }
  });
}

// 検索機能
document.getElementById("searchInput").addEventListener("keyup", function () {
  const searchText = this.value.toLowerCase();
  const papers = document.querySelectorAll(".paper");

  papers.forEach((paper) => {
    const title = paper.querySelector("h3").textContent.toLowerCase();
    const authors = paper.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchText) || authors.includes(searchText)) {
      paper.style.display = "block";
    } else {
      paper.style.display = "none";
    }
  });
});
