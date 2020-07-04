//////////========== Para iniciar tooltipped ============//////////
var elems = document.querySelectorAll('.tooltipped');
var instances = M.Tooltip.init(elems, {position: 'right'});




  var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {startingTop: '100%'});






//////////========== Para sidenav icon ============//////////

(function($) {
  "use strict";
// hacer toggle en sidenav
$("#sidenavToggler").click(function(e) {
   e.preventDefault();
    console.log("holi");
    $("body").toggleClass("sidenav-toggled");
    $(".sidenav").toggleClass("collapsed");
    $(".logo").toggleClass("collapsed");
    $(".material-tooltip").toggleClass("show");
    $(".slider.fullscreen").toggleClass("calc100-229px");
    
    $(".sidenav .collapsible-header span").toggleClass("hide");
    $(".sidenav .collapsible-header i").toggleClass("hide");
    $(".sidenav .no-collapsible span").toggleClass("hide");
    $(".sidenav .no-collapsible i").toggleClass("hide");
    $(".sidenav .collapsible .active .collapsible-body").toggleClass("hide");
    $(".slider .slides li .caption").toggleClass("left-13");
    
  });

  // Forzar toggled, remover cuando se haga click en collapsed 
  $(".sidenav .collapsible-header").click(function(e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
    $(".sidenav").removeClass("collapsed");
    $(".logo").removeClass("collapsed");
    $(".sidenav .collapsible-header span").removeClass("hide");
    $(".sidenav .collapsible-header i").removeClass("hide");
    $(".sidenav .no-collapsible span").removeClass("hide");
    $(".sidenav .no-collapsible i").removeClass("hide");
    $(".sidenav .collapsible .active .collapsible-body").removeClass("hide");
  });   

  
})(jQuery); 






document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {
      classes: "",
  });
});



