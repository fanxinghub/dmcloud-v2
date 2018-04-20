/**
 * Created by Administrator on 2018/4/3.
 */
Ext.define('Admin.view.domain.domainList', {
    extend: 'Ext.container.Container',

    xtype: 'domainList',

    controller: 'domainList',

    viewModel: {
        type: 'domain'
    },

    itemId: 'domainListMainContainer',

   /* layout: {
        type: 'hbox',
        align: 'begin'
    },*/

    margin: '20 0 0 20',

    items: [
        {
            xtype: 'container',

            itemId: 'navigationPanel',

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            width: '30%',
            minWidth: 180,
            maxWidth: 240,

            defaults: {
                cls: 'navigation-email',
                margin: '0 20 20 0'
            },

            items: [
                {
                    xtype: 'emailmenu',
                    listeners: {
                        click: 'onMenuClick'
                    }
                },
            ]
        },
        {
            xtype: 'buttongroup',

            items: [{
                xtype: 'segmentedbutton',
                margin: '0 20 20 0',
                allowDepress: true,
                defaults: {
                    configType: 'align'  // custom config used in this example
                },

                items: [{
                    text: 'begin',
                    handler: 'onRemoveClick'
                }, {
                    text: 'middle'
                }, {
                    text: 'end'
                }, {
                    text: 'stretch'
                }, {
                    text: 'stretchmax'
                }, {
                    text: 'stretchmax'
                }]
            }]
        },


        {
            xtype: 'container',
            itemId: 'contentPanel',
            margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'anchor',
                anchor : '100%'
            }
        }
    ]
});
