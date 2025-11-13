// js/render-sections.js
(function () {
  const container = document.getElementById("content");
  const template = document.getElementById("section-tpl");

  if (!window.mainContent || !mainContent.mainSections) {
    console.error("mainContent not found — did you include data/content.js first?");
    return;
  }

  // Loop through each section in the mainContent array
  mainContent.mainSections.forEach((sectionData) => {
    const clone = template.content.cloneNode(true);

    const section = clone.querySelector("section");
    section.id = sectionData.id;

    clone.querySelector(".sec-title").textContent = sectionData.title;
    const img = clone.querySelector(".sec-img");
    img.src = sectionData.img;
    img.alt = sectionData.title;
    clone.querySelector(".sec-text").textContent = sectionData.text;

    container.appendChild(clone);
  });
})();
