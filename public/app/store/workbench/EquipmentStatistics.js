/**
 * Created by Administrator on 2018/4/18.
 */
Ext.define('Admin.store.workbench.equipmentStatistics', {
    extend: 'Ext.data.Store',
    storeId: 'equipmentStatistics',
    model: 'Admin.model.workbench.equipmentStatistics',
    data: [{
        'name': 'UC',
        'data1': 10,
        'data2': 14
    }, {
        'name': 'DAG',
        'data1': 7,
        'data2': 16
    }, {
        'name': 'SBC',
        'data1': 5,
        'data2': 14
    }, {
        'name': 'MTG',
        'data1': 2,
        'data2': 6
    }, {
        'name': '未知',
        'data1': 27,
        'data2': 36
    }]
});