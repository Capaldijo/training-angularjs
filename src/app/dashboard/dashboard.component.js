(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($log, dashboardService) {
        // jshint validthis: true
        const vm = this;
        vm.hello = 'Hello Computer!';
        vm.$onInit = $onInit;

        vm.computers = [];

        list();
        count();

        function list() {
            return listAll().then(function() {
                $log.info('Activated ListAll View');
            });
        }

        function listAll() {
            return dashboardService.getComputerByPage(0, 10)
                .then(function(data) {
                    vm.computers = data;
                    return vm.computers;
                });
        }

        function count() {
            return countAll().then(function () {
                $log.info('Activated Count View');
            });
        }

        function countAll() {
            return dashboardService.listAll()
                .then(function (data) {
                    vm.count = data;
                    return vm.count;
                });
        }
        function $onInit() {
            $log.debug('DashboardController init');
        }
    }
})();
