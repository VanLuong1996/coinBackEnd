angular.module('remote').factory('userRemoteService', function ($http, config) {

    return {
        login: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/auth/login',
                method: 'POST',
                data: {
                    username: opts.username,
                    password: opts.password
                }
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        }
    };
});
