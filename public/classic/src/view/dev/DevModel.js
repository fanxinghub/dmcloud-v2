/**
 * Created by Administrator on 2018/4/12.
 */
Ext.define('Admin.view.dev.DevModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.devModel',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],

    stores: {
        devList: {
            type: 'devList'
        }
    }
});
