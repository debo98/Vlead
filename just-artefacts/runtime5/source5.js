var allCorrect5 = 1;
var statuslp = [];
var statusqp = [];

var check2 = function() {

	var valueslp = [];
	var valuesqp = [];
	for(i=0; i<20; i++){
		valueslp[i] = document.getElementById("lp" + i).value;
		valuesqp[i] = document.getElementById("qp" + i).value;
	}

	var answerslp = ["", "", "", "", "44", "64", "86", "27", "", "", "", "", "32", "33", "34", "35", "36", "52", "", ""];
	var answersqp = ["", "52", "", "", "44", "64", "86", "27", "", "", "", "", "32", "33", "34", "35", "36", "", "", ""];

	for(i=0; i<20; i++){
		if(valueslp[i] == answerslp[i])
			statuslp[i] = 1;
		else
			statuslp[i] = 0;
		if(valuesqp[i] == answersqp[i])
			statusqp[i] = 1;
		else
			statusqp[i] = 0;
	}

	allCorrect5 = 1;

	for(i=0; i<20; i++){
		var templp = document.getElementById("lp" + i);
		var tempqp = document.getElementById("qp" + i);
		// if user's answer is correct, box becomes green
		if(statuslp[i]){
			templp.style.background = "#9DFF55";
		}
		// if user's answer is wrong, box becomes red
		else{
			allCorrect5 = 0;
			templp.style.background = "#FFB273";	
		}
		// if user's answer is correct, box becomes green
		if(statusqp[i]){
			tempqp.style.background = "#9DFF55";
		}
		// if user's answer is wrong, box becomes red
		else{
			allCorrect5 = 0;
			tempqp.style.background = "#FFB273";	
		}
	}

	// display this only after all answers are correct
	if(allCorrect5){
		document.getElementById("collision").style.display = "block";
		document.getElementById("collision").style.maxWidth= "700px";
	}

	document.getElementById("legend5").style.display = "block";
}

var restart2 = function(){
	for(let i=0; i<20; i++){
		statuslp[i] = 0;
		statusqp[i] = 0;
		document.getElementById("lp" + i).style.background = "white";
		document.getElementById("qp" + i).style.background = "white";
		document.getElementById("lp" + i).value = "";
		document.getElementById("qp" + i).value = "";
	}
	document.getElementById("legend5").style.display = "none";
}
