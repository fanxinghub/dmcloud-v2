Ext.define('Admin.model.domain.Domain', {
    extend: 'Admin.model.Base',
    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            name: 'read'
        },
        {
            type: 'string',
            name: 'title'
        },
        {
            name: 'user_id'
        },
        {
            type: 'string',
            name: 'contents'
        },
        {
            type: 'string',
            name: 'from'
        },
        {
            name: 'has_attachments'
        },
        {
            name: 'attachments'
        },
        {
            name: 'received_on',
            type: 'date'
        },
        {
            name: 'favorite'
        }
    ]
});
/**
 * Created by Administrator on 2018/4/3.
 */
