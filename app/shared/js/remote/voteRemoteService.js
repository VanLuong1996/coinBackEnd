angular.module('remote').factory('voteRemoteService', function ($http, config) {

    return {
        getBestStaffs: function (successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/votes/bestStaffs',
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
