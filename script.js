var button = document.getElementsByTagName('button');
var div = document.getElementsByClassName('widgets');
function CloseConsole(){
	div[0].classList.add("none");
}
function OpenConsole(){
	div[0].classList.remove("none");
}
function CloseBrowser(){
	div[1].classList.add("none");
}
function OpenBrowser(){
	div[1].classList.remove("none");
}
function OpenCode(){
	div[2].classList.remove("none");
}
function CloseCode(){
	div[2].classList.add("none");
}
button[0].addEventListener('click',CloseConsole);
button[1].addEventListener('click',CloseBrowser);
button[2].addEventListener('click',CloseCode);
var code = document.getElementsByTagName('textarea')[0];
function readCode(){
	var count = 0;
	var word = "";
	var out = document.getElementById('output');
	var compile = code.value.replace(/\n/g,"");
	var i = 0;
	document.getElementById('output').innerHTML = word.slice(4);
	while (i < compile.length){
		if (compile.charAt(i) != ""){
			word += compile.charAt(i);
		}else{
			if (word.slice(0,3) == "say"){
				out.innerHTML += word.slice(4) + "<br>";
			}else if(word == "create canvas"){
				out.innerHTML += "<center><canvas id='canva' height='500' width='1000'></canvas></center>"
				var canvas = document.getElementById('canva');
				var canvasContext = canvas.getContext('2d');
				function rect(x,y,x2,y2,color) {
					canvasContext.fillStyle = color;
					canvasContext.fillRect(x,y,x2,y2);
				}
			}else if(word.slice(0,12) == "canvas color"){
				rect(0,0,canvas.width,canvas.height,word.slice(13));
			}
			word = "";
		}
		i++;
	}
}