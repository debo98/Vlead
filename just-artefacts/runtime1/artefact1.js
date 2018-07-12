var artefactMaker1 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art1 = document.createElement("div");

		art1.innerHTML = 
		'<div>' +
		'<br>' + 
		'<p>Insert 41, 63, 89, 94, 82 and 45 in the given Hash table. Click on Submit once you are done.</p>' +
		'<p id="further">Now where would you insert 71? Click on the index where you would insert it if the Hash table was empty</p>' + 
		'</div>' +
		'<PRE>' + 
		'<p>       Index     Hash Value</p>' +
		'<button id="button0" onclick="onclickingnot1()">0</button>	<input type="text" id="0" name="zero"><br>' + 
		'<button id="button1" onclick="onclicking1()">1</button>	<input type="text" id="1" name="one"><br>' + 
		'<button id="button2" onclick="onclickingnot1()">2</button>	<input type="text" id="2" name="two"><br>' + 
		'<button id="button3" onclick="onclickingnot1()">3</button>	<input type="text" id="3" name="three"><br>' + 
		'<button id="button4" onclick="onclickingnot1()">4</button>	<input type="text" id="4" name="four"><br>' + 
		'<button id="button5" onclick="onclickingnot1()">5</button>	<input type="text" id="5" name="five"><br>' + 
		'<button id="button6" onclick="onclickingnot1()">6</button>	<input type="text" id="6" name="six"><br>' + 
		'<button id="button7" onclick="onclickingnot1()">7</button>	<input type="text" id="7" name="seven"><br>' + 
		'<button id="button8" onclick="onclickingnot1()">8</button>	<input type="text" id="8" name="eight"><br>' + 
		'<button id="button9" onclick="onclickingnot1()">9</button>	<input type="text" id="9" name="nine"><br>' + 
		'<button id="restartbutton" onclick="restart1()">Restart</button>  ' + 
		'<button id="submitbutton" onclick="check1()">Check</button>' + 
		'<p id="legend1"><input id="correctindex1" type="text" readonly> Correct <input id="incorrectindex1" type="text" readonly> Incorrect</p>' +
		'<p id="collision"></p>' + 
		'</PRE>';

		divElem.appendChild(art1);
	}
	obj.adddiv=adddiv;
	return obj;
};
