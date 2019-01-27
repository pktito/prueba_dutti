(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController);

    ShipsController.$inject = ['$scope', 'ShipsService'];
    function ShipsController($scope, ShipsService) {
        $scope.title = 'Section Ships';
        $scope.shipsValues = null;

        initController();

        function initController() {
            ShipsService.GetShips().then(({data}) => onSuccess(data)).catch((error) => onError(error));
        }
    
        function onSuccess({results}) {
            console.log('onSuccess', results);
            $scope.shipsValues = results;
        }

        function onError(error) {
            console.log('onError', error);
        }
    }

})();
