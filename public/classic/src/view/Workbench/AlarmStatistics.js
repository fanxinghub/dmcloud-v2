/**
 * Created by Administrator on 2018/4/19.
 */
/**
 * Created by Administrator on 2018/4/18.
 */
Ext.define('Admin.view.workbench.AlarmStatistics',{
    extend: 'Ext.panel.Panel',
    xtype: 'alarmStatistics',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
    ],
    cls: 'dashboard-main-chart shadow',
    height: 380,
    controller:'statisticsController',
    bodyPadding: 15,

    title: '告警统计',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    autoScroll:true,
    tools: [
        {
            text: 'Toggle markers',
            handler: 'onToggleMarkers'
        },
        {
            type: 'refresh',
            toggleValue: false,
            listeners: {
                click: 'onRefreshToggle'
            }
        }

    ],
    initComponent: function(){
        var store = Ext.create("Admin.store.workbench.alarmStatistics");
        var nesGrid=Ext.create('Ext.Container', {

            renderTo: Ext.getBody(),
             width: '100%',
            height: 300,
            layout: 'fit',
            items: [
                {
                    xtype: 'cartesian',
                    insetPadding: { top: 20, bottom: 20, left: 20, right: 20 },
                    store: store,
                    legend: {
                        type: 'sprite',
                        docked: 'right'
                    },
                    axes: [
                        {
                            type: 'numeric',
                            position: 'left',
                            grid: true,
                            title: { text: '数量', fontSize: 16 }
                        },
                        {
                            type: 'category',
                            position: 'bottom',
                            title: { text: '时间', fontSize: 16 }
                        }
                    ],
                    series: [{
                        type: 'line',
                        title: '设备告警',
                        xField: 'time',
                        yField: 'data1',
                        marker: {
                            type: 'square',
                            fx: {
                                duration: 200,
                                easing: 'backOut'
                            }
                        },
                        highlightCfg: {
                            scaling: 2
                        },
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
                        }
                    }, {
                        type: 'line',
                        title: '告警处理',
                        xField: 'time',
                        yField: 'data2',
                        marker: {
                            type: 'triangle',
                            fx: {
                                duration: 200,
                                easing: 'backOut'
                            }
                        },
                        highlightCfg: {
                            scaling: 2
                        },
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
                        }
                    }, {
                        type: 'line',
                        title: '历史告警',
                        xField: 'time',
                        yField: 'data3',
                        marker: {
                            type: 'arrow',
                            fx: {
                                duration: 200,
                                easing: 'backOut'
                            }
                        },
                        highlightCfg: {
                            scaling: 2
                        },
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
                        }
                    }, {
                        type: 'line',
                        title: '其他',
                        xField: 'time',
                        yField: 'data4',
                        marker: {
                            type: 'cross',
                            fx: {
                                duration: 200,
                                easing: 'backOut'
                            }
                        },
                        highlightCfg: {
                            scaling: 2
                        },
                        tooltip: {
                            trackMouse: true,
                            renderer: 'onSeriesTooltipRender'
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
