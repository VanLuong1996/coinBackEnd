angular.module('user').controller('userDepositController',
    function userListController($scope, $rootScope, $state, opts, ngClipboard) {

        $scope.address = opts.address;

        $scope.copy = function () {
            ngClipboard.toClipboard($scope.address);
        }

    });
