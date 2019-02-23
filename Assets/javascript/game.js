//When the game title header is clicked, the instructions slide down.
//When clicked again the instructions slide back up.


$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
      console.log("clicked");
    });
  });

  // Global variables
    var random_result;
    var loss = 0;
    var win = 0;
    var previous = 0;

  // When the game starts or resets, the crystal values are cleared and reassigned new numbers
    var resetAndStart = function () {

    $(".crystalList").empty();

  //The crystal images are assigned in the var images array and are placed in the correct div using the .crystalList append below.
    var images = [
      "./Assets/images/red300px.png",
      "./Assets/images/yellow300px.png",
      "./Assets/images/blue300px.png",
      "./Assets/images/green300px.png",
    ];

    //A random result is assigned between the values of 69 and 99.
    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++) {
     
      //Each crystal is assigned a random number between 1 and 12.
        var random = Math.floor(Math.random() * 12) + 1;

        //The crystal images are placed in the appended div from the images array above.
        $('.crystalList').append('<div id="crystal'+ i +'" class="crystals" data-random='+ random + "/>");
        $("#crystal" + i.toString()).css({
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "background-image": "url("+ images[i] +")",
          "width": "200px",
          "height": "200px"
        });
      }
    // The total score is tracked using the previous value and adding the value of each subsequent click, 
    //the .html places the amount on the screen next the "Total Score: "
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();

//When the crystals are clicked the fuction below will begin.
$(document).on('click', ".crystals", function() {

  //The changes the random number string into an integer to all it to be added.
    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    //When a player loses the Number of losses appears in the browser
    if(previous > random_result){
        loss++;
        $("#loss").html("Number of Losses: " + loss);

        previous = 0;

        resetAndStart();
    }
    //When a player wins the Number of wins appears in the browser
    else if(previous === random_result){
        win++;

        $("#win").html("Number of wins: " + win);

        previous = 0;

        resetAndStart();
    }

});

