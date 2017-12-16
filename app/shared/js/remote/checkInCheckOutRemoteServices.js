angular.module('remote').factory('checkInCheckOutRemoteServices', function ($http, config) {

    return {
        getListCheckInCheckOut: function (successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/auth/getHistory',
                method: 'GET',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        }
    };
});
