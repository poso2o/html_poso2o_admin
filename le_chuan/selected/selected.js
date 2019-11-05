/**
 * entity_shop.js 
 * Created by Luo on 2019/01/30.
 */
/* *
 * 实体店
 */	
var Page={
	data:{
		show_search_dat : 0,
		show_search_address : 0,
	},
	bindtap_obj : null,
	//时间
	search_dat:function(){
		if(Page.data.show_search_dat == 1){
			return false;
		}
		var HTML = '';
		HTML+='<li><a comboxval="" default="最近一年" href="javascript:void(0);">最近一年</a></li>';
		HTML+='<li><a comboxval="" default="最近半年" href="javascript:void(0);">最近半年</a></li>';
		HTML+='<li><a comboxval="" default="最近三个月" href="javascript:void(0);">最近三个月</a></li>';
		HTML+='<li><a comboxval="" default="最近一个月" href="javascript:void(0);">最近一个月</a></li>';
		HTML+='<li><a comboxval="" default="今天" href="javascript:void(0);">今天</a></li>';
		$(".search_dat_list").html("" + HTML);
		Page.data.show_search_dat = 1;
	},
	//地区
	search_address:function(){
		if(Page.data.show_search_address == 1){
			return false;
		}
		Page.data.show_search_address = 1;
	},
	//级别
	search_level:function(){
		if(Page.data.show_search_level == 1){
			return false;
		}
		Page.data.show_search_level = 1;
	},
	//业务组
	search_business_group:function(){
		if(Page.data.show_search_level == 1){
			return false;
		}
		Page.data.search_business_group = 1;
	},
	//业务员
	search_salesman:function(){
		if(Page.data.search_salesman == 1){
			return false;
		}
		Page.data.search_salesman = 1;
	},
	//版本
	search_version:function(){
		if(Page.data.search_version == 1){
			return false;
		}
		Page.data.search_version = 1;
	},
	//服务
	search_service:function(){
		$(".search_service_list .selected").removeClass("selected");
		Page.bindtap_obj.addClass("selected");
	},
	
	//获取实体店店铺列表
	getList:function(){
		var jsonData = new Object();
		var paramData=jQuery.param(jsonData);
		WC.imloadingDialog("获取数据中...");
		/*$.ajax({
			type:"POST",
			dataType:"json",
			url:"/UserManage.htm?Act=login",
			data:paramData,
			timeout:20000,
			success:function(datas){
				if(datas==null||datas==""){
					fntopmessagebox("服务器出错啦。",'error');
					return false;
				}
				if(datas.code.indexOf("success")!=-1){
					
				}else{
					fntopmessagebox(datas.msg,'error');
				}
			},error:function(){
				fntopmessagebox("服务器繁忙，稍后再试试。",'error');
			}
		}).always(function(){
			//$("#imloadingDialog, #itemOverlay").remove();
		})*/
	},
	//点击店铺列表事件
	shop_list_click:function(){
		$(".main_area").hide();
		$(".shop_info_area").show();
		windowHeightR();
	},
	//关闭店铺详情窗口
	shop_info_area_close:function(){
		$(".main_area").show();
		$(".shop_info_area").hide();
		windowHeightR();
	},
	//显示或隐藏店铺最新动态
	show_shop_news:function(){
		if($(".shop_info_area .shop_news ul").is(':visible')){
			$(".shop_info_area .shop_news ul").slideUp(100);
			$(".shop_info_area .shop_news em").html("展开");
			$(".shop_info_area .shop_news").removeClass("shop_news_up");
		}else{
			$(".shop_info_area .shop_news ul").slideDown(100);
			$(".shop_info_area .shop_news em").html("收起");
			$(".shop_info_area .shop_news").addClass("shop_news_up");
		}
		setTimeout(function (){windowHeightR();},200);
	},
	init: function(){
		Page.getList(1);
	}
}
Page.init();
/* *
 * 设置缓存值
 */	
$(function(){


$(".le_chuan_nav, .nav_left_selected").addClass("current");
windowHeightR();
//JSON.parse(jsonStr);

//调用方法
$("[bindtap]").live('click',function(e){
	var completeFunction = $(this).attr("bindtap");
	console.log("completeFunction===" + completeFunction);
	Page.bindtap_obj = $(this);
	eval("Page."+completeFunction+"()");
});

//初始化地址
new PCAS($(".searchArea .CA_p"),$(".searchArea .CA_c"));
$(".searchArea .CA_p .comboxText").val("请选择省份");
$(".searchArea .CA_c .comboxText").val("请选择城市");
	
	
/* *
 * 实体店 - 搜索
 */
$(".searchArea .pannel a, .searchArea .keywords_btn").live('click',function(){
	setTimeout(function (){$.getUserList(1);},200);
})
/* *
 * 实体店 - 搜索
 */
$(".searchArea input[name='keywords']").live('keyup',function(e){
	var currKey=0,CapsLock=0,e=e||event;
	currKey=e.keyCode||e.which||e.charCode;
	if (currKey==13){
		$(".searchArea .keywords_btn").trigger("click"); //处理事件
	}
	if($(this).val()==""){
		$(".searchArea .del_btn").hide();
	}else{
		$(".searchArea .del_btn").show();
	}
});
/* *
 * 实体店 - 搜索 删除按钮
 */
$(".searchArea .del_btn").live("click",function(){
	$(".searchArea input[name='keywords']").val("").focus();
	$(this).hide();
	$('.searchArea .keywords_btn').trigger("click"); //处理事件
})


/* *
 * 搜索 - 排序
 */
$(".setTable .order_search").live('click',function(){
	$(".setTable .current").removeClass('current');
	$(this).addClass('current');
	var class_name=$(this).attr('class');
	$(".setTable .order_search").removeClass('order-desc');
	$(".setTable .order_search").removeClass('order-asc');
	if(class_name.indexOf("order-desc")!=-1){
		//从高到低排序
		$(this).removeClass("order-desc").addClass("order-asc");
	}else{
		//从低到高排序
		$(this).removeClass("order-asc").addClass("order-desc");
	}
	Page.getList(1);
})
/* *
 * 实体店 - 店铺详情列表
 */
$(".shop_nav_list li").live("click",function(){
	$(".shop_nav_list li").removeClass("current");
	$(this).addClass("current");
	var index = $(this).index();
	$(".shop_nav_item").hide();
	$(".shop_nav_item:eq("+index+")").show();
})


	
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