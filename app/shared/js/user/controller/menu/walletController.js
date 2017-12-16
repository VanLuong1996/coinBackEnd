angular.module('user').controller('walletController',
    function userListController($scope, $rootScope, $state, userModalService) {

        var token = localStorage.getItem('token');

        $scope.openDepositModal = function () {
            userModalService.openDepositModal({address: '14ub6hPc5ytfNEy679R78hdBwQYGARvQhx'});
        };


    });
