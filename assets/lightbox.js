(function () {
  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  var img = document.createElement("img");
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.classList.add("lightbox-locked");
  }

  function close() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("lightbox-locked");
  }

  document.querySelectorAll("main img").forEach(function (el) {
    el.addEventListener("click", function () {
      open(el.currentSrc || el.src, el.alt);
    });
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
