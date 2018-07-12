let table6 = [];
let size6 = 0;

var load = function(){
	console.log('hello');
	for (i=0; i<10; i++)
		table6[i] = {status:0, data:0}
}

document.getElementsByTagName('body').onload = load();

function sleep(ms) {
	console.log("ms " + ms)
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(position6, colour6, table6){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table6[i].status)
			document.getElementById(i.toString()).value = table6[i].data;
	}
	document.getElementById(position6.toString()).style.background = colour6;
	document.getElementById(position6.toString()).value = table6[position6].data;
}

// we are using linear probing
var addingElement = async function(table6, element, j){
	position6 = element % 10;
	while(table6[position6].status){
		show(position6, "red", table6);
		let k = (j+1);
		position6 = (position6 + k - j) % 10;
		j++;
		await sleep(1000);
	}
	if(table6[position6].status == 0){
		table6[position6].data = element;
		table6[position6].status = 1;
		show(position6, "#7FF219", table6);
	}
}

var insert = async function(){
	document.getElementById('legend6').style.display = "block";
	if(size6 < 10){
		size6++;
		let element = document.getElementById('input').value;
		console.log('inserting ' + element);
		await sleep(1000);
		addingElement(table6, element, 0);
	}	
}

var restart6 = function(){
	for(let i=0; i<10; i++){
		table6[i].status = 0;
		table6[i].data = 0;
		document.getElementById(i.toString()).style.background = "white";
		document.getElementById(i.toString()).value = "";
	}
	size6 = 0;
	document.getElementById('legend6').style.display = "none";
	document.getElementById('input').value = "";
}
