require.config({
    baseURL: 'js',
    paths: {
        'jquery': 'lib/jquery',
        'jquery-ui': 'lib/jquery-ui',
        'touchpunch': 'lib/jquery-ui-touch-punch',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'touchpunch': {
            deps: ['jquery', 'jquery-ui']
        }
        /*
        'jquery': {
            deps: ['jquery-ui']
        }
        */
    }
});

require(['backbone', 'touchpunch'], function() {
    console.log(_);
    console.log(Backbone);
    console.log('main.js start');
    
    $('#stage').draggable();
});