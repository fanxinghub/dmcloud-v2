/**
 * Created by Administrator on 2018/4/19.
 */
/**
 * Created by Administrator on 2018/4/12.
 */
Ext.define('Admin.view.safetyControl.user', {
    extend: 'Ext.panel.Panel',
    xtype: 'userList',
    cls: 'dashboard-main-chart shadow',
   // height: 380,
    bodyPadding: 15,
    title: '用户',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
   // autoScroll:true,
    initComponent: function(){
        var me=this;
        var store=Ext.create('Admin.store.dev.devList');
        store.on('beforeload', function (store, options) {
            var new_params = { productId: "18" };
            Ext.apply(store.proxy.extraParams, new_params);
            // alert('beforeload');
        });

        var userGrid = Ext.create('Ext.grid.Panel', {
            routeId: 'user',
            store:store,
            flex:1,
            selType: 'checkboxmodel',
            columns: [
                {   xtype: 'gridcolumn',
                    dataIndex: 'uuid',
                    text: 'uuid',
                    hidden:true
                },
                {xtype: 'gridcolumn',
                    dataIndex: 'rec_status',
                    text: 'rec_status',
                    hidden:true
                },
                {xtype: 'gridcolumn',
                    dataIndex: 'package_ver',
                    text: 'package_ver',
                    flex: 1
                },
                {xtype: 'gridcolumn',
                    dataIndex: 'product_id',
                    text: 'product_id',
                    flex: 1

                },
                {xtype: 'gridcolumn',
                    dataIndex: 'vendor_id',
                    text: 'vendor_id',
                    flex: 1

                }, {xtype: 'gridcolumn',
                    dataIndex: 'package_name',
                    text: 'package_name',
                    flex: 1

                }, {xtype: 'gridcolumn',
                    dataIndex: 'rely_ver',
                    text: 'rely_ver',
                    flex: 1

                }, {xtype: 'gridcolumn',
                    dataIndex: 'file_path',
                    text: 'file_path',
                    hidden:true
                }, {xtype: 'gridcolumn',
                    xtype: 'datecolumn',
                    dataIndex: 'create_time',
                    text: 'create_time'

                },{xtype: 'gridcolumn',
                    xtype: 'datecolumn',
                    dataIndex: 'update_time',
                    text: 'update_time'

                }, {xtype: 'gridcolumn',
                    dataIndex: 'detail_desc',
                    text: 'detail_desc'

                },
                {
                    xtype: 'actioncolumn',
                    flex:1,
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
                    store:store
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
        });
        this.tools=[
            {
                type: 'refresh',
                toggleValue: false,
                listeners: {
                    click: 'onRefreshToggle'
                }
            },
        ]
        this.items=[userGrid];
        this.callParent(arguments);

    }

});
