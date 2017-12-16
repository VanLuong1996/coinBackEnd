angular.module('remote').factory('servicesRemoteService', function ($http, config) {

    return {
        getAllService: function (successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/services/list',
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
