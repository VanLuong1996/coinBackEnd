angular.module('user').controller('settingController',
    function userListController($scope, $rootScope, $state, userRemoteService) {

        $scope.user = angular.fromJson(sessionStorage.getItem('user'));

        $scope.userPassword = {};

        $scope.updateUserInfo = function () {

            $('#loading').fadeIn();
            var opts = {
                name: $scope.user.name,
                phone: $scope.user.phone
            };

            userRemoteService.updateProfile(opts, function (data) {
                console.log(data);

                $('#loading').fadeOut();
                $rootScope.loggedInUser =  $scope.user;
                sessionStorage.setItem("user", JSON.stringify($scope.user));
            }, function (data) {
                alert(data.message);
                $('#loading').fadeOut();
            })
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
