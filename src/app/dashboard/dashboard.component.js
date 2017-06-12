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
        vm.line = 10;
        vm.$onInit = $onInit;

        vm.computers = [];

        list();
        count();

        function list() {
            return listByPage(0).then(function() {
                $log.info('Activated ListAll View');
            });
        }

        function listByPage(numPage) {
            return dashboardService.getComputerByPage(numPage, vm.line)
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

        vm.getData = function(numPage) {
            vm.computers = [];
            dashboardService.getComputerByPage(numPage-1, vm.line).then(function (data) {
                vm.computers = data;
            });
            dashboardService.listAll().then(function (data) {
                vm.count = data;
            });
        };
    }
})();
