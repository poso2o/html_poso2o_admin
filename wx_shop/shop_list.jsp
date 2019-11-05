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
		<title>实体店 - 商家列表</title>
		<link rel="shortcut icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon" />
		<link rel="icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon" />

		<link rel="stylesheet" href="/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/style/css/master.css" />
		<link rel="stylesheet" href="/wx_shop/shop_list.css">

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
									<label class="layui-form-label">帐户状态</label>
									<div class="layui-input-block" style="margin-left: 86px;">
										<input type="radio" name="user_state" value="全部（0）" title="全部（0）" checked>
										<input type="radio" name="user_state" value="正常（0）" title="正常（0）">
										<input type="radio" name="user_state" value="停用（0）" title="停用（0）">
										<input type="radio" name="user_state" value="注销（0）" title="注销（0）">
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
									<label class="layui-form-label">日均开单&ge;</label>
									<div class="layui-input-inline" style="width: 90px;">
										<input type="text" name="title" placeholder="" autocomplete="off" class="layui-input">
									</div>
									<label class="layui-form-label">笔</label>
								</div>

								<div class="layui-inline">
									<label class="layui-form-label">日均销售&ge;</label>
									<div class="layui-input-inline" style="width: 90px;">
										<input type="text" name="title" placeholder="" autocomplete="off" class="layui-input">
									</div>
									<label class="layui-form-label">元</label>
								</div>

								<div class="layui-inline">
									<div class="layui-input-inline">
										<input type="text" name="title" placeholder="查找" autocomplete="off" class="layui-input">
									</div>
								</div>

								<div class="layui-inline">
									<button class="layui-btn layuiadmin-btn-list">
						              <i class="layui-icon layui-icon-search layuiadmin-button-btn"></i>
						            </button>
								</div>
								<div class="layui-inline">
									<button class="layui-btn" bindtap="show_create_shop_dialog">业务指派</button>
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
									<th width="6%">商家ID</th>
									<th width="6%">账户状态</th>
									<th width="6%">开户时间</th>
									<th width="6%">版本</th>
									<th width="6%">服务费</th>
									<th width="6%">财务核对</th>
									<th width="6%">旺旺号</th>
									<th width="6%">联系人</th>
									<th width="6%">手机号</th>
									<th width="6%">商品数</th>
									<th width="6%">会员数</th>
									<th width="6%">订单数</th>
									<th width="6%">成交额</th>
									<th width="6%">业务组</th>
									<th width="6%">业务员</th>
								</tr>
							</thead>
							<tbody>
								<tr bindtap="shop_list_click">
									<td>13400000001</td>
									<td>正常</td>
									<td>2019-06-17</td>
									<td>服装版</td>
									<td>5999.00</td>
									<td>未核对</td>
									<td>poso2o</td>
									<td>李莉</td>
									<td>13900000001</td>
									<td>1000</td>
									<td>2000</td>
									<td>3000</td>
									<td>1000000</td>
									<td>-</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>

					</div>

				</div>

				<!-- S 店铺详情 -->
				<div class="shop_info_area" style="display:none;">

					<a class="shop_info_area_close" href="javascript:void(0);" bindtap="shop_info_area_close">&nbsp;</a>

					<div class="shop_head">
						<div class="pic" mode="aspectFill"></div>
						<div class="shop_name">商家ID：<span>10001</span></div>
						<div class="shop_other clearfix">
							<ul>
								<li>开户时间：<span>XXX</span></li>
								<li>旺旺号：<span>XXX</span></li>
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
								<a href="javascript:void(0);">开户记录</a>
							</li>
							<li class="">
								<a href="javascript:void(0);">资质(<em>已认证</em>)</a>
							</li>
							<li class="">
								<a href="javascript:void(0);">店铺</a>
							</li>
							<li class="">
								<a href="javascript:void(0);">商品(<em>0</em>)</a>
							</li>
							<li class="">
								<a href="javascript:void(0);">订单(<em>0</em>)</a>
							</li>
							<li class="">
								<a href="javascript:void(0);">会员(<em>0</em>)</a>
							</li>
							<li class="">
								<a href="javascript:void(0);">违规(<em>0</em>)</a>
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
										<a href="javascript:void(0);" class="btn active" bindtap="show_create_shop_primary_dialog">付费</a>
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
										<a href="javascript:void(0);" class="btn active" bindtap="show_create_shop_stop_dialog">停用</a>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn active" bindtap="show_create_shop_logout_dialog">注销</a>
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
								<label>微商城：</label>
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

		<!--付款确认窗口 start-->
		<div class="create_shop_primary_dialog shop_dialog dialog" seid="" style="display:none;">
			<div class="dialog_hd">
				<h3>付款确认</h3>
				<a href="javascript:;" class="closed pop_closed" bindtap="close_create_shop_primary_dialog">关闭</a>
			</div>
			<div class="dialog_bd clearfix">
				<div class="list"><label>旺旺号</label><span class="shop_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
				<div class="clearfix"></div>
				<div class="list"><label>订单号</label><span class="shop_id" style="line-height: 30px;font-size: 16px;">XXX</span></div>
				<div class="clearfix"></div>
				<div class="list"><label>已付款</label><span class="shop_id" style="line-height: 30px;font-size: 16px;color: #f17e3f; ">5999.00</span></div>
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
		<!--付款确认窗口 end-->

		<!--停用申请窗口 start-->
		<div class="create_shop_stop_dialog shop_dialog dialog" seid="" style="display:none;">
			<div class="dialog_hd">
				<h3>停用申请</h3>
				<a href="javascript:;" class="closed pop_closed" bindtap="close_create_shop_stop_dialog">关闭</a>
			</div>
			<div class="dialog_bd clearfix">

				<div class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<label class="layui-form-label">停用时间</label>
							<div class="layui-input-block">
								<input type="radio" name="sex" value="7" title="7天" checked>
								<input type="radio" name="sex" value="0" title="长期">
							</div>
						</div>
					</div>
				</div>

				<div class="layui-form-item layui-form-text">
					<label class="layui-form-label">停用原因</label>
					<div class="layui-input-block">
						<textarea name="desc" placeholder="请输入原因" class="layui-textarea" style="width: 250px;"></textarea>
					</div>
				</div>

				<div class="layui-form-item">
					<label class="layui-form-label">工　号</label>
					<div class="layui-input-block">
						<input type="text" name="title" required="" lay-verify="required" placeholder="请输入工号" autocomplete="off" class="layui-input" style="width: 250px;">
					</div>
				</div>

				<div class="layui-form-item">
					<label class="layui-form-label">密　码</label>
					<div class="layui-input-block">
						<input type="password" name="title" required="" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" style="width: 250px;">
					</div>
				</div>

			</div>
			<div class="dialog_ft clearfix">
				<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="close_create_shop_stop_dialog">取消</a>
				<a class="wc_btn wc_btn_primary" href="javascript:;" bindtap="create_shop_stop_dialog_add">确定</a>
			</div>
		</div>
		<!--停用申请窗口 end-->

		<!--注销申请窗口 start-->
		<div class="create_shop_logout_dialog shop_dialog dialog" seid="" style="display:none;">
			<div class="dialog_hd">
				<h3>注销申请</h3>
				<a href="javascript:;" class="closed pop_closed" bindtap="close_create_shop_logout_dialog">关闭</a>
			</div>
			<div class="dialog_bd clearfix">

				<div class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<label class="layui-form-label">注销原因</label>
							<div class="layui-input-block">
								<input type="radio" name="sex" value="0" title="退货/退款" checked lay-filter="create_shop_logout_dialog_radio">
								<input type="radio" name="sex" value="1" title="内测账号" lay-filter="create_shop_logout_dialog_radio">
								<input type="radio" name="sex" value="2" title="其他" lay-filter="create_shop_logout_dialog_radio">
							</div>
						</div>
					</div>
				</div>

				<div class="layui-form-item layui-form-text create_shop_logout_dialog_remark" style="display: none;">
					<div class="layui-input-block">
						<textarea name="desc" placeholder="请输入其他原因" class="layui-textarea" style="width: 250px;"></textarea>
					</div>
				</div>

				<div class="layui-form-item">
					<label class="layui-form-label">工　号</label>
					<div class="layui-input-block">
						<input type="text" name="title" required="" lay-verify="required" placeholder="请输入工号" autocomplete="off" class="layui-input" style="width: 250px;">
					</div>
				</div>

				<div class="layui-form-item">
					<label class="layui-form-label">密　码</label>
					<div class="layui-input-block">
						<input type="password" name="title" required="" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" style="width: 250px;">
					</div>
				</div>

			</div>
			<div class="dialog_ft clearfix">
				<a class="wc_btn wc_btn_default" href="javascript:;" bindtap="close_create_shop_logout_dialog">取消</a>
				<a class="wc_btn wc_btn_primary" href="javascript:;" bindtap="create_shop_logout_dialog_add">确定</a>
			</div>
		</div>
		<!--注销申请窗口 end-->

		<script type="text/javascript" src="/layui/layui.all.js"></script>
		<script type="text/javascript" src="/wx_shop/shop_list.js?v=1001"></script>

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

				//
				var form = layui.form
				//注销申请窗口 - 监听指定开关
				form.on('radio(create_shop_logout_dialog_radio)', function(data) {
					if(data.value == 2) {
						$(".create_shop_logout_dialog_remark").show();
					} else {
						$(".create_shop_logout_dialog_remark").hide();
					}
				});
			})
		</script>

	</body>

</html>