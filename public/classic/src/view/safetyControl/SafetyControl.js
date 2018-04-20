/**
 * Created by Administrator on 2018/4/19.
 */
Ext.define('Admin.view.safetyControl.SafetyControl',{
    extend: 'Ext.container.Container',
    xtype: 'safetyControl',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],
    layout: 'responsivecolumn',
    defaults: {
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },
    items: [
        {
            xtype: 'userList',
            userCls: 'big-100 small-100'
        },
        {
            xtype: 'userList',
            userCls: 'big-100 small-100'
        },
        {
            xtype: 'userList',
            userCls: 'big-100 small-100'
        }
    ]
})