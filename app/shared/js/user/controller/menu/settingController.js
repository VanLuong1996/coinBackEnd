angular.module('user').controller('settingController',
    function userListController($scope, $rootScope, $state) {

        $scope.user = angular.fromJson(sessionStorage.getItem('user'));

        $scope.updateUserInfo = function () {

        };



        $scope.changePassword = function () {

        }

    });
