angular.module('user').controller('checkInOutController',
    function userListController($scope, $rootScope, $state, userRemoteService) {


        $scope.checkInOut = function () {
            userRemoteService.checkInOut(function (data) {
                alert("The action is processing");
            }, function (data) {
                alert(data.error);
            });

        }


    });
