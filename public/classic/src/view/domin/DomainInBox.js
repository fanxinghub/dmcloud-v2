Ext.define('Admin.view.domain.DomainInbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'domainInbox',

    cls: 'email-inbox-panel shadow',
   require:[
       'Ext.selection.CellModel'
   ],
    bind: {
        store: '{domain}'
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

    columns: [
        {
            dataIndex: 'favorite',
            menuDisabled: true,
            text: '<span class="x-fa fa-heart"></span>',
            width: 40,
            renderer: function(value) {
                return '<span class="x-fa fa-heart'+ (value ? '' : '-o') +'"></span>';
            }
        },
        {
            dataIndex: 'from',
            text: 'From',
            width: 140
        },
        {
            dataIndex: 'title',
            text: 'Title',
            flex: 1
        },
        {
            dataIndex: 'has_attachments',
            text: '<span class="x-fa fa-paperclip"></span>',
            width: 40,
            renderer: function(value) {
                return value ? '<span class="x-fa fa-paperclip"></span>' : '';
            }
        },
        {
            xtype: 'datecolumn',
            dataIndex: 'received_on',
            width: 90,
            text: 'Received'
        },
        {
            xtype: 'actioncolumn',
            width: 140,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'x-fa fa-edit',
                tooltip: 'Delete Plant',
                handler: 'onRemoveClick'

            },{
                iconCls: 'x-fa fa-edit',
                tooltip: 'Delete Plant',
                handler: 'onRemoveClick'

            }]
        }]
});

/**
 * Created by Administrator on 2018/4/3.
 */
