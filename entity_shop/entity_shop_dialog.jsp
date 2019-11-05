<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--开户申请窗口 start-->
<div class="create_shop_dialog dialog" seid="" style="display:none;">
	<div class="dialog_hd">
		<h3>开户申请</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_create_shop_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label><em>*</em>商家ID</label><input type="text" maxlength="11" value="" class="inputText" name="shop_id"></div>
		<div class="list"><label><em>*</em>商家名称</label><input type="text" maxlength="32" value="" class="inputText" name="shop_name"></div>
		<div class="clearfix"></div>
		<div class="list"><label><em>*</em>旺旺号</label><input type="text" maxlength="32" value="" class="inputText" name="wangwang"></div>
		<div class="list"><label><em>*</em>订单号</label><input type="text" maxlength="32" value="" class="inputText" name="order_id"></div>
		<div class="list"><label><em>*</em>订单金额</label><input type="text" maxlength="32" value="" class="inputText" name="order_amount"></div>
		<div class="list"><label><em>*</em>联系人</label><input type="text" maxlength="32" value="" class="inputText" name="contacts"></div>
		<div class="list"><label><em>*</em>手机号</label><input type="text" maxlength="11" value="" class="inputText" name="contacts_mobile"></div>
		<div class="clearfix"></div>
		<div class="list source_list"></div>
		<div class="clearfix"></div>
		<div class="list version_list"></div>
		<div class="clearfix"></div>
		<div class="list create_shop_dialog_setmeal_div" style="display: none;margin-right:0;">
			<div class="layui-form" lay-filter="package_form">
				<label><em>*</em>套　餐</label>
				<span class="package_list"></span>
			</div>
		</div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_create_shop_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.create_shop_dialog_add();">确定</a>
	</div>
</div>
<!--开户申请窗口 end-->

<!--新增分店窗口 start-->
<div class="create_branch_shop_dialog entity_shop_dialog dialog" seid="" style="display:none;">
	<div class="dialog_hd">
		<h3>新增分店</h3>
		<a href="javascript:void(0);" onclick="Branch.close_create_branch_shop_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label><em>*</em>分店ID</label><input type="text" maxlength="11" value="" class="inputText" name="shop_id"></div>
		<div class="list"><label><em>*</em>分店名称</label><input type="text" maxlength="32" value="" class="inputText" name="shop_name"></div>
		<div class="clearfix"></div>
		<div class="list"><label><em>*</em>联系人</label><input type="text" maxlength="32" value="" class="inputText" name="contacts"></div>
		<div class="list"><label><em>*</em>手机号</label><input type="text" maxlength="11" value="" class="inputText" name="contacts_mobile"></div>
		<div class="clearfix"></div>
		<!--<div class="list layui-form">
			<label>地址</label>
		</div>-->
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="Branch.close_create_branch_shop_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="Branch.create_branch_shop_dialog_add();">确定</a>
	</div>
</div>
<!--新增分店窗口 end-->

<!--付款确认窗口 start-->
<div class="payment_confirm_dialog entity_shop_dialog dialog" seid="" style="display:none;">
	<div class="dialog_hd">
		<h3>付款确认</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_payment_confirm_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>旺旺号</label><span class="wangwang" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>订单号</label><span class="order_id" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>已付款</label><span class="order_amount" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list" style="padding-top: 20px;"><label>工　号</label><span class="user_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
		<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="password"></div>
		<div class="clearfix"></div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_payment_confirm_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.payment_confirm_dialog_add();">确定</a>
	</div>
</div>
<!--付款确认窗口 end-->

<!--开户确认窗口 start-->
<div class="create_shop_primary_dialog entity_shop_dialog dialog" seid="" style="display:none;">
	<div class="dialog_hd">
		<h3>开户确认</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_create_shop_primary_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>申请人员</label><span class="user_name" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>申请时间</label><span class="build_date" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list" style="padding-top: 20px;"><label>工　号</label><span class="user_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
		<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="password"></div>
		<div class="clearfix"></div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_create_shop_primary_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.create_shop_primary_dialog_add();">确定</a>
	</div>
</div>
<!--开户确认窗口 end-->

