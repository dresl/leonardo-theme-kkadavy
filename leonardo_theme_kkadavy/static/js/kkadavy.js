// nav affix

$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

// responsive menu

function DetectContainer() {
    if ($('.navbar-static-top').width() < 700){
        var list = document.getElementsByClassName("navbar navbar-static-top")[0];
        var selected_div = list.getElementsByTagName('DIV')[0];
        selected_div.classList.add('container-fluid');
    } else {
        var list = document.getElementsByClassName("navbar navbar-static-top")[0];
        var selected_div = list.getElementsByTagName('DIV')[0];
        selected_div.classList.add('container');
    }
}
window.onload = function () {
    DetectContainer();
}

window.setInterval(function(){
    if ($('.navbar-static-top').width() < 700){
        function ResponsiveClassContainer() {
            var list = document.getElementsByClassName("navbar navbar-static-top")[0];
            var selected_div = list.getElementsByTagName('DIV')[0];
            selected_div.classList.add('container-fluid');
        }
        window.addEventListener("resize", ResponsiveClassContainer);
    } else {
        function ResponsiveClassContainer() {
            var list = document.getElementsByClassName("navbar navbar-static-top")[0];
            var selected_div = list.getElementsByTagName('DIV')[0];
            selected_div.classList.remove('container-fluid');
            selected_div.classList.add('container');
        }
        window.addEventListener("resize", ResponsiveClassContainer);
    }
}, 500);

// vide.js

 $(document).ready(function () {
   $('#knedliky').vide({
     'mp4': 'static/videos/fruity',
     'poster': 'static/videos/fruity',
   });
 });

  $(document).ready(function () {
   $('#header').vide({
     'mp4': 'static/videos/fruity',
     'poster': 'static/videos/fruity',
   });
 });
