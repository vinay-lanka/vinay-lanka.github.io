new TypeIt("#app", {
  strings: ["Certified Robotics Engineer","Embedded Systems Developer","Full-Stack Web Developer","IoT Engineer"],
  speed: 30,
  breakLines: false,
  waitUntilVisible: true,
  lifeLike: true,
  loop: true,
  loopDelay: 3000,
  nextStringDelay: 1000
}).go();

var project_div = document.getElementById("project_div");
var card_div = document.getElementById("cardspace");
var blogs_div = document.getElementById("blogs_div");

blogs_div.style.display = "none";
project_div.style.display = "none";
card_div.style.display = "block";

function toggleProjects() {
  if (project_div.style.display === "none") {
    project_div.style.display = "block";
    card_div.style.display = "none";
    document.getElementById("nav1").innerHTML = "Home";
    
  } else {
    project_div.style.display = "none";
    card_div.style.display = "block";
    document.getElementById("nav1").innerHTML = "Projects";
  }
}

function toggleBlogs() {
  if (blogs_div.style.display === "none") {
    blogs_div.style.display = "block";
    card_div.style.display = "none";
    document.getElementById("nav2").innerHTML = "Home";
    
  } else {
    blogs_div.style.display = "none";
    card_div.style.display = "block";
    document.getElementById("nav2").innerHTML = "Blogs";
  }
}