Ext.define('Admin.store.email.Inbox', {
    extend: 'Ext.data.Store',

    alias: 'store.inbox',

    model: 'Admin.model.email.Email',

    pageSize: 10,

    autoLoad: true,

    /*proxy: {
     type: 'api',
     url: '~api/email/inbox'
     }*/
    proxy : {
        type : 'ajax',
        url : '/getVersionList',
        reader : {
            rootProperty : "versionList",
            type : "json",
            totalProperty: 'total'
        }
    }
});
