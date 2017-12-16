angular.module('user').controller('buyServiceController',
    function userListController($scope, $rootScope, $state, opts, $uibModalInstance, servicesRemoteService) {

        $scope.service = opts.service;
        $scope.buy = {
            amount: 1,
            total: $scope.service.price
        };

        $scope.buyService = function () {
            var opts = {
                serviceId: $scope.service.id,
                amount: $scope.buy.amount
            };
            // console.log(opts);
            servicesRemoteService.buyService(opts, function (data) {
                $uibModalInstance.close()
            }, function (data) {
                $uibModalInstance.dismiss()
            })
        };

        $scope.minusAmount = function () {
            if ($scope.buy.amount < 2) return;
            $scope.buy.amount--;
        };

        $scope.plusAmount = function () {
            $scope.buy.amount++;
        };


        //OK : $uibModalInstance.close()
        //Cancel : $modalInstance.dismiss()
    });
