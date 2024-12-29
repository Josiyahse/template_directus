// ./directus-sync-config.config.js
module.exports = {
    directusUrl: 'url_de_base_directus',
    directusToken: 'token_d_access',
    dumpPath: './directus-config',
};

// module.exports = {
//     debug: true,
//     directusUrl: 'https://directus.example.com',
//     directusToken: 'my-directus-token',
//     directusEmail: 'admin@example.com', // ignored if directusToken is provided
//     directusPassword: 'my-directus-password', // ignored if directusToken is provided
//     directusConfig: {
//         clientOptions: {},  // see https://docs.directus.io/guides/sdk/getting-started.html#polyfilling
//         restConfig: {}, // see https://docs.directus.io/packages/@directus/sdk/rest/interfaces/RestConfig.html
//     },
//     dumpPath: './directus-config',
//     collectionsPath: 'collections',
//     onlyCollections: ['roles', 'policies', 'permissions', 'settings'],
//     excludeCollections: ['settings'],
//     preserveIds: ['roles', 'panels'], // can be '*' or 'all' to preserve all ids, or an array of collections
//     snapshotPath: 'snapshot',
//     snapshot: true,
//     split: true,
//     specsPath: 'specs',
//     specs: true,
// };
