// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

// Theme toggle logic
document.getElementById("theme-toggle")?.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    (document.getElementById("theme-toggle-text") as HTMLElement).textContent =
      "Light Mode";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    (document.getElementById("theme-toggle-text") as HTMLElement).textContent =
      "Dark Mode";
  }
});
