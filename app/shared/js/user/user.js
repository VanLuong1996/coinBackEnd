angular.module('user', ['ui.bootstrap', 'ui.utils', 'ngAnimate', 'ngCookies', 'angular-md5']);

angular.module('user').config(function ($stateProvider) {

    /* Add New Routes Above */
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'list@': {
                    templateUrl: 'html/user/login.html',
                    controller: 'loginController'
                }
            },
            authenticate: false
        })

        .state('dashboard', {
            url: '/dashboard',
            views: {
                'list@': {
                    templateUrl: 'html/user/dashboard.html',
                    controller: 'dashboardController'
                }
            },
            authenticate: true
        })

        .state('wallet', {
            url: '/wallet',
            views: {
                'list@': {
                    templateUrl: 'html/user/wallet.html',
                    controller: 'walletController'
                }
            },
            authenticate: true
        })

        .state('logs', {
            url: '/logs',
            views: {
                'list@': {
                    templateUrl: 'html/user/logs.html',
                    controller: 'logsController'
                }
            },
            authenticate: true
        })

        .state('services', {
            url: '/services',
            views: {
                'list@': {
                    templateUrl: 'html/user/services.html',
                    controller: 'servicesController'
                }
            },
            authenticate: true
        })

        .state('checkInOut', {
            url: '/checkInOut',
            views: {
                'list@': {
                    templateUrl: 'html/user/checkInOut.html',
                    controller: 'checkInOutController'
                }
            },
            authenticate: true
        })

        .state('voting', {
            url: '/voting',
            views: {
                'list@': {
                    templateUrl: 'html/user/voting.html',
                    controller: 'votingController'
                }
            },
            authenticate: true
        })

        .state('settings', {
            url: '/settings',
            views: {
                'list@': {
                    templateUrl: 'html/user/settings.html',
                    controller: 'settingController'
                }
            },
            authenticate: true
        })
});

