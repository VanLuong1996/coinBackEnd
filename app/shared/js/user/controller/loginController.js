angular.module('user').controller('loginController',
    function ($scope, $rootScope, $state, $http, gettext, md5, userServiceHttp,
              userRemoteService) {

        $scope.user = undefined;


        $scope.login = function () {
            sessionStorage.clear();
            // $('#loading').fadeIn();

            $scope.error = false;

            if ($scope.loginForm.username.$error.required) {
                $scope.error = true;
                return $scope.errorMessage = gettext("Username is required");
            }

            if ($scope.loginForm.username.$error.email) {
                $scope.error = true;
                return $scope.errorMessage = gettext("Invalid username");
            }

            if ($scope.loginForm.password.$error.required) {
                $scope.error = true;
                return $scope.errorMessage = gettext("Password is required");
            }

            if ($scope.loginForm.$valid) {
                // for dev
                $state.transitionTo("dashboard");
                // return;

                var opts = {
                    email: $scope.username,
                    password: md5.createHash($scope.password),
                };
                // userServiceHttp.login(opts, function (success) {
                //     switch (success.messageKey) {
                //         case "SUCCESS" : {
                //             $('#loading').fadeOut();
                //             if(success.result.userDTO.type == 'STAFF'){
                //                 $scope.error = false;
                //                 $rootScope.user = success.result.userDTO;
                //                 localStorage.setItem('token',success.result.token);
                //                 $state.transitionTo("users");
                //                 break;
                //             }
                //             $scope.error = true;
                //             $scope.errorMessage = gettext("Access denied");
                //             break;
                //         }
                //         case "USER_NOT_EXITS" : {
                //             $('#loading').fadeOut();
                //             $scope.error = true;
                //             $scope.errorMessage = gettext("Incorrect information");
                //             break;
                //         }
                //         case "INCORRECT_PASSWORD" : {
                //             $('#loading').fadeOut();
                //             $scope.error = true;
                //             $scope.errorMessage = gettext("Incorrect information");
                //             break;
                //         }
                //         case "EXCEPTION" : {
                //             $('#loading').fadeOut();
                //             $scope.error = true;
                //             $scope.errorMessage = gettext("Opp something went wrong !");
                //             break;
                //         }
                //         case "FAILED" : {
                //             $('#loading').fadeOut();
                //             $scope.error = true;
                //             $scope.errorMessage = gettext("Opp something went wrong !");
                //             break;
                //         }
                //     }
                //
                //
                // }, function (error) {
                //     return $scope.errorMessage = gettext("Login error");
                // })
                // userRemoteService.login(opts, function (data) {

                // }, function (data, status, headers, config) {
                //     $('#loading').fadeOut();
                //
                // });
            }


        };

    });
