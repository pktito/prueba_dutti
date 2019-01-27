(function () {
    'use strict';

    angular
        .module('app')
        .factory('ShipsService', ShipsService);

    ShipsService.$inject = ['$http'];
    function ShipsService($http) {
        let service = {};

        service.GetShips = GetShips;

        return service;

        function GetShips() {
            const headers = { 'Authorization': 'none' };
            return $http.get('https://swapi.co/api/starships/', { headers })
        }
    }
})();