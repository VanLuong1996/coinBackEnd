angular.module('remote').factory('userRemoteService', function ($http, config, Upload) {

    return {
        login: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + '/authenticate',
                method: 'POST',
                data: '',
                headers: {
                    'X-Auth-Email': opts.username,
                    'X-Auth-Password': opts.password
                }
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        changePassword: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/users/' + opts.userId + '/changePassword',
                params: {
                    oldPassword: opts.oldPassword,
                    newPassword: opts.newPassword
                },
                method: 'PUT',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        requestResetPassword: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/users/requestResetPassword?email=' + opts.email,
                method: 'POST',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        resetPassword: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/users/resetPassword',
                method: 'PUT',
                data: opts.resetPasswordTokenDTO
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },


        addUser: function (newUserDTO, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/admin/users',
                method: 'POST',
                data: newUserDTO
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        updateUser: function (updatedUserDTO, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/admin/users/' + updatedUserDTO.id,
                method: 'PUT',
                data: updatedUserDTO
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },


        deleteUser: function (userId, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/admin/users/' + userId,
                method: 'DELETE',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        deleteAllUser: function (customerId, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/admin/users?customerId=' + customerId,
                method: 'DELETE',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        getListUser: function (opts, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/admin/users',
                method: 'GET',
                params: {
                    pageIndex: opts.pageIndex,
                    pageSize: opts.pageSize,
                    orderBy: opts.orderBy,
                    orderType: opts.orderType,
                    searchText: opts.searchText
                },
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        getUserInfo: function (id, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/admin/users/' + id,
                method: 'GET',
                data: ''
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        updateUserProfile: function (updatedUserDTO, successCallback, failureCallback) {
            return $http({
                url: config.baseURL + config.apiVersion + '/users/' + updatedUserDTO.id,
                method: 'PUT',
                data: updatedUserDTO
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data, status, headers, config);
            });
        },

        uploadAvatar: function (files, successCallback, failureCallback) {
            Upload.upload({
                url: config.baseURL + config.apiVersion + '/file/uploadAvatar',
                headers : {
                  'X-Auth-Token' : sessionStorage.getItem("token")
                },
                fileFormDataName : 'avatar',
                file: files
            }).progress(function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data);
            });
        },


        uploadAvatarPhoto: function (files, successCallback, failureCallback) {
            Upload.upload({
                url: config.baseURL + config.apiVersion + '/file/uploadAvatarPhoto',
                headers : {
                    'X-Auth-Token' : sessionStorage.getItem("token")
                },
                fileFormDataName : 'avatar',
                file: files
            }).progress(function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
            }).success(function (data, status, headers, config) {
                successCallback(data);
            }).error(function (data, status, headers, config) {
                failureCallback(data);
            });
        },

        getAvatar: function (photoId) {
            return config.baseURL + config.apiVersion + '/file/photo/' + photoId
        }
    };
});
