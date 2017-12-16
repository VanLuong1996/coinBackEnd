angular.module('user').controller('walletController',
    function userListController($scope, $rootScope, $state, userModalService, userRemoteService) {

        function reload() {
            $scope.transferObject = {
                address : '',
                password: ''
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
        }

        reload();

        $scope.openDepositModal = function () {
            userModalService.openDepositModal({address: $scope.user.address});
        };

        $scope.transferGEMC = function () {
            if ($scope.transferObject.password == null || $scope.transferObject.password.length == 0) {
                alert("You must to enter the password to transfer");
                return;
            }
            if ($scope.transferObject.amount > $scope.user.numberCoin) {
                alert("You don't have enough coin to transfer");
                return;
            }

            userRemoteService.transferCoin({
                addressReceive: $scope.transferObject.address,
                totalCoin : $scope.transferObject.amount
            }, function (data) {
                alert("Transfering successful!");
                reload();
            }, function (data) {

            })
        }


    });
