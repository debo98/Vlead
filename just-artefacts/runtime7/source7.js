jQuery(document).ready(checkContainer);

function sleep(ms) {
	console.log("ms " + ms)
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(position7, colour7, table7){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table7[i].status)
			document.getElementById(i.toString()).value = table7[i].data;
	}
	document.getElementById(position7.toString()).style.background = colour7;
	// document.getElementById(position7.toString()).value = table7[position7].data;
}

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

let table7 = [];
let size = 0;
let arr7 = [];

var addingElement = async function(element, j, position7){
	position7 = arr7[element] % 10;
	while(table7[position7].status){
		show(position7, "white", table7);
		let k = (j+1);
		position7 = (position7 + k - j) % 10;
		j++;
	}
	if(table7[position7].status == 0){
		table7[position7].data = arr7[element];
		table7[position7].status = 1;
		show(position7, "white", table7);
	}
}

var load = function(){
	size = 7 + getRandomInt(4);
	console.log("size = " + size);

	
	for(i=0; i<size; i++){
		arr7[i] = getRandomInt(100);
	}

	console.log("ARRAY:");
	randomarray = "";
	for(i=0; i<size-1; i++){
		randomarray = randomarray + arr7[i] + ", ";
		console.log(arr7[i]);
	}
	randomarray = randomarray + arr7[size-1];
	console.log(arr7[size-1]);

	for (i=0; i<10; i++)
		table7[i] = {status:0, data:0}

	let j = 0;
	var position7 = -1;
	for (element in arr7) {
		addingElement(element, j, position7);
	}
	console.log(randomarray);
	document.getElementById('elements').innerHTML = randomarray + " have been inserted into the hash table. Search for an element";
}

function checkContainer () {
  if($('#elements').is(':visible')){ //if the container is visible on the page
    load();  //loads at start
  } else {
    setTimeout(checkContainer, 50); //wait 50 ms, then try again
  }
}

var search1 = async function(){
	document.getElementById('legend7').style.display = "block";
	let iter7 = 0;
	let count7 = 0;
	element = parseInt(document.getElementById('searchfor').value);
	console.log("element = " + element);
	if(element !== element){
		document.getElementById('steps').innerHTML = "Please enter a number to search for";
	}
	else{
		let position7 = element % 10;
		while(table7[position7].status && table7[position7].data!= element && iter7<10){
			show(position7, "red", table7);
			await sleep(1000);
			count7++;
			position7 = (position7 + 1) % 10;
			iter7++;
		}
		if(table7[position7].status==0 || iter7==10){
			document.getElementById('steps').innerHTML = element + " does not exist in the hash table";
			show(position7, "red", table7);
		}
		else{
			show(position7, "#7FF219", table7);
			count7++;
			document.getElementById('steps').innerHTML = element + " is stored in index " + position7 + ". It was found in " + count7 + " steps.<br>We searched from " + element%10 + " to " + position7 + ".";
		}
	}
}
