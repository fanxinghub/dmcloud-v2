/**
 * Created by Administrator on 2018/4/12.
 */
Ext.define('Admin.store.dev.devList', {
    extend: 'Ext.data.Store',

    alias: 'store.devList',

    model: 'Admin.model.dev.Dev',

    pageSize: 10,

    autoLoad: true,
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
