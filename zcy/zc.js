$(function(){
	var username=document.getElementById("username");
	var info=document.getElementById("info");
	
	//通过失去焦点判断
	username.onblur=function(){
		//alert(username.value);
		//获取input的value值
		var uname=this.value;
		
		//将获取到的值发送到服务器做下数据验证
		//赋值传递
		Ajax().post('1.php','un='+uname,function(msg){
				//alert(msg)
				
				//根据返回信息 判断span的值
				if(msg=='y'){
					//表示已注册
					info.innerHTML='对不起，该用户名已注册';
				}else{
					//未注册
					info.innerHTML='恭喜，该用户名可以使用';
				}
		
		});
	}
})