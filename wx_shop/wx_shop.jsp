<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ page session="false" %>
<%
response.setHeader("Pragma","No-cache");
response.setHeader("Cache-Control","no-cache");
response.setDateHeader("Expires", 0);
%>

<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta charset="utf-8">
		<meta name="HandheldFriendly" content="true">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<title>微商城 - 客户开发</title>
		<link rel="shortcut icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon" />
		<link rel="icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon" />

		<link rel="stylesheet" href="/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/style/css/master.css" />
		<link rel="stylesheet" href="/wx_shop/wx_shop.css">

		<script type="text/javascript" src="/js/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="/js/AjaxSimple.js"></script>
		<script type="text/javascript" src="/js/days.js"></script>
		<script type="text/javascript" src="/js/main.js"></script>

	</head>

	<body class="layui-layout-body">
		<div class="layui-layout layui-layout-admin">

			<!-- S header -->
			<jsp:include page="/header/header.jsp" />
			<!-- E header -->

			<!-- S navList -->
			<jsp:include page="/wx_shop/left.jsp" />
			<!-- E navList -->

			<div class="layui-body">

				<div class="layui-fluid main_area">

					<div class="searchArea">

						<div class="layui-form layui-card-body">
							<div class="layui-form-item">

								<div class="layui-inline">
									<label class="layui-form-label">时间</label>
									<div class="layui-input-inline" style="width: 267px;">
										<input type="text" class="layui-input" id="test-laydate-range-datetime" placeholder="时间" style="font-size: 12px;">
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">级别</label>
									<div class="layui-input-block" style="margin-left: 60px;">
										<select name="type" lay-verify="required" lay-filter="aihao">
											<option value="">全部</option>
											<option value="1">A级</option>
											<option value="2">B级</option>
											<option value="3">C级</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">业务组</label>
									<div class="layui-input-block" style="margin-left: 76px;">
										<select name="type" lay-verify="required" lay-filter="aihao">
											<option value="">全部</option>
											<option value="0">主管</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">业务员</label>
									<div class="layui-input-block" style="margin-left: 76px;">
										<select name="type" lay-verify="required" lay-filter="aihao">
											<option value="">全部</option>
											<option value="0">员工1001</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">版本</label>
									<div class="layui-input-block" style="margin-left: 58px;">
										<select name="type" lay-verify="required" lay-filter="aihao">
											<option value="">全部</option>
											<option value="1">服装版</option>
											<option value="2">餐饮版</option>
											<option value="3">商超版</option>
											<option value="4">服装版window</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">服务</label>
									<div class="layui-input-block" style="margin-left: 86px;">
										<input type="radio" name="search_service" value="未订购（0）" title="未订购（0）" checked>
										<input type="radio" name="search_service" value="已订购（0）" title="已订购（0）">
										<input type="radio" name="search_service" value="协助开通（0）" title="协助开通（0）">
										<input type="radio" name="search_service" value="待续费（0）" title="待续费（0）">
										<input type="radio" name="search_service" value="已到期（0）" title="已到期（0）">
									</div>
								</div>
								<div class="layui-inline">
									<div class="layui-input-inline">
										<input type="text" name="title" placeholder="查找" autocomplete="off" class="layui-input">
									</div>
								</div>
								<div class="layui-inline">
									<button class="layui-btn layuiadmin-btn-list" bindtap="show_shop_follow_up_dialog">
						              <i class="layui-icon layui-icon-search layuiadmin-button-btn"></i>
						            </button>
								</div>
								<div class="layui-inline">
									<button class="layui-btn" bindtap="show_create_shop_dialog">开户</button>
								</div>
							</div>
						</div>

					</div>

					<div class="table_main_body">
						<!--<table id="table_main" lay-filter="test" style="background: #FFFFFF;"></table>-->

						<table class="layui-table">
							<colgroup>
								<col width="150">
								<col width="150">
								<col width="200">
								<col>
							</colgroup>
							<thead>
								<tr>
									<th>级别</th>
									<th>商家号</th>
									<th>店名</th>
									<th>开户时间</th>
									<th>
										<div class="layui-table-cell laytable-cell-1-0-5">
											<span>实体店订单</span>
											<span class="layui-table-sort layui-inline">
												<i class="layui-edge layui-table-sort-asc" title="升序"></i>
												<i class="layui-edge layui-table-sort-desc" title="降序"></i>
											</span>
										</div>
									</th>
									<th>
										<div class="layui-table-cell laytable-cell-1-0-5">
											<span>成交总额</span>
											<span class="layui-table-sort layui-inline" lay-sort="asc">
												<i class="layui-edge layui-table-sort-asc" title="升序"></i>
												<i class="layui-edge layui-table-sort-desc" title="降序"></i>
											</span>
										</div>
									</th>
									<th>
										<div class="layui-table-cell laytable-cell-1-0-5">
											<span>毛利润</span>
											<span class="layui-table-sort layui-inline" lay-sort="desc">
												<i class="layui-edge layui-table-sort-asc" title="升序"></i>
												<i class="layui-edge layui-table-sort-desc" title="降序"></i>
											</span>
										</div>
									</th>
									<th>服务订购</th>
									<th>套餐类型</th>
									<th>到期时间</th>
									<th>业务组</th>
									<th>业务员</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>

					</div>

				</div>

				<!-- S 店铺详情 -->
				<div class="shop_info_area" style="display:none;">

					<a class="shop_info_area_close" href="javascript:void(0);" bindtap="shop_info_area_close">&nbsp;</a>

					<div class="shop_head">
						<div class="pic" mode="aspectFill"></div>
						<div class="shop_name">

							<div class="layui-form">
								<div class="layui-form-item" style="margin-bottom: 0;">
									<div class="layui-inline">
										商家ID：<span>10001</span>
									</div>
									<div class="layui-inline">
										<label class="layui-form-label" style="color: #d81e06;">客户跟进</label>
										<div class="layui-input-block" style="margin-left: 96px;" bindtap="show_shop_follow_up_dialog">
											<select name="type" lay-verify="required" lay-filter="aihao">
												<option value="">选择</option>
												<option value="1">A级</option>
												<option value="2">B级</option>
												<option value="3">C级</option>
											</select>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div class="shop_other clearfix">
							<ul>
								<li>开户时间：<span>XXX</span></li>
								<li>旺旺号：<span>XXX</span></li>
								<li>订单号：<span>XXX</span></li>
								<li>联系人：<span>XXX</span></li>
								<li>手机号：<span>XXX</span></li>
								<li>业务组：<span>XXX</span></li>
								<li>业务员：<span>XXX</span></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>

					<!-- S shop_nav_list -->
					<div class="shop_nav_list">
						<ul>
							<li class="current">
								<a href="javascript:Page.shop_nav_list(0);">开户记录</a>
							</li>
							<li class="">
								<a href="javascript:Page.shop_nav_list(1);">资质(<em>已认证</em>)</a>
							</li>
							<li class="">
								<a href="javascript:Page.shop_nav_list(2);">店铺</a>
							</li>
							<li class="">
								<a href="javascript:Page.shop_nav_list(3);">商品(<em>0</em>)</a>
							</li>
							<li class="">
								<a href="javascript:Page.shop_nav_list(4);">订单(<em>0</em>)</a>
							</li>
							<li class="">
								<a href="javascript:Page.shop_nav_list(5);">会员(<em>0</em>)</a>
							</li>
							<li class="">
								<a href="javascript:Page.shop_nav_list(6);">违规(<em>0</em>)</a>
							</li>
						</ul>
						<div class="clearfix"></div>
					</div>
					<!-- E shop_nav_list -->

					<!-- S shop_service -->
					<div class="create_shop_record shop_nav_item" style="display:;">
						<div class="items">
							<div class="item">
								<label>店铺管理：</label>
								<div class="box_cont">
									<div class="box">
										<a href="javascript:void(0);" class="btn">试用</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">付费</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn active" bindtap="show_create_shop_dialog">开通</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">停用</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">注销</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="item">
									<label>扫码支付：</label>
									<div class="box_cont">
										<div class="box">
											<a href="javascript:void(0);" class="btn">试用</a>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">付费</a>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn" bindtap="show_create_shop_primary_dialog">开通</a>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">停用</a>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">注销</a>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
											<p>版本：<span>XXX</span></p>
										</div>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
							<div class="item">
								<label style="color: #44b549;">微商城：</label>
								<div class="box_cont">
									<div class="box">
										<a href="javascript:void(0);" class="btn">试用</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">付费</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">开通</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">停用</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">注销</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<!-- E shop_service -->

					<!-- S shop_aptitude -->
					<div class="shop_aptitude shop_nav_item" style="display:none;">

						<div class="pub-wrap">
							<ul class="pub-process process-3 pub-process-flex" id="pubProcess">
								<li class="active active_ok">
									<span class="ball">&nbsp;</span>
									<span class="ball_text">实名认证</span>
								</li>
								<li class="active active_error">
									<span class="ball">&nbsp;</span>
									<span class="ball_text">收款账号</span>
								</li>
								<li class="active">
									<span class="ball">&nbsp;</span>
									<span class="ball_text">企业资质</span>
								</li>
								<li>
									<span class="ball">&nbsp;</span>
									<span class="ball_text">完成</span>
								</li>
							</ul>
						</div>

						<!-- S 实名认证 -->
						<div class="items real_name_act_items">

							<div class="imgs">
								<div class="imgs_cont">
									<img src="http://account.poso2o.com/style/img/logo_256.png">
								</div>
							</div>
							<div class="texts">
								<p class="title"><i>&nbsp;</i>法人代表</p>
								<p>姓名：<span>XXX</span></p>
								<p>身份证：<span>XXX</span></p>
								<p>有效期：<span>XXX</span></p>
							</div>
							<div class="btn_item">
								<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">审核通过</a>
								<a class="btn btn_default non_conformity_btn" href="javascript:void(0);">&emsp;不符合&emsp;</a>
							</div>

							<div class="clearfix"></div>
						</div>
						<!-- E 实名认证 -->

						<!-- S 收款账号 -->
						<div class="items receiving_account_items">

							<div class="imgs">
								<div class="imgs_cont">
									<img src="http://account.poso2o.com/style/img/logo_256.png">
								</div>
							</div>
							<div class="texts">
								<p class="title"><i>&nbsp;</i>收款账号</p>
								<p>财务联系人：<span>XXX</span></p>
								<p>电话/手机号：<span>XXX</span></p>
								<p>幵户人：<span>XXX</span></p>
								<p>银行卡号：<span>XXX</span></p>
								<p>开户行（支行）：<span>XXX</span></p>
							</div>
							<div class="btn_item">
								<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">审核通过</a>
								<a class="btn btn_default non_conformity_btn" href="javascript:void(0);">&emsp;不符合&emsp;</a>
							</div>

							<div class="clearfix"></div>
						</div>
						<!-- E 收款账号 -->

						<!-- S 企业资质 -->
						<div class="items enterprise_qualification_items">

							<div class="imgs">
								<div class="imgs_cont">
									<img src="http://account.poso2o.com/style/img/logo_256.png">
								</div>
							</div>
							<div class="texts">
								<p class="title"><i>&nbsp;</i>企业资质</p>
								<p>法人代表：<span>XXX</span></p>
								<p>企业全称：<span>XXX</span></p>
								<p>营业执照号：<span>XXX</span></p>
							</div>
							<div class="btn_item">
								<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">审核通过</a>
								<a class="btn btn_default non_conformity_btn" href="javascript:void(0);">&emsp;不符合&emsp;</a>
							</div>

							<div class="clearfix"></div>
						</div>
						<!-- E 企业资质 -->

						<div class="clearfix"></div>
					</div>
					<!-- E shop_aptitude -->

					<!-- S shop_violation -->
					<div class="shop_violation shop_nav_item" style="display:none;">
						<p>店铺</p>
						<div class="clearfix"></div>
					</div>
					<!-- E shop_violation -->

					<!-- S shop_goods -->
					<div class="shop_goods shop_nav_item" style="display:none;">
						<p>商品</p>
						<div class="clearfix"></div>
					</div>
					<!-- E shop_goods -->

					<!-- S shop_member -->
					<div class="shop_member shop_nav_item" style="display:none;">
						<p>订单</p>
						<div class="clearfix"></div>
					</div>
					<!-- E shop_member -->

					<!-- S shop_after_sale -->
					<div class="shop_after_sale shop_nav_item" style="display:none;">
						<p>会员</p>
						<div class="clearfix"></div>
					</div>
					<!-- E shop_after_sale -->

					<!-- S shop_after_sale -->
					<div class="shop_after_sale shop_nav_item" style="display:none;">
						<p>违规</p>
						<div class="clearfix"></div>
					</div>
					<!-- E shop_after_sale -->

				</div>
				<!-- E 店铺详情 -->

			</div>

			<div class="layui-footer entity_shop_footer">
				<div class="menu_cont">
					<a class="menu setup_menu" href="javascript:void(0);" style="display: none;">菜单设置</a>
					<a class="menu full_screen_menu" href="javascript:void(0);" style="display: none;">全屏显示</a>
					<a class="menu examine_menu" href="javascript:void(0);"><i id="shop_news_icon">&nbsp;</i><em>8</em>位商家待审核</a>
				</div>
			</div>

		</div>

		<!--开户申请窗口 start-->
		<div class="shop_dialog dialog create_shop_dialog" seid="" style="display:none;">
			<div class="dialog_hd">
				<h3>开户申请</h3>
				<a href="javascript:;" class="closed pop_closed" bindtap="close_create_shop_dialog">关闭</a>
			</div>
			<div class="dialog_bd clearfix">
				<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
				<div class="clearfix"></div>

				<div class="list"><label><em>*</em>旺旺号</label><input type="text" maxlength="32" value="" class="inputText" name="shop_wangwang"></div>
				<div class="list"><label><em>*</em>订单号</label><input type="text" maxlength="32" value="" class="inputText" name="shop_id"></div>
				<div class="list"><label><em>*</em>订单金额</label><input type="text" maxlength="32" value="" class="inputText" name="shop_id"></div>
				<div class="list"><label><em>*</em>联系人</label><input type="text" maxlength="32" value="" class="inputText" name="shop_id"></div>
				<div class="list"><label><em>*</em>手机号</label><input type="text" maxlength="11" value="" class="inputText" name="shop_id"></div>
				<div class="clearfix"></div>
				<div class="list">
					<label><em>*</em>来　源</label>
					<a class="wc_btn wc_btn_default wc_btn_active" href="javascript:;" bindtap="create_shop_dialog_wc_btn">老店</a>
					<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="create_shop_dialog_wc_btn">老猫</a>
					<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="create_shop_dialog_wc_btn">新店</a>
					<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="create_shop_dialog_wc_btn">新猫</a>
				</div>
				<div class="clearfix"></div>
				<div class="list">
					<label><em>*</em>版　本</label>
					<a class="wc_btn wc_btn_default wc_btn_active" href="javascript:;" bindtap="create_shop_dialog_wc_btn" type="0">服装版</a>
					<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="create_shop_dialog_wc_btn" type="1">餐饮版</a>
					<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="create_shop_dialog_wc_btn" type="2">商超版</a>
					<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="create_shop_dialog_wc_btn" type="3">服装版window</a>
				</div>
				<div class="clearfix"></div>
				<div class="list create_shop_dialog_setmeal_div" style="display: none;">
					<label><em>*</em>套　餐</label>
					<a class="frm_radio_label selected" bindtap="create_shop_dialog_setmeal" style="padding-top: 6px;">
						<i class="icon_radio"></i>
						<span>单软件</span>
					</a>
					<a class="frm_radio_label " bindtap="create_shop_dialog_setmeal" style="padding-top: 6px;">
						<i class="icon_radio"></i>
						<span>单软件+老板管理</span>
					</a>
					<a class="frm_radio_label" bindtap="create_shop_dialog_setmeal" style="padding-top: 6px;">
						<i class="icon_radio"></i>
						<span>单软件+老板管理+上传助手</span>
					</a>
				</div>
			</div>
			<div class="dialog_ft clearfix">
				<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="close_create_shop_dialog">取消</a>
				<a class="wc_btn wc_btn_primary" href="javascript:;" bindtap="create_shop_dialog_add">确定</a>
			</div>
		</div>
		<!--开户申请窗口 end-->

		<!--开户确认窗口 start-->
		<div class="shop_dialog dialog create_shop_primary_dialog" seid="" style="display:none;">
			<div class="dialog_hd">
				<h3>开户确认</h3>
				<a href="javascript:;" class="closed pop_closed" bindtap="close_create_shop_primary_dialog">关闭</a>
			</div>
			<div class="dialog_bd clearfix">
				<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
				<div class="clearfix"></div>
				<div class="list"><label>申请人员</label><span class="shop_id" style="line-height: 30px;font-size: 16px;">XXX</span></div>
				<div class="clearfix"></div>
				<div class="list"><label>申请时间</label><span class="shop_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
				<div class="clearfix"></div>
				<div class="list"><label>工　号</label><span class="shop_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
				<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="shop_id"></div>
				<div class="clearfix"></div>
			</div>
			<div class="dialog_ft clearfix">
				<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="close_create_shop_primary_dialog">取消</a>
				<a class="wc_btn wc_btn_primary" href="javascript:;" bindtap="create_shop_primary_dialog_add">确定</a>
			</div>
		</div>
		<!--开户确认窗口 end-->

		<!--客户跟进窗口 start-->
		<div class="dialog shop_dialog shop_follow_up_dialog" seid="" style="display:none;">
			<div class="dialog_hd">
				<h3>客户跟进</h3>
				<a href="javascript:;" class="closed pop_closed" bindtap="close_shop_follow_up_dialog">关闭</a>
			</div>
			<div class="dialog_bd clearfix">
				<div class="dialog_bd_left">
					<div class="list">
						<label>客户级别</label>
					</div>
					<div class="clearfix"></div>
					<div class="list">
						<a class="frm_radio_label level_radio_label selected" bindtap="shop_follow_up_dialog_level" style="padding-top: 6px;">
							<i class="icon_radio"></i>
							<span>A级</span>
						</a>
						<a class="frm_checkbox_label " bindtap="shop_follow_up_dialog_checkbox" style="padding-top: 6px;">
							<i class="icon_checkbox"></i>
							<span>有公众号，合作意愿强烈</span>
						</a>
						<a class="frm_checkbox_label" bindtap="shop_follow_up_dialog_checkbox" style="padding-top: 6px;">
							<i class="icon_checkbox"></i>
							<span>试用后再决定购买</span>
						</a>
					</div>
					<div class="clearfix"></div>
					<div class="list">
						<a class="frm_radio_label level_radio_label" bindtap="shop_follow_up_dialog_level" style="padding-top: 6px;">
							<i class="icon_radio"></i>
							<span>B级</span>
						</a>
						<a class="frm_checkbox_label " bindtap="shop_follow_up_dialog_checkbox" style="padding-top: 6px;">
							<i class="icon_checkbox"></i>
							<span>感兴趣，但无运营基础</span>
						</a>
						<a class="frm_checkbox_label" bindtap="shop_follow_up_dialog_checkbox" style="padding-top: 6px;">
							<i class="icon_checkbox"></i>
							<span>需要考虑</span>
						</a>
					</div>
					<div class="clearfix"></div>
					<div class="list">
						<a class="frm_radio_label level_radio_label" bindtap="shop_follow_up_dialog_level" style="padding-top: 6px;">
							<i class="icon_radio"></i>
							<span>C级</span>
						</a>
						<a class="frm_checkbox_label " bindtap="shop_follow_up_dialog_checkbox" style="padding-top: 6px;">
							<i class="icon_checkbox"></i>
							<span>直接拒绝</span>
						</a>
						<a class="frm_checkbox_label" bindtap="shop_follow_up_dialog_checkbox" style="padding-top: 6px;">
							<i class="icon_checkbox"></i>
							<span>其他</span>
						</a>
					</div>
					<div class="clearfix"></div>
					<div class="list">
						<label>跟进记录</label>
					</div>
					<div class="clearfix"></div>
					<div class="list">
						<textarea name="remark" cols="45" rows="5" class="remark textarea" placeholder="请输入内容"></textarea>
					</div>
				</div>
				<div class="dialog_bd_right">
				<div class="dialog_bd_right_bd">
					<ul class="layui-timeline">
						
					</ul>
				</div>
				</div>
			</div>
			<div class="dialog_ft clearfix">
				<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="close_shop_follow_up_dialog">关闭</a>
				<a class="wc_btn wc_btn_primary" href="javascript:;" bindtap="shop_follow_up_dialog_add">确定</a>
			</div>
		</div>
		<!--客户跟进窗口 end-->

		<script type="text/javascript" src="/layui/layui.all.js"></script>
		<script type="text/javascript" src="/wx_shop/wx_shop.js?v=1001"></script>

		<script type="text/javascript">
			$(function() {
				//选择日期
				var laydate = layui.laydate;
				//日期时间范围
				laydate.render({
					elem: '#test-laydate-range-datetime',
					type: 'datetime',
					range: true,
					value: '' + days.thirtyDays(),
					isInitValue: true //是否允许填充初始值，默认为 true
				});
				//表格
				var table = layui.table;

				//var dat = days.today();
				//console.log("dat===" + dat);
				//2019-06-01 00:00:00 - 2019-07-31 00:00:00

			})
		</script>

	</body>

</html>