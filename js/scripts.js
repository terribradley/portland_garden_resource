// BACKEND LOGIC
function Plant(name, sunlight, time, space, maintenance, friend) {
  this.plantName = name;
  this.plantSun = sunlight;
  this.plantTime = time;
  this.plantSpace = space;
  this.plantMaintenance = maintenance;
  this.friend = friend;
}

// CREATES VEGGIE OBJECTS
var beans = new Plant ("beans", "Full Sun", "Spring", "2 plants per foot", "Low", ["tomato", "marigold", "peas", "radish"]);

var asparagus = new Plant ("asparagus", "Partial Sun", "Spring", "1 plant per foot", "Medium", ["asparagus", "basil", "marigold", "parsley"]);

var beets = new Plant ("beets","Full Sun","Early-summer","1 plants per foot","Medium", );

var carrots = new Plant ("carrots","Partial Sun","Early-summer","2 plants per foot","Low", );

var kale = new Plant ("kale","Full Sun","Spring","1 plants per foot","Medium");

var lettuce = new Plant ("lettuce","Full Sun","Spring","2 plants per foot","Low");

var onions = new Plant ("onions","Partial Sun","Spring","2 plants per foot","Low");

var peas = new Plant ("peas","Full Sun","Spring","3 plants per foot","Low");

var tomatoes = new Plant ("tomatoes","Full Sun","Late summer","1 plants per foot","Medium");

var marigolds = new Plant ("marigolds","Full Sun","Late summer","3 plants per foot","Low");

var basil = new Plant ("basil","Full Sun","Late summer","3 plants per foot","Low");

var allPlants = [ beans, asparagus, carrots, , , , , , , , , ];

var chosenPlantObject;
var indexPlantObject;
var friendsOfChosen = [];

// THIS FUCKING WORKS!!!!! INPUT USER STRING FROM CLICK, RETURNS OBJECT OF THE VEGGIE CHOSEN
function searchForPlantObject(inputName) {
  for (var i = 0 ; i < allPlants.length ; i++) {
    if (inputName === (allPlants[i].plantName)) {
      return allPlants[i];
    }
  }
};

Plant.prototype.myFriend = function(choice) {
    friendsOfChosen.push(this.friend);
}

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
    var indexPlant = this.textContent;

    var indexPlantObject = searchForPlantObject(indexPlant);
// SENDS PLANT INFO TO MODAL
    $(".modal-plant-title").text(indexPlantObject.plantName);
    $(".sun").text(indexPlantObject.plantSun);
    $(".space").text(indexPlantObject.plantSpace);
    $(".maintenance").text(indexPlantObject.plantMaintenance);
    $(".time").text(indexPlantObject.plantTime);
    $("#plant-modal").modal("show");
  });

// COMPANION PLANTER FUNCTIONALITY
  $("#dropdown1").change(function(event){
    var chosenPlant = $("#dropdown1").val();

    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box2Populate(friendsOfChosen);
  });
});
