
Ext.define('Admin.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],

    controller: 'main',
    viewModel: {
       type:'main',
        data:{
           title:'zhangjian'
        }
    },
    xtype:'main',
    cls: 'sencha-dash-viewport',
    itemId: 'mainView',
    plugins: 'viewport',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },


    items: [ {
        extend: 'Ext.panel.Panel',
        requires: [
            'Ext.layout.container.HBox'
        ],
        xtype: 'layout-horizontal-box',
        /*
        Uncomment to give this component an xtype
        xtype: 'top',
        */
        height: 60,
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
        },
        frame: false,
        border:false,
        defaults: {
            bodyPadding: 0
        },
        items: [

            {
                extend: 'Ext.panel.Panel',
                flex: 1,
                items:[
                    {
                        border:1,
                        xtype: 'image',
                        height: 35,
                        width: 110,
                        margin: '10 0 0 23',
                        alt:'current user image',
                        src: 'resources/images/user-profile/dmcld.png'
                    }
                ]
            },
            {
                extend: 'Ext.panel.Panel',
                flex: 2,
                height: 40,
                items:[
                    {
                        margin: '12 0 10 0',
                        xtype:'uxsearchfield',
                        height: 35,
                        width: '95%'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                flex: 1,
                padding:'0 0 0 120',
                items:[
                    {
                        // cls : 'sencha-logo123',
                        margin: '0 0 10 0',
                        height: 35,
                        width:'60%',
                        text: '欢迎,范星',
                        menu: [
                            { text: '修改密码' ,handler: 'onClickButton'},
                            { text: '退出', handler: 'onClickButton'}
                        ]
                    }
                ]
            }
        ]
    },

        {
            xtype: 'toolbar',
           cls: 'dashboard-main-chart sencha-dash-dash-headerbar   shadow',
            height: 50,
            padding: '0',
            margin:'0',
            itemId: 'headerBar',
            items: [
                {
                    height: 50,
                    margin:'0',
                    padding: '0 10 0 30',
                    ui: 'header',
                    cls: 'sencha-logo',
                    iconCls:'fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize',
                    style: {
                        backgroundColor:'rgb(50,109,230)'
                    }
                },
                {
                    height: 50,
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo">DMCLOUD</div>',
                    flex:2
                }



            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
