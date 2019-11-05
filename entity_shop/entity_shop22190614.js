/**
 * entity_shop.js 
 * Created by Luo on 2019/01/30.
 */
/* *
 * 实体店
 */
var Page = {
	data: {
		bindtap_obj: null, //调用方法对象
		business_group_data: null, //初始化业务组、业务员数据
	},
	/**
	 * 查询筛选 - 监听时间
	 */
	search_dat: function() {

	},
	/**
	 * 查询筛选 - 监听帐户状态
	 */
	search_service: function() {
		$(".search_service_list .selected").removeClass("selected");
		Page.data.bindtap_obj.addClass("selected");
	},
	/**
	 * 查询筛选 - 监听业务组
	 */
	search_business_group: function() {
		if(Page.data.business_group_data == null) {
			Page.get_business_group_list();
		}

	},
	/**
	 * 查询筛选 - 监听业务员
	 */
	search_salesman: function() {
		if(Page.data.business_group_data == null) {
			Page.get_business_group_list();
		}
	},
	/**
	 * 获取业务组或业务员
	 */
	get_business_group_list: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		POS.imloadingDialog("获取数据中...");
		POS.fnOverlay($("body"));
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
	/**
	 * 生成业务组或业务员
	 */
	set_business_group_html: function(data) {

	},
	/**
	 * 查询筛选 - 版本
	 */
	search_version: function() {

	},
	/**
	 * 查询筛选 - 客户来源
	 */
	search_customer_source: function() {

	},
	/**
	 * 开户申请窗口 - 显示
	 */
	show_create_shop_dialog: function() {
		$(".create_shop_dialog").attr("seid", "");
		$(".create_shop_dialog input[name='shop_wangwang']").val("");
		$(".create_shop_dialog input[name='shop_wangwang']").focus();

		var dialog = $('.create_shop_dialog');
		var left = ($(window).width() - dialog.width()) / 2;
		var top = ($(window).height() - dialog.height()) / 2;
		if(top < 49) top = 0;
		dialog.css({
			position: 'absolute',
			top: top + $(document).scrollTop(),
			left: left + $(document).scrollLeft()
		}).fadeIn();
		POS.fnOverlay($('body'));
	},
	/**
	 * 开户申请窗口 - 关闭
	 */
	close_create_shop_dialog: function() {
		$('.create_shop_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 开户申请窗口 - 监听选择来源或选择版本类型，设置按钮选中样式
	 */
	create_shop_dialog_wc_btn: function() {
		var bindtap_obj = Page.data.bindtap_obj;
		bindtap_obj.parents(".list").find(".wc_btn").removeClass("wc_btn_active");
		bindtap_obj.addClass("wc_btn_active");
		//若选择的是服装版window，隐藏选择套餐
		if(bindtap_obj.attr("type") == 3) {
			$(".create_shop_dialog_setmeal_div").show();
		} else {
			$(".create_shop_dialog_setmeal_div").hide();
		}
	},
	/**
	 * 开户申请窗口 - 监听选择套餐，设置按钮选中样式
	 */
	create_shop_dialog_setmeal: function() {
		var bindtap_obj = Page.data.bindtap_obj;
		bindtap_obj.parents(".list").find(".frm_radio_label").removeClass("selected");
		bindtap_obj.addClass("selected");
	},
	/**
	 * 开户申请窗口 - 提交
	 */
	create_shop_dialog_add: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		POS.imloadingDialog("正在提交...");
		POS.fnOverlay($("body"));

		setTimeout(function() {
			Page.close_create_shop_dialog();
			$("#imloadingDialog, #itemOverlay").remove();
			POS.gototoptips("服务器出错啦。", 'error');
		}, 3000);

		setTimeout(function() {
			POS.gototoptips("申请完成。", 'success');
		}, 6000);

	},
	
	/**
	 * 开户确认窗口 - 显示
	 */
	show_create_shop_primary_dialog: function() {
		$(".create_shop_primary_dialog").attr("seid", "");
		$(".create_shop_primary_dialog input[name='shop_wangwang']").val("");
		$(".create_shop_primary_dialog input[name='shop_wangwang']").focus();

		var dialog = $('.create_shop_primary_dialog');
		var left = ($(window).width() - dialog.width()) / 2;
		var top = ($(window).height() - dialog.height()) / 2;
		if(top < 49) top = 0;
		dialog.css({
			position: 'absolute',
			top: top + $(document).scrollTop(),
			left: left + $(document).scrollLeft()
		}).fadeIn();
		POS.fnOverlay($('body'));
	},
	/**
	 * 开户确认窗口 - 关闭
	 */
	close_create_shop_primary_dialog: function() {
		$('.create_shop_primary_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 开户确认窗口 - 提交
	 */
	create_shop_primary_dialog_add: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		POS.imloadingDialog("正在提交...");
		POS.fnOverlay($("body"));

		setTimeout(function() {
			Page.close_create_shop_primary_dialog();
			$("#imloadingDialog, #itemOverlay").remove();
			POS.gototoptips("服务器出错啦。", 'error');
		}, 3000);

		setTimeout(function() {
			POS.gototoptips("开通成功。", 'success');
		}, 6000);

	},

	/**
	 * 获取实体店店铺列表
	 */
	getList: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		POS.imloadingDialog("获取数据中...");
		POS.fnOverlay($("body"));
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
	//生成表格列表
	table_html: function() {

	},
	//点击店铺列表事件
	shop_list_click: function() {
		$(".main_area").hide();
		$(".shop_info_area").show();
		windowHeightR();
	},
	//关闭店铺详情窗口
	shop_info_area_close: function() {
		$(".main_area").show();
		$(".shop_info_area").hide();
		windowHeightR();
	},
	//显示或隐藏店铺最新动态
	show_shop_news: function() {
		if($(".shop_info_area .shop_news ul").is(':visible')) {
			$(".shop_info_area .shop_news ul").slideUp(100);
			$(".shop_info_area .shop_news em").html("展开");
			$(".shop_info_area .shop_news").removeClass("shop_news_up");
		} else {
			$(".shop_info_area .shop_news ul").slideDown(100);
			$(".shop_info_area .shop_news em").html("收起");
			$(".shop_info_area .shop_news").addClass("shop_news_up");
		}
		setTimeout(function() {
			windowHeightR();
		}, 200);
	},

	init: function() {
		//Page.getList(1);
	}
}
Page.init();
/* *
 * 设置缓存值
 */
$(function() {

	//选中导航样式
	$(".entity_shop_nav, .nav_left_a").addClass("current");
	windowHeightR();
	//JSON.parse(jsonStr);

	//调用方法
	$("[bindtap]").live('click', function(e) {
		var completeFunction = $(this).attr("bindtap");
		console.log("completeFunction===" + completeFunction);
		Page.data.bindtap_obj = $(this);
		eval("Page." + completeFunction + "()");
	});

	//初始化时间
	$('#begin_date').val(laydate.now().substring(0, 8) + "01");
	$('#end_date').val(laydate.now().substring(0, 10) + "");
	var start_dat = {
		elem: '#begin_date',
		format: 'YYYY-MM-DD', //YYYY-MM-DD hh:mm:ss
		min: '1970-01-01', //设定最小日期为当前日期
		max: laydate.now(), //最大日期
		isclear: false, //是否显示清空
		istime: false,
		istoday: true,
		choose: function(datas) {
			end_dat.min = datas;
			end_dat.max = '2099-06-16';
			$("#end_date").trigger("click");
		}
	};
	var end_dat = {
		elem: '#end_date',
		format: 'YYYY-MM-DD', //YYYY-MM-DD hh:mm:ss
		min: laydate.now().substring(0, 8) + "01",
		max: '2099-06-16',
		isclear: false, //是否显示清空
		istime: false,
		istoday: true,
		choose: function(datas) {
			start_dat.max = datas; //结束日选好后，重置开始日的最大日期
			//$.getUserList(1);
		}
	};
	laydate(start_dat);
	laydate(end_dat);

	/* *
	 * 实体店 - 搜索
	 */
	$(".searchArea .pannel a, .searchArea .keywords_btn").live('click', function() {
		setTimeout(function() {

		}, 200);

	})
	/* *
	 * 实体店 - 搜索
	 */
	$(".searchArea input[name='keywords']").live('keyup', function(e) {
		var currKey = 0,
			CapsLock = 0,
			e = e || event;
		currKey = e.keyCode || e.which || e.charCode;
		if(currKey == 13) {
			$(".searchArea .keywords_btn").trigger("click"); //处理事件
		}
		if($(this).val() == "") {
			$(".searchArea .del_btn").hide();
		} else {
			$(".searchArea .del_btn").show();
		}
	});
	/* *
	 * 实体店 - 搜索 删除按钮
	 */
	$(".searchArea .del_btn").live("click", function() {
		$(".searchArea input[name='keywords']").val("").focus();
		$(this).hide();
		$('.searchArea .keywords_btn').trigger("click"); //处理事件
	})

	/* *
	 * 搜索 - 排序
	 */
	$(".setTable .order_search").live('click', function() {
		$(".setTable .current").removeClass('current');
		$(this).addClass('current');
		var class_name = $(this).attr('class');
		$(".setTable .order_search").removeClass('order-desc');
		$(".setTable .order_search").removeClass('order-asc');
		if(class_name.indexOf("order-desc") != -1) {
			//从高到低排序
			$(this).removeClass("order-desc").addClass("order-asc");
		} else {
			//从低到高排序
			$(this).removeClass("order-asc").addClass("order-desc");
		}
		Page.getList(1);
	})
	/* *
	 * 实体店 - 店铺详情列表
	 */
	$(".shop_nav_list li").live("click", function() {
		$(".shop_nav_list li").removeClass("current");
		$(this).addClass("current");
		var index = $(this).index();
		$(".shop_nav_item").hide();
		$(".shop_nav_item:eq(" + index + ")").show();
	})

	//$(".searchArea .shopBoxList .comboxText").val("全部店铺"); //店铺

})

/* *
 * 调整窗口绝对居中
 */
function windowHeightR() {
	$(".containerArea").css({
		"height": ""
	});
	var windowHeight = $(window).height(); //浏览器当前窗口可视区域高度
	var contentHeight = $(".containerArea").height() + 122;
	var height = $(".containerArea").height();
	if(windowHeight >= contentHeight) {
		height += windowHeight - contentHeight;
	}
	$(".containerArea").css({
		"height": height
	});
	$(".rightArea").css({
		"height": height
	});
	
}
$(window).resize(function() {
	windowHeightR();
})