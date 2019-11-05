/**
 * entity_shop.js 
 * Created by Luo on 2019/01/30.
 */
/* *
 * 实体店
 */	
var Page={
	data:{
	},
	bindtap_obj : null,
	init: function(){
	}
}
Page.init();
/* *
 * 设置缓存值
 */	
$(function(){


$(".index_nav, .nav_left_one").addClass("current");
windowHeightR();
//JSON.parse(jsonStr);

//调用方法
$("[bindtap]").live('click',function(e){
	var completeFunction = $(this).attr("bindtap");
	console.log("completeFunction===" + completeFunction);
	Page.bindtap_obj = $(this);
	eval("Page."+completeFunction+"()");
});
	
	
})

/* *
 * 调整窗口绝对居中
 */	
function windowHeightR(){
	$(".containerArea").css({"height":""});
	var windowHeight = $(window).height(); //浏览器当前窗口可视区域高度
	var contentHeight = $(".containerArea").height()+174;
	var height = $(".containerArea").height();
	if(windowHeight >= contentHeight){
		height += windowHeight - contentHeight;
	}
	$(".containerArea").css({"height":height});
}
$(window).resize(function(){
  windowHeightR();
})