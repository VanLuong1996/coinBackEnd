angular.module('common').factory('commonModalService', function (wrappedModalService) {
    return {
        popupMessage: function (opts, successCallback, failureCallback) {
            wrappedModalService.openModal({
                templateUrl: 'html/common/modal/popupMessage.html',
                controller: 'popupMessageController',
                resolve: {
                    opts: function () {
                        return opts;
                    }
                }
            }, successCallback, failureCallback);
        },

        popupConfirmMessage: function (opts, successCallback, failureCallback) {
            wrappedModalService.openModal({
                templateUrl: 'html/common/modal/popupConfirmMessage.html',
                controller: 'popupConfirmMessageController',
                resolve: {
                    opts: function () {
                        return opts;
                    }
                },
                showOverlayOnSuccess: opts.successMessage ? true : false,
                successMessage: opts.successMessage
            }, successCallback, failureCallback);
        }

    };
});

