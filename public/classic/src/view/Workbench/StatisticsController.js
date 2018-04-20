/**
 * Created by Administrator on 2018/4/19.
 */
Ext.define('Admin.view.workbench.StatisticsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.statisticsController',

    onSeriesTooltipRender: function (tooltip, record, item) {
        var title = item.series.getTitle();

        tooltip.setHtml(title + ' on ' + record.get('time') + ': ' +
        record.get(item.series.getYField()));
    },
    onToggleMarkers: function () {
        var chart = this.lookupReference('chart'),
            seriesList = chart.getSeries(),
            ln = seriesList.length,
            i = 0,
            series;

        for (; i < ln; i++) {
            series = seriesList[i];
            series.setShowMarkers(!series.getShowMarkers());
        }

        chart.redraw();
    }
});
/**
 * Created by Administrator on 2018/4/3.
 */
