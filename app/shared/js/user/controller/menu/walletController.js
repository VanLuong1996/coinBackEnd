angular.module('user').controller('walletController',
    function userListController($scope, $rootScope, $state, userModalService, userRemoteService) {

        $scope.transferObject = {
            address : ''
        };

        $scope.user = {
            numberCoin: 0,
            priceCoin: 0
        };


        userRemoteService.getUserCoin(function (data) {
            $scope.user = data;
            console.log($scope.user);
        }, function (data) {

        });

        $scope.openDepositModal = function () {
            userModalService.openDepositModal({address: $scope.user.address});
        };

        $scope.transferGEMC = function () {
            if ($scope.transferObject.amount > $scope.user.numberCoin) {
                alert("You don't have enough coin to transfer");
                return;
            }

            userRemoteService.transferCoin({
                addressReceive: $scope.transferObject.address,
                totalCoin : $scope.transferObject.amount
            }, function (data) {

            }, function (data) {

            })
        }


    });
