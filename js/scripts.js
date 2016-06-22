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

var plantFriends = ["tomato", "bean-pole", "marigold", "peas", "radish"];
var plantFriendsTwo = ["kale", "onion", "peas", "brussel sprouts", "garlic", "cabbage"];
var plantFriendsThree = ["califlower", "artichoke", "beets", "lettuce", "tomato"];
var plantFriendsFour = ["cucumber", "basil", "marigold", "onion"];
var plantFriendsFive = ["asparagus", "basil", "marigold", "parsley"];
var plantFriendsSix = ["carrots", "lettuce", "sage", "radish", "beets"];
var plantFriendsSeven = ["spinach", "kale", "onion", "thyme"];
var plantFriendsEight = ["carrots", "parsley", "leeks", "cabbage", "garlic"];

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
