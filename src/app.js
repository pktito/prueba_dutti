﻿(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .when('/ships', {
                controller: 'ShipsController',
                templateUrl: 'ships/ships.view.html',
            })

            .when('/photo', {
                controller: 'PhotoStyleController',
                templateUrl: 'photo-style/photo-style.view.html',
                resolve: {
                    model: function(ShipsService) {
                        return ShipsService.GetShips().then(({data}) => {return data}).catch((error) => {return error});
                    }
                }
            })

            .when('/detail', {
                controller: 'PhotoDetailController',
                templateUrl: 'photo-detail/photo-detail.view.html',
                resolve: {
                    model: function($location, ShipsService) {
                        const id = $location.search().shipId;
                        return ShipsService.GetShipsById(id).then(({data}) => {return data}).catch((error) => {return error});
                    }
                }
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register','/ships', '/photo', '/detail']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();