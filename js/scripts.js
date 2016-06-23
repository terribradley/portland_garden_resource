// backend
function Plant(name, sunlight, time, space, maintenance, friend) {
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

var plantObjectArray= [artichokePlant, asparagusPlant, beanPolePlant, beetPlant, brusselPlant, cabbagePlant, carrotPlant, cauliflowerPlant, , garlicPlant, kalePlant, leekPlant, lettucePlant, onionPlant, peaPlant, radishPlant, spinachPlant, tomatoPlant, parsleyPlant, sagePlant, thymePlant, marigoldPlant];

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

// CREATES BEAN-POLE OBJECT
var allPlants = [ beans, asparagus ];

var thyme = new Plant ("thyme", "Full Sun", "Spring", "1 plant per foot", "Low", ["cabbage", "basil", "radish", "parsley"]);

var spinach = new Plant ("spinach", "Partial Sun", "Late Summer", "1 plant per foot", "Medium", ["beans", "onion", "peas", "parsley"]);

var sage = new Plant ("sage", "Full Sun", "Spring", "2 plant per foot", "Low", ["kale", "carrots", "cabbage", "brussels"]);

var radish = new Plant ("radish", "Partial Sun", "Spring", "3 plant per foot", "Low", ["beans", "beets", "cucumber", "garlic", "lettuce", "peas", "tomato"]);

var parsley = new Plant ("parsley", "Full Sun", "Spring", "2 plant per foot", "Low", ["carrots", "asparagus", "leek"]);

var leek = new Plant ("leek", "Full Sun", "Late Summer", "1 plant per foot", "Medium", ["carrots", "onino", "sage"]);

var garlic = new Plant ("garlic", "Partial Sun", "Spring", "2 plant per foot", "Low", ["brussels", "cabbage", "califlower", "beets", "lettuce", "radish", "tomato"]);

var cucumber = new Plant ("cucumber", "Full Sun", "Early Summer", "2 plant per foot", "Low", ["beans", "cabbage", "kale", "lettuce", "marigold", "tomato", "radish"]);

var califlower = new Plant ("califlower", "Full Sun", "Early Summer", "1 plant per foot", "High", ["artichoke", "beans", "beets", "cabbage", "garlic", "lettuce", "sage", "spinach"]);

var cabbage = new Plant ("cabbage", "Partial Sun", "Late Summer", "1 plant per foot", "Medium", ["artichoke", "beets", "cucumber", "garlic", "sage", "thyme", "spinach"]);

var brussels = new Plant ("brussels", "Partial Sun", "Late Summer", "2 plant per foot", "Medium", ["artichoke", "beans", "garlic", "sage", "onion", "peas", "spinach", "thyme"]);

var artichoke = new Plant ("artichoke", "Full Sun", "Early Summer", "1 plant per foot", "High", ["brussels", "califlower", "kale"]);



// NOT WORKING, SORTING THROUGH
// function searchForPlantObject(plantName){
//   var plantObject;
//   allPlants.forEach(function(plantObject) {
//     debugger;
//   // for (this.name in allPlants) {
//     if (plantName === plantObject.name) {
//       return plantObject;
//       alert(plantObject);
//     }
//   });
  // }
// };


// var beanPolePlant = {
//   name:"BEAN-POLES",
//   sunlight:"Full sun",
//   time: "Spring",
//   space:"2 plants per foot",
//   maintenance:"Low",
//   // type:"Vegetable",
//   friend: ["tomato", "marigold", "peas", "radish"]
// }
// var beetPlant = {
//   name:"BEETS",
//   sunlight:"Full sun",
//   type:"Vegetable",
//   space:"1 plants per foot",
//   maintanence:"Medium",
//   time:"Early-summer"
// }
// var carrotPlant = {
//   name:"CARROTS",
//   sunlight:"Partial sun",
//   type:"Vegetable",
//   space:"2 plants per foot",
//   maintanence:"Low",
//   time:"Early-summer"
// }
// var kalePlant = {
//   name:"KALE",
//   sunlight:"Full sun",
//   type:"Vegetable",
//   space:"1 plants per foot",
//   maintanence:"Medium",
//   time:"Spring"
// }
// var lettucePlant = {
//   name:"LETTUCE",
//   sunlight:"Full sun",
//   type:"Vegetable",
//   space:"2 plants per foot",
//   maintanence:"Low",
//   time:"Spring"
// }
// var onionPlant = {
//   name:"ONIONS",
//   sunlight:"Partial",
//   type:"Vegetable",
//   space:"2 plants per foot",
//   maintanence:"Low",
//   time:"Spring"
// }
// var peaPlant = {
//   name:"PEAS",
//   sunlight:"Full sun",
//   type:"Vegetable",
//   space:"3 plants per foot",
//   maintanence:"Low",
//   time:"Spring"
// }
// var tomatoPlant = {
//   name:"TOMATOES",
//   sunlight:"Full sun",
//   type:"Vegetable",
//   space:"1 plants per foot",
//   maintanence:"Medium",
//   time:"Late summer"
// }
// var marigoldPlant = {
//   name:"MARIGOLDS",
//   sunlight:"Full sun",
//   type:"Plant",
//   space:"3 plants per foot",
//   maintanence:"Low",
//   time:"Late summer"
// }
// var basilPlant = {
//   name:"BASIL",
//   sunlight:"Full sun",
//   type:"Plant",
//   space:"3 plants per foot",
//   maintanence:"Low",
//   time:"Late summer"
// }

var friendsOfChosen = [];

Plant.prototype.myFriend = function(choice) {
  for ( var i = 0 ; i < this.friend.length ; i++ ) {
    if (choice === this.friend[i] ){
      friendsOfChosen.push(this.friend);
      console.log(friendsOfChosen);
    } else {
      alert("oops! no friends found");
    }
  }
};



function box2Populate (inputfrombox1){

  for ( var i = 0 ; i < inputfrombox1.length ; i++ ) {
    var poppedFriend = inputfrombox1.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown2').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};

$(document).ready(function(){

  $("#dropdown1").change(function(event){
    var chosenPlant = $("#dropdown1").val();
    $("#dropdown1").hide();
    $("#gardenbox-one").text(chosenPlant);
    $("#gardenbox-one").addClass("seedling-one");

    searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);

    box2Populate(friendsOfChosen);
  });
});
