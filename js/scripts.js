// <<<< BACK END LOGIC >>>>
function Plant(name, sunlight, time, space, maintenance, friend) {
  this.plantName = name;
  this.plantSun = sunlight;
  this.plantTime = time;
  this.plantSpace = space;
  this.plantMaintenance = maintenance;
  this.friend = friend;
}

// VEGGIE OBJECTS
var thyme = new Plant ("thyme", "Full Sun", "Spring", "1 plant per foot", "Low", ["brussels", "cabbage", "cauliflower","kale"]);

var beans = new Plant ("beans", "Full Sun", "Spring", "2 plants per foot", "Low", ["tomato", "marigold", "peas", "radish"]);

var spinach = new Plant ("spinach", "Partial Sun", "Late Summer", "1 plant per foot", "Medium", ["beans", "onions", "peas", "parsley"]);

var sage = new Plant ("sage", "Full Sun", "Spring", "2 plants per foot", "Low", ["kale", "carrots", "cabbage", "brussels"]);

var radish = new Plant ("radish", "Partial Sun", "Spring", "3 plants per foot", "Low", ["beans", "beets", "cucumber", "garlic", "lettuce", "peas", "tomato"]);

var parsley = new Plant ("parsley", "Full Sun", "Spring", "2 plants per foot", "Low", ["carrots", "asparagus", "leeks"]);

var leeks = new Plant ("leeks", "Full Sun", "Late Summer", "1 plant per foot", "Medium", ["carrots", "onions", "sage"]);

var garlic = new Plant ("garlic", "Partial Sun", "Spring", "2 plants per foot", "Low", ["brussels", "cabbage", "cauliflower", "beets", "lettuce", "radish", "tomato"]);

var cucumber = new Plant ("cucumber", "Full Sun", "Early Summer", "2 plants per foot", "Low", ["beans", "cabbage", "kale", "lettuce", "marigold", "tomato", "radish"]);

var cauliflower = new Plant ("cauliflower", "Full Sun", "Early Summer", "1 plant per foot", "High", ["artichoke", "beans", "beets", "cabbage", "garlic", "lettuce", "sage", "spinach"]);

var cabbage = new Plant ("cabbage", "Partial Sun", "Late Summer", "1 plant per foot", "Medium", ["artichoke", "beets", "cucumber", "garlic", "sage", "thyme", "spinach"]);

var brussels = new Plant ("brussels", "Partial Sun", "Late Summer", "2 plants per foot", "Medium", ["artichoke", "beans", "garlic", "sage", "onions", "peas", "spinach", "thyme"]);

var artichoke = new Plant ("artichoke", "Full Sun", "Early Summer", "1 plant per foot", "High", ["brussels", "cauliflower", "kale"]);

var asparagus = new Plant ("asparagus", "Partial Sun", "Spring", "1 plant per foot", "Medium", ["asparagus", "basil", "marigold", "parsley"]);

var beets = new Plant ("beets", "Full Sun", "Early Summer", "1 plant per foot", "Medium", ["onions", "lettuce", "kale", "tomato"]);

var carrots = new Plant ("carrots", "Partial Sun", "Early Summer", "2 plants per foot", "Low", ["beans", "lettuce", "parsley", "peas", "radish", "sage"]);

var kale = new Plant ("kale", "Full Sun", "Spring", "1 plant per foot", "Medium", ["artichoke", "beets", "beans", "garlic", "lettuce", "thyme", "spinach"]);

var lettuce = new Plant ("lettuce", "Full Sun", "Spring", "2 plants per foot", "Low", ["cauliflower", "carrots", "beets", "cucumber", "radish"]);

var onions = new Plant ("onions", "Partial Sun", "Spring", "2 plants per foot", "Low", ["kale", "cabbage", "cauliflower", "leeks", "spinach", "tomato"]);

var peas = new Plant ("peas", "Full Sun", "Spring", "3 plants per foot", "Low", ["sage", "thyme", "beans", "kale", "radish", "spinach"]);

var tomato = new Plant ("tomato", "Full Sun", "Late Summer", "1 plant per foot", "Medium", ["asparagus", "basil", "carrots", "marigold", "garlic", "peas", "sage"]);

var marigold = new Plant ("marigold", "Full Sun", "Late Summer", "3 plants per foot", "Low", ["tomato", "beans", "cucumber"]);

var basil = new Plant ("basil","Full Sun","Late Summer","3 plants per foot","Low", ["tomato", "peas", "beans"]);

var allPlants = [artichoke, asparagus, beans, beets, brussels, cabbage, carrots, cauliflower, garlic, kale, leeks, lettuce, onions, peas, radish, spinach, tomato, parsley, sage, basil, marigold, thyme, cucumber];

var chosenPlantObject;
var indexPlantObject;
var friendsOfChosen = [];

