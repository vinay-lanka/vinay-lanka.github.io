new TypeIt("#app", {
  strings: ["Certified Robotics Engineer","Embedded Systems Developer","Full-Stack Web Developer","IoT Engineer"],
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

blogs_div.style.display = "none";
project_div.style.display = "none";
card_div.style.display = "block";

function toggle(that){
  console.log(that.innerHTML);
  if(that.innerHTML==="Projects"){
    project_div.style.display = "block";
    blogs_div.style.display = "none";
    card_div.style.display = "none";
    document.getElementById("nav1").innerHTML = "Home";
    document.getElementById("nav2").innerHTML = "Videos/Blogs";
  }else if (that.innerHTML==="Home"){
    project_div.style.display = "none";
    blogs_div.style.display = "none";
    card_div.style.display = "block";
    document.getElementById("nav1").innerHTML = "Projects";
    document.getElementById("nav2").innerHTML = "Videos/Blogs";
  }else if(that.innerHTML==="Videos/Blogs"){
    blogs_div.style.display = "block";
    card_div.style.display = "none";
    project_div.style.display = "none";
    document.getElementById("nav1").innerHTML = "Home";
    document.getElementById("nav2").innerHTML = "Projects";
  }
}

$(function() {
    // console.log(project_data);
  var html = ''
  html+= '<span style="font-size:40px; color: #efefef;">Projects</span><br><br>';
  html+= '<center>'
  $.each(project_data, function(key, value) {
    html+= '<div class="project-card">';
    html+= '<div class="text">';
    html+= '<h3 style="text-align: left;">' + value.title + '</h3><br>'
    html+= value.body
    html+= '<br><br><a href="' + value.link + '">Check it out!</a>'
    html+= '</div>'  
    html+= '<div>'
    html+= '<img class="responsive" src="' + value.imagelink + '" height="300" width="533">'
    html+= '</div>'
    html+= '</div>'
  });
  html+= '</center>'
  $("#project_div").html(html);
  // console.log(html);
});

$(function() {
  console.log(blog_data);
  var blog_html = ''
  blog_html+= '<span style="font-size:40px; color: #efefef;">Blogs</span><br><br>';
  blog_html+= '<center>'
  $.each(blog_data, function(key, value) {
    blog_html+= '<div class="project-card">';
    blog_html+= '<div class="text">';
    blog_html+= '<h3 style="text-align: left;">' + value.title + '</h3><br>'
    blog_html+= value.body
    blog_html+= '<br><br><a href="' + value.link + '">Check it out!</a>'
    blog_html+= '</div>'  
    blog_html+= '<div>'
    blog_html+= '<img class="responsive" src="' + value.imagelink + '"height="300" width="533">'
    blog_html+= '</div>'
    blog_html+= '</div>'
  });
  blog_html+= '</center>'
  $("#blogs_div").html(blog_html);
  // console.log(html);
});