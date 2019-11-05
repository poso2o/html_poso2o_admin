/**
 * entity_shop.js 
 * Created by Luo on 2019/01/30.
 */
/* *
 * 实体店
 */
var shopStatus = {
	data: {
		create_shop_dialog_package: 0,
		create_shop_dialog_package_name: "",
		stop_dialog_stop_date: 0,
		logout_dialog_remark: 0,
		StatusData: null,
	},
	/**
	 * 获取店铺信息
	 */
	getEntityShopInfoData: function() {
		var self = this;
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		post("/api/EntityShopManage/info",
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					Page.data.currentShopData = datas.data;

					if(Page.data.currentShopData.shop_branch_id == Page.data.currentShopData.shop_id) {
						$(".shop_info_area .shop_head .shop_name span").html(Page.data.currentShopData.shop_id + "&nbsp;&nbsp;店铺名称：" + Page.data.currentShopData.shop_name);
					} else {
						$(".shop_info_area .shop_head .shop_name span").html(Page.data.currentShopData.shop_id + "&nbsp;&nbsp;分店ID：" + Page.data.currentShopData.shop_branch_id + "&nbsp;&nbsp;店铺名称：" + Page.data.currentShopData.shop_name);
					}

					$(".shop_info_area .shop_head .shop_other span:eq(0)").html(pos_days.timeStampToTime(Page.data.currentShopData.build_date, 'yMdhms', '-') + "&nbsp;&nbsp;");
					$(".shop_info_area .shop_head .shop_other span:eq(1)").html(Page.data.currentShopData.wangwang);
					$(".shop_info_area .shop_head .shop_other span:eq(2)").html(Page.data.currentShopData.order_id);
					$(".shop_info_area .shop_head .shop_other span:eq(3)").html(Page.data.currentShopData.contacts);
					$(".shop_info_area .shop_head .shop_other span:eq(4)").html(Page.data.currentShopData.contacts_mobile);
					$(".create_shop_record .entity_shop_items .box p").remove();
					$(".create_shop_record .entity_shop_items .box .btn").removeClass('active');

					// 店铺状态（待开通=1，正常=2，停用=3，注销=4，全部=5，试用=6）
					//未开通
					if(Page.data.currentShopData.shop_state == 1) {
						$(".create_shop_record .entity_shop_items .box:eq(2) .btn").addClass('active');
					}
					//已确认开通，未确认付款
					if(Page.data.currentShopData.shop_state == 2) {
						$(".create_shop_record .entity_shop_items .box:eq(1) .btn").addClass('active');
						$(".create_shop_record .entity_shop_items .box:eq(2) .btn").addClass('active');
						$(".create_shop_record .entity_shop_items .box:eq(3) .btn").addClass('active');
					}
					//已确认开通，已确认付款||已申请停用，尚未审核
					if(Page.data.currentShopData.shop_state == 3 || Page.data.currentShopData.shop_state == 4) {
						$(".create_shop_record .entity_shop_items .box:eq(1) .btn").addClass('active');
						$(".create_shop_record .entity_shop_items .box:eq(3) .btn").addClass('active');
						$(".create_shop_record .entity_shop_items .box:eq(4) .btn").addClass('active');
					}
					//已停用
					if(Page.data.currentShopData.shop_state == 5) {
						$(".create_shop_record .entity_shop_items .box:eq(4) .btn").addClass('active');
					}
					//申请停用
					if(Page.data.currentShopData.shop_state == 6) {
						$(".create_shop_record .entity_shop_items .box:eq(4) .btn").addClass('active');
					}
					//试用
					if(Page.data.currentShopData.shop_state == 8) {
						$(".create_shop_record .entity_shop_items .box:eq(2) .btn").addClass('active');
					}

					for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
						//1：试用、2：付费、3：开通、4：停用、5：注销
						if(Page.data.currentShopData.list[i].status_id == 1) { //试用
							$(".create_shop_record .entity_shop_items .box:eq(0)").append('<p>版本：<span>' + Page.data.currentShopData.list[i].version_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(0)").append('<p>确认：<span>' + Page.data.currentShopData.list[i].modify_user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(0)").append('<p>时间：<span>' + pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-') + '</span></p>');
						}
						if(Page.data.currentShopData.list[i].status_id == 2) { //付费
							$(".create_shop_record .entity_shop_items .box:eq(1)").append('<p>版本：<span>' + Page.data.currentShopData.list[i].version_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(1)").append('<p>付款：<span>' + Page.data.currentShopData.list[i].remark + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(1)").append('<p>时间：<span>' + pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-') + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(1)").append('<p>确认：<span>' + Page.data.currentShopData.list[i].modify_user_name + '</span></p>');
							//$(".create_shop_record .entity_shop_items .box:eq(1)").append('<p>续费：<span></span></p>');
							if(Page.data.currentShopData.list[i].modify_user_name || sessionData.position.audit == 0) {
								$(".create_shop_record .entity_shop_items .box:eq(1) .btn").removeClass('active');
							}
						}
						if(Page.data.currentShopData.list[i].status_id == 3) { //开通
							$(".create_shop_record .entity_shop_items .box:eq(2)").append('<p>版本：<span>' + Page.data.currentShopData.list[i].version_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(2)").append('<p>申请：<span>' + Page.data.currentShopData.list[i].user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(2)").append('<p>时间：<span>' + pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-') + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(2)").append('<p>确认：<span>' + Page.data.currentShopData.list[i].modify_user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(2)").append('<p>时间：<span>' + (Page.data.currentShopData.list[i].modify_build_date == 0 ? '' : pos_days.timeStampToTime(Page.data.currentShopData.list[i].modify_build_date, 'yMdhms', '-')) + '</span></p>');
						}
						if(Page.data.currentShopData.list[i].status_id == 4) { //停用
							$(".create_shop_record .entity_shop_items .box:eq(3)").append('<p>版本：<span>' + Page.data.currentShopData.list[i].version_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(3)").append('<p>申请：<span>' + Page.data.currentShopData.list[i].user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(3)").append('<p>时间：<span>' + pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-') + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(3)").append('<p>确认：<span>' + Page.data.currentShopData.list[i].modify_user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(3)").append('<p>时间：<span>' + (Page.data.currentShopData.list[i].modify_build_date == 0 ? '' : pos_days.timeStampToTime(Page.data.currentShopData.list[i].modify_build_date, 'yMdhms', '-')) + '</span></p>');
						}
						if(Page.data.currentShopData.list[i].status_id == 5) { //注销
							$(".create_shop_record .entity_shop_items .box:eq(4)").append('<p>版本：<span>' + Page.data.currentShopData.list[i].version_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(4)").append('<p>申请：<span>' + Page.data.currentShopData.list[i].user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(4)").append('<p>时间：<span>' + pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-') + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(4)").append('<p>确认：<span>' + Page.data.currentShopData.list[i].modify_user_name + '</span></p>');
							$(".create_shop_record .entity_shop_items .box:eq(4)").append('<p>时间：<span>' + (Page.data.currentShopData.list[i].modify_build_date == 0 ? '' : pos_days.timeStampToTime(Page.data.currentShopData.list[i].modify_build_date, 'yMdhms', '-')) + '</span></p>');
						}
					}
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {},
			//请求完成执行
			function(data) {}
		);
	},
	/**
	 * 开户申请窗口 - 显示
	 */
	show_create_shop_dialog: function(obj) {
		//var type = obj.attr("type");
		$(".create_shop_dialog").attr("seid", "");
		$(".create_shop_dialog input[name='shop_id']").removeAttr("disabled").val("").focus();
		$(".create_shop_dialog input[name='shop_name']").val("");
		$(".create_shop_dialog input[name='wangwang']").val("");
		$(".create_shop_dialog input[name='order_id']").val("");
		$(".create_shop_dialog input[name='order_amount']").val("");
		$(".create_shop_dialog input[name='contacts']").val("");
		$(".create_shop_dialog input[name='contacts_mobile']").val("");
		$("input:radio[name=package_radio]").attr("checked", false);
		//layui.form.render("radio");

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
	create_shop_dialog_wc_btn: function(bindtap_obj) {
		bindtap_obj.parents(".list").find(".wc_btn").removeClass("wc_btn_active");
		bindtap_obj.addClass("wc_btn_active");
		if(bindtap_obj.parents(".version_list").length > 0) {
			//若选择的是服装版window，隐藏选择套餐
			if(bindtap_obj.attr("version_id") == 4 || bindtap_obj.attr("version_id") == 5 || bindtap_obj.attr("version_id") == 6 || bindtap_obj.attr("version_id") == 7) {
				$(".create_shop_dialog_setmeal_div").show();
			} else {
				$(".create_shop_dialog_setmeal_div").hide();
			}
		}
	},
	/**
	 * 开户申请窗口 - 提交
	 */
	create_shop_dialog_add: function() {
		var templateData = new Object();
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = $(".create_shop_dialog input[name='shop_id']").val();
		templateData.shop_branch_id = templateData.shop_id;
		if(templateData.shop_id.length != 11) {
			Page.layer_msg('请输入11位手机号码！');
			$(".create_shop_dialog input[name='shop_id']").focus();
			return false;
		}
		templateData.shop_name = $(".create_shop_dialog input[name='shop_name']").val();
		templateData.nick = templateData.shop_name;
		if(templateData.shop_name.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入商家名称！');
			$(".create_shop_dialog input[name='shop_name']").focus();
			return false;
		}
		templateData.wangwang = $(".create_shop_dialog input[name='wangwang']").val();
		if(templateData.wangwang.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入旺旺号！');
			$(".create_shop_dialog input[name='wangwang']").focus();
			return false;
		}
		templateData.order_id = $(".create_shop_dialog input[name='order_id']").val();
		if(templateData.order_id.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入订单号！');
			$(".create_shop_dialog input[name='order_id']").focus();
			return false;
		}
		templateData.order_amount = $(".create_shop_dialog input[name='order_amount']").val();
		if(templateData.order_amount.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入订单金额！');
			$(".create_shop_dialog input[name='order_amount']").focus();
			return false;
		}
		templateData.contacts = $(".create_shop_dialog input[name='contacts']").val();
		if(templateData.contacts.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入联系人！');
			$(".create_shop_dialog input[name='contacts']").focus();
			return false;
		}
		templateData.contacts_mobile = $(".create_shop_dialog input[name='contacts_mobile']").val();
		if(templateData.contacts_mobile.length != 11) {
			Page.layer_msg('请输入手机号！');
			$(".create_shop_dialog input[name='contacts_mobile']").focus();
			return false;
		}
		templateData.source_id = $(".create_shop_dialog .source_list .wc_btn_active").attr("source_id");
		templateData.source_name = $(".create_shop_dialog .source_list .wc_btn_active").html();
		if($(".create_shop_dialog .source_list .wc_btn_active").length == 0) {
			Page.layer_msg('请选择来源！');
			return false;
		}
		templateData.shop_version_id = $(".create_shop_dialog .version_list .wc_btn_active").attr("version_id");
		templateData.shop_version_name = $(".create_shop_dialog .version_list .wc_btn_active").html();
		if($(".create_shop_dialog .version_list .wc_btn_active").length == 0) {
			Page.layer_msg('请选择版本！');
			return false;
		}
		if(templateData.shop_version_id == 4 || templateData.shop_version_id == 5 || templateData.shop_version_id == 6 || templateData.shop_version_id == 7) {
			templateData.shop_package_id = shopStatus.data.create_shop_dialog_package;
			templateData.shop_package_name = shopStatus.data.create_shop_dialog_package_name;
			if(shopStatus.data.create_shop_dialog_package == 0) {
				Page.layer_msg('请选择套餐！');
				return false;
			}
		} else {
			templateData.shop_package_id = 0;
			templateData.shop_package_name = "";
		}
		templateData.shop_state = 1;
		var post_url = "/api/EntityShopManage/add";
		if($(".create_shop_dialog").attr("seid") != "") {
			templateData.shop_id = Page.data.currentShopData.shop_id;
			templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
			templateData.old_version_id = Page.data.currentShopData.shop_version_id;
			post_url = "/api/EntityShopManage/edit";
		}
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg('申请完成', {
						icon: 1
					});
					$(".create_shop_dialog .inputText").val("");
					$(".create_shop_dialog .wc_btn_active").removeClass("wc_btn_active");
					shopStatus.data.create_shop_dialog_package = 0
					shopStatus.data.create_shop_dialog_package_name = "";
					shopStatus.close_create_shop_dialog();
					Page.data.searchData.currPage = 1;
					if($(".create_shop_dialog").attr("seid") == "") {
						Page.queryShopData(1);
					} else {
						Page.data.currentShopData.shop_version_id = templateData.shop_version_id;
						shopStatus.getEntityShopInfoData();
					}
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);

	},
	/**
	 * 店铺状态 - 试用
	 */
	entityShopStatusTry: function(obj) {
		console.log("==试用==" + obj.attr("class").indexOf("active"));
		if(obj.attr("class").indexOf("active") != -1) {
			console.log("==试用==");
		}
	},
	/**
	 * 店铺状态 - 付费
	 */
	entityShopStatusPayment: function(obj) {
		if(obj.attr("class").indexOf("active") != -1) {
			shopStatus.show_payment_confirm_dialog();
		}
	},
	/**
	 * 付款确认窗口 - 显示
	 */
	show_payment_confirm_dialog: function() {
		var dialog = $('.payment_confirm_dialog');

		dialog.find(".shop_id").html(Page.data.currentShopData.shop_branch_id);
		dialog.find(".wangwang").html(Page.data.currentShopData.wangwang);
		dialog.find(".order_id").html(Page.data.currentShopData.order_id);
		dialog.find(".order_amount").html(Page.data.currentShopData.order_amount);
		dialog.find(".user_id").html(sessionData.user_id);

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
	 * 付款确认窗口 - 关闭
	 */
	close_payment_confirm_dialog: function() {
		$('.payment_confirm_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 付款确认窗口 - 提交
	 */
	payment_confirm_dialog_add: function() {
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
		templateData.remark = Page.data.currentShopData.order_amount;
		templateData.password = $(".payment_confirm_dialog input[name='password']").val();
		if(templateData.password.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入密码！');
			$(".payment_confirm_dialog input[name='password']").focus();
			return false;
		}
		var post_url = "/api/StatusManage/paymentConfirm";
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg(datas.msg, {
						icon: 1
					});
					$(".payment_confirm_dialog input[name='password']").val("");
					shopStatus.close_payment_confirm_dialog();
					shopStatus.getEntityShopInfoData();
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);
	},

	/**
	 * 开户确认窗口 - 显示
	 */
	show_create_shop_primary_dialog: function() {
		var dialog = $('.create_shop_primary_dialog');
		dialog.find(".shop_id").html(Page.data.currentShopData.shop_branch_id);
		dialog.find(".user_id").html(sessionData.user_id);

		for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
			//1：试用、2：付费、3：开通、4：停用、5：注销
			if(Page.data.currentShopData.list[i].status_id == 3) { //开通
				dialog.find(".user_name").html(Page.data.currentShopData.list[i].user_name);
				dialog.find(".build_date").html(pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-'));
			}
		}

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
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
		templateData.password = $(".create_shop_primary_dialog input[name='password']").val();
		if(templateData.password.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入密码！');
			$(".create_shop_primary_dialog input[name='password']").focus();
			return false;
		}
		var post_url = "/api/StatusManage/shopConfirm";
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg(datas.msg, {
						icon: 1
					});
					$(".create_shop_primary_dialog input[name='password']").val("");
					shopStatus.close_create_shop_primary_dialog();
					shopStatus.getEntityShopInfoData();
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);
	},
	/**
	 * 店铺状态 - 开通
	 */
	entityShopStatusOpen: function(obj) {
		if(obj.attr("class").indexOf("active") != -1) {} else {
			return false;
		}
		//编辑店铺
		/**
		 * 
		 */
		if(sessionData.position.audit == 1) {
			shopStatus.show_create_shop_primary_dialog();
		} else {
			shopStatus.show_create_shop_dialog();
			$(".create_shop_dialog").attr("seid", "1");
			$(".create_shop_dialog input[name='shop_id']").val(Page.data.currentShopData.shop_id).attr("disabled", "disabled");
			$(".create_shop_dialog input[name='shop_name']").val(Page.data.currentShopData.shop_name);
			$(".create_shop_dialog input[name='wangwang']").val(Page.data.currentShopData.wangwang);
			$(".create_shop_dialog input[name='order_id']").val(Page.data.currentShopData.order_id);
			$(".create_shop_dialog input[name='order_amount']").val(Page.data.currentShopData.order_amount);
			$(".create_shop_dialog input[name='contacts']").val(Page.data.currentShopData.contacts);
			$(".create_shop_dialog input[name='contacts_mobile']").val(Page.data.currentShopData.contacts_mobile);
			$(".create_shop_dialog input[name='shop_name']").val(Page.data.currentShopData.shop_name);
			$(".create_shop_dialog .source_list .wc_btn").each(function() {
				if($(this).attr("source_id") == Page.data.currentShopData.source_id) {
					$(this).trigger("click");
				}
			})
			$(".create_shop_dialog .version_list .wc_btn").each(function() {
				if($(this).attr("version_id") == Page.data.currentShopData.shop_version_id) {
					$(this).trigger("click");
				}
			})
			$("input:radio[name=package_radio][value='" + Page.data.currentShopData.shop_package_id + "']").attr("checked", true).trigger("click");
			shopStatus.data.create_shop_dialog_package = Page.data.currentShopData.shop_package_id;
			shopStatus.data.create_shop_dialog_package_name = Page.data.currentShopData.shop_package_name;
			layui.form.render("radio", "package_form");

		}
	},
	/**
	 * 店铺状态 - 停用
	 */
	entityShopStatusStop: function(obj) {
		if(obj.attr("class").indexOf("active") != -1) {
			var status = 0;
			for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
				if(Page.data.currentShopData.list[i].status_id == 4) {
					status = 4;
				}
			}

			if(sessionData.position.audit == 1 && status == 4) {
				$(".stop_confirm_dialog").attr("seid", "");
				$(".stop_confirm_dialog .dialog_hd h3").html("停用审核");
				$(".stop_confirm_dialog .wc_btn_primary").html("确定");
				shopStatus.show_stop_confirm_dialog();
			} else {
				if(status == 0) {
					shopStatus.show_stop_dialog();
				} else {
					$(".stop_confirm_dialog").attr("seid", "0");
					$(".stop_confirm_dialog .dialog_hd h3").html("停用申请");
					$(".stop_confirm_dialog .wc_btn_primary").html("撤销停用");
					shopStatus.show_stop_confirm_dialog();
				}
			}

		}
	},
	/**
	 * 停用申请窗口 - 显示
	 */
	show_stop_dialog: function() {
		var dialog = $('.stop_dialog');
		dialog.find(".shop_id").html(Page.data.currentShopData.shop_branch_id);
		dialog.find(".user_id").html(sessionData.user_id);

		for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
			//1：试用、2：付费、3：开通、4：停用、5：注销
			if(Page.data.currentShopData.list[i].status_id == 4) { //停用
				$("input:radio[name=stop_date][value='" + Page.data.currentShopData.list[i].stop_date + "']").attr("checked", true).trigger("click");
				dialog.find(".layui-textarea").html(Page.data.currentShopData.list[i].remark);
				layui.form.render("radio", "stop_dialog_form");
			}
		}

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
	close_stop_dialog: function() {
		$('.stop_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 停用申请窗口 - 提交
	 */
	stop_dialog_add: function() {
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
		templateData.stop_date = shopStatus.data.stop_dialog_stop_date;
		if(templateData.stop_date == 0) {
			Page.layer_msg('请选择停用时间！');
			return false;
		}
		templateData.remark = $(".stop_dialog textarea[name='remark']").val();
		if(templateData.remark.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入停用原因！');
			$(".stop_dialog textarea[name='remark']").focus();
			return false;
		}
		templateData.password = $(".stop_dialog input[name='password']").val();
		if(templateData.password.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入密码！');
			$(".stop_dialog input[name='password']").focus();
			return false;
		}
		var post_url = "/api/StatusManage/stopApply";
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg(datas.msg, {
						icon: 1
					});
					$(".stop_dialog input[name='password']").val("");
					shopStatus.close_stop_dialog();
					shopStatus.getEntityShopInfoData();
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);
	},
	/**
	 * 停用审核窗口 - 显示
	 */
	show_stop_confirm_dialog: function() {
		var dialog = $('.stop_confirm_dialog');
		dialog.find(".shop_id").html(Page.data.currentShopData.shop_branch_id);
		dialog.find(".user_id").html(sessionData.user_id);

		for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
			//1：试用、2：付费、3：开通、4：停用、5：注销
			if(Page.data.currentShopData.list[i].status_id == 4) { //停用
				dialog.find(".user_name").html(Page.data.currentShopData.list[i].user_id + " - " + Page.data.currentShopData.list[i].user_name);
				dialog.find(".build_date").html(pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-'));
				dialog.find(".remark").html(Page.data.currentShopData.list[i].remark);
			}
		}

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
	 * 停用审核窗口 - 关闭
	 */
	close_stop_confirm_dialog: function() {
		$('.stop_confirm_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 停用审核窗口 - 提交
	 */
	stop_confirm_dialog_add: function() {
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
		templateData.password = $(".stop_confirm_dialog input[name='password']").val();
		if(templateData.password.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入密码！');
			$(".stop_confirm_dialog input[name='password']").focus();
			return false;
		}
		var post_url = "/api/StatusManage/stopConfirm";
		if($(".stop_confirm_dialog").attr("seid") == "0") {
			post_url = "/api/StatusManage/cancelStopApply";
		}
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg(datas.msg, {
						icon: 1
					});
					$(".stop_confirm_dialog input[name='password']").val("");
					shopStatus.close_stop_confirm_dialog();
					shopStatus.getEntityShopInfoData();
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);
	},

	/**
	 * 店铺状态 - 注销
	 */
	entityShopStatusLogout: function(obj) {
		if(obj.attr("class").indexOf("active") != -1) {
			//1：试用、2：付费、3：开通、4：停用、5：注销
			var status = 0;
			for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
				if(Page.data.currentShopData.list[i].status_id == 5) {
					status = 5;
				}
			}

			if(sessionData.position.audit == 1 && status == 5) {
				$(".logout_confirm_dialog").attr("seid", "");
				$(".logout_confirm_dialog .dialog_hd h3").html("注销审核");
				$(".logout_confirm_dialog .wc_btn_primary").html("确定");
				shopStatus.show_logout_confirm_dialog();
			} else {
				if(status == 0) {
					shopStatus.show_logout_dialog();
				} else {
					Page.layer_msg('当前账号无审核权限！');
					//					$(".logout_confirm_dialog").attr("seid", "0");
					//					$(".logout_confirm_dialog .dialog_hd h3").html("注销申请");
					//					$(".logout_confirm_dialog .wc_btn_primary").html("撤销注销");
					//					shopStatus.show_logout_confirm_dialog();
				}
			}

		}
	},
	/**
	 * 注销申请窗口 - 显示
	 */
	show_logout_dialog: function() {
		var dialog = $('.logout_dialog');
		dialog.find(".shop_id").html(Page.data.currentShopData.shop_branch_id);
		dialog.find(".user_id").html(sessionData.user_id);

		for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
			//1：试用、2：付费、3：开通、4：停用、5：注销
			if(Page.data.currentShopData.list[i].status_id == 5) { //停用
				$("input:radio[name=logout_date][value='" + Page.data.currentShopData.list[i].logout_date + "']").attr("checked", true).trigger("click");
				dialog.find(".layui-textarea").html(Page.data.currentShopData.list[i].remark);
				layui.form.render("radio", "logout_dialog_form");
			}
		}

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
	 * 
	 */
	close_logout_dialog: function() {
		$('.logout_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 注销申请窗口 - 提交
	 */
	logout_dialog_add: function() {
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		templateData.shop_version_name = Page.data.currentShopData.shop_version_name;

		if(shopStatus.data.logout_dialog_remark == 0) {
			templateData.remark = $(".logout_dialog textarea[name='remark']").val();
			if(templateData.remark.replace(/\s*/g, "") == "") {
				Page.layer_msg('请输入注销原因！');
				$(".logout_dialog textarea[name='remark']").focus();
				return false;
			}
		} else {
			templateData.remark = shopStatus.data.logout_dialog_remark;
		}

		templateData.password = $(".logout_dialog input[name='password']").val();
		if(templateData.password.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入密码！');
			$(".logout_dialog input[name='password']").focus();
			return false;
		}
		var post_url = "/api/StatusManage/logoutApply";
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg(datas.msg, {
						icon: 1
					});
					$(".logout_dialog input[name='password']").val("");
					shopStatus.close_logout_dialog();
					shopStatus.getEntityShopInfoData();
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);
	},
	/**
	 * 注销审核窗口 - 显示
	 */
	show_logout_confirm_dialog: function() {
		var dialog = $('.logout_confirm_dialog');
		dialog.find(".shop_id").html(Page.data.currentShopData.shop_branch_id);
		dialog.find(".user_id").html(sessionData.user_id);

		for(var i = 0; i < Page.data.currentShopData.list.length; i++) {
			//1：试用、2：付费、3：开通、4：停用、5：注销
			if(Page.data.currentShopData.list[i].status_id == 5) { //停用
				dialog.find(".user_name").html(Page.data.currentShopData.list[i].user_id + " - " + Page.data.currentShopData.list[i].user_name);
				dialog.find(".build_date").html(pos_days.timeStampToTime(Page.data.currentShopData.list[i].build_date, 'yMdhms', '-'));
				dialog.find(".remark").html(Page.data.currentShopData.list[i].remark);
			}
		}

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
	 * 注销审核窗口 - 关闭
	 */
	close_logout_confirm_dialog: function() {
		$('.logout_confirm_dialog, .itemOverlay').fadeOut();
		setTimeout(function() {
			$(".itemOverlay").remove();
		}, 300);
	},
	/**
	 * 注销审核窗口 - 提交
	 */
	logout_confirm_dialog_add: function() {
		var templateData = {};
		templateData.user_id = sessionData.user_id;
		templateData.token = sessionData.token;
		templateData.shop_id = Page.data.currentShopData.shop_id;
		templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
		templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
		templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
		templateData.password = $(".logout_confirm_dialog input[name='password']").val();
		if(templateData.password.replace(/\s*/g, "") == "") {
			Page.layer_msg('请输入密码！');
			$(".logout_confirm_dialog input[name='password']").focus();
			return false;
		}
		var post_url = "/api/StatusManage/logoutConfirm";
		if($(".logout_confirm_dialog").attr("seid") == "0") {
			post_url = "/api/StatusManage/cancelLogoutApply";
		}
		var loading = null;
		post(post_url,
			templateData,
			null,
			//请求成功执行
			function(datas) {
				if(datas.code.indexOf("success") != -1) {
					layer.msg(datas.msg, {
						icon: 1
					});
					$(".logout_confirm_dialog input[name='password']").val("");
					shopStatus.close_logout_confirm_dialog();
					shopStatus.getEntityShopInfoData();
				} else {
					Page.layer_msg(datas.msg);
				}
			}, false, false,
			//请求之前执行
			function(data) {
				loading = layer.msg('正在提交...', {
					icon: 16,
					shade: 0.01,
					time: false //取消自动关闭
				});
			},
			//请求完成执行
			function(data) {
				layer.close(loading);
			}
		);
	},

	init: function() {}
}
/* *
 * 设置缓存值
 */
$(function() {

	//监听选择套餐
	layui.form.on('radio(package_radio)', function(data) {
		shopStatus.data.create_shop_dialog_package = data.value;
		shopStatus.data.create_shop_dialog_package_name = data.elem.title;
	});

	//监听停用时间
	layui.form.on('radio(stop_date)', function(data) {
		shopStatus.data.stop_dialog_stop_date = data.value;
	});

	//监听注销原因
	layui.form.on('radio(logout_remark)', function(data) {
		shopStatus.data.logout_dialog_remark = data.value;
		if(data.value == 0) {
			$(".logout_dialog .logout_other_remark").show();
		} else {
			$(".logout_dialog .logout_other_remark").hide();
		}
	});
	
	/**
	 * 快捷开通商超版
	 */
	$(".create_shop_dialog .dialog_hd h3").live("click", function() {
		var shop_id = $(".create_shop_dialog input[name='shop_id']").val();
		$(".create_shop_dialog input[name='shop_name']").val(shop_id);
		$(".create_shop_dialog input[name='wangwang']").val(shop_id);
		$(".create_shop_dialog input[name='order_id']").val(shop_id);
		$(".create_shop_dialog input[name='order_amount']").val(shop_id);
		$(".create_shop_dialog input[name='contacts']").val(shop_id);
		$(".create_shop_dialog input[name='contacts_mobile']").val(shop_id);
		$(".create_shop_dialog .source_list .wc_btn").eq(0).trigger("click");
		$(".create_shop_dialog .version_list .wc_btn").eq(2).trigger("click");
	})
	

})