/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (/* env */) {
    return {
        clientAllowedKeys: ['SUPABASE_PUBLIC_KEY', 'SUPABASE_PROJECT_URL'],
        fastbootAllowedKeys: [],
        failOnMissingKey: false,
        path: path.join(path.dirname(__dirname), '.env'),
    };
};
