angular.module('common').factory('wrappedModalService', function ($http, $uibModal, $rootScope, toastr) {

    return {
        openModal: function (opts, callbackClose, callbackDismiss) {
            var showOverlayOnSuccess = opts['showOverlayOnSuccess'];
            var successMessage = opts['successMessage'] || 'Thành công';
            //showLoading();
            var modal = $uibModal.open({
                templateUrl: opts.templateUrl,
                controller: opts.controller,
                size: opts.size,
                resolve: opts.resolve,
                windowClass: opts.windowClass,
                backdrop: 'static',
                keyboard: false
            });
            // (1) $modalInstance.close(modalResult); (2) dismiss(modalResult)
            // (1) Expect success case, need to do something like refresh data, etc...
            // (2) Expect dismiss/cancel case, nothing need to do | alternative use could be check for normal case vs unsuccessful case
            modal.result.then(callbackClose, callbackDismiss);
            modal.result.then(function () {
                if (showOverlayOnSuccess) {
                    toastr.success(successMessage);
                }
            }, function () {
            });
        },

        showOverLaySuccessMessage: function (successMessage) {
            var message = successMessage || 'Success';
            toastr.success(message);
        },

        isNormalCancel: function (data) {
            if (data) {
                return !!(data === 'cancel' || data === 'backdrop click' || data === 'escape key press');
            }
            return true;
        }
    };
});
