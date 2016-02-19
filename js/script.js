$(document).ready(function () {

    var counter = 0;
    $('#count').text(counter);


    var questions = [{
            question: 'What date did Germany invade Poland to start the war?',
            choices: ['September 1, 1939', 'August 31, 1939', 'September 2, 1938', 'September 2, 1939'],
            correctDetails: 'Correct Answer is: September 1, 1939',
            correct: 0
},
        {
            question: 'What was the German air branch called?',
            choices: ['Deutsch Flugzeug', 'Bundeswehr', 'Luftwaffe', 'Lucky Waffles'],
            correctDetails: 'Correct Answer is: Luftwaffe',
            correct: 2
                     },
        {
            question: 'Who was the U.S. President during WWII?',
            choices: ["Theodore Roosevelt", "Franklin D. Roosevelt", "Eleanor Roosevelt", "Richard Nixon"],
            correctDetails: 'Correct Answer is: Franklin D. Roosevelt',
            correct: 1
                     },
        {
            question: 'Which countries made up the Axis Powers?',
            choices: ["Great Brittain, France, U.S.", "Germany, Italy, Japan", "Poland, Czech Republic, Austria", "Germany, Great Brittain, Poland"],
            correctDetails: 'Correct Answer is: Germany, Italy, Japan',
            correct: 1
                  },
        {
            question: 'On December 7th, 1941 what U.S. location was bombed by the Japanese?',
            choices: ["San Diego", "Honolulu Harbor", "Maui Bay", "Pearl Harbor"],
            correctDetails: 'Correct Answer is: Pearl Harbor',
            correct: 3
        },
        {
            question: 'What was the name of the "perfect race" called according to Hitler?',
            choices: ["Aryan", "Caucasian", "German", "Aerian"],
            correctDetails: 'Correct Answer is: Aryan',
            correct: 0
                     },
        {
            question: 'What day was "D-Day"?',
            choices: ["July 6, 1943", "June 6, 1944", "June 8, 1943", "July 8, 1944"],
            correctDetails: 'Correct Answer is: June 6, 1944',
            correct: 1
                     },
        {
            question: 'What does "Kristallnacht" mean?',
            choices: ["Night of Fine Drinking", "Night of Broken Glass", "Not Crystal Clear", "Break Everything"],
            correctDetails: 'Correct Answer is: Night of Broken Glass',
            correct: 1
                     },
        {
            question: 'Which country was the concentration camp Auschwitz located?',
            choices: ["Austria", "Italy", "Germany", "Poland"],
            correctDetails: 'Correct Answer is: Poland',
            correct: 3
                     },
        {
            question: 'How did Hitler die?',
            choices: ["Sniper Shot", "Bomb", "Suicide", "Slipped and Fell"],
            correctDetails: 'Correct Answer is: Suicide',
            correct: 2
                     }
    ]
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;


    $('.result-section').hide();

    function questionDisplay() {
        $('.relative .date').text("Question " + (questionNum + 1));
        $('.relative label').text(questions[questionNum].question);
        $('.content p').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            $('.content p').append('<input type="radio" class="answer" name="answer" value="' + i + '">' + " " + questions[questionNum].choices[i] + "<br>");
        }
    }
    $('#submit').on('click', function () {
        var answer = $("input[class='answer']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {
            correctTotal++;
        }

        $('#result_msg').append("<h3>Q: " + questions[questionNum].question + "</h3>");
        $('#result_msg').append("<h4>A: " + questions[questionNum].correctDetails + "</h4>");

        if ((questionNum + 1) == questionTotal) {
            $('#finalScore').text(correctTotal + "/" + questionTotal);
            $('.start-button').show();
            $('#timeline').hide();
            $('.result-section').show();
        } else {
            questionNum++;
            questionDisplay();
        }
    });

    $('.result-section').on('click', '#tryagain', function () {
        location.reload();
    });

});
