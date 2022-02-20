export default {
    name: 'bill',
    title: 'Bill',
    type: 'document',
    fields: [
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'receiptId',
            title: 'Receipt ID',
            type: 'slug',
            options: {
                source: 'date',
                slugify: input => input
                    .replaceAll('-', '')
                    .replace('20', 'B')
                    .concat('01')
            }
        },
        {
            name: 'recipient',
            title: 'Recipient',
            type: 'string'
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'document',
                    fields: [
                        { name: 'itemName', title: 'Item Name', type: 'string' },
                        { name: 'amount', title: 'Amount', type: 'number' },
                    ],
                    options: {
                        columns: 2
                    }
                }
            ],
            options: {
                columns: 2,
                editModal: 'popover'
            }
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number',
        },
        {
            name: 'paid',
            title: 'Paid',
            type: 'boolean',
            initialValue: 'false'
        }
    ]
}