angular.module('user').controller('votingController',
    function userListController($scope, $rootScope, $state, voteRemoteService) {

        voteRemoteService.getBestStaffs(function (data) {

        }, function (data) {

        });

        $scope.vote = function () {

        };


    });
