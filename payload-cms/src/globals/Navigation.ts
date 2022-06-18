import { GlobalConfig } from 'payload/types';

const Navigation: GlobalConfig = {
    slug: 'navigation',
    fields: [
        {
            name: 'items',
            type: 'array',
            maxRows: 8,
            fields: [
                {
                    name: 'post',
                    type: 'relationship',
                    relationTo: 'posts', // "posts" is the slug of an existing collection
                    required: true,
                }
            ]
        },
    ]
}

export default Navigation;