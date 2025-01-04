// Smooth Scroll and Highlight Content
document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
      { id: "btnEducation", section: "education" },
      { id: "btnSkills", section: "skills" },
      { id: "btnCertifications", section: "certifications" },
      { id: "btnProjects", section: "projects" },
      { id: "btnContact", section: "contact" },
    ];
  
    buttons.forEach((btn) => {
      document.getElementById(btn.id).addEventListener("click", () => {
        const section = document.getElementById(btn.section);
        section.scrollIntoView({ behavior: "smooth" });
        section.classList.add("highlight");
        setTimeout(() => section.classList.remove("highlight"), 2000);
      });
    });
  });
  
  // CSS for Highlight Effect
  const style = document.createElement("style");
  style.textContent = `
    .highlight {
      box-shadow: 10px 10px 10px 5px blue;
      transition: box-shadow 0.3s ease;
    }
  `;
  document.head.appendChild(style);
  