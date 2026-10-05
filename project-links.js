// Adds a correct "View Details" button to each project card.
// Cards in #projects must be in the same order as PROJECTS in project-data.js.
document.querySelectorAll("#projects .project-card").forEach((card, i) => {
  const p = PROJECTS[i];
  if (!p) return;

  // remove any buttons you pasted manually
  card.querySelectorAll(".details-btn").forEach(b => b.remove());

  const a = document.createElement("a");
  a.href = `project-details.html?id=${p.id}`;
  a.className = "details-btn";
  a.textContent = "View Details →";
  card.appendChild(a);
});