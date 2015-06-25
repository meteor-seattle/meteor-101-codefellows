Router.map(function() {
  
  this.route("tp1", {
    path: "/", 
    controller: "tp1Controller"
  })
  
  this.route("tp2", {
    path: "/agenda", 
    controller: "tp1Controller"
  
  })
  
  this.route("tp3", {
    path: "/basics-what-is-meteor",
    controller: "tp1Controller"
  })
  
  this.route("tp4", {
    path: "/basics-what-is-meteor",
    controller: "tp1Controller"
  })
  
  this.route("tp5", {
    path: "/setting-up-an-environment",
    controller: "tp1Controller"
  })
  
  this.route("tp6", {
    path: "/structuring-your-app",
    controller: "tp1Controller"
  })
  
  this.route("tp7", {
    path: "/structuring-your-app-supported-folders",
    controller: "tp1Controller"
  })
  
  this.route("tp8", {
    path: "/templates",
    controller: "tp1Controller"
  })
  
  this.route("tp9", {
    path: "/template-events",
    controller: "tp1Controller"
  })
  
  this.route("tp10", {
    path: "/template-helpers",
    controller: "tp1Controller"
  })
  
  this.route("tp11", {
    path: "/demo-todos",
    controller: "tp1Controller"
  })
  
  this.route("tp12", {
    path: "/demo-todos-2",
    controller: "tp1Controller"
  })
  
   this.route("tp13", {
    path: "/playtime",
    controller: "tp1Controller"
  })
   
    this.route("tp14", {
    path: "/playtime-active",
    controller: "tp1Controller"
  })
//   this.route("screen1", {
//     path: "/",
//     controller: "screen1Controller"
//   })
  
//   this.route("screen2", {
//     path: "/2",
//     controller: "screen2Controller"
//   })
})

animatedContentOut = function() {
  $("#pageContent").removeClass("animated fadeIn");
  return;
}

animatedContentIn = function() {
  $("#pageContent").addClass("animated fadeIn");
  return;
}

var prevAnimation = "null";

moveToNextPage = function(routeName, animation) {
//   $("pageContent").removeClass("animated " + prevAnimation);
//   $("#pageContent").addClass("animated " + animation);
//   $("#pageContent").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//     $("body").hide();
   Router.go(routeName);                 
    //$("body").fadeIn();
//   });
//   $("#pageContent").addClass("animated fadeIn");
}

openThisPage = function(animation) {
  
//   $("body").show();
//   setTimeout(function() {
//   $("#pageContent").toggleClass("animated " + animation);  
//   },1)
  
  
//   prevAnimation = animation;
}

// Router.onBeforeAction(animatedContentOut);
// Router.onStop(animatedContentIn);