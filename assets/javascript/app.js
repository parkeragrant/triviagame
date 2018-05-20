// variables

var teslaQuestions = [{
    question: "What was the first model year for the Tesla Roadster?",
    options: ["2004", "2005", "2009", "2008"],
    correctAnswer: "2008"
    },
    {
    question: "Who is Tesla Motors named after?",
    options: ["Nikola Tesla", "Thomas Edison", "Nicholas Tesla", "Martin Eberhard"],
    correctAnswer: "Nikola Tesla"
    },
    {
    question: "How much did Elon Musk invest in Tesla? in $",
    options: ["$6.35M", "$20.22M", "$4.55M", "$10.12M"],
    correctAnswer: "$6.35M"
    },
    {
    question: "Who co-founded Tesla Motors with Elon Musk?",
    options: ["Peter Thiel", "Jack Dorsey", "Martin Eberhard", "Marcus Tesla"],
    correctAnswer: "Martin Eberhard"
    },
    {
    question: "Elon Musk is sometimes compared to which superhero?",
    options: ["Superman", "Iron Man", "Batman", "Thor"],
    correctAnswer: "Iron Man"
    },
]                 

    var indexQuestion = -1;
    var questionObject = {};
    var userAnswer = "";
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var timerCount = 0;
    var timerId;
   

    // Declare an object with all of the questions, options, and correct answers (done)

    // When the user clicks on start button the first index containing questions and choices will display (done)
    // There will be refillable variables to contain the data being served by the index (questionObject) (done)

    // The timer will begin counting down from :20 seconds (done)
    // If the timer ends before the selection has been made there can be no selection made

    // There will be a refillable variable to contain the value that the user selects (userAnswer) (done)
    // The user selection variable will then be compared to the data in the original object (done)

    // After each question the user will need to click next question (done)
    // When the user clicks next question the index # will be incremented to the next index by 1 (indexQuestion)(done)
    // The new data in the index will be filled into the refillable variable (done)
    // The refillable variable to contain the value that the user guesses will be refilled by the guess (done)
    // The user selection variable will then be compared to the data in the original object (done)

    // There will be 5 questions
    // After 5 questions the game will be over
    // The user score will be displayed when the game is over

    // User cannot click next question until they have answered the current question
    // Create a boolean to 

    // User cannot answer the question if the time runs out



    $(document).ready(function() {

        $("#qanda-container").hide();

        $(".answer-option").on("click", function(){

            clearInterval(timerId);

            $(".answer-option").attr("disabled", "disabled");

            var userChoice = $(this).data("options");

            console.log("userChoice: " + userChoice);

            var correctAnswer = $("#correct-answer").text();

            console.log("correctAnswer: " + correctAnswer)
                        
            if (userChoice == correctAnswer) {

                correctAnswers++;
                $("#result").text("correct");

            } else {
                incorrectAnswers++;
                $("#result").text("incorrect");
            } 

            $("#next-question").show()

        })

        
        $("#next-question").on("click", function(){
            
            $("#next-question").hide();

            displayNextQuestion();

        })

        $("#startgame").on("click", function() {

            indexQuestion = -1;
            displayNextQuestion();
            $("#startgame").hide();
            $("#qanda-container").show();
            $("#next-question").hide();

        })

        function displayNextQuestion(){
            
            indexQuestion++;

            $("#result").text("");

            $(".answer-option").removeAttr("disabled");

            // End of game
            if (indexQuestion >= teslaQuestions.length) {
                
                $("#score").append("correct answers: " + correctAnswers);
                $("#score").append("  incorrect answers: " + incorrectAnswers);

                $("#qanda-container").hide();

                $("#startgame").show();
            }
    
            questionObject = teslaQuestions[indexQuestion];
            
            $("#question").text(questionObject.question);
    
            $("#answer1").text(questionObject.options[0]).addClass("choice").attr("data-options", questionObject.options[0]);
            $("#answer2").text(questionObject.options[1]).addClass("choice").attr("data-options", questionObject.options[1]);
            $("#answer3").text(questionObject.options[2]).addClass("choice").attr("data-options", questionObject.options[2]);
            $("#answer4").text(questionObject.options[3]).addClass("choice").attr("data-options", questionObject.options[3]);

            $("#correct-answer").text(questionObject.correctAnswer);
            

            timerCount = 20;
            $("#timer").text(timerCount);  

            function startTimer() {
                timerId = setInterval(timer, 1000);
            }
            function timer() {
                
                timerCount--;
                $("#timer").text(timerCount);

                if (timerCount <= 0) {

                    $("#result").text("Out of Time");
                    clearInterval(timerId);

                    $(".answer-option").attr("disabled", "disabled");

                    $("#next-question").show();

                    incorrectAnswers++;

                }

            }
            startTimer();        
        }

    })
