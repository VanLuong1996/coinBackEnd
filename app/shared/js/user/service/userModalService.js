angular.module('user').factory('userModalService', function ($http, wrappedModalService) {
    return {
        openDepositModal: function (opts) {
            wrappedModalService.openModal({
                templateUrl: 'html/user/modal/deposit.html',
                controller: 'userDepositController',
                resolve: {
                    opts: function () {
                        return opts;
                    }
                }
            });
        },
        openBuyService: function (opts, successCallBack) {
            wrappedModalService.openModal({
                templateUrl: 'html/user/modal/buyService.html',
                controller: 'buyServiceController',
                resolve: {
                    opts: function () {
                        return opts;
                    }
                }
            }, successCallBack);
        },



    }
});
