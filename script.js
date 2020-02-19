new TypeIt("#app", {
  strings: ["IoT Engineer","Robotics Engineer","Electronics Hobbyist","Web Developer"],
  speed: 75,
  breakLines: false,
  waitUntilVisible: true,
  lifeLike: true,
  loop: true,
  loopDelay: 3000,
  nextStringDelay: 2000
}).go();

$("projects").ready(function(){
  $.ajax({url: "/assets/data.json", dataType: 'jsonp', success: function(result){
          var blogs = JSON.parse(result.projects);
          var blog_list = document.getElementById("projects-list");
          blogs.forEach(function(item) {
              blog_list.innerHTML += `
              <div class="blog-item">
                  <h2><a target="_blank" href="${item.url}">${item.title}</a></h2>
                  <p>${item.description}</p>
              </div>
              `
          })
  }});
});