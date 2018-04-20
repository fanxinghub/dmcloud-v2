Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',
    require:[
        'Admin.view.main.Main',
    ],
    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
       // this.redirectTo('dashboard', true);
        localStorage.setItem("TutorialLoggedIn", true);           // Remove Login Window（注销Login页面）
        this.getView().destroy();
        // Add the main view to the viewport（进入Main页面）
        //this.setMainView('Admin.view.main.Main')
        //this.setDefaultToken('dashboard')
        //this.redirectTo('dashboard', true);
        //this.setView('Admin.view.main.Main')

        Ext.create({xtype: 'main'});
        window.location=""
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        //this.redirectTo('register', true);
        window.location="#register"
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});