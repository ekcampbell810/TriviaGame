//Initialize
var counter = 0;
var timeLeft = 120;
var interval = 0;
var userChoices = [];
var numberOfCorrectAnswers = 0;
var numberOfIncorrectAnswers = 0;
var missedQuestions = 0;
var answers = ["d", "a", "b", "d", "a", "b", "d", "a"];

function convertSeconds(s) {
	var min = Math.floor(s / 60);
	var sec = s % 60;
	
	if (sec < 10) {
		sec = "0" + sec;
	}

	if (min === 0) {
		min = "00";
	}
	
	else if (min < 10) {
		min = "0" + min;
	}

	return min + ":" + sec;
}

function initial() {
	$("#timer").html(convertSeconds(timeLeft - counter));
	interval = setInterval(timeIt, 1000);

}

function timeIt() {
	counter++;
	$("#timer").html(convertSeconds(timeLeft - counter));

	if (timeLeft === counter) {
		noTimeToResults();
		clearInterval(interval);
	}
}

function stopTime() {
	clearInterval(interval);
}

function score() {
	var q1 = $('input[name = "q1"]:checked').val();
	var q2 = $('input[name = "q2"]:checked').val();
	var q3 = $('input[name = "q3"]:checked').val();
	var q4 = $('input[name = "q4"]:checked').val();
	var q5 = $('input[name = "q5"]:checked').val();
	var q6 = $('input[name = "q6"]:checked').val();
	var q7 = $('input[name = "q7"]:checked').val();
	var q8 = $('input[name = "q8"]:checked').val();

	userChoices = [q1, q2, q3, q4, q5, q6, q7, q8];

	for (var i = 0; i < userChoices.length; i++) {
		
		if (userChoices[i] === answers[i]) {
			numberOfCorrectAnswers++;
		}
		
		else if (typeof userChoices[i] === "undefined") {
			missedQuestions++;
			//numberOfIncorrectAnswers++;
		}
	
		else if (userChoices[i] !== answers[i]) {
			numberOfIncorrectAnswers++;
		}
	}	

	displayResults();
}

function submit() {
	stopTime();
	score();
}

function noTimeToResults() {
	score();
	$("#submitButton").hide();
	$("#quiz-content").hide();
	$("#results").show();
	
}

function displayResults() {
	document.getElementById("results-correct").innerHTML = "Correct Answers: " + numberOfCorrectAnswers;
	document.getElementById("results-incorrect").innerHTML = "Incorrect Answers: " + numberOfIncorrectAnswers;
	document.getElementById("results-missed").innerHTML = "Unanswered Questions: " + missedQuestions;
}


$("#quiz-content").hide();
$("#results").hide();

//Click Start Button
$("#start-button").on("click", function(){
	$(this).hide();
	$("#quiz-content").show();
	initial();
});

//Click Submit Button
$("#submitButton").on("click", function(){
	$(this).hide();
	$("#quiz-content").hide();
	$("#results").show();	
})