<!--停用申请窗口 start-->
<div class="stop_dialog entity_shop_dialog dialog layui-form" seid="" style="display:none;" lay-filter="stop_dialog_form">
	<div class="dialog_hd">
		<h3>停用申请</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_stop_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
		<div class="clearfix"></div>
		<div class="list">
			<label>停用时间</label>
			<input type="radio" name="stop_date" value="7" title="7天" lay-filter="stop_date">
			<input type="radio" name="stop_date" value="-1" title="长期" lay-filter="stop_date">
		</div>
		<div class="clearfix"></div>
		<div class="list">
			<label style="margin-bottom: 10px;;">停用原因</label>
			<textarea name="remark" placeholder="请输入内容" class="layui-textarea" style="width: 368px;" maxlength="120"></textarea>
		</div>
		<div class="clearfix"></div>
		<div class="list" style="padding-top: 20px;"><label>工　号</label><span class="user_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
		<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="password"></div>
		<div class="clearfix"></div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_stop_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.stop_dialog_add();">确定</a>
	</div>
</div>
<!--停用申请窗口 end-->

<!--停用审核窗口 start-->
<div class="stop_confirm_dialog entity_shop_dialog dialog" seid="" style="display:none;">
	<div class="dialog_hd">
		<h3>停用审核</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_stop_confirm_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>申请人员</label><span class="user_name" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>申请时间</label><span class="build_date" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>停用原因</label><span class="remark" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list" style="padding-top: 20px;"><label>工　号</label><span class="user_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
		<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="password"></div>
		<div class="clearfix"></div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_stop_confirm_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.stop_confirm_dialog_add();">确定</a>
	</div>
</div>
<!--停用审核窗口 end-->

<!--注销申请窗口 start-->
<div class="logout_dialog entity_shop_dialog dialog layui-form" seid="" style="display:none;" lay-filter="logout_dialog_form">
	<div class="dialog_hd">
		<h3>注销申请</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_logout_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
		<div class="clearfix"></div>
		<div class="list">
			<label>注销原因</label>
			<input type="radio" name="logout_remark" value="退货/退款" title="退货/退款" lay-filter="logout_remark" >
			<input type="radio" name="logout_remark" value="内测账号" title="内测账号" lay-filter="logout_remark">
			<input type="radio" name="logout_remark" value="0" title="其他" lay-filter="logout_remark">
		</div>
		<div class="clearfix"></div>
		<div class="list logout_other_remark" style="display: none;">
			<textarea name="remark" placeholder="请输入内容" class="layui-textarea" style="width: 368px;" maxlength="120"></textarea>
		</div>
		<div class="clearfix"></div>
		<div class="list" style="padding-top: 20px;"><label>工　号</label><span class="user_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
		<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="password"></div>
		<div class="clearfix"></div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_logout_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.logout_dialog_add();">确定</a>
	</div>
</div>
<!--注销申请窗口 end-->

<!--注销审核窗口 start-->
<div class="logout_confirm_dialog entity_shop_dialog dialog" seid="" style="display:none;">
	<div class="dialog_hd">
		<h3>注销审核</h3>
		<a href="javascript:void(0);" onclick="shopStatus.close_logout_confirm_dialog();" class="closed pop_closed">关闭</a>
	</div>
	<div class="dialog_bd clearfix">
		<div class="list"><label>商家ID</label><span class="shop_id" style="line-height: 30px;color: #f17e3f; font-size: 16px;">10001</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>申请人员</label><span class="user_name" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>申请时间</label><span class="build_date" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list"><label>注销原因</label><span class="remark" style="line-height: 30px;font-size: 16px;">XXX</span></div>
		<div class="clearfix"></div>
		<div class="list" style="padding-top: 20px;"><label>工　号</label><span class="user_id" style="line-height: 30px;font-size: 16px;">10001</span></div>
		<div class="list"><label><em>*</em>密　码</label><input type="password" maxlength="32" value="" class="inputText" name="password"></div>
		<div class="clearfix"></div>
	</div>
	<div class="dialog_ft clearfix">
		<a class="wc_btn wc_btn_default" href="javascript:void(0);" onclick="shopStatus.close_logout_confirm_dialog();">取消</a>
		<a class="wc_btn wc_btn_primary" href="javascript:void(0);" onclick="shopStatus.logout_confirm_dialog_add();">确定</a>
	</div>
</div>
<!--注销审核窗口 end-->