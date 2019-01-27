(function () {
    'use strict';

    angular.module('app')
        .component('customMdList', {
            templateUrl: 'app-components/md-list/md-list.html',
            bindings: {
                model: '=',
                title: '=',
                callback: '&'
            },
            controller: function CustomMdListController () {
                var $ctrl = this;

                $ctrl._callback = function (data) {
                    $ctrl.callback(data);
                };
            },
        });
})();