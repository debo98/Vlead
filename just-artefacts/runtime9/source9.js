jQuery(document).ready(checkContainer);

function sleep(ms) {
	console.log("ms " + ms)
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(position, colour, table9){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table9[i].status == 1)
			document.getElementById(i.toString()).value = table9[i].data;
		if(table9[i].status == 2){
			document.getElementById(i.toString()).style.background = "lightblue";	
			document.getElementById(i.toString()).value = "";
		}
	}
	document.getElementById(position.toString()).style.background = colour;
}

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

let table9 = [];
let size9 = 0;
let arr9 = [];

var addingElement = async function(element, j, position){
	position = arr9[element] % 10;
	while(table9[position].status){
		show(position, "white", table9);
		let k = (j+1);
		position = (position + k - j) % 10;
		j++;
	}
	if(table9[position].status == 0){
		table9[position].data = arr9[element];
		table9[position].status = 1;
		show(position, "white", table9);
	}
}

var load = function(){
	size9 = 7 + getRandomInt(4);
	console.log("size9 = " + size9);

	
	for(i=0; i<size9; i++){
		arr9[i] = getRandomInt(100);
	}

	console.log("ARRAY:");
	randomarray = "";
	for(i=0; i<size9-1; i++){
		randomarray = randomarray + arr9[i] + ", ";
		console.log(arr9[i]);
	}
	randomarray = randomarray + arr9[size9-1];
	console.log(arr9[size9-1]);

	for (i=0; i<10; i++)
		table9[i] = {status:0, data:0}

	let j = 0;
	var position = -1;
	for (element in arr9) {
		addingElement(element, j, position);
	}
	console.log(randomarray);
	document.getElementById('elements').innerHTML = randomarray + " have been inserted into the hash table. Search for an element";
}

function checkContainer () {
  if($('#elements').is(':visible')){ //if the container is visible on the page
    load();  // loads at start
  } else {
    setTimeout(checkContainer, 50); //wait 50 ms, then try again
  }
}

var delete1 = async function(){
	document.getElementById('legend9').style.display = "block";
	// let count = 0;
	element = parseInt(document.getElementById('delete').value);
	console.log("element = " + element);
	if(element !== element){
		document.getElementById('steps').innerHTML = "Enter a number";
	}
	else{
		let iter = 0;
		let position = element % 10;
		while((table9[position].status == 2 || (table9[position].status == 1 && table9[position].data!= element)) && iter<10){
			iter++;
			show(position, "red", table9);
			await sleep(1000);
			// count++;
			position = (position + 1) % 10;
		}
		if(iter == 10){
			show(position, "white", table9);
			document.getElementById('steps').innerHTML = element + " does not exist in the hash table";
		}
		else if(table9[position].status == 0){
			document.getElementById('steps').innerHTML = element + " does not exist in the hash table";
			show(position, "red", table9);
		}
		else{
			show(position, "#7FF219", table9);
			// count++;
			table9[position].status = 2;
			await sleep(1000);
			document.getElementById('steps').innerHTML = "Deleted " + element;
			show(position, "lightblue", table9);
		}
	}
}
