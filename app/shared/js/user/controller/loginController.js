angular.module('user').controller('loginController',
    function ($scope, $rootScope, $state, $http, userRemoteService) {

        $scope.user = undefined;


        $scope.login = function () {
            sessionStorage.clear();
            // $('#loading').fadeIn();

            $scope.error = false;


            if ($scope.loginForm.$valid) {

                var opts = {
                    username: $scope.username,
                    password: $scope.password
                };
                userRemoteService.login(opts, function (data) {
                    sessionStorage.setItem("token", data.result.access_token);
                    sessionStorage.setItem("user", JSON.stringify(data.result.userLoginResponse.userDTO));
                    $state.transitionTo("wallet");
                }, function (data, status, headers, config) {
                    console.log(data);
                    $('#loading').fadeOut();

                });
            }


        };

    });
