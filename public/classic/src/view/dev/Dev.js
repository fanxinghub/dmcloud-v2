/**
 * Created by Administrator on 2018/4/12.
 */
Ext.define('Admin.view.dev.Dev', {
    extend: 'Ext.container.Container',
    xtype: 'dev',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],



    layout: 'responsivecolumn',



    items: [
        {
            xtype: 'devList',

            // 60% width when viewport is big enough,
            // 100% when viewport is small
            userCls: 'big-100 small-100'
        }

        /* {
         xtype: 'hddusage',
         userCls: 'big-20 small-50'
         },
         {
         xtype: 'earnings',
         userCls: 'big-20 small-50'
         },
         {
         xtype: 'sales',
         userCls: 'big-20 small-50'
         },
         {
         xtype: 'topmovies',
         userCls: 'big-20 small-50'
         },
         {
         xtype: 'weather',
         cls: 'weather-panel shadow',
         userCls: 'big-40 small-100'
         },
         {
         xtype: 'todo',
         userCls: 'big-60 small-100'
         },
         {
         xtype: 'services',
         userCls: 'big-40 small-100'
         }*/
    ]
});
