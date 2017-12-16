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
        },

        getUserCoin: function (id, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/user/infor/' + 1,
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
        },


        checkInOut: function (id, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/checkInOut/timekeeping' ,
                method: 'POST',
                data: {
                    userId : id
                }
            }).success(function (data, status, headers, config) {
                successCallback(data, status, headers, config);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        }
    };
});
