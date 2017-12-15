angular.module('common').controller('popupMessageController',
    function (customerRemoteService, $scope, $rootScope, $modalInstance, opts) {

        $scope.message = opts.message;
        $scope.additionalInfo = opts.additionalInfo;

    }
);
