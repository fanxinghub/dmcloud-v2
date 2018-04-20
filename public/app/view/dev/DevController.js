Ext.define('Admin.view.Dev.DevController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.devController',

    requires: [
        'Ext.util.TaskRunner'
    ],

    onRefreshToggle: function(tool, e, owner) {
        var store, runner;

        if (tool.toggleValue){
            this.clearChartUpdates();
        } else {
            store = this.getStore('networkData');
            if (store.getCount()) {
                runner = this.chartTaskRunner;
                if (!runner) {
                    this.chartTaskRunner = runner = new Ext.util.TaskRunner();
                }
                runner.start({
                    run : function () {
                        // Move the first record to the end
                        var rec = store.first();
                        store.remove(rec);
                        store.add(rec);
                    },
                    interval : 200
                });
            }
        }

        // change the toggle value
        tool.toggleValue = !tool.toggleValue;
    },

    clearChartUpdates : function() {
        this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
    },

    destroy: function () {
        this.clearChartUpdates();
        this.callParent();
    },

    onHideView: function () {
        this.clearChartUpdates();
    }
});
/**
 * Created by Administrator on 2018/4/12.
 */
