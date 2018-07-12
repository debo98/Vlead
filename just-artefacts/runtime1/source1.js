var allCorrect1 = 0;
var status1 = [];

var check1 = function() {

	var values1 = [];
	for(i=0; i<10; i++)
		values1[i] = document.getElementById(i.toString()).value;

	var answers = ["", "41", "82", "63", "94", "45", "", "", "", "89"];

	for(i=0; i<10; i++){
		if(values1[i] == answers[i])
			status1[i] = 1;
		else
			status1[i] = 0;
	}

	allCorrect1 = 1;

	for(i=0; i<10; i++){
		var temp = document.getElementById(i.toString());
		// if user's answer is correct, box becomes green
		if(status1[i]){
			temp.style.background = "#9DFF55";
		}
		// if user's answer is wrong, box becomes red
		else{
			allCorrect1 = 0;
			temp.style.background = "#FFB273";	
		}
	}

	// display this only after all answers are correct
	if(allCorrect1){
		document.getElementById("further").style.display = "block";
		document.getElementById("further").style.maxWidth= "700px";
		for(let i=0; i<10; i++){
			// document.getElementById('button' + i).style.border = "solid black";
			document.getElementById('button' + i).style.borderRadius = "100%";
			document.getElementById('button' + i).style.boxShadow = "2px 2px #888888";
			document.getElementById('button' + i).style.boxShadowOpacity = "30%";
		}
	}

	document.getElementById("legend1").style.display = "block";

}

var onclicking1 = function(){
	if(allCorrect1){
		document.getElementById("collision").innerHTML = "Correct! But this results in a collision";		
		document.getElementById("collision").style.display = "block";
	}
}

var onclickingnot1 = function(){
	if(allCorrect1){
		document.getElementById("collision").innerHTML = "Wrong! Try again!"
		document.getElementById("collision").style.display = "block";	
	}
}

var restart1 = function(){
	for(let i=0; i<10; i++){
		status1[i] = 0;
		document.getElementById(i.toString()).style.background = "white";
		document.getElementById(i.toString()).value = "";
		document.getElementById("collision").innerHTML = "";
		document.getElementById("further").style.display = "none";
		document.getElementById("legend1").style.display = "none";
	}
}