// INPUT USER STRING FROM CLICK, RETURN OBJECT OF THE VEGGIE CHOSEN
function searchForPlantObject(inputName) {
  for (var i = 0 ; i < allPlants.length ; i++) {
    if (inputName === (allPlants[i].plantName)) {
      return allPlants[i];
    }
  }
};
// FINDS ARRAY OF FRIENDS
Plant.prototype.myFriend = function(choice) {
  friendsOfChosen.push(this.friend);
}
// APPENDS MENUS WITH ARRAY OF FRIENDS
function box2Populate (arrayofFriends){
  for ( var i = 0 ; i < arrayofFriends.length ; i++ ) {
    var poppedFriend = arrayofFriends.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown2').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};
function box3Populate (arrayofFriends){
  for ( var i = 0 ; i < arrayofFriends.length ; i++ ) {
    var poppedFriend = arrayofFriends.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown3').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};
function box4Populate (arrayofFriends){
  for ( var i = 0 ; i < arrayofFriends.length ; i++ ) {
    var poppedFriend = arrayofFriends.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown4').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};
function box5Populate (arrayofFriends){
  for ( var i = 0 ; i < arrayofFriends.length ; i++ ) {
    var poppedFriend = arrayofFriends.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown5').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};
function box6Populate (arrayofFriends){
  for ( var i = 0 ; i < arrayofFriends.length ; i++ ) {
    var poppedFriend = arrayofFriends.pop();
    poppedFriend.forEach(function(friend) {
      $('#dropdown6').append('<option value="' + friend + '">' + friend + '</option>');
    });
  }
};
// <<<< FRONT END LOGIC >>>>
$(document).ready(function(){
// USER CLICKS ON VEGGIE, IDENTIFIES HTML VALUE
  $("ul.clicked li").click(function(event){
    event.preventDefault();
    var indexPlant = this.textContent.toLowerCase();
    var indexPlantObject = searchForPlantObject(indexPlant);
// SENDS PLANT INFO TO MODAL
    $(".modal-plant-title").text(indexPlantObject.plantName.toUpperCase());
    $(".sun").text(indexPlantObject.plantSun);
    $(".space").text(indexPlantObject.plantSpace);
    $(".maintenance").text(indexPlantObject.plantMaintenance);
    $(".time").text(indexPlantObject.plantTime);
    $(".companions").text(indexPlantObject.friend.join(', '));
    $("#plant-modal").modal("show");
  });
// COMPANION PLANTER FUNCTIONALITY
  $("#dropdown1").change(function(event){
    var chosenPlant = $("#dropdown1").val();
    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box2Populate(friendsOfChosen);
    $("#dropdown1").hide();
    $("#dropdown2").show();
    $("#gardenbox-one").html("<p>" + chosenPlant.toUpperCase() + "<br>" + chosenPlantObject.plantSpace + "</p>");
    $("#gardenbox-one").addClass("seedling-one");
  });
  $("#dropdown2").change(function(event){
    var chosenPlant = $("#dropdown2").val();
    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box3Populate(friendsOfChosen);
    $("#dropdown2").hide();
    $("#dropdown3").show();
    $("#gardenbox-two").html("<p>" + chosenPlant.toUpperCase() + "<br>" + chosenPlantObject.plantSpace + "</p>");
    $("#gardenbox-two").addClass("seedling-two");
  });
  $("#dropdown3").change(function(event){
    var chosenPlant = $("#dropdown3").val();
    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box4Populate(friendsOfChosen);
    $("#dropdown3").hide();
    $("#dropdown4").show();
    $("#gardenbox-three").html("<p>" + chosenPlant.toUpperCase() + "<br>" + chosenPlantObject.plantSpace + "</p>");
    $("#gardenbox-three").addClass("seedling-three");
  });
  $("#dropdown4").change(function(event){
    var chosenPlant = $("#dropdown4").val();
    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box5Populate(friendsOfChosen);
    $("#dropdown4").hide();
    $("#dropdown5").show();
    $("#gardenbox-four").html("<p>" + chosenPlant.toUpperCase() + "<br>" + chosenPlantObject.plantSpace + "</p>");
    $("#gardenbox-four").addClass("seedling-four");
  });
  $("#dropdown5").change(function(event){
    var chosenPlant = $("#dropdown5").val();
    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    box6Populate(friendsOfChosen);
    $("#dropdown5").hide();
    $("#dropdown6").show();
    $("#gardenbox-five").html("<p>" + chosenPlant.toUpperCase() + "<br>" + chosenPlantObject.plantSpace + "</p>");
    $("#gardenbox-five").addClass("seedling-five");
  });
  $("#dropdown6").change(function(event){
    var chosenPlant = $("#dropdown6").val();
    var chosenPlantObject = searchForPlantObject(chosenPlant);
    chosenPlantObject.myFriend(chosenPlant);
    $("#dropdown6").hide();
    $(".button").show();
    $("#gardenbox-six").html("<p>" + chosenPlant.toUpperCase() + "<br>" + chosenPlantObject.plantSpace + "</p>");
    $("#gardenbox-six").addClass("seedling-six");
  });
  $(".button").click(function(event){
    location.reload();
  });
});
