(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);

    ShipsController.$inject = ['$scope'];
    function ShipsController($scope) {
        $scope.title = 'Section Ships';
    }

})();
