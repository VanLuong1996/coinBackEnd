/* global ion */

angular.module('layouts').directive('sidebarLeft', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            user : "=user"
        },
        templateUrl: 'layouts/directive/sidebarLeft/sidebarLeft.html',
        link: function (scope, element, attrs, fn) {
            /* Create trigger click for open menu sidebar */
            element.find('a').on('click', function () {

                var parentElementMenu = $(this).parent('li'),
                        parentElementSubmenu = $(this).parent('.submenu'),
                        nextElement = $(this).nextAll(),
                        arrowIcon = $(this).find('.arrow'),
                        plusIcon = $(this).find('.plus');

                /* Add effect sound button click */
                if ($('.page-sound').length) {
                    ion.sound.play("button_click_on");
                }

                parentElementMenu.siblings().removeClass('active');

                if (parentElementSubmenu.parent('ul').find('ul:visible')) {
                    parentElementSubmenu.parent('ul').find('ul:visible').slideUp('fast');
                    parentElementSubmenu.parent('ul').find('.open').removeClass('open');
                    parentElementSubmenu.siblings().children('a').find('.selected').remove();
                    parentElementMenu.siblings().children('a').find('.selected').remove();
                }

                if (nextElement.is('ul:visible')) {
                    arrowIcon.removeClass('open');
                    plusIcon.removeClass('open');
                    nextElement.slideUp('fast');
                }

                if (!nextElement.is('ul:visible')) {
                    nextElement.slideDown('fast');
                    parentElementMenu.children('a').append('<span class="selected"></span>'); // add selected mark
                    parentElementSubmenu.addClass('active');
                    parentElementSubmenu.children('a').append('<span class="selected"></span>');
                    arrowIcon.addClass('open');
                    plusIcon.addClass('open');
                }

            });

        }
    };
});
