import {BackgroundSyncPlugin} from 'workbox-background-sync';
import {registerRoute} from 'workbox-routing';
import {NetworkOnly} from 'workbox-strategies';

const bgSyncPlugin = new BackgroundSyncPlugin('apiPostQueue', {
    maxRetentionTime: 24 * 60,
});


registerRoute(
    /\/api\/.*\/*/,
    new NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'POST'
);