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


var asparagusPlant = {
  name: "ASPARAGUS",
  sunlight: "Partial sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "Medium",
  time: "Spring"
}
var beanPolePlant = {
  name:"BEAN-POLES",
  sunlight:"Full sun",
  type:"Vegetable",
  space:"2 plants per foot",
  maintenance:"Low",
  time: "Spring"
}
var beetPlant = {
  name:"BEETS",
  sunlight:"Full sun",
  type:"Vegetable",
  space:"1 plants per foot",
  maintanence:"Medium",
  time:"Early-summer"
}
var carrotPlant = {
  name:"CARROTS",
  sunlight:"Partial sun",
  type:"Vegetable",
  space:"2 plants per foot",
  maintanence:"Low",
  time:"Early-summer"
}
var kalePlant = {
  name:"KALE",
  sunlight:"Full sun",
  type:"Vegetable",
  space:"1 plants per foot",
  maintanence:"Medium",
  time:"Spring"
}
var lettucePlant = {
  name:"LETTUCE",
  sunlight:"Full sun",
  type:"Vegetable",
  space:"2 plants per foot",
  maintanence:"Low",
  time:"Spring"
}
var onionPlant = {
  name:"ONIONS",
  sunlight:"Partial",
  type:"Vegetable",
  space:"2 plants per foot",
  maintanence:"Low",
  time:"Spring"
}
var peaPlant = {
  name:"PEAS",
  sunlight:"Full sun",
  type:"Vegetable",
  space:"3 plants per foot",
  maintanence:"Low",
  time:"Spring"
}
var tomatoPlant = {
  name:"TOMATOES",
  sunlight:"Full sun",
  type:"Vegetable",
  space:"1 plants per foot",
  maintanence:"Medium",
  time:"Late summer"
}
var marigoldPlant = {
  name:"MARIGOLDS",
  sunlight:"Full sun",
  type:"Plant",
  space:"3 plants per foot",
  maintanence:"Low",
  time:"Late summer"
}
var basilPlant = {
  name:"BASIL",
  sunlight:"Full sun",
  type:"Plant",
  space:"3 plants per foot",
  maintanence:"Low",
  time:"Late summer"
}

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
//   return "please give this " + this.name + " about " + plantSpace
// }

$(document).ready(function(){

  $("#bean-pole").click(function(event){
    event.preventDefault();
    $(".modal-plant-title").text(beanPolePlant.name);
    $(".sun").text(beanPolePlant.sunlight);
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
