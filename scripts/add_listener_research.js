document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hero-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      let targetId = this.getAttribute("data-target"); // data-target 属性からIDを取得
      let targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "center", // ヘッダーに隠れないように中央へスクロール
        });
      } else {
        console.error("指定されたIDの要素が見つかりません:", targetId);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero-img");
  const images = [
    "./images/sim_pr_visual.png",
    "./images/robot_rab.png",
    "./images/3Drecognition.png",
  ];
  let currentIndex = 0;

  function changeImage() {
    hero.src = images[currentIndex]; // 画像の `src` を変更
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeImage, 3000); // 3秒ごとに切り替え
  changeImage(); // 最初の画像をセット
});
