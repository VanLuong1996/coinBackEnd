angular.module('common').controller('popupConfirmMessageController',
    function ($scope, $rootScope, $modalInstance, opts) {

        $scope.message = opts.message;

        $scope.confirm = function(){
            $modalInstance.close();
        }
    }
);
