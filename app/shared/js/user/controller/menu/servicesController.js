angular.module('user').controller('servicesController',
    function ($scope, $rootScope, $state, $http, $timeout, servicesRemoteService, userModalService) {
        $scope.serviceList = [];

        servicesRemoteService.getAllService(function (data) {
            $scope.serviceList = data.result;
            console.log($scope.serviceList);
        }, function (data) {
            console.log(data);
        });

        servicesRemoteService.getListTransaction(function (data) {
            $scope.serviceList = data.result;
            console.log($scope.serviceList);
        }, function (data) {
            console.log(data);
        });

        $scope.buy = function (service) {
            userModalService.openBuyService({service : service}, function () {
                $timeout(function () {
                    alert("Successful");
                }, 500);
            });
        }

    });
