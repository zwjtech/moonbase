//console.log(1);
var oTop=document.getElementsByClassName("top_li");
var oLnav=document.getElementsByClassName("left_nav")[0];
var oRnav=document.getElementsByClassName("right_nav")[0];
var lnbg=document.getElementsByClassName("lnbg");
var item=0;
oTop[0].onmouseover=function(){
	oTop[0].style.background="url(img/i_index_nav1b.jpg)";
}
oTop[1].onmouseover=function(){
	oTop[1].style.background="url(img/i_index_nav2b.jpg)";
}
oTop[2].onmouseover=function(){
	oTop[2].style.background="url(img/i_index_nav3b.jpg)";
}
oTop[3].onmouseover=function(){
	oTop[3].style.background="url(img/i_index_nav4b.jpg)";
}
oTop[4].onmouseover=function(){
	oTop[4].style.background="url(img/i_index_nav5b.jpg)";
}
oTop[5].onmouseover=function(){
	oTop[5].style.background="url(img/i_index_nav6b.jpg)";
}
oTop[6].onmouseover=function(){
	oTop[6].style.background="url(img/i_index_nav7b.jpg)";
}
oTop[7].onmouseover=function(){
	oTop[7].style.background="url(img/i_index_nav8b.jpg)";
}
oTop[8].onmouseover=function(){
	oTop[8].style.background="url(img/i_index_nav9b.png)";
}
//var navindex;
//for(var i=0;i++;i<8){
//	navindex=i;
//	oTop[navindex].onmouseover=function(){
//		oTop[navindex].style.background="url(img/i_index_nav"+(navindex+1)+"b.jpg)";
//		if(i==9){
//			oTop[8].style.background="url(img/i_index_nav9b.png)";
//		}
//	}
//}



oTop[0].onmouseout=function(){
	oTop[0].style.background="url(img/i_index_nav1.jpg)";
//	console.log("no");
}
oTop[1].onmouseout=function(){
	oTop[1].style.background="url(img/i_index_nav2.jpg)";
//	console.log("no");
}
oTop[2].onmouseout=function(){
	oTop[2].style.background="url(img/i_index_nav3.jpg)";
//	console.log("no");
}
oTop[3].onmouseout=function(){
	oTop[3].style.background="url(img/i_index_nav4.jpg)";
//	console.log("no");
}
oTop[4].onmouseout=function(){
	oTop[4].style.background="url(img/i_index_nav5.jpg)";
//	console.log("no");
}
oTop[5].onmouseout=function(){
	oTop[5].style.background="url(img/i_index_nav6.jpg)";
//	console.log("no");
}
oTop[6].onmouseout=function(){
	oTop[6].style.background="url(img/i_index_nav7.jpg)";
//	console.log("no");
}
oTop[7].onmouseout=function(){
	oTop[7].style.background="url(img/i_index_nav8.jpg)";
//	console.log("no");
}
oTop[8].onmouseout=function(){
	oTop[8].style.background="url(img/i_index_nav9.png)";
//	console.log("no");
}

