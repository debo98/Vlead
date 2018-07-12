var resourceCatalog = {"id" :  'build-heap',
"type": 'interactive',
"reqs-satisfied": 'This requirement provides an interface to build a heap',
"reference_id": "'id1', 'id2'",
"url": ['http://localhost:8000/artefact2.js','http://localhost:8000/source2.js'],
"creator": 'artefactMaker2',
"api": 'adddiv',
"args": 'reference to dom element'
};

var showResource = function() {
	var obj = JSON.stringify(resourceCatalog.creator);
	var str1 = JSON.parse(obj);
	var obj1 = JSON.stringify(resourceCatalog.api);
	var str2 = JSON.parse(obj1);
	var res=str1+'('+')'+'.'+str2;
	res=String(res);

	var resourceElem = document.getElementById("showresource");
	var url1 = resourceCatalog.url[0];
	var url2 = resourceCatalog.url[1];

	var script = document.createElement("script");

	script.type = "text/javascript";
	if (script.readyState) {
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				eval(res)(resourceElem);
			}
		}
	} 
	else {
		script.onload = function () {
			eval(res)(resourceElem);
		}
	}
	script.src=url1;
	document.getElementsByTagName("head")[0].appendChild(script);
	var visualizeScript = document.createElement("script");
	visualizeScript.setAttribute('src', url2);
	document.head.appendChild(visualizeScript);
};
