/**
 * entity_shop.js
 * Created by Luo on 2019/01/30.
 */
/* *
 * 实体店
 */
var Branch = {
    data: {
        shopDatas: null,
        currentShopData: null,
    },

    /**
     * 查询列表
     */
    queryShopData: function () {
        var templateData = {};
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        templateData.shop_id = Page.data.currentShopData.shop_id;
        templateData.shop_branch_id = Page.data.currentShopData.shop_branch_id;
        templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
        templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
        var self = this;
        var loading = null;
        post("/api/EntityShopManage/shop_id_query",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Branch.data.shopDatas = datas.data.list;
                    Branch.createShopListTable();
                    layui.form.render("select");
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
                loading = layer.msg('正在获取...', {
                    icon: 16,
                    shade: 0.01,
                    time: false //取消自动关闭
                });
            },
            //请求完成执行
            function (data) {
                layer.close(loading);
            }
        );
    },
    /**
     * 插入表格列表
     */
    createShopListTable: function () {
        var data = Branch.data.shopDatas;
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<tr onclick="Branch.shop_list_click(' + i + ')" tr_id="' + i + '">';
            html += '<td>' + (i + 1) + '</td>';
            html += '<td>' + data[i].shop_branch_id + '</td>';
            html += '<td>' + data[i].shop_name + '</td>';
            html += '<td>' + data[i].contacts + '</td>';
            html += '<td>' + data[i].contacts_mobile + '</td>';
            //			html += '<td>' + data[i].tel + '</td>';
            //			html += '<td>' + data[i].provincename + data[i].cityname + data[i].areaname + data[i].address + '</td>';
            html += '<td>编辑</td>';
        }
        $("#shop_branch_tbody").html(html);
    },
    //点击店铺列表事件
    shop_list_click: function (tr_id) {
        console.log("tr_id==" + tr_id);
        Branch.data.currentShopData = Branch.data.shopDatas[tr_id];
        Branch.show_create_branch_shop_dialog();
        $(".create_branch_shop_dialog").attr("seid", "1");
        $(".create_branch_shop_dialog .dialog_hd h3").html("编辑分店");
        $(".create_branch_shop_dialog input[name='shop_id']").val(Branch.data.currentShopData.shop_branch_id).attr("disabled", "disabled");
        $(".create_branch_shop_dialog input[name='shop_name']").val(Branch.data.currentShopData.shop_name);
        $(".create_branch_shop_dialog input[name='contacts']").val(Branch.data.currentShopData.contacts);
        $(".create_branch_shop_dialog input[name='contacts_mobile']").val(Branch.data.currentShopData.contacts_mobile);
    },
    /**
     * 新增分店窗口 - 显示
     */
    show_create_branch_shop_dialog: function () {
        $(".create_branch_shop_dialog").attr("seid", "");
        $(".create_branch_shop_dialog .dialog_hd h3").html("新增分店");
        $(".create_branch_shop_dialog input[name='shop_id']").removeAttr("disabled").val("").focus();
        $(".create_branch_shop_dialog input[name='shop_name']").val("");
        $(".create_branch_shop_dialog input[name='contacts']").val("");
        $(".create_branch_shop_dialog input[name='contacts_mobile']").val("");
        var dialog = $('.create_branch_shop_dialog');
        var left = ($(window).width() - dialog.width()) / 2;
        var top = ($(window).height() - dialog.height()) / 2;
        if (top < 49) top = 0;
        dialog.css({
            position: 'absolute',
            top: top + $(document).scrollTop(),
            left: left + $(document).scrollLeft()
        }).fadeIn();
        POS.fnOverlay($('body'));
    },
    /**
     * 新增分店窗口 - 关闭
     */
    close_create_branch_shop_dialog: function () {
        $('.create_branch_shop_dialog, .itemOverlay').fadeOut();
        setTimeout(function () {
            $(".itemOverlay").remove();
        }, 300);
    },
    /**
     * 新增分店窗口 - 提交
     */
    create_branch_shop_dialog_add: function () {
        var templateData = new Object();
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        templateData.shop_id = Page.data.currentShopData.shop_id;
        templateData.shop_branch_id = $(".create_branch_shop_dialog input[name='shop_id']").val();
        if (templateData.shop_branch_id.length != 11) {
            Page.layer_msg('请输入11位手机号码！');
            $(".create_branch_shop_dialog input[name='shop_id']").focus();
            return false;
        }
        templateData.shop_name = $(".create_branch_shop_dialog input[name='shop_name']").val();
        templateData.nick = templateData.shop_name;
        if (templateData.shop_name.replace(/\s*/g, "") == "") {
            Page.layer_msg('请输入分店名称！');
            $(".create_branch_shop_dialog input[name='shop_name']").focus();
            return false;
        }
        templateData.contacts = $(".create_branch_shop_dialog input[name='contacts']").val();
        if (templateData.contacts.replace(/\s*/g, "") == "") {
            Page.layer_msg('请输入联系人！');
            $(".create_branch_shop_dialog input[name='contacts']").focus();
            return false;
        }
        templateData.contacts_mobile = $(".create_branch_shop_dialog input[name='contacts_mobile']").val();
        if (templateData.contacts_mobile.length != 11) {
            Page.layer_msg('请输入手机号！');
            $(".create_branch_shop_dialog input[name='contacts_mobile']").focus();
            return false;
        }
        templateData.wangwang = Page.data.currentShopData.wangwang;
        templateData.order_id = Page.data.currentShopData.order_id;
        templateData.order_amount = Page.data.currentShopData.order_amount;
        templateData.source_id = Page.data.currentShopData.source_id;
        templateData.source_name = Page.data.currentShopData.source_name;
        templateData.shop_version_id = Page.data.currentShopData.shop_version_id;
        templateData.shop_version_name = Page.data.currentShopData.shop_version_name;
        templateData.shop_package_id = Page.data.currentShopData.shop_package_id;
        templateData.shop_package_name = Page.data.currentShopData.shop_package_name;
        templateData.shop_state = 1;
        var post_url = "/api/EntityShopManage/add";
        if ($(".create_branch_shop_dialog").attr("seid") != "") {
            templateData.shop_branch_id = Branch.data.currentShopData.shop_branch_id;
            post_url = "/api/EntityShopManage/edit";
        }
        var loading = null;
        post(post_url,
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    layer.msg('提交完成', {
                        icon: 1
                    });
                    $(".create_branch_shop_dialog .inputText").val("");
                    Branch.close_create_branch_shop_dialog();
                    setTimeout(function () {
                        Branch.queryShopData();
                    }, 1000)
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
                loading = layer.msg('正在提交...', {
                    icon: 16,
                    shade: 0.01,
                    time: false //取消自动关闭
                });
            },
            //请求完成执行
            function (data) {
                setTimeout(function () {
                    layer.close(loading);
                }, 1000)
            }
        );

    },
    init: function () {
        //Page.getList(1);
    }
}
Page.init();
/* *
 * 设置缓存值
 */
$(function () {

})