var oBody=document.getElementsByTagName("body")[0];
function getScroll(type){
	switch(type){
		case "top":
			return document.documentElement.scrollTop||document.body.scrollTop;
			break;
		case "left":
			return document.documentElement.scrollLeft||document.body.scrollLeft;
			break;
		default:
			alert("请传入left或top来获取滚动距离！");
			break;
	}
}
var time11 = setInterval(function(){
		var ltop=document.body.scrollTop;
		//console.log(ltop);
		if(ltop<500){
			oLnav.style.display="none";
		}else{
			oLnav.style.display="block";
		}
		if(ltop<1000){
			lnbg[0].style.background="url(img/lnav_2b.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<1680){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3b.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<2408){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4b.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<3360){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5b.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<4140){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6b.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<4700){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7b.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<5098){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8b.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<5700){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9b.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<6300){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10b.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<6801){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11b.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else if(ltop<7240){
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12b.jpg)";
			lnbg[11].style.background="url(img/lnav_13a.jpg)";
		}else{
			lnbg[0].style.background="url(img/lnav_2a.jpg)";
			lnbg[1].style.background="url(img/lnav_3a.jpg)";
			lnbg[2].style.background="url(img/lnav_4a.jpg)";
			lnbg[3].style.background="url(img/lnav_5a.jpg)";
			lnbg[4].style.background="url(img/lnav_6a.jpg)";
			lnbg[5].style.background="url(img/lnav_7a.jpg)";
			lnbg[6].style.background="url(img/lnav_8a.jpg)";
			lnbg[7].style.background="url(img/lnav_9a.jpg)";
			lnbg[8].style.background="url(img/lnav_10a.jpg)";
			lnbg[9].style.background="url(img/lnav_11a.jpg)";
			lnbg[10].style.background="url(img/lnav_12a.jpg)";
			lnbg[11].style.background="url(img/lnav_13b.jpg)";
		}
		$(function() {
		var selectListsLb = $(".left_navBox");
	
		selectListsLb.on("mouseenter ", "li", function(e) {
		item = $(this).index();
			$(this).css("background", "url(img/lnav_"+(item+1)+"b.jpg)");
			if((item==0)||(item==13)){
				$(this).css("background", "url(img/lnav_"+(item+1)+".jpg)");
			}
	
		}).on("mouseleave", "li", function() {
			$(this).css("background", "url(img/lnav_"+(item+1)+"a.jpg)");
			if((item==0)||(item==13)){
				$(this).css("background", "url(img/lnav_"+(item+1)+".jpg)");
			}
		});
});	
},50);
var Oclose_shopcarR=document.getElementsByClassName("close_shopcarR")[0];
var OshopcarR=document.getElementsByClassName("shopcarR")[0];
var Oche=document.getElementsByClassName("che")[0];

var Oclose_yonghu=document.getElementsByClassName("close_yonghu")[0];
var Oyonghu=document.getElementsByClassName("yonghu")[0];
var Ouser=document.getElementsByClassName("user")[0];
Oclose_shopcarR.onclick=function(){
	OshopcarR.style.display="none";
}
Oche.onmouseover=function(){
	OshopcarR.style.display="block";
}
Oche.onmouseout=function(){
	OshopcarR.style.display="none";
}

Oclose_yonghu.onclick=function(){
	Oyonghu.style.display="none";
}
Ouser.onmouseover=function(){
	Oyonghu.style.display="block";
}
Ouser.onmouseout=function(){
	Oyonghu.style.display="none";
}



	


/*banner轮播图*/
$(function() {
	//轮播图下的li
	var lists = $(".bannerp li");
	//轮播图里面的小圆点
	var selectLists = $(".select_banner");
	var index = 0;
	var timer = setInterval(foucs, 2000);
	

	
	function foucs() {
		if(index >= lists.length) {
			index = 0;
		}
		show(index);
		index++;
	}

	function show(index) {
		//把当前的li变成block,把其他li变成none
		var selfindex = index;
		for(var i = 0; i < lists.length; i++) {
			if(i == selfindex) {
				lists[i].style.display = 'block';
				lists[i].style.backgroundImage = "url(img/i_b" + (i + 1) + ".jpg) right center no-repeat";
//				selectLists.children("li")[i].style.backgroundImage = "url(img/redball.png)"
				selectLists.children("li")[i].style.background= "#fff";
				selectLists.children("li")[i].style.color= "#fff";
				
			} else {
				lists[i].style.display = 'none';
				//selectLists.children("li")[i].style.backgroundImage = "url(img/whileball.png)";
				selectLists.children("li")[i].style.background= "#000";
				selectLists.children("li")[i].style.color= "#000";
			}
		}
	}
	selectLists.on("mouseover", "li", function(e) {
		index = $(this).index();
		clearInterval(timer);
		$(this).css("background", "#fff");
		$(this).css("color", "#fff");
		show(index);
	}).on("mouseleave", "li", function() {
		timer = setInterval(foucs, 2000);
	});
});

