angular.module('gCoinApp').config(function ($httpProvider, $stateProvider, $compileProvider,
                                          tmhDynamicLocaleProvider) {

    $httpProvider.defaults.headers.get = {'Content-Type': 'text/plain'};
    $httpProvider.defaults.headers.common = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.patch = {'Content-Type': 'application/json'};

    $httpProvider.interceptors.push('authInterceptorService');

    tmhDynamicLocaleProvider.localeLocationPattern("../shared/ext/angular-i18n/angular-locale_{{locale}}.js");

    //$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);

});

angular.module('gCoinApp').constant('config', {
    appName: 'GEM-COIN',
    appVersion: 0.1,
    /*=====================Server URL===================================*/

    baseURL: 'http://localhost:8080/gem-coin',

    apiVersion : 'v1.0'

});
