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
// var dropDownChoice = ;
var newList = [];

function myFriend(choice) {
  for ( var i = 0 ; i < plantFriends.length ; i++ ) {
    if (choice === plantFriends[i] ){
      plantFriends.splice(i, 1);
      // alert(plantFriends);
      newList.push(plantFriends);
    }
    // else if ($("#dropdown1").val() === plantFriendsTwo[i] ) {
    //   var removed = plantFriendsTwo.slice(i, 0);
    //   alert(plantFriendsTwo);
    // }
  }
};

function box2Populate (inputfrombox1){
  for ( var i = 0 ; i < inputfrombox1.length ; i++ ) {
    $("#dropdown2").append("<option value=\"" + inputfrombox1[i] + ">" + inputfrombox1[i] + "</option>");
  debugger;
  }
};

var plantFriends = ["tomato", "bean-pole", "marigold"];
var plantFriendsTwo = ["peas", "radish"];

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
// FOR IN STATEMENT TO POPULATE MODAL USING A PROTOTYPE(spitData) EQUATION IS BELOW, BUT IT DOESNT WORK AS A PROTOTYPE YET
  // $("#bean-pole").click(function(event){
  //   event.preventDefault();
  //   for (var prop in beanPolePlant) {
  //     $("#plant-properties").append(prop, ": ", beanPolePlant[prop], "<br>");
  //   }
  // });

// Plant.prototype.spitData = function () {
//
// };

  $("#dropdown1").change(function(event){
    var myChoice = $("#dropdown1").val();
    myFriend(myChoice);
    box2Populate(newList);
  });
});