/*【名牌推荐】 【美国品牌】 【名品馆】*/
$(function() {
	var navlists = $(".bigbox_right_nav ul li");
	navlists.on("mouseover", function() {
		$(this).css({
			"backgroundColor": "#000"
		}).children("a").css({
			"color": "#fff"
		}).next("span").css({
			"display": "block"
		});
		$(this).siblings().css({
			"backgroundColor": "#fff"
		}).children("a").css({
			"color": "#000"
		}).next("span").css({
			"display": "none"
		});
		var idx = $(this).index();
		for(var i = 0; i < 3; i++) {
			$(".bigbox_right_nav" + i + "").css({
				"display": "none"
			});
		}
		$(".bigbox_right_nav" + idx + "").css({
			"display": "block"
		});
	})
})
$(function(){
		/****cookie部分***/
		var myUserName = "myUserName";
		var myPwd = "myPwd"
		var isLogin = "isLogin";
		//alert(getCookie(isLogin));
		if(getCookie(isLogin) == 1){
			var userName = getCookie(myUserName);
			$("#useInfo").html('欢迎您,' +'<a href="html/personalCenter.html">'+ userName +'</a>'+ '|<a href="javascript:void(0)" id="cancel">退出</a>');
			$("#userPwd").show();
			
			/*右侧*/
			$(".dlinfo").css({
				"display": "block"
			});
			$(".userName").html( userName);
			
		}else{
			$("#useInfo").html('<a href="html/login.html">登录</a>|<a href="html/register.html">注册</a>');
			$("#userPwd").hide();
			
			/*右侧*/
			$(".dlinfo").css({
				"display": "none"
			});
		}
		$("#cancel").on("click",function(){
			if(getCookie(isLogin) == 1){
				updateCookie(isLogin,"0");
				window.location = "index.html"
			}
		})
	/****cookie部分***/
})



/*左侧浮动栏*/
$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() < 500) {
			$(".leftSideBar,.rightSideBar").css("display", "none");
		}else{
			$(".leftSideBar,.rightSideBar").css("display", "block");
		}
	});
});

$(function(){
	$(".list_group").on("mouseover","dl",function(){
		$(this).css("background-color","#d2005c").children("dd").css("display","block");
	}).on("mouseleave","dl",function(){
		$(this).css("background-color","#fff").children("dd").css("display","none");
	});
});

/*登录转过来有用户名*/
//$(function(){
//	if($.cookie("username")!=undefined){
//		$("#login").html("欢迎登录:"+$.cookie("username"));
//	}
//});
$(function() {
	//轮播图下的li
	var lists = $(".bannerp2 li");
	//轮播图里面的小圆点
	var selectLists2 = $(".select_banner2");
	var index = 0;
	var timer1 = setInterval(foucs, 2000);
	
	function foucs() {
		 //上一页按钮
	   $(".pro").click(function() {
	      index -= 1;
	        if(index == -1) {index = lists.length - 1;}
	       show(index);
	    });
	
	   //下一页按钮
	   $(".next").click(function() {
	       index += 1;
	       if(index == lists.length) {index = 0;}
	     show(index);
	  });
		if(index >= lists.length) {
			index = 0;
		}if(index < 0) {
			index = lists.length-1;
		}
		show(index);
		index++;
		
	}

	function show(index) {
		//把当前的li变成block,把其他li变成none
		var selfindex = index;
		
		for(var i = 0; i < lists.length; i++) {

			if(i == selfindex) {
				lists[i].style.display = 'block';
				lists[i].style.backgroundImage = "url(/img/i_b" + (i + 1) + ".jpg) right center no-repeat";
//				selectLists2.children("li")[i].style.backgroundImage = "url(/img/redball.png)"
				selectLists2.children("li")[i].style.background= "#fff";
				selectLists2.children("li")[i].style.color= "#fff";
				
			} else {
				lists[i].style.display = 'none';
				//selectLists2.children("li")[i].style.backgroundImage = "url(/img/whileball.png)";
				selectLists2.children("li")[i].style.background= "#000";
				selectLists2.children("li")[i].style.color= "#000";
			}
		}
	}
	selectLists2.on("mouseover", "li", function(e) {
		index = $(this).index();
		clearInterval(timer1);
		$(this).css("background", "#fff");
		$(this).css("color", "#fff");
		show(index);
	}).on("mouseleave", "li", function() {
		timer1 = setInterval(foucs, 2000);
	});
	
});

