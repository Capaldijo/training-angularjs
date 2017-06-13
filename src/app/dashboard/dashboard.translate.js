(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .config(translate);

    /* @ngInject */
    function translate($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'src/resources/i18n/',
            suffix: '.json'
        });

        $translateProvider.determinePreferredLanguage();
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    }
})();