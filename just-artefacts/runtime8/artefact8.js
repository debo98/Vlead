var artefactMaker8 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art8 = document.createElement("div");

		art8.innerHTML = 
		'<br>' +
		'<p id="elements">Some elements have been inserted into the hash table. Search for the given element. Write the starting index and the ending index when searching</p>' +
		'<PRE>' +
		'<p id="searchX">Search for x</p>' + 
		'<p id="answer">Start = <input type="text" id="start">,  ' + 
		'End  =  <input type="text" id="end">' + 
		'<button id="submit" onclick="check2()">Submit</button></p>' + 
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
		'<p>Try a different number<button id="changebutton" onclick="choose()">Go</button></p>' + 
		'<p id="steps"> </p>' + 
		'</PRE>';
		divElem.appendChild(art8);
	}
	obj.adddiv=adddiv;
	return obj;
};
