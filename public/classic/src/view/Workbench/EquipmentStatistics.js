/**
 * Created by Administrator on 2018/4/18.
 */
Ext.define('Admin.view.workbench.EquipmentStatistics',{
    extend: 'Ext.panel.Panel',
    xtype: 'equipmentStatistics',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
    ],
    cls: 'dashboard-main-chart shadow',
    height: 380,

    bodyPadding: 15,

    title: '设备统计',
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
        }
    ],
    initComponent: function(){
        var store = Ext.create("Admin.store.workbench.equipmentStatistics");
        var nesGrid=Ext.create('Ext.Container', {
            renderTo: Ext.getBody(),
            width: '80%',
            height: 300,
            layout: 'fit',
            items: [
                {
                    xtype: 'chart',
                    insetPadding: { top: 20, bottom: 20, left: 20, right: 20 },
                    store: store,
                    axes: [{
                        type: 'numeric',
                        position: 'left',
                        fields: ['data1'],
                        title: {
                            text: '设备数',
                            fontSize: 15
                        },
                        grid: true,
                        minimum: 0
                    }, {
                        type: 'category',
                        position: 'bottom',
                        fields: ['name'],
                        title: {
                            text: '设备类型',
                            fontSize: 15
                        }
                    }],
                    series: [{
                        type: 'line',
                        style: {
                            stroke: '#30BDA7',
                            lineWidth: 2
                        },
                        xField: 'name',
                        yField: 'data1',
                        marker: {
                            type: 'path',
                            path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                            stroke: '#30BDA7',
                            lineWidth: 2,
                            fill: 'white'
                        }
                    }, {
                        type: 'line',
                        fill: true,
                        style: {
                            fill: '#96D4C6',
                            fillOpacity: .6,
                            stroke: '#0A3F50',
                            strokeOpacity: .6
                        },
                        xField: 'name',
                        yField: 'data2',
                        marker: {
                            type: 'circle',
                            radius: 4,
                            lineWidth: 2,
                            fill: 'white'
                        }
                    }]

                }
            ]

        })
        this.items=[nesGrid];
        this.callParent(arguments);
    }
   /* items: [{
        xtype: 'cartesian',
        colors: [
            '#115fa6',
            '#94ae0a'
        ],
        bind: '{areaData}',
        series: [
            {
                type: 'line',
                colors: [
                    'rgba(103, 144, 199, 0.6)'
                ],
                xField: 'xvalue',
                yField: [
                    'y1value'
                ],
                fill: true,
                smooth: true
            },
            {
                type: 'line',
                colors: [
                    'rgba(238, 146, 156, 0.6)'
                ],
                xField: 'xvalue',
                yField: [
                    'y2value'
                ],
                fill: true,
                smooth: true
            }
        ],
        platformConfig: {
            phone: {
                // On a phone the whole view becomes a vertical strip of charts,
                // which makes it impossible to scroll the view if touch action
                // started on a chart. So we use a custom touchAction config.
                touchAction: {
                    panX: true,
                    panY: true
                }
            },
            '!phone': {
                interactions: {
                    type: 'panzoom',
                    zoomOnPanGesture: true
                }
            }
        },
        axes: [{
            type: 'category',
            fields: [
                'xvalue'
            ],
            hidden: true,
            position: 'bottom'
        },{
            type: 'numeric',
            fields: [
                'y1value',
                'y2value',
                'y3value'
            ],
            grid: {
                odd: {
                    fill: '#e8e8e8'
                }
            },
            hidden: true,
            position: 'left'
        }]
    }]*/

})
