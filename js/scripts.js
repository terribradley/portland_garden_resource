// backend
function Plant(name, sunlight, time, space, maintenance) {
  this.plantName = name;
  this.plantSun = sunlight;
  this.plantTime = time;
  this.plantSpace = space;
  this.plantMaintenance = maintenance;
}

// Plant.prototype.plantinfo = function() {
//   var elem = document.getElementById("bean-pole");
//   $("#plant-index").click(function(){
//     $(".modal-plant-title").text(this.name);
//     $(".sun").text(this.sunlight);
//     $(".space").text(this.space);
//     $(".maintenance").text(this.maintenance);
//     $(".time").text(this.time);
//     $("#plant-modal").modal("show");

var plantidArray=["artichoke", "asparagus","bean-pole","beet", "brussel-sprout", "cabbage", "carrot", "cauliflower", "cucumber", "garlic", "kale", "leek", "lettuce", "onion", "pea", "radish", "spinach", "tomato", "parsley", "sage", "thyme", "marigold" ];

var plantObjectArray= [artichokePlant, asparagusPlant, beanPolePlant, beetPlant, brusselPlant, cabbagePlant, carrotPlant, cauliflowerPlant, cumcumberPlant, garlicPlant, kalePlant, leekPlant, lettucePlant, onionPlant, peaPlant, radishPlant, spinachPlant, tomatoPlant, parsleyPlant, sagePlant, thymePlant, marigoldPlant];

var plantClick = (function(id, plantObject) {
$(id).click(function() {
  $(".modal-plant-title").text(plantObject.name);
  $(".sun").text(plantObject.sunlight);
  $(".time").text(plantObject.time);
  $(".space").text(plantObject.space);
  $(".maintenance").text(plantObject.maintenance);
  $("#plant-modal").modal("show");

for (i = 0; i < plantidArray.length; i ++){
  plantClick(plantidArray[i], plantObjectArray[i]);
}
});
});
var asparagusPlant = {
  name: "ASPARAGUS",
  sunlight: "Partial sun",
  time: "Spring",
  space: "1 plant per foot",
  maintenance: "Medium",
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
var artichokePlant = {
  name: "ARTICHOKE",
  sunlight: "Full sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "HIGH",
  time: "Early Summer"
}
var brusselPlant = {
  name: "BRUSSEL SPROUTS",
  sunlight: "Partial sun",
  type: "Vegetable",
  space: "2 plant per foot",
  maintanence: "Medium",
  time: "Late Summer"
}
var cabbagePlant = {
  name: "CABBAGE",
  sunlight: "Partial sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "Medium",
  time: "Late Summer"
}
var cauliflowerPlant = {
  name: "CAULIFLOWER",
  sunlight: "Full sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "High",
  time: "Early Summer"
}
var cucumberPlant = {
  name: "CUCUMBER",
  sunlight: "Full sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "Low",
  time: "Early Summer"
}
var garlicPlant = {
  name: "garlic",
  sunlight: "Partial sun",
  type: "Vegetable",
  space: "2 plant per foot",
  maintanence: "Low",
  time: "Spring"
}
var leekPlant = {
  name: "LEEKS",
  sunlight: "Full sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "Medium",
  time: "Late Summer"
}
var parsleyPlant = {
  name: "PARSLEY",
  sunlight: "Full sun",
  type: "Plant",
  space: "2 plant per foot",
  maintanence: "Low",
  time: "Spring"
}
var radishPlant = {
  name: "radish",
  sunlight: "Partial sun",
  type: "Vegetable",
  space: "3 plant per foot",
  maintanence: "Low",
  time: "Spring"
}
var sagePlant = {
  name: "ASPARAGUS",
  sunlight: "Full sun",
  type: "Plant",
  space: "1 plant per foot",
  maintanence: "Low",
  time: "Spring"
}
var spinachPlant = {
  name: "SPINACH",
  sunlight: "Partial sun",
  type: "Vegetable",
  space: "1 plant per foot",
  maintanence: "Medium",
  time: "Late Summer"
}
var thymePlant = {
  name: "THYME",
  sunlight: "Full sun",
  type: "Plant",
  space: "1 plant per foot",
  maintanence: "Low",
  time: "Spring"
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
 plantClick(ids, plantObjects);

$("#dropdown1").change(function(){
$("#gardenbox-one").addclass(plant-one);
});
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

  // $("#dropdown1").change(function(event){
  //   var myChoice = $("#dropdown1").val();
  //   myFriend(myChoice);
  //   box2Populate(newList);
//   });
// });
