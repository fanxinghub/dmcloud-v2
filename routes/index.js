var express = require('express');
var router = express.Router();
var devAction=require('../controller/devAction')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.all('/doLogin',function(req,res,next){
    console.log("SSSSS")
    res.send(JSON.stringify({success:true,errorInfo:'登录成功'}));
})
router.all('/getUserSession',function(req,res,next){
    res.send(JSON.stringify({success:true,errorInfo:'登录成功'}));
})
router.all('/getDomainList',function(req,res,next){
    console.log("DDDDD")
    var domainList= [
        {
            "id": 0,
            "read": false,
            "user_id": 4,
            "title": "Cillum ad ad ut velit.",
            "contents": "Cupidatat ex sit excepteur deserunt et qui nisi voluptate minim dolor id laborum dolor culpa. Eiusmod excepteur consequat aliquip irure magna. Occaecat duis officia Lorem ut exercitation irure laboris pariatur esse consectetur. Nulla consequat magna id et est excepteur mollit cillum cupidatat tempor ea laboris ut. Fugiat ea et occaecat laboris consequat dolor cupidatat velit Lorem minim. Deserunt fugiat reprehenderit qui proident sunt.\r\n",
            "from": "Estela Gibbs",
            "received_on": "Thu Sep 25 2014 09:57:57 GMT+0000 (UTC)",
            "favorite": true,
            "has_attachments" : true,
            "attachments": ["img1.jpg", "img2.jpg"]
        },{
            "id": 0,
            "read": false,
            "user_id": 4,
            "title": "Cillum ad ad ut velit.",
            "contents": "Cupidatat ex sit excepteur deserunt et qui nisi voluptate minim dolor id laborum dolor culpa. Eiusmod excepteur consequat aliquip irure magna. Occaecat duis officia Lorem ut exercitation irure laboris pariatur esse consectetur. Nulla consequat magna id et est excepteur mollit cillum cupidatat tempor ea laboris ut. Fugiat ea et occaecat laboris consequat dolor cupidatat velit Lorem minim. Deserunt fugiat reprehenderit qui proident sunt.\r\n",
            "from": "Estela Gibbs",
            "received_on": "Thu Sep 25 2014 09:57:57 GMT+0000 (UTC)",
            "favorite": true,
            "has_attachments" : true,
            "attachments": ["img1.jpg", "img2.jpg"]
        }];
    res.send(JSON.stringify({success:true,domainList:domainList}));
})
router.all('/navigationTree',function(req,res){

    console.log("DDDDD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    var children=[
        {
            text: 'Domain',
            iconCls: 'x-fa fa-desktop',
            rowCls: 'nav-tree-badge nav-tree-badge-new',
            viewType: 'domainList',
            //  routeId: 'domainList', // routeId defaults to viewType
            leaf: true
        },
        {
            text: 'Dashboard',
            id: 'pages-parent1',
            iconCls: 'x-fa fa-desktop',
            rowCls: 'nav-tree-badge nav-tree-badge-new',
            viewType: 'admindashboard',
            routeId: 'dashboard', // routeId defaults to viewType
            leaf: true
        },
        {
            text: 'Email',
            iconCls: 'x-fa fa-send',
            rowCls: 'nav-tree-badge nav-tree-badge-hot',
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
            //  expanded: false,
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
   var root= "{expanded: true,children:"+children+"}";

    res.send(JSON.stringify({success:true,root:root}));
})
router.all('/checkSn',devAction.checkSn)
router.all('/addDev',devAction.addDev)
router.all('/deleteDev',devAction.deleteDev)
router.all('/getVersionList',devAction.getVersionList)
module.exports = router;
