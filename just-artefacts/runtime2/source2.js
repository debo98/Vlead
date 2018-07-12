function sleep(ms) {
	console.log("ms " + ms)
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(position2, colour2, table2){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table2[i].status)
			document.getElementById(i.toString()).value = table2[i].data;
	}
	document.getElementById(position2.toString()).style.background = colour2;
	document.getElementById(position2.toString()).value = table2[position2].data;
}

var animate1 = async function(){
	document.getElementById('legend2').style.display = "block";
	console.log("check1");	
	let arr2 = [76, 87, 78, 96];

	let table2 = [];

	for (i=0; i<10; i++) {
		table2[i] = {status:0,data: 0}
	}

	let j = 0;
	var position2 = -1;
	for (element in arr2) {
		console.log("loop" + arr2[element])
		await sleep(1000);
		addingElement(table2, arr2, element, j, position2);
	}
	await sleep(4000);
	document.getElementById('further').style.display = "block";
}

var addingElement = async function(table2, arr2, element, j, position2){
	position2 = arr2[element] % 10;
	while(table2[position2].status){
		show(position2, "red", table2);
		let k = (j+1);
		position2 = (position2 + k - j) % 10;
		j++;
		await sleep(1000);
	}
	if(table2[position2].status == 0){
		table2[position2].data = arr2[element];
		table2[position2].status = 1;
		show(position2, "#7FF219", table2);
	}
}