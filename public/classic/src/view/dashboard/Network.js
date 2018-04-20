Ext.define('Admin.view.dashboard.Network', {
    extend: 'Ext.panel.Panel',
    xtype: 'network',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.ProgressBar'
    ],
    controller: 'searchresults',
    viewModel: {
        type: 'searchresults'
    },
    cls: 'dashboard-main-chart shadow',
    height: 380,

    header:{
        title: 'Network'
    },
    bodyPadding: 15,



    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    autoScroll:true,
    tools: [
        {
            type: 'refresh',
            toggleValue: false,
            listeners: {
                click: 'onRefreshToggle'
            }
        },
        {
            type: 'wrench'
        }
    ],

    items: [
        {
            xtype: 'gridpanel',
            routeId: 'user',
            bind: '{usersResults}',
            autoScroll:true,

            selType: 'checkboxmodel',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 40,
                    dataIndex: 'identifier',
                    text: '#'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value) {
                        return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                    },
                    width: 75,
                    dataIndex: 'profile_pic',
                    text: 'User'
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'fullname',
                    text: 'Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'email',
                    text: 'Email',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    cls: 'content-column',
                    width: 120,
                    dataIndex: 'joinDate',
                    text: 'Date'
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'subscription',
                    text: 'Subscription',
                    flex: 1
                },
                {
                    xtype: 'actioncolumn',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-pencil'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-close'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-ban'
                        }
                    ],

                    cls: 'content-column',
                    width: 120,
                    dataIndex: 'bool',
                    text: 'Actions',
                    tooltip: 'edit '
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    itemId: 'userPaginationToolbar',
                    displayInfo: true,
                    bind: '{usersResults}'
                }
            ],
            plugins: [{
                ptype: 'rowexpander',
                rowBodyTpl : new Ext.XTemplate(
                    '<p><b>Company:</b> {name}</p>',
                    '<p><b>Change:</b> {change:this.formatChange}</p>',
                    {
                        formatChange: function(v){
                            var color = v >= 0 ? 'green' : 'red';
                            return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                        }
                    })
            }]

        }
    ]

});
