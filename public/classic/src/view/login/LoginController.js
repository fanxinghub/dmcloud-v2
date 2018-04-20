/**
 * Created by Administrator on 2018/3/30.
 */
Ext.define('Admin.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    require:['Admin.view.main.Main'],
    onLoginClick: function() {
        // This would be the ideal location to verify the user's credentials via         // a server-side lookup. We'll just move forward for the sake of this example.
        // Set the localStorage value to true          // 点击登录按钮，将本地存储变量"TutorialLoggedIn"的值设置为"true"
        // 请留意：本地存储变量在关闭浏览器后依然有效
        localStorage.setItem("TutorialLoggedIn", true);           // Remove Login Window（注销Login页面）
         this.getView().destroy();
        // Add the main view to the viewport（进入Main页面）
        //this.setMainView('Admin.view.main.Main')
        //this.setDefaultToken('dashboard')
        //this.redirectTo('dashboard', true);
        //this.setView('Admin.view.main.Main')
        Ext.create({xtype: 'main'});
        window.location="#dashboard"
    } });
