(function () {
    'use strict';

    angular
        .module('app')
        .controller('PhotoDetailController', PhotoDetailController);

    PhotoDetailController.$inject = ['$scope', '$location', 'model'];

    function PhotoDetailController($scope, $location, model) {
        $scope.model = model;

        $scope.goToLocation = function () {
            $location.path('/photo');
        };
    }

})();
