document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  const body = document.body;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") body.classList.add("dark-mode");

  updateButton();

  toggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "orange");
    updateButton();
  });

  function updateButton() {
    const isDark = body.classList.contains("dark-mode");
    // show moon when site is orange (i.e. not dark), show sun when dark (to switch back)
    toggle.textContent = isDark ? "🌞" : "🌙";
    toggle.title = isDark ? "Switch to orange (light)" : "Switch to dark (black)";
  }
});
