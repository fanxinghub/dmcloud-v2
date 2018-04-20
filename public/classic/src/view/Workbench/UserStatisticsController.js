/**
 * Created by Administrator on 2018/4/19.
 */
/**
 * Created by Administrator on 2018/4/19.
 */
Ext.define('Admin.view.workbench.UserStatisticsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userStatisticsController',

    onSeriesLabelRender: function (v) {
        return Ext.util.Format.number(v / 1000, '0,000');
    },

    onTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('country') + ': ' +
        Ext.util.Format.number(record.get('ind'), '0,000 (millions of USD)'));
    },

    onAxisLabelRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except adding a thousands separator, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        return Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000');
    },

});
/**
 * Created by Administrator on 2018/4/3.
 */
