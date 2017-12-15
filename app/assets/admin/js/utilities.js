(function () {
    'use strict';

    angular
        .module('gCoinApp')
        .factory('Utilities', Utilities);

    Utilities.$inject = [
        '$window',
        '$http',
        '$q',
        '$filter',
        '$rootScope',

    ];

    /** @ngInject */
    function Utilities($window, $http, $q,$filter,$rootScope) {
        // Private variables
        var service = {
            resolve: resolve,
            resolveAlt: resolveAlt,
            indexOf: indexOf,
            exists: exists,
            guidGenerator: guidGenerator,
            toggleInArray: toggleInArray,
            findById: findById,


        };

        return service;

        /**
         * Resolve a request
         *
         * @param url
         * @param method
         * @param successCallback
         * @param errorCallback
         * @returns {*}
         */
        function resolve(url, method, successCallback, errorCallback) {

            if (angular.isUndefined(url)) {
                return $q.reject('Undefined url in an $http call.');
            }

            var _method = method || 'GET';
            var baseUrl = "";

            var deferred = $q.defer();

            $http({
                method: _method,
                url: url
            }).then(function (response) {
                deferred.resolve(response.data);

                if (angular.isDefined(successCallback) && angular.isFunction(successCallback)) {
                    successCallback();
                }

            }, function (response) {
                deferred.reject(response.statusText);

                if (angular.isDefined(errorCallback) && angular.isFunction(errorCallback)) {
                    errorCallback();
                }

            });

            return deferred.promise;
        }

        /**
         * Resolve a request
         *
         * @param url
         * @param method
         * @param params
         * @param data
         * @param headers
         * @param successCallback
         * @param errorCallback
         * @returns {*}
         */
        function resolveAlt(url, method, params, data, headers, successCallback, errorCallback) {

            if (angular.isUndefined(url)) {
                return $q.reject('Undefined url in an $http call.');
            }

            var _method = method || 'GET';
            var _params = params || null;
            var _data = data || {};
            var _headers = headers || {};

            var deferred = $q.defer();

            $http({
                method: _method,
                url: url,
                params: _params,
                data: _data,
                headers: _headers ,

                cache: false
            }).then(function (response) {
                deferred.resolve(response.data);

                if (angular.isDefined(successCallback) && angular.isFunction(successCallback)) {
                    successCallback();
                }

            }, function (response) {
                deferred.reject(response.statusText);

                if (angular.isDefined(errorCallback) && angular.isFunction(errorCallback)) {
                    errorCallback();
                }

            });

            return deferred.promise;
        }



        /**
         * Find index of an item in an array. Item is supposed to have a unique field named 'id'
         *
         * @param item
         * @param array
         */
        function indexOf(item, array) {
            if (typeof item == 'undefined' || typeof array == 'undefined' || array.length <= 0) {
                return -1;
            }

            if (typeof item.id == 'undefined') {
                return -1;
            }

            var length = array.length;
            var index = -1;
            for (var i = 0; i < length; i++) {
                if (item.id === array[i].id) {
                    index = i;
                    break;
                }
            }

            return index;
        }

        /**
         * Check if item exists in a list
         *
         * @param item
         * @param list
         * @returns {boolean}
         */
        function exists(item, list) {
            return list.indexOf(item) > -1;
        }


            var versionSearchString = '';

            function searchString(data) {
                for (var i = 0; i < data.length; i++) {
                    var dataString = data[i].string;
                    var dataProp = data[i].prop;

                    versionSearchString = data[i].versionSearch || data[i].identity;

                    if (dataString) {
                        if (dataString.indexOf(data[i].subString) !== -1) {
                            return data[i].identity;

                        }
                    }
                    else if (dataProp) {
                        return data[i].identity;
                    }
                }
            };

            function searchVersion(dataString) {
                var index = dataString.indexOf(versionSearchString);

                if (index === -1) {
                    return;
                }

                return parseInt(dataString.substring(index + versionSearchString.length + 1));
            };

            var browser = searchString(browserData) || 'unknown-browser';
            var version = searchVersion($window.navigator.userAgent) || searchVersion($window.navigator.appVersion) || 'unknown-version';
            var os = searchString(osData) || 'unknown-os';

            // Prepare and store the object
            browser = browser.toLowerCase();
            version = browser + '-' + version;
            os = os.toLowerCase();

            var browserInfo = {
                browser: browser,
                version: version,
                os: os
            };

            return browserInfo;
        };

        /**
         * Generates a globally unique id
         *
         * @returns {*}
         */
        function guidGenerator() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
            };
            return (S4() + S4() + S4() + S4() + S4() + S4());
        };

        /**
         * Toggle in array (push or splice)
         *
         * @param item
         * @param array
         */
        function toggleInArray(item, array) {
            if (array.indexOf(item) === -1) {
                array.push(item);
            }
            else {
                array.splice(array.indexOf(item), 1);
            }
        };

        /**
         * Find an object with ID objId in an array of objects
         * @param array
         * @param objId
         */
        function findById(array, objId) {
            var obj = {};

            if (array === null || array.length <= 0) {
                return obj;
            }

            var len = array.length;
            var found = false;
            for (var i = 0; i < len && !found; i ++) {
                var _obj = array[i];
                if (_obj.id == objId) {
                    obj = _obj;
                    found = true;
                }
            }

            return obj;
        }




}());
