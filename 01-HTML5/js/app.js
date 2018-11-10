
var box1Div,box2Div,msgDiv,img1;

window.onload = function(){
	box1Div = document.getElementById("box1");
	msgDiv = document.getElementById("msg");
	img1 = document.getElementById("img1");
	box2Div = document.getElementById("box2");
	// 监听拖入事件
	// box1Div.ondragenter = function(e){
	// 		showObj(e);
	// }
	// 阻止系统默认操作
	box1Div.ondragover = function(e){
		e.preventDefault();
	}
	box2Div.ondragover = function(e){
		e.preventDefault();
	}
	// 获得img数据
	img1.ondragstart = function(e){
		e.dataTransfer.setData("imgId","img1");
	}
	// 得到当前拖拽事件
	box1Div.ondrop = dropImghandLer;
	box2Div.ondrop = dropImghandLer;
}
function dropImghandLer(e){
		showObj(e.dataTransfer);
		// 阻止系统默认事件
		e.preventDefault();
		// 创建节点
		var img = document.getElementById(e.dataTransfer.getData("imgId"));
		// box1Div.appendChild(img);
		// e.target:获得目标指定源
		e.target.appendChild(img);
	}
// 创建方法
function showObj(obj){
	var s = ""	;
	// 通过遍历是不是它的对象
	for(var k in obj){
		// 如果是它对象
		s+=k+":"+obj[k]+"<br>";
	}
	msgDiv.innerHTML = s;
}