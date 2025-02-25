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

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./images/lab.jpg",
    "./images/robot_lab.png",
    "./images/campas.jpg",
  ];

  let currentIndex = 0;
  const bg1 = document.querySelector(".bg1");
  const bg2 = document.querySelector(".bg2");
  let isBg1Visible = true; // 現在どちらが表示されているか管理

  // 初期画像セット（最初の画像は bg1 に）
  bg1.style.backgroundImage = `url('${images[currentIndex]}')`;
  bg2.style.backgroundImage = `url('${
    images[(currentIndex + 1) % images.length]
  }')`;

  function changeBackground() {
    if (isBg1Visible) {
      bg2.style.backgroundImage = `url('${
        images[(currentIndex + 1) % images.length]
      }')`;
      bg2.style.opacity = "1"; // bg2 をフェードイン
      bg1.style.opacity = "0"; // bg1 をフェードアウト
    } else {
      bg1.style.backgroundImage = `url('${
        images[(currentIndex + 1) % images.length]
      }')`;
      bg1.style.opacity = "1"; // bg1 をフェードイン
      bg2.style.opacity = "0"; // bg2 をフェードアウト
    }

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 1500); // フェードアニメーションが完了した後に画像を変更

    isBg1Visible = !isBg1Visible; // 表示されている背景を切り替え
  }

  setInterval(changeBackground, 4000); // 4秒ごとに切り替え
});
