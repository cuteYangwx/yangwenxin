
//选项卡
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


//放大镜
$(function(){
		//small中move移动
		$('#small').mousemove(function(e){
			//move big显示
			$('#move,#big').show();
			
			//move的坐标
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			//alert(x+':'+y)
		
			//鼠标居中-move一半宽高
			var x=x-$('#move').width()/2;
			var y=y-$('#move').height()/2;
			
			//边界判断
			//左边
			if(x<=0){
				x=0
			}
			//上边
			if(y<=0){
				y=0;
			}
			//left的最大值
			if(x>=$('#small').width()-$('#move').width()){
				x=$('#small').width()-$('#move').width();
			}
			
			//top的最大值
			if(y>=$('#small').height()-$('#move').height()){
				y=$('#small').height()-$('#move').height();
			}
			
			//move绑定坐标
			$('#move').css({left:x,top:y});
			
			//算大图和小图比例关系
			var scale=$('#big>img').width()/$('#small>img').width()
		
			//var bleft=bigPic.offsetWidth*(x/small.offsetWidth);
			//alert(scale);
			
			//big的移动距离=move距离*比例关系
			$('#big').scrollLeft(x*scale);
			$('#big').scrollTop(y*scale);
			
			//大图src=small的src
			$('#big>img').attr('src',$('#small_pic').attr('src'))
			
		}).mouseout(function(){
			$('#move,#big').hide();
		});
	
	
		//点更换图片
		$('#dian>li>img').click(function(){
			//small中img的src=当前img的src
			$('#small>img').attr('src',$(this).attr('src'));
		})
	
	
	
	
	
	
	})
