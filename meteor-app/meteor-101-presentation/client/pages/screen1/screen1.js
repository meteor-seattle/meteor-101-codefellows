screen1Controller = RouteController.extend({ 
  layoutTemplate: "CenteredTopic",
  action: function() {
    
    if(this.ready()){
//       $("body").fadeIn();
//       this.render.layout();
//       $("#pageContent").addClass("animated fadeIn");
      this.render();
//       $("body").addClass("animated fadeIn")
//       $("body").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { 
//       alert('i was called')  
//       })
      
    }
    
  },
  onAfterAction: function() {
//    openThisPage("fadeIn");
//     $("body").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { 
//       $("body").removeClass("animated fadeIn");
//     });  
  }
})

Template.screen1.rendered = function() {
  $("#pageContent").on("click", function() {
//     moveToNextPage("screen2", "fadeOut")
    Router.go("screen2")
  })
}
