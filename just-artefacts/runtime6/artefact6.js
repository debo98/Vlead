var artefactMaker6 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art6 = document.createElement("div");

		art6.innerHTML = 
		'<br>' +
		'<p>Enter a number and click on Insert to insert it into the hash table</p>' + 
		'<PRE>' +
		'<input type="text" id="input"><button id="insert" onclick="insert()">Insert</button><br><br><br>' +
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
		'<button id="restartbutton" onclick="restart6()">Restart</button>  ' + 
		'<p id="legend6"><input id="correctindex6" type="text" readonly> Found <input id="incorrectindex6" type="text" readonly> Not Found</p>' +
		'</PRE>';
		divElem.appendChild(art6);
	}
	obj.adddiv=adddiv;
	return obj;
};
