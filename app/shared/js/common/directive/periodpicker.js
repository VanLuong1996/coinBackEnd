angular.module('common').directive('hisDatetimepicker', function ($rootScope, $timeout, $parse) {
    var formatDay = 'DD MMM YYYY';
    var formatTime = 'HH:mm';
    var format = formatDay + ' ' + formatTime;

    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            opts: '=periodOptions'
        },
        link: function (scope, ele, attrs, ctrl) {
            var opts = {
                lang: $rootScope.language || 'en',
                format: 'd M Y H:i',
                formatTime: 'H:i',
                formatDate: 'd M Y',
                timepicker: true,
                datepicker: true,
                step: 60,
                onGenerate: function (ct) {
                    jQuery(this).find('.xdsoft_date, .xdsoft_time').removeClass('xdsoft_disabled');
                }
            };
            if (angular.isObject(scope.opts)) {
                angular.extend(opts, scope.opts);

                if (!opts.timepicker) {
                    opts.format = opts.formatDate;
                }
            }
            if (opts.minDate || opts.maxDate) {
                var minDate = opts.minDate && moment(opts.minDate).subtract(1, 'd');
                var maxDate = opts.maxDate && moment(opts.maxDate).add(1, 'd');
                opts.onGenerate = function () {
                    jQuery(this).find('.xdsoft_date, .xdsoft_time').removeClass('xdsoft_disabled');
                    jQuery(this).find('.xdsoft_date').each(function () {
                        var $this = jQuery(this);
                        var year = $this.data('year');
                        var month = $this.data('month');
                        var date = $this.data('date');
                        if (opts.minDate && minDate.isAfter(new Date(year, month, date))) {
                            $this.addClass('xdsoft_disabled');
                        }
                        if (opts.maxDate && maxDate.isBefore(new Date(year, month, date))) {
                            $this.addClass('xdsoft_disabled');
                        }
                    });

                    var currentYear, currentMonth, currentDate;
                    jQuery(this).find('.xdsoft_date.xdsoft_current').each(function () {
                        var $this = jQuery(this);
                        currentYear = $this.data('year');
                        currentMonth = $this.data('month');
                        currentDate = $this.data('date');
                    });

                    jQuery(this).find('.xdsoft_time').each(function () {
                        var $this = jQuery(this);
                        var hour = $this.data('hour');
                        var minute = $this.data('minute');

                        if (opts.minDate && opts.minDate.isAfter(new Date(currentYear, currentMonth, currentDate, hour, minute))) {
                            $this.addClass('xdsoft_disabled');
                        }
                        if (opts.maxDate && opts.maxDate.isBefore(new Date(currentYear, currentMonth, currentDate,  hour, minute))) {
                            $this.addClass('xdsoft_disabled');
                        }
                    });
                };
            }

            $timeout(function () {
                ele.datetimepicker(opts);

                scope.$watch(function () {
                    return ctrl.$modelValue;
                }, function (newVal, oldVal) {
                    if (newVal) {
                        var date = moment(newVal);
                        if (opts.step !== 1) {
                            var min = date.minute();
                            date.minute(Math.ceil(min / opts.step) * opts.step);
                        }
                        opts.value = date.format(opts.timepicker ? format : formatDay);
                        ele.datetimepicker(opts);

                        // Need to update the view model value
                        ctrl.$setViewValue(opts.value);
                    }
                });
            });
        }
    }
});
