function sleep(ms) {
	console.log("ms " + ms)
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show(position4, colour, table4){
	for (i=0; i<10; i++) {
		document.getElementById(i.toString()).style.background = "white";	
		if(table4[i].status)
			document.getElementById(i.toString()).value = table4[i].data;
	}
	document.getElementById(position4.toString()).style.background = colour;
	document.getElementById(position4.toString()).value = table4[position4].data;
}

var animate3 = async function(){
	document.getElementById('legend4').style.display = "block";
	console.log("check1");	
	let arr4 = [76, 87, 78, 96];

	let table4 = [];

	for (i=0; i<10; i++) {
		table4[i] = {status:0,data: 0}
	}

	let j = 0;
	var position4 = -1;
	for (element in arr4) {
		console.log("loop " + arr4[element])
		await sleep(1500);
		x = arr4[element];
		console.log("x = " + arr4[element]);
		addingElement(table4, arr4, element, j, position4);
	}
	await sleep(2000);
	document.getElementById('further').style.display = "block";
}

var addingElement = async function(table4, arr4, element, j, position4){
	position4 = arr4[element] % 10;
	while(table4[position4].status){
		show(position4, "red", table4);
		let k = (j+1);
		document.getElementById('hashfunc').innerHTML = "h1(" + x + ") = " + x +"%10 = " + x%10 + ", h2(" + x + ") = 1 + (" + x + "%7) = " + (1 + x%7) + "<br>";
		position4 = (position4 + 1 + k*arr4[element]%7) % 10;
		j++;
		await sleep(1000);
	}
	if(table4[position4].status == 0){
		table4[position4].data = arr4[element];
		table4[position4].status = 1;
		document.getElementById('hashfunc').innerHTML = "h1(" + x + ") = " + x +"%10 = " + x%10 + ", h2(" + x + ") = 1 + (" + x + "%7) = " + (1 + x%7) + "<br>";
		show(position4, "#7FF219", table4);
	}
}