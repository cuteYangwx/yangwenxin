//二级菜单特效
$(function() {
	$('button').click(function() {
		$('.sdh').fadeOut();
	})

	$('.dw1').mouseenter(function() {
		$('.beijin').show();
	
		$('.dw1').show();
	}).mouseleave(function() {
		$('.beijin').hide();
	})

})
//轮播特效
$(function() {
	//声明下标
	var now = 0;
	//获取li标签的长度
	var len = $('#lunbo>.img>li').length;
	console.log(len)

	function run() {
		//自动轮播
		s = setInterval(function() {
			//当前隐藏 图片数字
			$('#lunbo>.img>li').hide();
			$('#lunbo>.num>li').css('border', '2px solid #fff').css('background', '');

			//下一张显示 
			//判断now
			if(now >= len - 1) {
				now = 0;
			} else {
				now++;
			}

			//显示数字和图片
			$('#lunbo>.img>li:eq(' + now + ')').show();
			$('#lunbo>.num>li:eq(' + now + ')').css('background', '#fff');
		}, 1000)
	}

	run();

	//鼠标移入移出事件
	$('#lunbo').mouseover(function() {
		//清除定时 显示箭头
		clearInterval(s);
	}).mouseout(function() {
		run();
	})

	//数字对应图片
	$('#lunbo>.num>li').mouseover(function() {
		//清除定时 
		clearInterval(s);
		//当前隐藏 图片数字
		$('#lunbo>.img>li').hide();
		$('#lunbo>.num>li').css('border', '2px solid #fff').css('background', '');

		//获取当前li的下标
		now = $(this).index();
		//alert(now);
		$('#lunbo>.img>li:eq(' + now + ')').show();
		$('#lunbo>.num>li:eq(' + now + ')').css('background', '#fff');
	})

})

var gd = document.getElementById('gd');

//滚动事件 
window.onscroll = function() {
	//alert(11);

	//scrollTop值 兼容处理
	var y = document.documentElement.scrollTop || window.pageYOffset;

	console.log(y);

	//判断y>=200
	if(y >= 800) {
		//dd 定位改变
		gd.style.display = 'block';
		gd.style.position = 'fixed';

	} else if(y < 800) {
		//回到原来的位置
		gd.style.display = 'none';

	}
}


//倒计时特效
//id属性值唯一 可以直接使用
console.log(sj);

//每一秒中显示 时间倒退显示
setInterval(function() {
	//获取指定时间对象
	var d1 = new Date();
	var d2 = new Date('2018/6/1');
	//console.log(d2);

	//获取指定时间对象的差值 时间戳
	var cha = d2.valueOf() - d1.valueOf();
	//console.log(d1.valueOf());
	//console.log(d2.valueOf());
	//时间戳的差每一秒都在减少
	console.log(cha);

	//获取天数

	//获取小时
	var hour = Math.floor(cha / (1000 * 60 * 60));
	cha %= 1000 * 60 * 60;

	//获取分数
	var minute = Math.floor(cha / (1000 * 60));
	cha %= 1000 * 60;
	//获取秒数
	var second = Math.floor(cha / (1000));
	//sj显示内容
	sj.innerHTML = ywx(hour) + "-" + (minute) + "-" + (second);

}, 1000);

function ywx(num) {
	if(num < 10) num = '0' + num;
	return num;
}


//轮播2
$(function() {
	//alert($)
	//自动轮播 点击数字显示对应图片 点击下一张上一张

	//声明下标
	var now1 = 0;
	//获取li标签的长度
	var len1 = $('#tp3>.tp3img>li').length;
	console.log(len1)

	function run1() {
		//自动轮播
		s1 = setInterval(function() {
			//当前隐藏 图片数字
			$('#tp3>.tp3img>li').hide();
			$('#tp3>.tp3num>li').css('background', '#DDDDDD');

			//下一张显示 
			//判断now
			if(now1 >= len1 - 1) {
				now1 = 0;
			} else {
				now1++;
			}

			//显示数字和图片
			$('#tp3>.tp3img>li:eq(' + now1 + ')').show();
			$('#tp3>.tp3num>li:eq(' + now1 + ')').css('background', '#d61b1b');

		}, 1000)
	}

	run1();

	//鼠标移入移出事件
	$('#tp3').mouseover(function() {
		//清除定时 显示箭头
		clearInterval(s1);
	}).mouseout(function() {
		run1();
	})

})
/*选项卡*/
//设置li的移入事件
$(function() {
	$('.main-m ul li').mouseenter(function() {
		//显示当前li 其余隐藏
		$(this).addClass('select').siblings().removeClass('select');
		//获取当前下标
		var index = $(this).index();
		$('.tab>ul').eq(index).show().siblings().hide();
	})
})


$(function(){
	$('.menu>li,.jydq1').mouseover(function(){
		$('.jydq1').show();
	}).mouseout(function(){
		$('.jydq1').hide();
	})
})

//选项卡
$(function() {
	$('.jddh').mouseenter(function() {
		$('.wdjd-z').css('display', 'block');
	})
		$('.wdjd-z').mouseleave(function() {
		$('.wdjd-z').css('display', 'none');

	})
})