const btn = document.getElementById("theme-btn");

document.body.classList.toggle("dark", localStorage.getItem("theme") === "dark");

btn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",document.body.classList.contains("dark") ? "dark" : "light");
};
