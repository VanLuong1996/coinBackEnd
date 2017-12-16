angular.module('user').controller('loginController',
    function ($scope, $rootScope, $state, $http, $timeout,
              userRemoteService) {

        $scope.user = undefined;


        $scope.login = function () {
            sessionStorage.clear();
            $('#loading').fadeIn();

            $scope.error = false;


            if ($scope.loginForm.$valid) {

                var opts = {
                    username: $scope.username,
                    password: $scope.password
                };

                userRemoteService.login(opts, function (data) {

                    $('#loading').fadeOut();
                    sessionStorage.setItem("token", data.result.access_token);
                    sessionStorage.setItem("user", JSON.stringify(data.result.userLoginResponse.userDTO));

                    if ($scope.remember) {
                        localStorage.setItem("token", data.result.access_token);
                        localStorage.setItem("user", JSON.stringify(data.result.userLoginResponse.userDTO));
                    }

                    $('#loading').fadeOut();

                    $timeout(function () {
                        $state.transitionTo("wallet");
                    }, 100);

                }, function (data) {
                    console.log(data);
                    $('#loading').fadeOut();

                });
            }


        };

    });
