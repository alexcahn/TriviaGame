// psuedo code
// home page click start to start the Game
// starts counter ticking down
// questions appear below the ticker and player is able to select the answer with a checkbox 
// (can only choose one answer)
// can hit done at the bottom if answered all the questions
// if timer hits 0 then game is done regardless if they answered the questions
// once player hits done then it tells you correct answers, incorrect answers and unanswered questions

var questions = [
    {
        question: "1. Who is the most decorated Olympian of all time?",
        answers: ["Carl Lewis", "Usain Bolt", "Michael Phelps", "Bruce (now Caitlyn) Jenner"],
        correctAnswer: "Michael Phelps"
    },
    {
        question: "2. Who holds the single-season record for touchdown receptions?",
        answers: ["Jerry Rice", "Tim Brown", "Randy Moss", "Marvin Harrison"],
        correctAnswer: "Randy Moss"
    },
    {
        question: "3. Who was the first person to run a 4 minute mile?",
        answers: ["Jesse Owens", "Joan Benoit", "Bill Rodgers", "Roger Bannister"],
        correctAnswer: "Roger Bannister"
    },
    {
        question: "4. In 1999, the Chicago Bulls traded Scottie Pippen to what team?",
        answers: ["Minnesota Timberwolves", "Houston Rockets", "Detroit Pistons", "Miami Heat"],
        correctAnswer: "Houston Rockets"
    },
    {
        question: "5. 2004's infamous 'Malice at the Palace' incident took place in the arena of which NBA team?",
        answers: ["Indiana Pacers", "Detroit Pistons", "Los Angeles Lakers", "New Jersey Nets"],
        correctAnswer: "Detroit Pistons"
    },
    {
        question: "6. Which country won the first ever World Cup?",
        answers: ["Uruguay", "Netherlands", "Norway", "France"],
        correctAnswer: "Uruguay"
    },
    {
        question: "7. Who was the first NFL running back to finish the season with 10 or more carries and gain negative yards?",
        answers: ["Alfred Blue", "Reggie Bush", "Darren McFadden", "Frank Gore"],
        correctAnswer: "Reggie Bush"
    },
    {
        question: "8. What sport has a hooker in a scrum?",
        answers: ["Polo", "Fencing", "Cricket", "Rugby"],
        correctAnswer: "Rugby"
    },
    {
        question: "9. Who was the first NHL player to score 50 goals in a season?",
        answers: ["Wayne Gretzky", "Gordie Howe", "Maurice Richard", "Bobby Orr"],
        correctAnswer: "Maurice Richard"
    },
    {
        question: "10. What pitcher threw the only no-hit game in World Series history?",
        answers: ["Nolan Ryan", "Don Larson", "Sandy Koufax", "Roger Clemens"],
        correctAnswer: "Don Larson"
    },
    {
        question: "11. Who was the first NHL goaltender to actually shoot the puck into their opponent’s net for a goal?",
        answers: ["Ron Hextall", "Martin Brodeur", "Chris Osgood", "Ed Belfour"],
        correctAnswer: "Ron Hextall"
    },
    {
        question: "12. Who was on the cover of the first Madden football game?",
        answers: ["Joe Montana", "John Elway", "John Madden", "Dan Marino"],
        correctAnswer: "John Madden"
    },
    {
        question: "13. Against what opposing team did Babe Ruth hit his first career home run?",
        answers: ["Yankees", "Red Sox", "Cubs", "Black Sox"],
        correctAnswer: "Yankees"
    },
    {
        question: "14. What player was nicknamed 'Mr. November'?",
        answers: ["Derek Jeter", "Reggie Jackson", "Micky Mantle", "Joe DiMaggio"],
        correctAnswer: "Derek Jeter"
    },
    {
        question: "15. What team won 3 Super Bowls in the 1990s?",
        answers: ["Broncos", "Cowboys", "Patriots", "Packers"],
        correctAnswer: "Cowboys"
    },
];

for (var i = 0; i < questions.length; i++) {
    $("#questionBox").append("<br><div>" + questions[i].question + "</div>");
    
    for (var j = 0; j < questions[i].answers.length; j++) {
        var answerInput = $("<input>");
        answerInput.attr("type", "radio")
        answerInput.attr("name", i)
        answerInput.attr("class","choice")
        answerInput.attr("value", questions[i].correctAnswer)
        $("#questionBox").append(answerInput);
        $("#questionBox").append(questions[i].answers[j] + "</br>")
    }
}

$(document).ready(function () {

    //  global variables
    var number = 90;
    var intervalId;
    var userScore = 0;

    // start the game
    $("#startGame").on("click", start)

    function start() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(this).hide();
    }

    //  The decrement function.
    function decrement() {
        //  Decrease number by one.
        number--;
        //  Show the number in the #show-number tag.
        $("#show-number").html("<h2>" + number + "</h2>");
        // once number hits 0
        if (number === 0) {
            stop();
            checkScore();
        }
    }

    //  The stop function
    function stop() {
        clearInterval(intervalId);
    }

    //   create function to check score. if time hits 0 or someone clicks done
    function checkScore() {
        for (var i = 0; i < questions.length; i++) {
            if ($("input[name=" + i + "]:checked").val() === questions[i].correctAnswer) {
                userScore++
                $("#scoreBoard").text(userScore + " out of " + questions.length);
            }
        }
    }
})