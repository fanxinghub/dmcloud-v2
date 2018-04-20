Ext.define('Admin.view.email.Inbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',

    cls: 'email-inbox-panel shadow',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    bind: {
        store: '{inbox}'
    },

    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },

    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        showHeaderCheckbox: true
    },

    listeners: {
        cellclick: 'onGridCellItemClick'
    },

    headerBorders: false,
    rowLines: false,
    scrollable: false,
    tbar: [{
        iconCls:"x-fa fa-file",
        tooltip:"add",
        ui:'soft-green',
        text: 'Add',
        handler: 'onAddClick'
    }, {
        xtype:'uxsearchfield',
        fieldLabel:'search',
        labelWidth:40,
        width:260

    }],

    columns: [
        {
            dataIndex: 'uuid',
            text: 'uuid',
            hidden:true
        },
        {
            dataIndex: 'rec_status',
            text: 'rec_status',
            hidden:true
        },
        {
            dataIndex: 'package_ver',
            text: 'package_ver'
        },
        {
            dataIndex: 'product_id',
            text: 'product_id'

        },
        {
            dataIndex: 'vendor_id',
            text: 'vendor_id'

        }, {
            dataIndex: 'package_name',
            text: 'package_name'

        }, {
            dataIndex: 'rely_ver',
            text: 'rely_ver'

        }, {
            dataIndex: 'file_path',
            text: 'file_path',
            hidden:true
        }, {
            xtype: 'datecolumn',
            dataIndex: 'create_time',
            text: 'create_time'

        },{
            xtype: 'datecolumn',
            dataIndex: 'update_time',
            text: 'update_time'

        }, {
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
            bind: '{usersResults}'
        }
    ]
});
