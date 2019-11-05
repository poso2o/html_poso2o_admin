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
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<meta charset="UTF-8" />
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<title>实体店 - 商家列表</title>
		<link rel="shortcut icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon" />
		<link rel="icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon" />

		<link rel="stylesheet" href="/utils/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/style/css/master.css" />
		<link rel="stylesheet" href="/entity_shop/entity_shop.css">

		<script type="text/javascript" src="/js/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="/js/AjaxSimple.js"></script>
		<script type="text/javascript" src="/js/main.js"></script>

	</head>

	<body class="">
		<div class="layui-layout layui-layout-admin">

			<!-- S header -->
			<jsp:include page="/header/header.jsp" />
			<!-- E header -->

			<!-- S navList -->
			<jsp:include page="/entity_shop/left.jsp" />
			<!-- E navList -->

			<div class="layui-body">

				<div class="layui-fluid main_area">

					<form class="searchArea layui-form">

						<div class="layui-form layui-card-body">
							<div class="layui-form-item">

								<div class="layui-inline">
									<label class="layui-form-label">时间</label>
									<div class="layui-input-inline" style="width: 190px;">
										<input type="text" class="layui-input" id="date_range" placeholder=" - " name="date_range">
									</div>
								</div>

								<div class="layui-inline">
									<label class="layui-form-label">帐户状态</label>
									<div class="layui-input-block" style="margin-left: 86px;">
										<input id="storeState_5" type="radio" name="shop_state" lay-filter="shop_state" value="5" title="全部(0)" checked>
										<input id="storeState_2" type="radio" name="shop_state" lay-filter="shop_state" value="2" title="正常(0)">
										<input id="storeState_3" type="radio" name="shop_state" lay-filter="shop_state" value="3" title="停用(0)">
										<input id="storeState_4" type="radio" name="shop_state" lay-filter="shop_state" value="4" title="注销(0)">
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">业务组</label>
									<div class="layui-input-block" style="margin-left: 76px;">
										<select name="position_select" lay-verify="required" lay-filter="position_select">
											<option value="0">全部</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">业务员</label>
									<div class="layui-input-block" style="margin-left: 76px;">
										<select name="user_select" lay-verify="required" lay-filter="user_select">
											<option value="0">全部</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">版本</label>
									<div class="layui-input-block" style="margin-left: 58px;">
										<select name="version_select" lay-verify="required" lay-filter="version_select">
											<option value="0">全部</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<label class="layui-form-label">来源</label>
									<div class="layui-input-block" style="margin-left: 58px;">
										<select name="source_select" lay-verify="required" lay-filter="source_select">
											<option value="0">全部</option>
										</select>
									</div>
								</div>
								<div class="layui-inline">
									<div class="layui-input-inline keywords_input_inline">
										<input type="text" name="keywords" placeholder="请输入店铺ID" autocomplete="off" class="layui-input">
										<a class="del_btn" href="javascript:;" style="display: none;"><i></i>&nbsp;</a>
										<a class="btn keywords_btn" href="javascript:void(0);">&nbsp;</a>
									</div>
								</div>
							</div>
						</div>

					</form>

					<div class="table_main_body">

						<table class="layui-table">
							<colgroup>
							</colgroup>
							<thead>
								<tr>
									<th>序号</th>
									<th>商家ID</th>
									<th>账户状态</th>
									<th>开户时间</th>
									<th>版本</th>
									<th>服务费</th>
									<th>财务核对</th>
									<th>旺旺号</th>
									<th>联系人</th>
									<th>手机</th>
									<th>商品数</th>
									<th>会员数</th>
									<th>订单数</th>
									<th>成交额</th>
									<th>业务组</th>
									<th>业务员</th>
								</tr>
							</thead>
							<tbody id="shop_tbody">
							</tbody>
						</table>

						<div id="page"></div>

					</div>

				</div>

				<!-- S 店铺详情 -->
				<div class="shop_info_area" style="display:none;">

					<a class="shop_info_area_close" href="javascript:void(0);" onclick="Page.shop_info_area_close();">&nbsp;</a>

					<div class="shop_head">
						<div class="pic" mode="aspectFill"></div>
						<div class="shop_name">商家ID：<span>10001</span></div>
						<div class="shop_other clearfix">
							<ul>
								<li>开户时间：<span>XXX</span></li>
								<li>旺旺号：<span>XXX</span></li>
								<li>订单号：<span>XXX</span></li>
								<li>联系人：<span>XXX</span></li>
								<li>手机号：<span>XXX</span></li>
								<li style="display: none;">业务组：<span>XXX</span></li>
								<li style="display: none;">业务员：<span>XXX</span></li>
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
						<div class="items entity_shop_items">
							<div class="item">
								<label>店铺管理：</label>
								<!-- S navList -->
								<jsp:include page="/entity_shop/shop_status.jsp" />
								<!-- E navList -->
								<div class="clearfix"></div>
								<div class="item">
									<label>扫码支付：</label>
									<div class="box_cont">
										<div class="box">
											<a href="javascript:void(0);" class="btn">试用</a>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">付费</a>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">开通</a>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">停用</a>
											<p>版本：<span>XXX</span></p>
										</div>
										<div class="box">
											<a href="javascript:void(0);" class="btn">注销</a>
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
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">付费</a>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">开通</a>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">停用</a>
										<p>版本：<span>XXX</span></p>
									</div>
									<div class="box">
										<a href="javascript:void(0);" class="btn">注销</a>
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
						<!-- S shop_branch -->
						<jsp:include page="/entity_shop/shop_branch.jsp" />
						<!-- E shop_branch -->
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
					<a class="menu examine_menu" href="javascript:void(0);"><i id="shop_news_icon">&nbsp;</i><em>0</em>位商家</a>
				</div>
			</div>

		</div>

		<!-- S shop_branch -->
		<jsp:include page="/entity_shop/entity_shop_dialog.jsp" />
		<!-- E shop_branch -->

		<script type="text/javascript" src="/js/pos_days.js"></script>
		<script type="text/javascript" src="/utils/layui/layui.all.js"></script>
		<script type="text/javascript" src="/entity_shop/shop_list.js?v=1001"></script>
		<script type="text/javascript" src="/entity_shop/shop_status.js?v=1001"></script>
		<script type="text/javascript" src="/entity_shop/shop_branch.js?v=1001"></script>

		<script type="text/javascript">
		</script>

	</body>

</html>