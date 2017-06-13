(function () {
    'use strict';

    angular.module('app.header')
        .component('cdbheader', {
            bindings: {
                changeLanguage: '&'
            },
            templateUrl: 'src/app/header/header.html'
        });
})();
