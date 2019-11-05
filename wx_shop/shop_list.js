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
	 * 插入表格列表
	 */
	create_shop_list_table: function() {
		var timestamp = Date.parse(new Date());
		var HTML = '';
		HTML += '<tr bindtap="shop_list_click">';
		HTML += '<td>老店</td>';
		HTML += '<td>poso2o</td>';
		HTML += '<td>' + timestamp + '</td>';
		HTML += '<td>13400000001</td>';
		HTML += '<td>服装版</td>';
		HTML += '<td>开户申请</td>';
		HTML += '<td>李莉</td>';
		HTML += '<td>2019-06-17 00:00:00</td>';
		HTML += '<td>-</td>';
		HTML += '<td>-</td>';
		HTML += '<td class="red">待审核</td>';
		HTML += '</tr>';
		$(".table_main_body tbody").append(HTML);
	},

	/**
	 * 收款确认窗口 - 显示
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
	 * 收款确认窗口 - 关闭
	 */
	close_create_shop_primary_dialog: function() {
		$('.create_shop_primary_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 收款确认窗口 - 提交
	 */
	create_shop_primary_dialog_add: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		//		POS.imloadingDialog("正在提交...");
		//		POS.fnOverlay($("body"));
		//
		//		setTimeout(function() {
		//			Page.close_create_shop_primary_dialog();
		//			$("#imloadingDialog, #itemOverlay").remove();
		//			POS.gototoptips("服务器出错啦。", 'error');
		//		}, 3000);
		//
		//		setTimeout(function() {
		//			POS.gototoptips("开通成功。", 'success');
		//		}, 6000);

		var index = layer.load(2); //换了种风格
		setTimeout(function() {
			layer.close(index);
			//POS.gototoptips("申请完成。", 'success');
			$("#imloadingDialog, #itemOverlay").remove();
			Page.close_create_shop_primary_dialog();
			Page.create_shop_list_table();
			layer.msg('收款确认', {
				icon: 1
			});
		}, 1000);

	},

	/**
	 * 停用申请窗口 - 显示
	 */
	show_create_shop_stop_dialog: function() {
		$(".create_shop_primary_dialog").attr("seid", "");
		$(".create_shop_primary_dialog input[name='shop_wangwang']").val("");
		$(".create_shop_primary_dialog input[name='shop_wangwang']").focus();

		var dialog = $('.create_shop_stop_dialog');
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
	 * 停用申请窗口 - 关闭
	 */
	close_create_shop_stop_dialog: function() {
		$('.create_shop_stop_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 停用申请窗口 - 提交
	 */
	create_shop_stop_dialog_add: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		//		POS.imloadingDialog("正在提交...");
		//		POS.fnOverlay($("body"));
		//
		//		setTimeout(function() {
		//			Page.close_create_shop_primary_dialog();
		//			$("#imloadingDialog, #itemOverlay").remove();
		//			POS.gototoptips("服务器出错啦。", 'error');
		//		}, 3000);
		//
		//		setTimeout(function() {
		//			POS.gototoptips("开通成功。", 'success');
		//		}, 6000);

		var index = layer.load(2); //换了种风格
		setTimeout(function() {
			layer.close(index);
			//POS.gototoptips("申请完成。", 'success');
			$("#imloadingDialog, #itemOverlay").remove();
			Page.close_create_shop_stop_dialog();
			layer.msg('已提交申请', {
				icon: 1
			});
		}, 1000);

	},

	/**
	 * 注销申请窗口 - 显示
	 */
	show_create_shop_logout_dialog: function() {
		$(".create_shop_logout_dialog").attr("seid", "");
		var dialog = $('.create_shop_logout_dialog');
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
	 * 注销申请窗口 - 关闭
	 */
	close_create_shop_logout_dialog: function() {
		$('.create_shop_logout_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 注销申请窗口 - 提交
	 */
	create_shop_logout_dialog_add: function() {
		var jsonData = new Object();
		var paramData = jQuery.param(jsonData);
		//		POS.imloadingDialog("正在提交...");
		//		POS.fnOverlay($("body"));
		//
		//		setTimeout(function() {
		//			Page.close_create_shop_primary_dialog();
		//			$("#imloadingDialog, #itemOverlay").remove();
		//			POS.gototoptips("服务器出错啦。", 'error');
		//		}, 3000);
		//
		//		setTimeout(function() {
		//			POS.gototoptips("开通成功。", 'success');
		//		}, 6000);

		var index = layer.load(2); //换了种风格
		setTimeout(function() {
			layer.close(index);
			//POS.gototoptips("申请完成。", 'success');
			$("#imloadingDialog, #itemOverlay").remove();
			Page.close_create_shop_logout_dialog();
			layer.msg('已提交申请', {
				icon: 1
			});
		}, 1000);

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
	$(".layui-side .layui-nav-item:eq(1)").addClass("layui-this");

	//调用方法
	$("[bindtap]").live('click', function(e) {
		var completeFunction = $(this).attr("bindtap");
		console.log("completeFunction===" + completeFunction);
		Page.data.bindtap_obj = $(this);
		eval("Page." + completeFunction + "()");
	});

})