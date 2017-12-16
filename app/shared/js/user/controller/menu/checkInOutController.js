angular.module('user').controller('checkInOutController',
    function ($scope, $rootScope, $state, checkInCheckOutRemoteServices) {
        //      $scope.checkInOut = function () {
        //          checkInCheckOutRemoteServices.checkInOut(function (data) {
        //         alert("The action is processing");
        //     }, function (data) {
        //         alert(data.error);
        //     });
        // },
                 checkInCheckOutRemoteServices.getListCheckInCheckOut(function (data) {
                $scope.checkInOutList = data;
                // console.log($scope.transactionList);
            }, function (data) {
                console.log(data);
            });
    });
