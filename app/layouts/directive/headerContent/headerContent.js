/* global ion */

angular.module('layouts').directive('headerContent', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
        },
        templateUrl: 'layouts/directive/headerContent/headerContent.html',
        link: function (scope, element, attrs, fn) {
            // Optimalisation: Store the references outside the event handler:
            var $window = $(window),
                    sidebarMinimize = $('.navbar-minimize a'),
                    settingMinimize = $('.navbar-setting a'),
                    sidebarMobileLeftMinimize = $('.navbar-minimize-mobile.left'),
                    sidebarMobileRightMinimize = $('.navbar-minimize-mobile.right');
            function checkWidth() {
                var windowsize = $window.width();
                // Check if view screen on greater then 720px and smaller then 1024px
                if (windowsize > 768 && windowsize <= 1024) {
                    $('body').addClass('page-sidebar-minimize-auto');
                } else if (windowsize <= 768) {
                    $('body').removeClass('page-sidebar-minimize');
                    $('body').removeClass('page-sidebar-minimize-auto');
                } else {
                    $('body').removeClass('page-sidebar-minimize-auto');
                    //$('body').addClass('page-sidebar-minimize');

                }
            }
            // Execute on load
            checkWidth();
            // Bind event listener
            $(window).resize(checkWidth);

            // When the minimize trigger is clicked
            sidebarMinimize.on('click', function () {

                // Add effect sound button click
                if ($('.page-sound').length) {
                    ion.sound.play("button_click");
                }

                // Check class sidebar right show
                if ($('.page-sidebar-right-show').length) {
                    $('body').removeClass('page-sidebar-right-show');
                }

                // Check class sidebar minimize auto
                if ($('.page-sidebar-minimize-auto').length) {
                    $('body').removeClass('page-sidebar-minimize-auto');
                } else {
                    // Toggle the class to the body
                    $('body').toggleClass('page-sidebar-minimize');
                }

                // Check the current cookie value
                // If the cookie is empty or set to not active, then add page_sidebar_minimize
                if ($.cookie('page_sidebar_minimize') === "undefined" || $.cookie('page_sidebar_minimize') === "not_active") {

                    // Set cookie value to active
                    $.cookie('page_sidebar_minimize', 'active', {expires: 1});
                }

                // If the cookie was already set to active then remove it
                else {

                    // Remove cookie with name page_sidebar_minimize
                    $.removeCookie('page_sidebar_minimize');

                    // Create cookie with value to not_active
                    $.cookie('page_sidebar_minimize', 'not_active', {expires: 1});

                }

            });

            settingMinimize.on('click', function () {
                // Add effect sound button click
                if ($('.page-sound').length) {
                    ion.sound.play("button_click");
                }
                if ($('.page-sidebar-minimize.page-sidebar-right-show').length) {
                    $('body').toggleClass('page-sidebar-minimize page-sidebar-right-show');
                } else if ($('.page-sidebar-minimize').length) {
                    $('body').toggleClass('page-sidebar-right-show');
                } else {
                    $('body').toggleClass('page-sidebar-minimize page-sidebar-right-show');
                }
            });

            // This action available on mobile view
            sidebarMobileLeftMinimize.on('click', function () {
                // Add effect sound button click
                if ($('.page-sound').length) {
                    ion.sound.play("button_click");
                }
                if ($('body.page-sidebar-right-show').length) {
                    $('body').removeClass('page-sidebar-right-show');
                    $('body').removeClass('page-sidebar-minimize');
                }
                $('body').toggleClass('page-sidebar-left-show');
            });
            sidebarMobileRightMinimize.on('click', function () {
                // Add effect sound button click
                if ($('.page-sound').length) {
                    ion.sound.play("button_click");
                }
                if ($('body.page-sidebar-left-show').length) {
                    $('body').removeClass('page-sidebar-left-show');
                    $('body').removeClass('page-sidebar-minimize');
                }
                $('body').toggleClass('page-sidebar-right-show');
            });

            //sidebarMinimize.trigger("click" );

        }
    };
});
