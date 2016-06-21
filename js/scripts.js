// backend
function Plant(name, sunlight, time, space, maintenance) {
  this.plantName = name;
  this.plantSun = sunlight;
  // this.plantType = type;
  this.plantTime = time;
  this.plantSpace = space;
  this.plantMaintenance = maintenance;
  // this.plantColor = color;
}


// var asparagusPlant = {
//   plantName: "asparagus",
//   plantSun: "partial sun",
//   plantType: "vegetable",
//   plantSpace: "1 plant per foot",
//   plantMaintanence: "medium",
//   plantTime: "spring"
// }
var beanPolePlant = {
  name: "bean-pole",
  sun: "full sun",
  type: "vegetable",
  space: "2 plants per foot",
  maintenance: "low",
  time: "spring"
}
// var beetPlant = {
//   plantName: "beets",
//   plantSun: "full sun",
//   plantType: "vegetable",
//   plantSpace: "1 plants per foot",
//   plantMaintanence: "medium",
//   plantTime: "early-summer"
// }
// var carrotPlant = {
//   plantName: "carrot",
//   plantSun: "partial sun",
//   plantType: "vegetable",
//   plantSpace: "2 plants per foot",
//   plantMaintanence: "low",
//   plantTime: "early-summer"
// }
// var kalePlant = {
//   plantName: "kale",
//   plantSun: "full sun",
//   plantType: "vegetable",
//   plantSpace: "1 plants per foot",
//   plantMaintanence: "medium",
//   plantTime: "spring"
// }
// var lettucePlant = {
//   plantName: "lettuce",
//   plantSun: "full sun",
//   plantType: "vegetable",
//   plantSpace: "2 plants per foot",
//   plantMaintanence: "low",
//   plantTime: "spring"
// }
var onionPlant = {
  plantName: "onion",
  plantSun: "partial",
  plantType: "vegetable",
  plantSpace: "2 plants per foot",
  plantMaintanence: "low",
  plantTime: "spring"
}
// var peaPlant = {
//   plantName: "peas",
//   plantSun: "full sun",
//   plantType: "vegetable",
//   plantSpace: "3 plants per foot",
//   plantMaintanence: "low",
//   plantTime: "spring"
// }
var tomatoPlant = {
  plantName: "tomato",
  plantSun: "full sun",
  plantType: "vegetable",
  plantSpace: "1 plants per foot",
  plantMaintanence: "medium",
  plantTime: "late summer"
}
var marigoldPlant = {
  plantName: "marigold",
  plantSun: "full sun",
  plantType: "plant",
  plantSpace: "3 plants per foot",
  plantMaintanence: "low",
  plantTime: "late summer"
}
// var basilPlant = {
//   plantName: "basil",
//   plantSun: "full sun",
//   plantType: "plant",
//   plantSpace: "3 plants per foot",
//   plantMaintanence: "low",
//   plantTime: "late summer"
// }

// var myFriend = function(){
//   for ( i = 0 ; i < plantFriends.length ; i++ ) {
//     if ($(".DROPDOWN").val() === plantFriends[i] ){
//       var removed = plantFriends.splice(i, 0);
//       return plantFriends;
//     } else if ($".DROPDOWN".val() === plantFriendsTwo[i] ){
//       var removed = plantFriendsTwo.splice(i,0);
//     }
//   }
//   });

var plantFriends = ["tomato", "bean-pole", "marigold"];
var plantFriendsTwo = ["", "", ""]

// Plant.prototype.plantFacts = function() {
//   return "please give this " + this.plantName + " about " + plantSpace
// }

$(document).ready(function(){

  $("#bean-pole").click(function(event){
    event.preventDefault();
    $(".modal-plant-title").text(beanPolePlant.name);
    $(".sun").text(beanPolePlant.sun);
    $(".space").text(beanPolePlant.space);
    $(".maintenance").text(beanPolePlant.maintenance);
    $(".time").text(beanPolePlant.time);
    $("#plant-modal").modal("show");
  });
// ON CLICK INDEX FUNCTION
  // $("#bean-pole").click(function(event){
  //   event.preventDefault();
  //   for (var prop in beanPolePlant) {
  //     $("#plant-properties").append(prop, ": ", beanPolePlant[prop], "<br>");
  //   }

  // });

// Plant.prototype.spitData = function () {
//
// };

});
