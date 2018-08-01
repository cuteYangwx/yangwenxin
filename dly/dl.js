//拖动特效
var div = document.getElementById("b-tu");

//按下事件
div.onmousedown = function(ev) {
	//事件兼容对象
	var evt = ev || event;
	//alert(evt.clientX+":"+evt.clientY);
	//alert(div.offsetLeft+":"+div.offsetTop);

	//获取 鼠标位置与div之间的距离
	var dx = evt.clientX - div.offsetLeft;
	var dy = evt.clientY - div.offsetTop;
	//alert(dx+":"+dy);

	//设置鼠标移动事件
	document.onmousemove = function(ev) {
		var evt = ev || event;
		//获取移动距离 鼠标位置-距离值=移动值
		var l = evt.clientX - dx;
		var t = evt.clientY - dy;
		console.log(l + ":" + t);

		//l t 判断最大和最小移动值
		if(l < 0) {
			l = 0;
		} else if(l > document.documentElement.clientWidth - div.offsetWidth) {
			l = document.documentElement.clientWidth - div.offsetWidth;
		}

		if(t < 0) {
			t = 0;
		} else if(t > document.documentElement.clientHeight - div.offsetHeight) {
			t = document.documentElement.clientHeight - div.offsetHeight;
		}

		//现有div赋值新的位置
		div.style.left = l + 'px';
		div.style.top = t + 'px';
	}

	//鼠标松开事件
	document.onmouseup = function() {
		//取消事件
		document.onmousemove = null;
		document.onmouseup = null;
	}

}