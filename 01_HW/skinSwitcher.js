(function () {
  const SKINS = [
    "SKINS/basic.css",
    "SKINS/dark.css",
    "SKINS/modern.css"
  ];

  const linkEl = document.getElementById("skin");
  const btn = document.getElementById("switchSkinBtn");

  function getCurrentIndex() {
    const current = linkEl.getAttribute("href");
    const idx = SKINS.findIndex(p => current.endsWith(p));
    return idx >= 0 ? idx : 0;
  }

  let currentIndex = Number(localStorage.getItem("skinIndex")) || getCurrentIndex();
  linkEl.href = SKINS[currentIndex];

  function switchSkin() {
 

    currentIndex = (currentIndex + 1) % SKINS.length; 
    linkEl.href = SKINS[currentIndex];
    localStorage.setItem("skinIndex", String(currentIndex));
  }

  btn.addEventListener("click", switchSkin);

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "s") switchSkin();
  });
})();
