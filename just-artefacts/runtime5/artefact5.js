var artefactMaker5 = function() {
	var obj = {};
	var adddiv = function(divElem) {
		var art5 = document.createElement("div");

		art5.innerHTML = 
		'<div>' +
		'<br>' + 
		'<p>Insert 44, 32, 64, 33, 86, 34, 27, 35, 36 and 52 in the given Hash table. Click on Submit once you are done.</p>' +
		'</div>' +
		'<PRE>' + 
		'<p>         Index         Linear          Quadratic</p>' +
		'<button>00</button>    <input type="text" id="lp0">    <input type="text" id="qp0"><br>' + 
		'<button>01</button>    <input type="text" id="lp1">    <input type="text" id="qp1"><br>' + 
		'<button>02</button>    <input type="text" id="lp2">    <input type="text" id="qp2"><br>' + 
		'<button>03</button>    <input type="text" id="lp3">    <input type="text" id="qp3"><br>' + 
		'<button>04</button>    <input type="text" id="lp4">    <input type="text" id="qp4"><br>' + 
		'<button>05</button>    <input type="text" id="lp5">    <input type="text" id="qp5"><br>' + 
		'<button>06</button>    <input type="text" id="lp6">    <input type="text" id="qp6"><br>' + 
		'<button>07</button>    <input type="text" id="lp7">    <input type="text" id="qp7"><br>' + 
		'<button>08</button>    <input type="text" id="lp8">    <input type="text" id="qp8"><br>' + 
		'<button>09</button>    <input type="text" id="lp9">    <input type="text" id="qp9"><br>' + 
		'<button>10</button>    <input type="text" id="lp10">    <input type="text" id="qp10"><br>' + 
		'<button>11</button>    <input type="text" id="lp11">    <input type="text" id="qp11"><br>' + 
		'<button>12</button>    <input type="text" id="lp12">    <input type="text" id="qp12"><br>' + 
		'<button>13</button>    <input type="text" id="lp13">    <input type="text" id="qp13"><br>' + 
		'<button>14</button>    <input type="text" id="lp14">    <input type="text" id="qp14"><br>' + 
		'<button>15</button>    <input type="text" id="lp15">    <input type="text" id="qp15"><br>' + 
		'<button>16</button>    <input type="text" id="lp16">    <input type="text" id="qp16"><br>' + 
		'<button>17</button>    <input type="text" id="lp17">    <input type="text" id="qp17"><br>' + 
		'<button>18</button>    <input type="text" id="lp18">    <input type="text" id="qp18"><br>' + 
		'<button>19</button>    <input type="text" id="lp19">    <input type="text" id="qp19"><br>' + 
		'<button id="restartbutton" onclick="restart2()">Restart</button>  ' + 
		'<button id="submitbutton" onclick="check2()">Submit</button><br>' + 
		'<p id="legend5"><input id="correctindex5" type="text" readonly> Correct <input id="incorrectindex5" type="text" readonly> Incorrect</p>' +
		'<div id="collision">Correct!</div>' + 
		'</PRE>';

		divElem.appendChild(art5);
	}
	obj.adddiv=adddiv;
	return obj;
};
