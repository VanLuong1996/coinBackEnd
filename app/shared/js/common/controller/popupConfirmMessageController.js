angular.module('common').controller('popupConfirmMessageController',
    function ($scope, $rootScope, $uibModalInstance, opts) {

        $scope.message = opts.message;

        $scope.confirm = function(){
            $uibModalInstance.close();
        }
    }
);
