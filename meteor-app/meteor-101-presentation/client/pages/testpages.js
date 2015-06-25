tp1Controller = RouteController.extend({ 
  layoutTemplate: "layout"
});

tp2Controller = RouteController.extend({ 
  layoutTemplate: "layout"
});

// Template.tp1.events({
//   "click #pageContent": function(){
//     Router.go("tp2");
//  }
// })



Template.layout.events({
  "click .nextSlide": function(e,t){
    
    var elem = e.currentTarget;
    var nextSlideRoute = $(elem).attr("nextSlide")
    
    $("#moveSlide").focus();
    
    Router.go(nextSlideRoute);
  }, 
  "keydown #moveSlide": function(e,t) {
    
    if(e.keyCode == 39 || e.keyCode == 37){
      if($(".nextSlide").length > 0)
      {
        var elem = $(".nextSlide").first();
        if(e.keyCode == 39)
          $(elem).click();
        if(e.keyCode == 37)
        {
          var prevSlide = $(elem).attr("prevSlide");
          Router.go(prevSlide)
        }
      }
    }
      
  }
})

Template.tp2.events({
  "click #pageContent": function(){
    Router.go("tp1");
 }
})
Template.layout.transitionOptions = function(from, to, element) {
  return {
    with: "right-to-left",
    extra: "fadeIn"
  }
}

Template.registerHelper("showTemplateSnippet", function() {
  var snippet = "<template>";
  
  snippet += "</template>"
})

Template.tp12.helpers({
  height: function() {
    return "height:" + $(window).height() + "px";
  }
})

Template.tp14.helpers({
  height: function() {
    return "height:" + $(window).height() + "px";
  }
})


Template.tp12.events({
  "click #endDemo": function() {
    $("#exitDemo").addClass("nextSlide");
    $("#exitDemo").click();
  }
})

Template.tp14.events({
  "click #endDemo": function() {
    $("#exitDemo").addClass("nextSlide");
    $("#exitDemo").click();
  }
})

Momentum.registerPlugin("customC", function(options){
  console.log(options)
   return {
    insertElement: function(node, next, done) {
      var inCss = $(node).attr("in")
      next.parentNode.insertBefore(node, next);
      $(node).addClass(inCss);
      console.log("insertElement")
      console.log(node);
      console.log(next)
      console.log(done)
      
      done();
    },
    moveElement: function(node, next, done) {
      console.log("moveElement")
      console.log(node);
      next.parentNode.insertBefore(node, next);
      done();
    },
    removeElement: function(node, done) {
      console.log("removeElement")
      console.log(node);
      var outCss = $(node).attr("out")
//       node.parentNode.removeChild(node);
      $(node).css("position","absolute");
      $(node).css("width", "100%");
      $(node).addClass(outCss)
      $(node).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { 
        $(node).remove();
      })
//       $(node).remove();
      done();
    }
  }
})