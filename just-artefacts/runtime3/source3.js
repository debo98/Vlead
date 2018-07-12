function sleep(ms) {
	console.log("ms " + ms)
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(position3, colour, table3){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table3[i].status)
			document.getElementById(i.toString()).value = table3[i].data;
	}
	document.getElementById(position3.toString()).style.background = colour;
	document.getElementById(position3.toString()).value = table3[position3].data;
}

var animate2 = async function(){
	document.getElementById('legend3').style.display = "block";
	console.log("check1");	
	let arr3 = [76, 87, 78, 96];

	let table3 = [];

	for (i=0; i<10; i++) {
		table3[i] = {status:0,data: 0}
	}

	let j = 0;
	var position3 = -1;
	for (element in arr3) {
		console.log("loop " + arr3[element])
		await sleep(1000);
		console.log('adding ' + arr3[element]);
		addingElement(table3, arr3, element, j, position3);
		console.log('added ' + arr3[element]);
	}
	console.log('reaching?1');
	await sleep(3000);
	console.log('reaching?2');
	document.getElementById('further').style.display = "block";
}

var addingElement = async function(table3, arr3, element, j, position3){
	position3 = arr3[element] % 10;
	// let x = arr3[element];
	while(table3[position3].status){
		show(position3, "red", table3);
		let k = (j+1);
		// document.getElementById('hashfunc').innerHTML = "h1(" + x + ") = " + x +"%10. h2(" + x + ") = 1 + (" + x + "%7) = " + position3 + "<br>";
		position3 = (position3 + k*k - j*j) % 10;
		j++;
		await sleep(1000);
	}
	if(table3[position3].status == 0){
		table3[position3].data = arr3[element];
		table3[position3].status = 1;
		// document.getElementById('hashfunc').innerHTML = "h1(" + x + ") = " + x +"%10. h2(" + x + ") = 1 + (" + x + "%7) = " + position3 + "<br>";
		show(position3, "#7FF219", table3);
	}
}