//二级菜单特效
$(function() {
	$('.erjidh,.wdjd-z').mouseenter(function() {
		$('.h-z-right .erjidh').css('background', '#fff');
		$('.h-z-right .erjidh').css('border', '1px solid #ccc');
		$('.h-z-right .erjidh').css('border-bottom', 'none');
		$('.wdjd-z').show();
	}).mouseleave(function() {
		$('.h-z-right .erjidh').css('background', '');
		$('.h-z-right .erjidh').css('border', '');
		$('.wdjd-z').hide();
	})
})

$(function() {
	$('.fl').mouseenter(function() {
		$('.erfl').css('background', '#fff');
		$('.erfl').css('border', '1px solid #fff');
		$('.erfl').css('border-bottom', 'none');
		$('.erfl').show();
	}).mouseleave(function() {
		$('.erfl').css('background', '');
		$('.erfl').css('border', '');
		$('.erfl').hide();
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
			$('#lunbo>.num>li').css('background', '').css('border', '2px solid #fff');

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
		$('#lunbo>.num>li').css('background', '').css('border', '2px solid #fff');

		//获取当前li的下标
		now = $(this).index();
		//alert(now);
		$('#lunbo>.img>li:eq(' + now + ')').show();
		$('#lunbo>.num>li:eq(' + now + ')').css('background', '#fff');
	})
})


//楼层特效
$(function(){
		//点击li 滚动到对应的位置
		$('ul li').click(function(){
			//获取指定的li
			var index=$(this).index();
			//alert(index);
			//当前楼层距离顶部的位置
			//console.log($('.floor').eq(index).offset().top)
			
			var top=$('.floor').eq(index).offset().top;
			
			//$('body,html').scrollTop(top);
			//加动画
			$('body,html').animate({
				scrollTop:top
			},10);
		
		})
		
		//获取每个楼层距离顶部的高度
		var heights=[];
		
		$('.floor').each(function(){
			//给数组添加数据 每一个高度
			//向一个数组的尾部添加一个或者多个元素
			heights.push($(this).offset().top);
		});
		//获取每个楼层距离顶部的高度
		console.log(heights);

		
		
		//当前文档的滚动监听事件
		$(window).scroll(function(){
			//获取现在的滚动距离
			var top=$(window).scrollTop();
			//alert(top);
			
			//声明下标变量
			var index;
			//遍历每一个楼层距离顶部的高度
			for(var i=0;i<heights.length;i++){
				//1F 高度>=100 <2F的高度
				if(top>=heights[i] && top<heights[i+1]){
					//找到和1F对用的li的下标css 
					index=i;
					$('.louceng li').eq(index).siblings().css('background','').css('border','1px solid mediumpurple');
					break;

				}else if(top>=heights[heights.length-1]){
					//index重新赋值
					index=heights.length-1;
					//显示第十个的样式
					$('.louceng li').eq(index).siblings().css('background','').css('border','1px solid mediumpurple');
					break;
				}
			}
		});
	
	})



$(function(){
	//先获取节点
	var uls=document.getElementsByClassName('pbl');
	console.log(uls);
	//声明显示的数字
	var num1=1;
	
	//创建li节点的函数
	function CreateLi(pbl,num1){
		//创建li节点
		var li=document.createElement('li');
		//console.log(li);
		//随机高度
		li.style.height=rand()+'px';
		//console.log(li);
		//显示num
		li.innerHTML=num1;
		//设置背景图片
		li.style.backgroundImage='url(image/'+randomColor()+'.jpeg)';
		li.style.backgroundSize='100% 100%';
		//console.log(li);
		//将li添加到ul的尾部
		pbl.appendChild(li);
	}
	//CreateLi(uls[0],num);
	
	//创建li随机高度的函数
	function rand(){
		return Math.floor(Math.random()*100)+100;
	}
	//创建li随机背景图片
	function randomColor(){
		var color=Math.floor(Math.random()*5)+1;
		return color;
	}
	
	
	
	
	
	//创建多个li节点的函数
	function statr(){
		//遍历所有的ul 找到最短的那个
		for(var n=0;n<5;n++){
			//找到所有的ul 数组中随机一个比较
			var ArrHeight=[uls[0].offsetHeight,uls[1].offsetHeight,uls[2].offsetHeight,uls[3].offsetHeight,uls[4].offsetHeight];
			//找到最小的ul
			var  index=mini(ArrHeight);
			//给最小的ul添加li节点
			CreateLi(uls[index],num1++)
		}
	}
	//页面首次加载调用函数
	statr();
	
	
	//找到高度最小的函数
	function mini(arr){
		//console.log(arr);
		//任意 一个ul
		var miniHeight=arr[0];
		//遍历判断事件
		for(n=0;n<arr.length;n++){
			//数组中比我小的就是你
			if(arr[n]<miniHeight){
				miniHeight=arr[n]
			}
		}
		
		//返回的是当前ul的下标
		return arr.indexOf(miniHeight);
	}
	
	
	
	
	//添加滚动事件 判断到底 添加节点
	window.onscroll=function(){
		//html的总高度-可见的窗口高度=body的滚动高度
		//每当滚动位置快要到达底部的时候，再次执行函数
		
		//兼容处理
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		var clientHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		console.log(scrollTop);
		console.log(clientHeight);
		
		//html的总高度-可见的窗口高度=body的滚动高度
		if(document.documentElement.offsetHeight-clientHeight<=scrollTop){
			//再次调用添加节点函数
			statr();
		
		}
	}
	

})
