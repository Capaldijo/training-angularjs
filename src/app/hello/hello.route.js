(function() {
    'use strict';
    angular
        .module('app.hello')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('hello', {
                url: '/hello',
                component: 'cdbhello'
            });
    }
})();
