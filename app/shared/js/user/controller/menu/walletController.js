angular.module('user').controller('walletController',
    function userListController($scope, $rootScope, $state, userModalService, userRemoteService) {

        var token = localStorage.getItem('token');

        $scope.user = {
            numberCoin : 0,
            priceCoin : 0
        };

        userRemoteService.getUserCoin(function (data) {
            $scope.user = data;
            console.log($scope.user);
        }, function (data) {

        });

        $scope.openDepositModal = function () {
            userModalService.openDepositModal({address: $scope.user.address});
        };


    });
