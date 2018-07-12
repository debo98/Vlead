var artefactMaker9 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art9 = document.createElement("div");

		art9.innerHTML = 
		'<br>' +
		'<p id="elements">Some elements have been inserted into the hash table. Enter the element you want to delete. Only the first occurance will be deleted</p>' +
		'<PRE>' +
		'<p>Enter a number</p>' + 
		'<input type="text" id="delete"> <button id="deletebutton" onclick="delete1()">Delete</button><br>' + 
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
		'<p id="legend9"><input id="correctindex9" type="text" readonly> Found <input id="incorrectindex9" type="text" readonly> Not Found <input id="deletedindex" type="text" readonly> Deleted</p>' +
		'<p id="steps"></p>' +
		'</PRE>';
		divElem.appendChild(art9);
	}
	obj.adddiv=adddiv;
	return obj;
};
