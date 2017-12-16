angular.module('user').controller('votingController',
    function userListController($scope, $rootScope, $state, voteRemoteService, commonModalService) {

        $scope.user  = angular.fromJson(sessionStorage.getItem("user"));
        voteRemoteService.getBestStaffs(function (data) {
            $scope.staffList = data.result;
        }, function (data) {

        });

        $scope.vote = function (staff) {
            commonModalService.popupConfirmMessage({message : "Do you want to vote for this guy?"}, function () {
                voteRemoteService.voteToStaff(staff.id, function (data) {
                    alert(data.msg);
                }, function (data) {
                    alert(data.msg);
                })
            });
        };


    });
