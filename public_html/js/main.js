require.config({
    baseURL: 'js',
    paths: {
        'jquery': 'lib/jquery',
        'jquery-ui': 'lib/jquery-ui',
        'touchpunch': 'lib/jquery-ui-touch-punch',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'store': 'lib/store'
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
        },
        'store': {
            exports: 'Store'
        }
        
    }
});

require(['backbone', 'jquery', 'jquery-ui', 'touchpunch', 'store'], function(Backbone, $, JQueryUI, TouchPunch, Store) {
    console.log(_);
    console.log(Backbone);
    console.log('main.js start');
    console.log('Store = ' + Store.get('gameData'));
    
    if (Store.get('gameData')) {
        var gameData = Store.get('gameData');
        $('#stage').css({left:gameData.position.left, top:gameData.position.top});
    }
    
    $('#stage').draggable({
        stop: () => {
            var gameData = {
                position: $('#stage').position()
            };
            Store.set('gameData', gameData);
        }
    });
});