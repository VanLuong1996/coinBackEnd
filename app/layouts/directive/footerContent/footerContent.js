/* global ion */

angular.module('layouts').directive('footerContent', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
        },
        templateUrl: 'layouts/directive/footerContent/footerContent.html',
        link: function (scope, element, attrs, fn) {


        }
    };
}).directive('backTop', function () {
    return{
        restrict: 'A',
        link: function (scope, element) {
            element.hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    element.addClass('show animated pulse');
                } else {
                    element.removeClass('show animated pulse');
                }
            });
            // scroll body to 0px on click
            element.click(function () {
                // Add sound
                ion.sound.play("cd_tray");
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }

    };
});
