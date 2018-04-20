/**
 * Created by Administrator on 2018/4/17.
 */
var t=false;
Ext.define('Admin.view.workbench.Workbench',{
    extend: 'Ext.container.Container',
    xtype: 'workbench',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    createItems:function(){
        var items=[];
        items.push({
            xtype: 'equipmentStatistics',
            userCls: 'big-50 small-100'
        })
        items.push({
            xtype: 'alarmStatistics',
            userCls: 'big-50 small-100'
        })
        items.push({
            xtype: 'userStatistics',
            userCls: 'big-50 small-100'
        })
        if(!t){
            items.push({
                xtype: 'domainStatistics',
                userCls: 'big-50 small-100'
            })
        }
        return items;
    },
    initComponent: function(){
        var nesGrid=Ext.create('Ext.Container', {
            layout: 'responsivecolumn',
            defaults: {
                defaults: {
                    animation : !Ext.isIE9m && Ext.os.is.Desktop
                }
            },
            items: this.createItems()
        })

        this.items=[nesGrid];
        this.callParent(arguments);
    }
})