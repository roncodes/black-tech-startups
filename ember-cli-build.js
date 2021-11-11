'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        storeConfigInMeta: false,

        'ember-fetch': {
            preferNative: true,
        },

        postcssOptions: {
            compile: {
                plugins: [
                    {
                        module: require('postcss-import'),
                        options: {
                            path: ['node_modules'],
                        },
                    },
                    tailwind('./app/tailwind/config.js'),
                ],
            },
        },

        fontawesome: {
            defaultPrefix: 'fas',
        },
    });

    return app.toTree();
};
