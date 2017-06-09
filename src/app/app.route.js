(function() {
    'use strict';
    angular
        .module('app')
        .config(routesConfig);

    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'src/app/errorHtml/404.html'
            })
            .state('root', {
                url: '/',
                component: 'cdbDashboard'
            });
    }
})();
