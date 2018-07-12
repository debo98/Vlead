jQuery(document).ready(checkContainer);

async function show(position8, colour8, table8){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table8[i].status)
			document.getElementById(i.toString()).value = table8[i].data;
	}
	document.getElementById(position8.toString()).style.background = colour8;
}

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

let table8 = [];
let size8 = 0;
let arr8 = [];

var addingElement = async function(element, j, position8){
	position8 = arr8[element] % 10;
	while(table8[position8].status){
		show(position8, "white", table8);
		let k = (j+1);
		position8 = (position8 + k - j) % 10;
		j++;
	}
	if(table8[position8].status == 0){
		table8[position8].data = arr8[element];
		table8[position8].status = 1;
		show(position8, "white", table8);
	}
}

var end = -1;
var Search = async function(element){
	let iter = 0;
	let count = 0;
	console.log("element = " + element);
	let position8 = element % 10;
	while(table8[position8].status && table8[position8].data!= element && iter<10){
		// show(position8, "red", table8);
		// await sleep(1000);
		iter++;
		count++;
		position8 = (position8 + 1) % 10;
	}
	if(table8[position8].status == 0){
		// document.getElementById('steps').innerHTML = element + " does not exist in the hashtable8";
		// show(position8, "red", table8);
		count++;
	}
	else{
		// show(position8, "#7FF219", table8);
		count++;
		// document.getElementById('steps').innerHTML = element + " is stored in index " + position8 + ". It was found in " + count + " steps." ;
	}
	end = position8;

}


let searchfor = -1;
var choose = function(){
	if(getRandomInt(2)){
		searchfor = arr8[getRandomInt(size8)];
	}
	else{
		searchfor = getRandomInt(100);
	}
	document.getElementById('searchX').innerHTML = "Search for " + searchfor;
	Search(searchfor);
}

var load = function(){
	size8 = 7 + getRandomInt(4);
	console.log("size8 = " + size8);

	
	for(i=0; i<size8; i++){
		arr8[i] = getRandomInt(100);
	}

	console.log("ARRAY:");
	for(i=0; i<size8-1; i++){
		console.log(arr8[i]);
	}
	console.log(arr8[size8-1]);

	for (i=0; i<10; i++)
		table8[i] = {status:0, data:0}

	let j = 0;
	var position8 = -1;
	for (element in arr8) {
		addingElement(element, j, position8);
	}

	choose();
}

function checkContainer () {
  if($('#elements').is(':visible')){ //if the container is visible on the page
    load();  // loads at start
  } else {
    setTimeout(checkContainer, 50); //wait 50 ms, then try again
  }
}

var check2 = function(){
	let flag = 0;
	console.log(end)
	if(document.getElementById('start').value == searchfor%10){
		document.getElementById('start').style.background = "#9DFF55";
		flag++;
	}
	else{
		document.getElementById('start').style.background = "red";
	}
	if(document.getElementById('end').value == end){
		document.getElementById('end').style.background = "#9DFF55";
		flag++;
	}
	else{
		document.getElementById('end').style.background = "red";
	}
	if(flag == 2){
		document.getElementById('steps').innerHTML = "Correct!";
	}
	else{
		document.getElementById('steps').innerHTML = "Wrong! Try again";	
	}
}