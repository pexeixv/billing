export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 30
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: Rule => Rule.min(10).max(10)
        },
        {
            name: 'email',
            title: 'eMail',
            type: 'string',
        }
    ]
}