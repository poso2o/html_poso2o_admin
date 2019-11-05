//var POS = require('./utils/server');
var App = {
  // 服装版
  AppId: "wx3a4a28c20802a34d",
  AppSecret: "855659b97e0922bda47bd1aa0a6efb78",
  onLaunch: function () {
    this.login();
  },
  /**
   * 登录
   */
  login: function () {
    var self = this;
    var session_key = '';
    var openid = '';
    try {
      session_key = wx.getStorageSync('session_key');
      openid = wx.getStorageSync('openid');
    } catch (e) {
      // Do something when catch error
    }
    console.log("******openid:" + openid);
    if (openid) {
      self.session_key = session_key;
      self.openid = openid;
      //goods.getShopInfo();
      return;
    }
    //显示导航条加载动画
    wx.showNavigationBarLoading();
    wx.login({
      success: function (res) {
        console.log("login_res====" + JSON.stringify(res));
        if (res.code) {

          var templateData = {};
          templateData.code = res.code;
          templateData.app_id = self.AppId;
          templateData.app_secret = self.AppSecret;

          console.log("==app_id==" + self.AppId);
          console.log("==app_secret==" + self.AppSecret);

          //console.log("xxx===" + self.json2str(templateData));
          console.log("OpenidManage====" + JSON.stringify(templateData));
          POS.getTemplate("OpenidManage.htm", templateData, function (res) {
            console.log("res====" + JSON.stringify(res));
            if (res.data.code == "success") {
              console.log("poso2o_res====" + JSON.stringify(res));
              console.log("openid:" + res.data.data.openid);
              console.log("session_key :" + res.data.data.session_key);
              if (res.data.data.openid) {
                self.session_key = res.data.data.session_key;
                self.openid = res.data.data.openid;
                try {
                  wx.setStorageSync("session_key", self.session_key);
                  wx.setStorageSync('openid', self.openid)
                } catch (e) {
                }
              } else {
                //POS.showModal("温馨提示", "登录失败:" + res.data.data.errmsg);
              }
              //self.getShopInfo();
              //隐藏导航条加载动画
              wx.hideNavigationBarLoading();
            } else {
              POS.showModal("温馨提示", "" + res.data.msg);
            }
            //隐藏导航条加载动画
            wx.hideNavigationBarLoading();
          }, function (res) {
            console.log(res)
            //隐藏导航条加载动画
            wx.hideNavigationBarLoading();
            POS.showModal("温馨提示", "请确保当前网络畅通。");
          });

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
          //POS.showModal("温馨提示", "获取用户登录态失败！");
        }
      }
    });
  },
  /**
   * 当前用户资料
   */
  userInfo:null,
  /**
   * 当前用户openid
   */
  openid: '',//ogLou5WKrhJAUJQc-qBZM9AoNzz8
  /**
   * 当前用户mobile
   */
  mobile:'',
  /**
   * 当前用户session_key
   */
  session_key: null,
  /**
   * 当前店铺ID
   */
  shopid: '13016079579',
  /**
   * 当前店铺名称
   */
  shopname: null,
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  /**
  * json对象转字符串形式
  */
  json2str: function (o) {
    var self = this;
    var arr = [];
    var fmt = function (s) {
      if (typeof s == 'object' && s != null) return self.json2str(s);
      return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    }
    for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
    return '{' + arr.join(',') + '}';
  } 
}