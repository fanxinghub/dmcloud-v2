Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',
   // defaultToken : 'dashboard',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    // TODO: add global / shared stores here
    stores: [
        'NavigationTree'
    ],
  require:[
    'Admin.view.main.Main',
   ],


   // mainView: 'Admin.view.main.Main',

    launch: function () {
        // TODO - Launch the application
       store=Ext.create('Admin.store.domain.Domain');
        store.on('load',function(store, options){
            stores: ['NavigationTree']
        })
        Ext.tip.QuickTipManager.init();
        store.load();
        Ext.Ajax.request({
            method: "post",
            url: '/getUserSession',
            success: function (response, config) {
                var json = Ext.util.JSON.decode(response.responseText);
                if (json.success == true) {
                    Ext.create({ xtype:  'main' });
                    window.name="fuck";
                    window.location="#dashboard"
                }else{
                    window.location = "login.html";
                }
            },
            failure: function () {
                //Ext.Msg.alert('提示', '删除失败!');
                window.location = "login.html";
            }
        })
        /*Ext.Ajax.on('beforerequest', function(conn,options,eopts){
            Ext.Msg.alert("DDD")
        })*/
        /*Ext.Ajax.on('requestcomplete', getUserName, this);
        function getUserName(conn, response, options) {
            var json = Ext.util.JSON.decode(response.responseText);
            if (json.success == false) {
                window.location = "login.html";
            }
        }*/
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

