
Ext.define('Admin.store.domain.Domain', {
    extend: 'Ext.data.Store',

    alias: 'store.domain',

    model: 'Admin.model.domain.Domain',

    pageSize: 5,

    autoLoad: true,

    /*proxy: {
     type: 'api',
     url: '~api/email/inbox'
     }*/
    proxy : {
        type : 'ajax',
        url : '/getDomainList',
        reader : {
            rootProperty : "domainList",
            type : "json"
        }
    }
});
/**
 * Created by Administrator on 2018/4/3.
 */
