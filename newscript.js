new TypeIt("#app", {
  strings: ["Robotics","Computer Vision","Deep Learning", "Generative AI"],
  speed: 30,
  breakLines: false,
  waitUntilVisible: true,
  lifeLike: true,
  loop: true,
  loopDelay: 3000,
  nextStringDelay: 2000
}).go();

var project_div = document.getElementById("project_div");
var card_div = document.getElementById("cardspace");
var blogs_div = document.getElementById("blogs_div");
var about_div = document.getElementById("about");
var videos_div = document.getElementById("videos_div");

blogs_div.style.display = "none";
project_div.style.display = "none";
card_div.style.display = "block";
about_div.style.display = "none";
videos_div.style.display = "none";

const checkbox = document.querySelector('#menuToggle input[type="checkbox"]');

function toggle(that){
  console.log(that.innerHTML);
  if(that.innerHTML==="<li>Projects</li>"){
    checkbox.checked = false;
    project_div.style.display = "block";
    blogs_div.style.display = "none";
    card_div.style.display = "none";
    about_div.style.display = "none";
    videos_div.style.display = "none";
  }else if (that.innerHTML==="<li>Home</li>"){
    checkbox.checked = false;
    project_div.style.display = "none";
    blogs_div.style.display = "none";
    card_div.style.display = "block";
    about_div.style.display = "none";
    videos_div.style.display = "none";
  }else if (that.innerHTML==="<li>Videos</li>"){
    checkbox.checked = false;
    project_div.style.display = "none";
    blogs_div.style.display = "none";
    card_div.style.display = "none";
    about_div.style.display = "none";
    videos_div.style.display = "block";
  }else if(that.innerHTML==="<li>Blogs</li>"){
    checkbox.checked = false;
    blogs_div.style.display = "block";
    card_div.style.display = "none";
    project_div.style.display = "none";
    about_div.style.display = "none";
    videos_div.style.display = "none";
  }else if (that.innerHTML==="<li>About</li>"){
    checkbox.checked = false;
    project_div.style.display = "none";
    blogs_div.style.display = "none";
    card_div.style.display = "none";
    about_div.style.display = "block";
    videos_div.style.display = "none";
  }
}


$(function() {
  var html = '';
  html += '<h1 class="project-title">Projects</h1>';
  html += '<div class="projects-grid">';
  $.each(project_data, function(key, value) {
    html += '<div class="card">';
    html += '<img class="card__image" src="' + value.imagelink + '" alt="' + value.title + '">';
    html += '<div class="card__title-overlay">' + value.title + '</div>';
    html += '<div class="card__content">';
    html += '<p class="card__content-title">' + value.title + '</p>';
    html += '<p class="card__description">' + value.body + '</p>';
    html += '<button class="card__button">Live Demo</button>'
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';
  $("#project_div").html(html);
});

$(function() {
  var html = '';
  html += '<h1 class="project-title">Blogs</h1>';
  html += '<div class="projects-grid">';
  $.each(blog_data, function(key, value) {
    html += '<div class="card">';
    html += '<img class="card__image" src="' + value.imagelink + '" alt="' + value.title + '">';
    html += '<div class="card__title-overlay">' + value.title + '</div>';
    html += '<div class="card__content">';
    html += '<p class="card__content-title">' + value.title + '</p>';
    html += '<p class="card__description">' + value.body + '</p>';
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';
  $("#blogs_div").html(html);
});

$(function() {
  var html = '';
  html += '<h1 class="project-title">Videos</h1>';
  html += '<div class="projects-grid">';
  $.each(blog_data, function(key, value) {
    html += '<div class="card">';
    html += '<img class="card__image" src="' + value.imagelink + '" alt="' + value.title + '">';
    html += '<div class="card__title-overlay">' + value.title + '</div>';
    html += '<div class="card__content">';
    html += '<p class="card__content-title">' + value.title + '</p>';
    html += '<p class="card__description">' + value.body + '</p>';
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';
  $("#videos_div").html(html);
});