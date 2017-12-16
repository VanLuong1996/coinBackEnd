angular.module('gCoinApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'ngImgCrop',
    'toastr', 'lrInfiniteScroll', 'ngFileUpload', 'gettext', 'ui.calendar', 'tmh.dynamicLocale',
    'fcsa-number', 'ui.select','ngSanitize','angular-md5',
    'ngClipboard',
    'layouts', 'common', 'config', 'remote', 'user', 'bw.paging']);

angular.module('gCoinApp').config(function ($stateProvider, $urlRouterProvider, $httpProvider, toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 1,
        newestOnTop: true,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        preventOpenDuplicates: true,
        target: 'body',
        timeOut: 1500
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/login');

    //$httpProvider.defaults.headers.get = {'Content-Type': 'text/plain'};
    //$httpProvider.defaults.headers.common = {'Content-Type': 'application/json'};
    //$httpProvider.defaults.headers.post = {'Content-Type': 'application/json'};
    //$httpProvider.defaults.headers.put = {'Content-Type': 'application/json'};
    //$httpProvider.defaults.headers.patch = {'Content-Type': 'application/json'};

});

angular.module('gCoinApp').run(function ($rootScope, $state, $timeout, $window,
                                       gettextCatalog, tmhDynamicLocale,
                                       config) {

    $rootScope.$state = $state;
    $rootScope.modals = {};
    $rootScope.loggedInUser = angular.fromJson(sessionStorage.getItem("user"));

    gettextCatalog.debug = false;
    $rootScope.language = 'en';
    gettextCatalog.setCurrentLanguage($rootScope.language);
    tmhDynamicLocale.set($rootScope.language);


    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, authService) {
        $rootScope.loggedInUser = angular.fromJson(sessionStorage.getItem("user"));
        tmhDynamicLocale.set($rootScope.language);

        if ((typeof (toState.authenticate) === "undefined" || toState.authenticate) && angular.isUndefinedOrNull(sessionStorage.getItem('token'))) {
            $state.transitionTo("login");
            event.preventDefault();
        }
        else {
            if (sessionStorage.getItem('token') == null) {
                angular.forEach(window.localStorage.getItem('sessionStorage'), function (value, key) {
                    sessionStorage.setItem(key, value);
                })
            } else {
            }
        }
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    });

    $rootScope.logout = function () {
        $('#loading').fadeIn();
        sessionStorage.clear();

        if (localStorage) {
            localStorage.clear();
        }

        $timeout(function () {
            $state.transitionTo('login', {reload: true});
            $('#loading').fadeOut();
        }, 500);

    };

});
