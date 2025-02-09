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
  const slides = document.querySelectorAll(".hero-slide");
  let currentIndex = 0;

  function changeSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % slides.length;
  }

  setInterval(changeSlide, 3000); // 3秒ごとに切り替え
  changeSlide(); // 最初のスライドを表示
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const images = [
    "./images/lab.jpg",
    "./images/robot_rab.png",
    "./images/campas.jpg",
  ];
  let currentIndex = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 3000); // 4秒ごとに切り替え
  changeBackground(); // 最初の画像をセット
});
