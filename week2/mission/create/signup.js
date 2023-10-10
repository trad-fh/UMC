window.addEventListener("load", function () {
  const main = document.querySelector("main");
  const svg = document.querySelector("svg");

  function resizeBackground() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const svgAspectRatio = 1836 / 1024; // SVG의 원래 가로세로 비율

    if (windowWidth / windowHeight > svgAspectRatio) {
      main.style.height = "100vh";
      main.style.width = `${100 * svgAspectRatio}vh`;
    } else {
      main.style.height = `${100 / svgAspectRatio}vw`;
      main.style.width = "100vw";
    }
  }

  resizeBackground();
  window.addEventListener("resize", resizeBackground);
});
