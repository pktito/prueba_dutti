(function () {
    'use strict';

    angular
        .module('app')
        .factory('ShipsService', ShipsService);

    ShipsService.$inject = ['$http'];

    function ShipsService($http) {
        let service = {};

        service.GetShips = GetShips;
        service.GetShipsById = GetShipsById;

        return service;

        function GetShips() {
            const headers = {'Authorization': 'none'};
            return $http.get('https://swapi.co/api/starships/', {headers})
        }

        function GetShipsById(id) {
            const headers = {'Authorization': 'none'};
            return $http.get('https://swapi.co/api/starships/' + id, {headers})
        }
    }
})();