angular.module('common').controller('popupMessageController',
    function (customerRemoteService, $scope, $rootScope, $uibModalInstance, opts) {

        $scope.message = opts.message;
        $scope.additionalInfo = opts.additionalInfo;

    }
);
