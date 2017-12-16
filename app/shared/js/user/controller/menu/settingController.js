angular.module('user').controller('settingController',
    function userListController($scope, $rootScope, $state, userRemoteService) {

        $scope.user = angular.fromJson(sessionStorage.getItem('user'));

        $scope.userPassword = {};

        $scope.updateUserInfo = function () {

        };


        $scope.changePassword = function () {

            if ($scope.userPassword.newPassword != $scope.userPassword.confirmNewPassword) {
                alert("Password doesn't match");
                return;
            }

            var opts = {
                newPassword: $scope.userPassword.newPassword,
                oldPassword: $scope.userPassword.currentPassword
            };

            userRemoteService.changePassword(opts, function (data) {

            }, function (data) {
                alert(data.message);
            })
        }

    });
