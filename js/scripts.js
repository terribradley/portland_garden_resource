// backend
function Plant(name, sunlight, time, space, maintenance, friend) {
  this.plantName = name;
  this.plantSun = sunlight;
  this.plantTime = time;
  this.plantSpace = space;
  this.plantMaintenance = maintenance;
}

var plantObjectArray= [artichokePlant, asparagusPlant, beanPolePlant, beetPlant, basil, brusselPlant, cabbagePlant, carrotPlant, cauliflowerPlant, , garlicPlant, kalePlant, leekPlant, lettucePlant, onionPlant, peaPlant, radishPlant, spinachPlant, tomatoPlant, parsleyPlant, sagePlant, thymePlant, marigoldPlant];

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


var beans = new Plant ("beans", "Full Sun", "Spring", "2 plants per foot", "Low", ["tomato", "marigold", "peas", "radish"]);

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

var thyme = new Plant ("thyme", "Full Sun", "Spring", "1 plant per foot", "Low" ["brussels", "cabbage", "cauliflower","kale"]);


var chosenPlantObject;
var indexPlantObject;
var friendsOfChosen = [];
// THIS FUCKING WORKS!!!!! INPUT USER STRING FROM CLICK, RETURNS OBJECT OF THE VEGGIE CHOSEN
function searchForPlantObject(inputName){
  for (var i = 0 ; i < allPlants.length ; i++){
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

    $(".modal-plant-title").text(indexPlantObject.plantName);
    $(".sun").text(indexPlantObject.plantSun);
    $(".space").text(indexPlantObject.plantSpace);
    $(".maintenance").text(indexPlantObject.plantMaintenance);
    $(".time").text(indexPlantObject.plantTime);
    $("#plant-modal").modal("show");
  });

  $("#dropdown1").change(function(event){
    var chosenPlant = $("#dropdown1").val();
    $("#dropdown1").hide();
    $("#gardenbox-one").text(chosenPlant);
    $("#gardenbox-one").addClass("seedling-one");

    var chosenPlantObject = searchForPlantObject(chosenPlant);

    chosenPlantObject.myFriend(chosenPlant);

    box2Populate(friendsOfChosen);
  });
});
