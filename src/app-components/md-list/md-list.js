(function () {
    'use strict';

    angular.module('app')
        .component('customMdList', {
            templateUrl: 'app-components/md-list/md-list.html',
            bindings: {
                model: '=model',
                title: '=title  ',
            },
            controller: function CustomMdListController () {
                this.title = '';
            },
        });
})();