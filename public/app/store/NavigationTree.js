Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    // storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: '工作台',
                // iconCls: 'x-fa fa-desktop',
                viewType: 'workbench',
                routeId: 'workbench', // routeId defaults to viewType
                leaf: true
            },
            {
                text: '安全控制',
                //   iconCls: 'x-fa fa-desktop',
                viewType: 'safetyControl',
                routeId: 'safetyControl', // routeId defaults to viewType
                expanded: true,
                children: [
                    {
                        text: '用户',
                        //      iconCls: 'x-fa fa-file-o',
                        viewType: 'userList',
                        leaf: true
                    },

                    {
                        text: '角色',
                        //      iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '权限',
                        //      iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    }
                ]
            },
            {
                text: '告警日志',
                itemd: 'pages-parent1',
                iconCls: 'x-fa fa-desktop',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: '设备',
                iconCls: 'x-fa fa-desktop',
                //  rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'dev',
                routeId: 'dev', // routeId defaults to viewType
                expanded: true,
                // leaf: true,
                children: [
                    {
                        text: '漫游区',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '站点',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    }
                ]
            },
            {
                text: '版本库',
                iconCls: 'x-fa fa-send',
                //      rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },
            {
                text: 'Profile',
                iconCls: 'x-fa fa-user',
                viewType: 'profile',
                leaf: true
            },
            {
                text: 'Search results',
                iconCls: 'x-fa fa-search',
                viewType: 'searchresults',
                leaf: true
            },
            {
                text: 'FAQ',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },
            {
                text: 'Pages',
                iconCls: 'x-fa fa-leanpub',
                expanded: true,
                // selectable: false,
                //routeId: 'pages-parent',

                children: [
                    {
                        text: 'Blank Page',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404 Error',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '500 Error',
                        iconCls: 'x-fa fa-times-circle',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },
                    {
                        text: 'Login',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'login',
                        leaf: true
                    },

                    {
                        text: 'Register',
                        iconCls: 'x-fa fa-pencil-square-o',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: 'Password Reset',
                        iconCls: 'x-fa fa-lightbulb-o',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            },
            {
                text: 'Forms',
                iconCls: 'x-fa fa-edit',
                viewType: 'forms',
                leaf: true
            },
            {
                text: 'Charts',
                iconCls: 'x-fa fa-pie-chart',
                viewType: 'charts',
                leaf: true
            }
        ]
    }
});
