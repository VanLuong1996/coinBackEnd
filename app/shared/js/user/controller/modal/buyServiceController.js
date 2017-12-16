angular.module('user').controller('buyServiceController',
    function userListController($scope, $rootScope, $state, opts, servicesRemoteService) {

        $scope.service = opts.service;
        $scope.buy = {
            amount : 1,
            total : $scope.service.price
        };

        $scope.buyService = function () {
            var opts = {
                id: $scope.service.id,
                amount: $scope.buy.amount
            };
            servicesRemoteService.buyService($scope.service);
        }



        //OK : $modalInstance.close()
        //OK : $modalInstance.dismiss()
    });
