(
function () {

    angular.module("app").controller("dashboardCtrl",
            function ($scope, appService) {
                //App available applications
                var applist = angular.fromJson(appService.availableApplist());
                //Default application list
                var defaultAppList = angular.fromJson(appService.defaultAppList());
                //Applications selected 
                var appToShow = [];
                //Application pending to select
                var pendingApps = [];

                var userAppKey = "UserApps";
                var userAppIdList = [];




                var initilizeVisibleAppList = function () {
                    //Getting applications from local storage
                    var userApps = JSON.parse(localStorage.getItem(userAppKey));
                    var isUserStorageAvailable = false;

                    if (userApps != null) {
                        isUserStorageAvailable = true;
                    }
                    for (appKey in applist) {
                        var appObj = applist[appKey];

                        if (isUserStorageAvailable === true) {
                            if (userApps.indexOf(appObj.id) != -1) {
                                appToShow.push(appObj);
                                userAppIdList.push(appObj.id);
                            } else {
                                pendingApps.push(appObj);
                            }
                        } else {
                            if (defaultAppList.indexOf(appObj.id) != -1) {
                                appToShow.push(appObj);
                                userAppIdList.push(appObj.id);
                            } else {
                                pendingApps.push(appObj);
                            }
                        }
                    }

                }

                var addToDashBord = function (app) {
                    var i = defaultAppList.indexOf(app);

                    if (i === -1 && appToShow.indexOf(app) === -1) {
                        //Add it to pendings apps
                        appToShow.push(app);
                        userAppIdList.push(app.id);
                        localStorage.setItem(userAppKey, JSON.stringify(userAppIdList));
                        //Remove it from pending apps
                        var pendingAppIndex = pendingApps.indexOf(app);
                        if (pendingAppIndex != -1) {
                            pendingApps.splice(pendingAppIndex, 1);
                        }
                    }
                }

                var removeFromDashBoard = function (app) {
                    var i = appToShow.indexOf(app);
                    var userAppIdIndex = userAppIdList.indexOf(app.id);
                    if (i != -1) {
                        //Remove from selected apps
                        appToShow.splice(i, 1);
                        userAppIdList.splice(userAppIdIndex, 1)
                        localStorage.setItem(userAppKey, JSON.stringify(userAppIdList));
                        //Add app to pending apps
                        var pendingAppIndex = pendingApps.indexOf(app);
                        if (pendingAppIndex === -1) {
                            pendingApps.push(app);
                        }

                    }

                }
                initilizeVisibleAppList();
                $scope.applist = applist;
                $scope.defaultAppList = defaultAppList;
                $scope.addToDashBord = addToDashBord;
                $scope.removeFromDashBoard = removeFromDashBoard;
                $scope.appToShow = appToShow;
                $scope.pendingApps = pendingApps;
            }

        );


}
)();

$(function () {
    $(document).on({
        mouseenter: function () {
            $(".add-left-list", this).show();
        },
        mouseleave: function () {
            $(".add-left-list", this).hide();
        }
    }, '#app-list li');

    $(document).on({
        mouseenter: function () {
            $(".remove-dash-list", this).show();
        },
        mouseleave: function () {
            $(".remove-dash-list", this).hide();
        }
    }, '#app-tile-dash');
});