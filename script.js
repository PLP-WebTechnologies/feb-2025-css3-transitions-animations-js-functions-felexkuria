// Save username to localStorage
document.getElementById("saveBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("username").textContent = name;
    alert("Name saved!");
  }
});

// Load username on page load
window.addEventListener("DOMContentLoaded", function () {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    document.getElementById("username").textContent = storedName;
  }
});

// Animate the box on button click
document.getElementById("triggerBtn").addEventListener("click", function () {
  const box = document.getElementById("animateBox");
  box.classList.add("animate");
a
  // Remove class after animation to allow re-triggering
  setTimeout(() => box.classList.remove("animate"), 1000);
});
