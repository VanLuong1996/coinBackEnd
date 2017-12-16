angular.module('user').controller('servicesController',
    function ($scope, $rootScope, $state, $http, servicesRemoteService, userModalService) {
        $scope.serviceList = [];

        servicesRemoteService.getAllService(function (data) {
            $scope.serviceList = data.result;
            console.log($scope.serviceList);
        }, function (data) {
            console.log(data);
        });

        $scope.buy = function (service) {
            userModalService.openBuyService({service : service});
        }

    });
