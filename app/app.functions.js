angular.isUndefinedOrNull = function (variable) {
    if (angular.isUndefined(variable) || variable === null) {
        return true;
    }
    return false;
};

angular.module('gCoinApp').directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});
