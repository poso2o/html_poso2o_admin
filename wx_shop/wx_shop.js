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
	},
	/**
	 * 查询筛选 - 监听时间
	 */
	search_dat: function() {

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

		//		POS.imloadingDialog("正在提交...");
		//		POS.fnOverlay($("body"));
		//
		//		setTimeout(function() {
		//			Page.close_create_shop_dialog();
		//			$("#imloadingDialog, #itemOverlay").remove();
		//			POS.gototoptips("服务器出错啦。", 'error');
		//		}, 3000);
		//
		//		setTimeout(function() {
		//			POS.gototoptips("申请完成。", 'success');
		//		}, 6000);

		var index = layer.load(2); //换了种风格
		setTimeout(function() {
			layer.close(index);
			//POS.gototoptips("申请完成。", 'success');
			$("#imloadingDialog, #itemOverlay").remove();
			Page.close_create_shop_dialog();
			Page.create_shop_list_table();
			layer.msg('申请完成', {
				icon: 1
			});
		}, 1000);

	},

	/**
	 * 插入表格列表
	 */
	create_shop_list_table: function() {
		var timestamp = Date.parse(new Date());
		var HTML = '';
		HTML += '<tr bindtap="shop_list_click">';
		HTML += '<td>A级</td>';
		HTML += '<td>13400000001</td>';
		HTML += '<td>poso2o</td>';
		HTML += '<td>2019-06-17 00:00:00</td>';
		HTML += '<td>10012</td>';
		HTML += '<td>8888888.00</td>';
		HTML += '<td>88888.00</td>';
		HTML += '<td class="red">未订购</td>';
		HTML += '<td>服装版</td>';
		HTML += '<td>2019-06-17 00:00:00</td>';
		HTML += '<td>-</td>';
		HTML += '<td>-</td>';
		HTML += '</tr>';
		$(".table_main_body tbody").append(HTML);
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
	 * 客户跟进窗口 - 显示
	 */
	show_shop_follow_up_dialog: function() {
		$(".shop_follow_up_dialog").attr("seid", "");
		$(".shop_follow_up_dialog input[name='shop_wangwang']").val("");
		$(".shop_follow_up_dialog input[name='shop_wangwang']").focus();

		var dialog = $('.shop_follow_up_dialog');
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
	 * 客户跟进窗口 - 关闭
	 */
	close_shop_follow_up_dialog: function() {
		$('.shop_follow_up_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 客户跟进窗口 - 提交
	 */
	shop_follow_up_dialog_add: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		//POS.imloadingDialog("正在提交...");
		//POS.fnOverlay($("body"));

		var index = layer.load(2); //换了种风格
		setTimeout(function() {
			layer.close(index);
			//POS.gototoptips("申请完成。", 'success');
			//$("#imloadingDialog, #itemOverlay").remove();
			//Page.close_shop_follow_up_dialog();
			Page.shop_follow_up_remark_list($(".shop_follow_up_dialog .textarea").val());
			layer.msg('提交完成', {
				icon: 1
			});
		}, 1000);

	},
	/**
	 * 客户跟进窗口 - 生成跟进记录列表
	 */
	shop_follow_up_remark_list: function(remark) {
		var HTML = '';
		HTML += '<li class="layui-timeline-item">';
		HTML += '<i class="layui-icon layui-timeline-axis">&#xe63f;</i>';
		HTML += '<div class="layui-timeline-content layui-text">';
		HTML += '<h3 class="layui-timeline-title">'+Page.timestampToTime(new Date().getTime())+'</h3>';
		HTML += '<p>' + remark;
		HTML += '<i class="layui-icon"></i>';
		HTML += '</p>';
		HTML += '</div>';
		HTML += '</li>';
		$(".shop_follow_up_dialog .layui-timeline").prepend(HTML);
	},
	/**
	 * 客户跟进窗口 - 监听选择客户级别，设置按钮选中样式
	 */
	shop_follow_up_dialog_level: function() {
		var bindtap_obj = Page.data.bindtap_obj;
		$(".shop_follow_up_dialog .level_radio_label").removeClass("selected");
		bindtap_obj.addClass("selected");
	},

	/**
	 * 客户跟进窗口 - 监听选择客户级别，设置按钮选中样式
	 */
	shop_follow_up_dialog_checkbox: function() {
		var bindtap_obj = Page.data.bindtap_obj;
		$(".shop_follow_up_dialog .level_radio_label").removeClass("selected");
		bindtap_obj.parents(".list").find(".level_radio_label").addClass("selected");
		if(bindtap_obj.attr("class").indexOf("selected") != -1) {
			bindtap_obj.removeClass("selected");
		} else {
			bindtap_obj.addClass("selected");
		}
	},
	/**
	 * 点击店铺详情导航事件
	 */
	shop_nav_list: function(index) {
		$(".shop_nav_list li").removeClass("current");
		$(".shop_nav_list li a:eq(" + index + ")").parents("li").addClass("current");
		$(".shop_nav_item").hide();
		$(".shop_nav_item:eq(" + index + ")").show();
	},

	//生成表格列表
	table_html: function() {

	},
	//点击店铺列表事件
	shop_list_click: function() {
		$(".main_area").hide();
		$(".shop_info_area").show();
	},
	//关闭店铺详情窗口
	shop_info_area_close: function() {
		$(".main_area").show();
		$(".shop_info_area").hide();
	},
	//时间戳
	timestampToTime: function(inputTime) {
		var date = new Date(inputTime); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		//return m + '月' + d+'日 '+h+':'+minute;
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
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
	$(".layui-header .wx_shop_nav").addClass("layui-this");
	$(".layui-side .layui-nav-item:eq(0)").addClass("layui-this");

	//调用方法
	$("[bindtap]").live('click', function(e) {
		var completeFunction = $(this).attr("bindtap");
		console.log("completeFunction===" + completeFunction);
		Page.data.bindtap_obj = $(this);
		//eval("Page." + completeFunction + "()");
		try {
			new Function("Page." + completeFunction + "()")();
		} catch(e) {
			alert('语句异常：' + e.message)
		}
	});

})