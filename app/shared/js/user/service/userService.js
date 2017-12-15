angular.module('user').factory('userServiceHttp',function ($http,config) {
    return{
        login  : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/user/login",
                method : 'POST',
                data : opts
            }).success(function (result) {
                successCallback(result)
            }).error(function (error) {
                errorCallback(error);
            })
        },
        getListUser : function (header,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/users",
                method : 'GET',
                headers : header
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        getListCheckInOutUser : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/checkInOuts/listByUser/"+opts.userId,
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        logout : function (header,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/user/logout",
                method : 'POST',
                headers : header
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        updateCheckInOut : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/checkInOuts/update",
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        updateLeave : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/leaves/update",
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        getLeaveAllUser : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/leavesRequests/list",
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        changeLeaveStatus : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/leaveRequests/changeStatus",
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        createNewUser : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/users/add",
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        updateAUser : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+"/admin/users/update",
                method : 'POST',
                headers : opts.header,
                data : opts.data
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
        deleteAUser : function (opts,successCallback,errorCallback) {
            $http({
                url : config.baseURL+'-'+config.apiVersion+" /admin/users/delete/"+opts.userId,
                method : 'POST',
                headers : opts.header
            }).success(function (success) {
                successCallback(success);
            }).error(function (error) {
                errorCallback(error);
            })
        },
    }
})
