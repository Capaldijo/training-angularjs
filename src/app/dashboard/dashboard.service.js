(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .factory('dashboardService', dashboardService);

    /* @ngInject */
    function dashboardService($http, $log) {
        var api = 'http://localhost:8080/api/';

        $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('toto' + ':' + 'toto');

        var service = {
            listAll: listAll,
            getComputerById: getComputerById,
            getComputerByPage: getComputerByPage
        };

        return service;

        function listAll() {
            return $http.get(api + 'computers')
                .then(complete)
                .catch(failed);

            function complete(response) {
                return response.data;
            }

            function failed(error) {
                $log.error('XHR Failed for listAll.' + error.data);
            }
        }

        function getComputerById(id) {
            return $http.get(api + 'computers/' + id)
                .then(complete)
                .catch(failed);

            function complete(response) {
                return response.data.results;
            }

            function failed(error) {
                $log.error('XHR Failed for listAll.' + error.data);
            }
        }

        function getComputerByPage(page, line) {
            return $http.get(api + 'computers/sort?p=' + page + '&l=' + line)
                .then(complete)
                .catch(failed);

            function complete(response) {
                return response.data;
            }

            function failed(error) {
                $log.error('XHR Failed for listAll.' + error.data);
            }
        }
    }
})();
