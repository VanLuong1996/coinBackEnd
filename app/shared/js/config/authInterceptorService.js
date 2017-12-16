'user strict';

angular.module('config', [])
    .factory('authInterceptorService', ['$q', '$timeout', '$injector', '$rootScope',
        function ($q, $timeout, $injector, $rootScope) {
            var $http, $state;
            var authInterceptorServiceFactory = {};

            // this trick must be done so that we don't receive
            // `Uncaught Error: [$injector:cdep] Circular dependency found`
            $timeout(function () {
                $http = $injector.get('$http');
                $state = $injector.get('$state');
            });

            var _request = function (config) {

                config.headers = config.headers || {};

                if (!angular.isUndefinedOrNull(sessionStorage.getItem('token'))) {
                    config.headers['Authorization'] = "Bearer " + sessionStorage.getItem('token');
                }

                return config;
            };

            var _responseError = function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $timeout(function () {
                        // $rootScope.logout();
                    });
                } else {
                    return $q.reject(rejection);
                }
            };

            var _response = function (response) {
                var defer = $q.defer();
                if (response.status == 200) {
                    defer.resolve(response);
                }
                else {
                    defer.reject(response);
                }
                return defer.promise;
            };

            authInterceptorServiceFactory.request = _request;
            authInterceptorServiceFactory.responseError = _responseError;
            authInterceptorServiceFactory.response = _response;

            return authInterceptorServiceFactory;
        }]);
