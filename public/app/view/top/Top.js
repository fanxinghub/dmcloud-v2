/**
 * Created by fanxing on 2018/4/11.
 */
Ext.define('Admin.view.top.Top', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Admin.view.top.TopModel',
		'Admin.view.top.TopController',
        'Ext.layout.container.HBox'
    ],
    xtype: 'layout-horizontal-box',
    /*
    Uncomment to give this component an xtype
    xtype: 'top',
    */
    viewModel: {
        type: 'top'
    },
    controller: 'top',
    height: 40,
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    frame: false,
    border:false,
    defaults: {
        border:false,
        frame: false,
        bodyPadding: 0,
    },
    items: [
        {
            border:1,
            flex: 1,
        },
        {
            border:1,
            flex: 2,
            margin: '0 5 0 5',

        },
        {
            border:1,
            flex: 1
        }
    ]
});