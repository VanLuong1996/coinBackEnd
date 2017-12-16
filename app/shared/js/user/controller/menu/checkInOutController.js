angular.module('user').controller('checkInOutController',
    function userListController($scope, $rootScope, $state, userRemoteService) {

        var user = angular.fromJson(sessionStorage.getItem('user'));

        $scope.checkInOut = function () {
            userRemoteService.checkInOut(user.id, function (data) {

            }, function (data) {

            });

        }


    });
