$(document).ready(function () {
    $(".q1").show();
    $(".q2").hide();
    $(".q3").hide();
    $(".q4").hide();
    $(".q5").hide();
    $(".q6").hide();
    $(".q7").hide();
    $(".q8").hide();
    $(".q9").hide();
    $(".q10").hide();


    var questions = [{
            question: '.work10',
            choices: ["September 1, 1939", "August 31, 1939", "September 2, 1938", "September 2, 1939"],
            qNum: 0,
            correct: 0
},
        {
            question: '.work9',
            choices: ["Deutsch Flugzeug", "Bundeswehr", "Luftwaffe", "Lucky Waffles"],
            qNum: 1,
            correct: 2
},
        {
            question: '.work8',
            choices: ["Theodore Roosevelt", "Franklin D. Roosevelt", "Eleanor Roosevelt", "Richard Nixon"],
            qNum: 2,
            correct: 1
                 },
        {
            question: '.work7',
            choices: ["Great Brittain, France, U.S.", "Germany, Italy, Japan", "Poland, Czech Republic, Austria", "Germany, Great Brittain, Poland"],
            qNum: 3,
            correct: 1
                  },
        {
            question: '.work6',
            choices: ["San Diego", "Honolulu Harbor", "Maui Bay", "Pearl Harbor"],
            qNum: 4,
            correct: 3
        },
        {
            question: '.work5',
            choices: ["Aryan", "Caucasian", "German", "Aerian"],
            qNum: 5,
            correct: 0
                     },
        {
            question: '.work4',
            choices: ["July 6, 1943", "June 6, 1944", "June 8, 1943", "July 8, 1944"],
            qNum: 6,
            correct: 1
                     },
        {
            question: '.work3',
            choices: ["Night of Fine Drinking", "Night of Broken Glass", "Not Crystal Clear", "Break Everything"],
            qNum: 7,
            correct: 1
                     },
        {
            question: '.work2',
            choices: ["Austria", "Italy", "Germany", "Poland"],
            qNum: 8,
            correct: 3
                     },
        {
            question: '.work1',
            choices: ["Sniper Shot", "Bomb", "Suicide", "Slipped and Fell"],
            qNum: 9,
            correct: 2
                     }
    ]


});
