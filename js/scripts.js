// backend
function Plant(name, sunlight, time, space, maintenance, friend) {
  this.plantName = name;
  this.plantSun = sunlight;
  // this.plantType = type;
  this.plantTime = time;
  this.plantSpace = space;
  this.plantMaintenance = maintenance;
  this.friend = friend;
  // this.plantColor = color;
}

// CREATES VEGGIE OBJECTS
var beans = new Plant ("beans", "Full Sun", "Spring", "2 plants per foot", "Low", ["tomato", "marigold", "peas", "radish"]);

var asparagus = new Plant ("asparagus", "Partial Sun", "Spring", "1 plant per foot", "Medium", ["asparagus", "basil", "marigold", "parsley"]);

var beets = new Plant ("beets","Full Sun","Early-summer","1 plants per foot","Medium", );

var carrots = new Plant ("carrots","Partial Sun","Early-summer","2 plants per foot","Low", );

var kale = new Plant ("kale","Full Sun","Spring","1 plants per foot","Medium");

var lettuce = new Plant ("lettuce","Full Sun","Spring","2 plants per foot","Low");

var onions = new Plant ("onions","Partial Sun","Spring","2 plants per foot","Low");

var peas = new Plant ("peas","Full Sun","Spring","3 plants per foot","Low"
);

var tomatoes = new Plant ("tomatoes","Full Sun","Late summer","1 plants per foot","Medium");

var marigolds = new Plant ("marigolds","Full Sun","Late summer","3 plants per foot","Low");

var basil = new Plant ("basil","Full Sun","Late summer","3 plants per foot","Low");

var allPlants = [ beans, asparagus, carrots, , , , , , , , , ];

var chosenPlantObject;
var indexPlantObject;

// THIS FUCKING WORKS!!!!! INPUT USER STRING FROM CLICK, RETURNS OBJECT OF THE VEGGIE CHOSEN
function searchForPlantObject(inputName){
  for (var i = 0 ; i < allPlants.length ; i++){
    if (inputName === (allPlants[i].plantName)) {
      return allPlants[i];
    }
  }
};

// DETAILS ABOUT VEGGIE OBJECTS
// var beanPolePlant = {
//   name:"BEAN-POLES",
//   sunlight:"Full Sun",
//   time: "Spring",
//   space:"2 plants per foot",
//   maintenance:"Low",
//   // type:"Vegetable",
//   friend: ["tomato", "marigold", "peas", "radish"]
// }
// var beetPlant = {
//   name:"BEETS",
//   sunlight:"Full Sun",
//   type:"Vegetable",
//   space:"1 plants per foot",
//   maintanence:"Medium",
//   time:"Early-summer"
// }
// var carrotPlant = {
//   name:"CARROTS",
//   sunlight:"Partial Sun",
//   type:"Vegetable",
//   space:"2 plants per foot",
//   maintanence:"Low",
//   time:"Early-summer"
// }
// var kalePlant = {
//   name:"KALE",
//   sunlight:"Full Sun",
//   type:"Vegetable",
//   space:"1 plants per foot",
//   maintanence:"Medium",
//   time:"Spring"
// }
// var lettucePlant = {
//   name:"LETTUCE",
//   sunlight:"Full Sun",
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
//   sunlight:"Full Sun",
//   type:"Vegetable",
//   space:"3 plants per foot",
//   maintanence:"Low",
//   time:"Spring"
// }
// var tomatoPlant = {
//   name:"TOMATOES",
//   sunlight:"Full Sun",
//   type:"Vegetable",
//   space:"1 plants per foot",
//   maintanence:"Medium",
//   time:"Late summer"
// }
// var marigoldPlant = {
//   name:"MARIGOLDS",
//   sunlight:"Full Sun",
//   type:"Plant",
//   space:"3 plants per foot",
//   maintanence:"Low",
//   time:"Late summer"
// }
// var basilPlant = {
//   name:"BASIL",
//   sunlight:"Full Sun",
//   type:"Plant",
//   space:"3 plants per foot",
//   maintanence:"Low",
//   time:"Late summer"
// }

var friendsOfChosen = [];

Plant.prototype.myFriend = function(choice) {
  debugger;
    friendsOfChosen.push(this.friend);
}

// THIS FUNCTION WORKS TO REFERENCE THE FRIENDS
// function myFriend(choice) {
//   debugger;
//   for ( var i = 0 ; i < beanPolePlant.friend.length ; i++ ) {
//     if (choice === beanPolePlant.friend[i] ){
//       friendsOfChosen.push(beanPolePlant.friend);
//       console.log(friendsOfChosen);
//     } else {
//       alert("oops! no friends found");
//     }
//   }
// };

// WORKS TO REMOVE SELECTED ITEM FROM ARRAY
// function myFriend(choice) {
//   for ( var i = 0 ; i < plantFriends.length ; i++ ) {
//     if (choice === plantFriends[i] ){
//       plantFriends.splice(i, 1);
//       // alert(plantFriends);
//       newList.push(plantFriends);
//     }
//     // else if ($("#dropdown1").val() === plantFriendsTwo[i] ) {
//     //   var removed = plantFriendsTwo.slice(i, 0);
//     //   alert(plantFriendsTwo);
//     // }
//   }
// };

function box2Populate (arrayofFriends){
  for ( var i = 0 ; i < arrayofFriends.length ; i++ ) {
    var poppedFriend = arrayofFriends.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown2').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};

$(document).ready(function(){
// USER CLICKS ON VEGGIE, IDENTIFIES HTML VALUE
  $("ul.clicked li").click(function(event){
    event.preventDefault();
    debugger;
    var indexPlant = this.textContent;

    var indexPlantObject = searchForPlantObject(indexPlant);

    $(".modal-plant-title").text(indexPlantObject.plantName);
    debugger;
    $(".sun").text(indexPlantObject.plantSun);
    $(".space").text(indexPlantObject.plantSpace);
    $(".maintenance").text(indexPlantObject.plantMaintenance);
    $(".time").text(indexPlantObject.plantTime);
    $("#plant-modal").modal("show");
  });
// SENDS PLANT INFO TO MODAL


  $("#dropdown1").change(function(event){
    var chosenPlant = $("#dropdown1").val();

    debugger;

    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box2Populate(friendsOfChosen);
  });
});
