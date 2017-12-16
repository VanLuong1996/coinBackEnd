angular.module('user').controller('servicesController',
    function ($scope, $rootScope, $state, $http, servicesRemoteService) {
        $scope.serviceList = [];

        servicesRemoteService.getAllService(function (data) {
            $scope.serviceList = data.result;
            console.log($scope.serviceList);
        }, function (data) {
            console.log(data);
        });

    });
