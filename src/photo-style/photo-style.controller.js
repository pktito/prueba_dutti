(function () {
    'use strict';

    angular
        .module('app')
        .controller('PhotoStyleController', PhotoStyleController);

    PhotoStyleController.$inject = ['$scope', '$location', 'model'];

    function PhotoStyleController($scope, $location, model) {
        $scope.model = model.results;
        $scope.title = '#DessedinDutti';
        $scope.description = {
            first: "Welcome to MassimoDutti's community.",
            second: "Shop your favorite looks and share your pictures below to be featured on our site.",
            third: "Tag us on Instagram:",
            hashTag: "#DressedinDutti"
        };

        $scope.goToLocation = function () {
            $location.path('/ships');
        };

        $scope.goToDetail = function(url) {
            let shipId = url.split('/');
            shipId = shipId[shipId.length - 2];
            $location.path('/detail').search({shipId});
        }
    }

})();
