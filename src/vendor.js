export default () => {
    // Styles
    require('angular-material/angular-material.css');

    // Vendors
    require('angular');
    require('angular-material/angular-material.min.js');
    require('angular-aria/angular-aria.min.js');
    require('angular-animate/angular-animate.min.js');
    require('angular-ui-router/release/angular-ui-router.js');
    require('angular-sanitize');
    require("angular-cookies");
    require('angular-local-storage');
    require("angular-translate");
    require("angular-messages");
    require("angular-animate");
    require('angular-cache');
    require("angular-translate-loader-url");
    require("angular-translate-loader-static-files");
    require("angular-translate-storage-cookie");
    require('angular-translate');

   /* require("../angular-md-table/dist/tt-ui-md-table.min");
    require("../angular-md-table/dist/tt-ui-md-table.min.css");*/

    global.moment = require('moment');
    // Globals
    global.$ = global.jQuery = require('jquery');

    require('babel-polyfill');
};
