angular.module('user').controller('votingController',
    function userListController($scope, $rootScope, $state, voteRemoteService) {

        voteRemoteService.getBestStaffs(function (data) {
            $scope.staffList = data.result;
        }, function (data) {

        });

        $scope.vote = function (staff) {
            voteRemoteService.voteToStaff(staff.id, function (data) {

            }, function (data) {

            })
        };


    });
