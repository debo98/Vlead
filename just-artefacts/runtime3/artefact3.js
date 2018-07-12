var artefactMaker3 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art3 = document.createElement("div");

		art3.innerHTML = 
		'<br>' +
		'<p>Observe how 76, 87, 78 and 96 get inserted into the hash table</p>' +
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
		'<button id="nextbutton" onclick="animate2()">Show</button><br>' + 
		'<p id="legend3"><input id="correctindex3" type="text" readonly> Available <input id="incorrectindex3" type="text" readonly> Collision</p>' +
		'<p id="further">96 should have gone to index 6 because 96%10 = 6.<br>' +
		'But since 6 was occupied, it got hashed to (96%10 + 1^2)%10 = 7<br>' +  
		'Since 7 was occupied, it got hashed to (96%10 + 2^2)%10 = 0</p>' +
		'</PRE>';
		divElem.appendChild(art3);
	}
	obj.adddiv=adddiv;
	return obj;
};
