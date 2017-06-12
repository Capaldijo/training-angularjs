(function() {
    'use strict';
    angular
        .module('app.service')
        .factory('computerMapping', computerMapping);

    /* @ngInject */
    function computerMapping($log) {

        var computer = {
            toComputersDTO: toComputersDTO
        };

        return computer;

        function toComputersDTO($computers) {

            for (var i = 0; i < $computers.length; i ++) {
                if ($computers[i].introduced !== '') {
                    $computers[i].introduced = new Date($computers[i].introduced).toLocaleDateString();
                }

                if ($computers[i].discontinued !== '') {
                    $computers[i].discontinued = new Date($computers[i].discontinued).toLocaleDateString();
                }
            }

            return $computers;
        }
    }
})();
