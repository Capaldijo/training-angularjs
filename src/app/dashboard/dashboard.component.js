(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($log, dashboardService, $translate) {
        // jshint validthis: true
        const vm = this;

        vm.line = 10;
        vm.page = 0;
        vm.orderBy = 0;
        vm.search = '';
        vm.asc = false;
        vm.computers = [];
        vm.count = 0;

        vm.$onInit = $onInit;
        vm.changePage = changePage;
        vm.nbLine = changeNbLine;
        vm.sortBy = sortBy;
        vm.searchBy = searchBy;
        vm.changeLanguage = changeLanguage;

        list();
        count();

        function list() {
            return listByPage().then(function() {
            });
        }

        function count() {
            return countAll().then(function () {
            });
        }

        function listByPage() {
            return dashboardService.getComputerByPage(vm.page, vm.line, vm.search, vm.orderBy, vm.asc)
                .then(function(data) {
                    vm.computers = data;
                    return vm.computers;
                });
        }

        function countAll(search) {
            return dashboardService.listSearch(search)
                .then(function (data) {
                    vm.count = data;
                    return vm.count;
                });
        }

        function $onInit() {
            $log.debug('DashboardController init');
        }

        function changePage(numPage) {
            vm.page = numPage - 1;
            listByPage();
            countAll();
        }

        function changeNbLine(nbLine) {
            vm.line = nbLine;
            listByPage();
            countAll();
        }

        function sortBy(column) {
            if (column === vm.orderBy) { // if click on same column => changing order
                vm.asc = !vm.asc;
            } else { // else changing column so order true by default.
                vm.asc = true;
            }
            vm.orderBy = column;
            listByPage();
            countAll();
        }

        function searchBy(search) {
            vm.search = search;
            listByPage();
            countAll(search);
        }

        function changeLanguage(langKey) {
            $translate.use(langKey);
        }
    }
})();
