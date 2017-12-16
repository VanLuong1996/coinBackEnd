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


        updateProfile: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/auth/update',
                method: 'PUT',
                data: opts
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                if (status == 202) {
                    successCallback(data);
                } else {
                    failureCallback(data, status, headers, config);
                }
            });
        },


        changePassword: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/auth/change-password',
                method: 'POST',
                data: {
                    newPassword: opts.newPassword,
                    oldPassword: opts.oldPassword
                }
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        getUserCoin: function (successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/user/getCoins',
                method: 'GET',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        transferCoin: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/user/transferCoin',
                method: 'POST',
                data: opts
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },


        checkInOut: function (successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/checkInOut',
                method: 'POST',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data, status, headers, config);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        }
    };
});
