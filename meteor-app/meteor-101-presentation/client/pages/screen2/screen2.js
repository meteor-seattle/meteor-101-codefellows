screen2Controller = RouteController.extend({ 
  template: "screen2",
  layoutTemplate: "topwbullets",
  yieldTemplates: {
    "screen2Title" : {to: "slideTitle"},
    "screen2Bullets": {to: "slideBullets"}
  },
  onAfterAction: function() {
    openThisPage("fadeInLeft");
    
  }
})

Template.screen2Title.rendered = function() {
  $("#pageContent").on("click", function(e,t) {
    e.preventDefault();
    moveToNextPage("screen1","fadeOut")
  })
}