/*rxdp 热销单品轮播*/
$(function() {
	//轮播图下的li
	var lists = $(".bannerp3 li");
	var rxdp_tli=document.getElementsByClassName("rxdp_tli");
	//rxdp_tli[1].style.color="red";

	//轮播图里面的小圆点
	var selectLists3 = $(".select_banner3");
	var rxdp_tul = $(".rxdp_tul");
	var index = 0;
	var timer2 = setInterval(foucs, 2000);
	 //上一页按钮
   $(".pro").click(function() {
      index -= 1;
        if(index == -1) {index = len - 1;}
       show(index);
    });

   //下一页按钮
   $(".next").click(function() {
       index += 1;
       if(index == len) {index = 0;}
     show(index);
  });
	function foucs() {
		
		if(index >= lists.length) {
			index = 0;
		}if(index < 0) {
			index = lists.length-1;
		}
		show(index);
		index++;
		
	}

	function show(index) {
		//把当前的li变成block,把其他li变成none
		var selfindex = index;
		
		for(var i = 0; i < lists.length; i++) {

			if(i == selfindex) {
				lists[i].style.display = 'block';
				lists[i].style.backgroundImage = "url(img/i_b" + (i + 1) + ".jpg) right center no-repeat";
//				selectLists3.children("li")[i].style.backgroundImage = "url(img/redball.png)"
				selectLists3.children("li")[i].style.background= "#fff";
				selectLists3.children("li")[i].style.color= "#fff";
				rxdp_tli[i].style.color="red";
				
			} else {
				rxdp_tli[i].style.color="#000";
				lists[i].style.display = 'none';
				//selectLists3.children("li")[i].style.backgroundImage = "url(img/whileball.png)";
				selectLists3.children("li")[i].style.background= "#000";
				selectLists3.children("li")[i].style.color= "#000";
			}
		}
	}
	selectLists3.on("mouseover", "li", function(e) {
		index = $(this).index();
		clearInterval(timer2);
		$(this).css("background", "#fff");
		$(this).css("color", "#fff");
		show(index);
	}).on("mouseleave", "li", function() {
		timer2 = setInterval(foucs, 2000);
	});
	rxdp_tul.on("mouseover", "li", function(e) {
		index = $(this).index();
		clearInterval(timer2);
		show(index);
	}).on("mouseleave", "li", function() {
		timer2 = setInterval(foucs, 2000);
	});
	
});
/////
/*sspd*///sspd_yd
$(function() {
	var navlists1 = $(".bigbox_right_navb ul li");
	var sspd_yd=$(".sspd_yd li");
	var asd = $(".sspd_ydli");
	var sspd_ydli=document.getElementsByClassName("sspd_ydli");
	navlists1.on("mouseover", function(){
		var idx1 = $(this).index();
		
		$(this).css({
			"backgroundColor": "#b90334"
		}).children("a").css({
			"color": "#fff"
		}).next("span").css({
			"display": "block"
		});
		$(this).siblings().css({
			"backgroundColor": "#fff"
		}).children("a").css({
			"color": "#000"
		}).next("span").css({
			"display": "none"
		});
		
		for(var i = 0; i < 3; i++) {
			$(".bigbox_right_navb" + i + "").css({
				"display": "none"
			});
			if(i==idx1){
				sspd_ydli[i].style.background="#000";
			}else{
				sspd_ydli[i].style.background="#ccc";
			}
		}
		$(".bigbox_right_navb" + idx1 + "").css({
			"display": "block"
		});
	})
//	if($.cookie("shopping")==undefined){
//
//	}else{
//		var shopping = JSON.parse($.cookie("shopping"));
//		var shoppingArr=JSON.parse($.cookie("shoppingArr"));
//		console.log(shoppingArr);
//	
//	}
//	console.log(shopping.num);
})

var toHome=document.getElementsByClassName("toHome")[0];
toHome.onclick=function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var time = setInterval(function(){
		scrollT -= 50;
		if(scrollT<=0){
			clearInterval(time);
			scrollT = 0;
		}
		document.documentElement.scrollTop = scrollT;
		document.body.scrollTop = scrollT;
	},30);
}
//var onum=document.getElementsByClassName("num")[0];
//onum.innerHTML=value.num;
$(function(){
	if($.cookie("shopping")==undefined){
		console.log(-1);
	}else{
		var shopping = JSON.parse($.cookie("shopping"));
		var shoppingArr=JSON.parse($.cookie("shoppingArr"));
		console.log(shoppingArr);
		$(".num").html(shopping.num);
	}
})
