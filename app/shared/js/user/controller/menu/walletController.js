angular.module('user').controller('walletController',
    function userListController($scope, $rootScope, $state, userModalService, userRemoteService) {

        var token = localStorage.getItem('token');

        userRemoteService.getUserCoin(function (data) {
            console.log(data);
        }, function (data) {

        });

        $scope.openDepositModal = function () {
            userModalService.openDepositModal({address: '14ub6hPc5ytfNEy679R78hdBwQYGARvQhx'});
        };


    });
