// backend
function Plant(sunlight, time, ) {
  // , time, space, care, color
  // this.plantName = name;
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
  plantName: "bean-pole",
  plantSun: "full sun",
  plantType: "vegetable",
  plantSpace: "2 plants per foot",
  plantMaintanence: "low",
  plantTime: "spring"
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

var myFriend = function();
  for ( i = 0 ; i < plantFriends.length ; i++ ) {
    if ($(".DROPDOWN").val() === plantFriends[i] ){
      var removed = plantFriends.splice(i, 0);
      return plantFrinds;
    } else if ($".DROPDOWN".val() === plantFriendsTwo[i] ){
      var removed = plantFriendsTwo.splice(i,0);
    }
  }

var plantFriends = ["tomato", "bean-pole", "marigold"];
var plantFriendsTwo = ["", "", ""]

// Plant.prototype.plantFacts = function() {
//   return "please give this " + this.plantName + " about " + plantSpace
// }

$(document).ready(function(){

  $("#bean-pole").click(function(event){
    event.preventDefault();
    $(".modal-plant-title").text(beanPolePlant.plantName);
    $(".sun").text(this.plantTime);
    $(".time").text(this.plantTime);
    $("#plant-modal").modal("show");
  });

});

//
