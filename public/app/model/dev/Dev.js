/**
 * Created by Administrator on 2018/4/12.
 */
Ext.define('Admin.model.dev.Dev', {
    extend: 'Admin.model.Base',

    fields: [
        {
            type: 'int',
            name: 'uuid'
        },
        {
            type: 'int',
            name: 'rec_status'
        },
        {
            type: 'string',
            name: 'package_ver'
        },
        {
            type: 'int',
            name: 'product_id'
        },
        {
            type: 'int',
            name: 'vendor_id'
        },
        {
            type: 'string',
            name: 'package_name'
        },
        {
            type: 'string',
            name: 'rely_ver'
        },
        {
            type: 'string',
            name: 'file_path'
        },
        {
            name: 'create_time',
            type: 'date'
        },
        {
            name: 'update_time',
            type: 'date'
        },
        {
            name: 'detail_desc',
            type: 'string'
        }

    ]
});
