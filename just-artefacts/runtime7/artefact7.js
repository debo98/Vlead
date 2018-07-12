var artefactMaker7 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art7 = document.createElement("div");

		art7.innerHTML = 
		'<br>' +
		'<p id="elements">Some elements have been inserted into the hash table. Search for an element</p>' +
		'<PRE>' +
		'<p>       Index     Hash Value</p>' +
		'<button>0</button>	<input type="text" id="0" name="zero" readonly><br>' + 
		'<button>1</button>	<input type="text" id="1" name="one" readonly><br>' + 
		'<button>2</button>	<input type="text" id="2" name="two" readonly><br>' + 
		'<button>3</button>	<input type="text" id="3" name="three" readonly><br>' + 
		'<button>4</button>	<input type="text" id="4" name="four" readonly><br>' + 
		'<button>5</button>	<input type="text" id="5" name="five" readonly><br>' + 
		'<button>6</button>	<input type="text" id="6" name="six" readonly><br>' + 
		'<button>7</button>	<input type="text" id="7" name="seven" readonly><br>' + 
		'<button>8</button>	<input type="text" id="8" name="eight" readonly><br>' + 
		'<button>9</button>	<input type="text" id="9" name="nine" readonly><br>' + 
		'<input type="text" id="searchfor"> <button id="nextbutton" onclick="search1()">Search</button><br>' +
		'<p id="steps">Please enter a number to search for</p>' + 
		'<p id="legend7"><input id="correctindex7" type="text" readonly> Found <input id="incorrectindex7" type="text" readonly> Not Found</p>' +
		'</PRE>';
		divElem.appendChild(art7);
	}
	obj.adddiv=adddiv;
	return obj;
};
