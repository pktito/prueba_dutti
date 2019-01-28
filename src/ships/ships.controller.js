(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);

    ShipsController.$inject = ['$scope', '$location', 'ShipsService'];

    function ShipsController($scope, $location, ShipsService) {
        $scope.title = '#DessedinDutti';
        $scope.description = {
            first: "Welcome to MassimoDutti's community.",
            second: "Shop your favorite looks and share your pictures below to be featured on our site.",
            third: "Tag us on Instagram:",
            hashTag: "#DressedinDutti"
        };

        $scope.shipsValues = [];
        $scope.actualShips = [];

        $scope.pagination = {limit: 5, total: 0, page: 0};
        $scope.current = 0;

        initController();

        function initController() {
            ShipsService.GetShips().then(({data}) => onSuccess(data)).catch((error) => onError(error));
        }

        function paginationChange() {
            $scope.actualShips = [
                ...$scope.actualShips,
                ...$scope.shipsValues.slice($scope.actualShips.length, $scope.actualShips.length + $scope.pagination.limit)
            ];

            $scope.pagination.page = ($scope.pagination.page + 1) <= ($scope.pagination.total / $scope.pagination.limit)
                ? $scope.pagination.page + 1
                : $scope.pagination.page;

        }

        function onSuccess({results}) {
            console.log('onSuccess', results);
            $scope.shipsValues = results;
            $scope.pagination.total = results.length;

            paginationChange();
        }

        function onError(error) {
            console.log('onError', error);
        }

        $scope.getMore = function () {
            paginationChange();
        };

        $scope.goToLocation = function (){
            $location.path('/photo');
        };
    }

})();
