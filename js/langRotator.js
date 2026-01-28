// js/langRotator.js
document.addEventListener("DOMContentLoaded", () => {
  const imgEl = document.getElementById("langLogo");
  const dotsWrap = document.querySelector(".lang-dots");

  if (!imgEl) return;

  // Add/remove logos here (images only)
  const logos = [
    { src: "img/lang/python.png", alt: "Python logo" },
    { src: "img/lang/java.png", alt: "Java logo" },
    { src: "img/lang/cpp.png", alt: "C plus plus logo" },
    { src: "img/lang/javascript.png", alt: "JavaScript logo" },
    { src: "img/lang/html.png", alt: "HTML logo" },
    { src: "img/lang/css.png", alt: "CSS logo" },
    { src: "img/lang/sql.png", alt: "SQL logo" },
    { src: "img/lang/flutter.png", alt: "Flutter logo" },
    { src: "img/lang/dart.png", alt: "Dart logo" },
  ];

  // Build dots dynamically so you never have to count them
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    logos.forEach((_, i) => {
      const s = document.createElement("span");
      s.className = "dot" + (i === 0 ? " active" : "");
      dotsWrap.appendChild(s);
    });
  }

  const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll(".dot")) : [];

  let index = 0;
  const intervalMs = 2400; // switch every few seconds
  const fadeMs = 450;      // must match CSS transition duration

  // Preload images so swaps look smooth
  logos.forEach((l) => {
    const im = new Image();
    im.src = l.src;
  });

  const setActiveDot = (i) => {
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  };

  const nextLogo = () => {
    imgEl.classList.add("is-fading");

    setTimeout(() => {
      index = (index + 1) % logos.length;
      imgEl.src = logos[index].src;
      imgEl.alt = logos[index].alt;
      setActiveDot(index);

      // force reflow for consistent transitions in some browsers
      void imgEl.offsetWidth;

      imgEl.classList.remove("is-fading");
    }, fadeMs);
  };

  // Start
  imgEl.src = logos[0].src;
  imgEl.alt = logos[0].alt;
  setActiveDot(0);

  setInterval(nextLogo, intervalMs);
});
