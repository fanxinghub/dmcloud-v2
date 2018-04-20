/**
 * Created by Administrator on 2018/4/19.
 */
/**
 * Created by Administrator on 2018/4/19.
 */
/**
 * Created by Administrator on 2018/4/18.
 */
Ext.define('Admin.view.workbench.UserStatistics',{
    extend: 'Ext.panel.Panel',
    xtype: 'userStatistics',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.theme.Muted'
    ],
    controller:'userStatisticsController',
    cls: 'dashboard-main-chart shadow',
    height: 380,

    bodyPadding: 15,

    title: '用户统计',
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
        var store = Ext.create("Admin.store.workbench.userStatistics");
        var nesGrid=Ext.create('Ext.Container', {
            renderTo: Ext.getBody(),
             width: '80%',
            height: 300,
            layout: 'fit',
            items: [{
                xtype: 'cartesian',
                reference: 'chart',
                theme: {
                    type: 'muted'
                },
                store: store,
                insetPadding: { top: 20, bottom: 20, left: 20, right: 20 },
                animation: Ext.isIE8 ? false : {
                    easing: 'backOut',
                    duration: 500
                },
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    fields: 'ind',
                    maximum: 4000000,
                    majorTickSteps: 10,
                    label: {
                        textAlign: 'right'
                    },
                    renderer: 'onAxisLabelRender',
                    title: 'number',
                    grid: {
                        odd: {
                            fillStyle: 'rgba(255, 255, 255, 0.06)'
                        },
                        even: {
                            fillStyle: 'rgba(0, 0, 0, 0.03)'
                        }
                    }
                }, {
                    type: 'category3d',
                    position: 'bottom',
                    fields: 'country',
                    grid: true
                }],
                series: [{
                    type: 'bar3d',
                    xField: 'country',
                    yField: 'ind',
                    style: {
                        minGapWidth: 20
                    },
                    highlightCfg: {
                        saturationFactor: 1.5
                    },
                    label: {
                        field: 'ind',
                        display: 'insideEnd',
                        renderer: 'onSeriesLabelRender'
                    },
                    tooltip: {
                        trackMouse: true,
                        renderer: 'onTooltipRender'
                    }
                }]

            }]
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
