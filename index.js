const formBox = document.getElementById("form-box");
const displayUser = document.getElementById("display-user");
function toggleFormDisplay() {
  formBox.classList.toggle("hidden");
}
function handleAuth() {
  const username = document.getElementById("username").value;
  if (username.trim()) {
    displayUser.textContent = `Welcome, ${username}`;
    formBox.classList.add("hidden");
  }
}
function toggleForm() {
  const title = document.getElementById("form-title");
  title.textContent = title.textContent === "Login" ? "Sign Up" : "Login";
}
function showHome() {
  location.href = 'index.html';
}
function searchTasks() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  document.querySelectorAll(".task-list .task").forEach((task) => {
    task.style.display = task.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  ev.target.appendChild(draggedElement);
}
function addTask(columnId) {
  const task = prompt("Enter task:");
  if (task) {
    const taskList = document.getElementById(columnId);
    const newTask = document.createElement("div");
    newTask.textContent = task;
    newTask.className = "task";
    newTask.setAttribute("draggable", true);
    newTask.setAttribute("ondragstart", "drag(event)");
    newTask.id = "task-" + Date.now();
    taskList.appendChild(newTask);
  }
}
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
function autoSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}
setInterval(autoSlide, 3000);

function toggleAnswer(el) {
  const answer = el.nextElementSibling;
  const icon = el.querySelector("span");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    icon.textContent = "▲";
  } else {
    answer.classList.add("hidden");
    icon.textContent = "▼";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}



function toggleAnswer(item) {
  item.classList.toggle('active');
}
