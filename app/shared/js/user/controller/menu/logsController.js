angular.module('user').controller('logsController',
    function userListController($scope, $rootScope, $state, userRemoteService ) {

        var token = localStorage.getItem('token');


        $scope.totalItems = 1;
        $scope.currentPage = 0;

        userRemoteService.listTransaction(function (data) {
            $scope.coinLogs = data.result.coinTransactionLog;
            $scope.voteLogs = data.result.voteTransactionLog;
            console.log(data);
        }, function (data) {

        });

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    });
