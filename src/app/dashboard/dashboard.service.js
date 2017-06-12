(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .factory('dashboardService', dashboardService);

    /* @ngInject */
    function dashboardService($http, $log, computerMapping) {
        var api = env.api.URL;

        $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('toto' + ':' + 'toto');

        var service = {
            listSearch: listSearch,
            getComputerById: getComputerById,
            getComputerByPage: getComputerByPage
        };

        return service;

        function listSearch(search) {

            return $http.get(api + '/computers/count?search=' + (search ? search : ''))
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
            return $http.get(api + '/computers/' + id)
                .then(complete)
                .catch(failed);

            function complete(response) {
                return response.data;
            }

            function failed(error) {
                $log.error('XHR Failed for listAll.' + error.data);
            }
        }

        function getComputerByPage(page, line, search, order, asc) {
            return $http.get(api + '/computers/sort?p=' + page + '&l=' + line +
                '&q=' + (search ? search : '') + '&s=' + order + '&asc=' + asc)
                .then(complete)
                .catch(failed);

            function complete(response) {
                return computerMapping.toComputersDTO(response.data);
            }

            function failed(error) {
                $log.error('XHR Failed for getByPage.' + error.data);
            }
        }
    }
})();
