(
function () {

    angular.module("app").controller("dashboardCtrl",
            function ($scope, appService) {
                var applist = angular.fromJson(appService.availableApplist());
                var defaultAppList = angular.fromJson(appService.defaultAppList());
                var appToShow = [];
                var userAppKey = "UserApps";
                var userAppIdList = [];


                

                var initilizeVisibleAppList = function () {

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
                            }
                        } else {
                            if (defaultAppList.indexOf(appObj.id) != -1) {
                                appToShow.push(appObj);
                                userAppIdList.push(appObj.id);
                            }
                        }
                    }

                }

                var addToDashBord = function (app) {
                    var i = defaultAppList.indexOf(app);

                    if (i === -1 && appToShow.indexOf(app) === -1) {
                        appToShow.push(app);
                        userAppIdList.push(app.id);
                        localStorage.setItem(userAppKey, JSON.stringify(userAppIdList));
                    }
                }

                var removeFromDashBoard = function (app) {
                    var i = appToShow.indexOf(app);
                    var userAppIdIndex = userAppIdList.indexOf(app.id);
                    if (i != -1) {
                        appToShow.splice(i, 1);
                        userAppIdList.splice(userAppIdIndex,1)
                        localStorage.setItem(userAppKey, JSON.stringify(userAppIdList));

                    }

                }
                initilizeVisibleAppList();
                $scope.applist = applist;
                $scope.defaultAppList = defaultAppList;
                $scope.addToDashBord = addToDashBord;
                $scope.removeFromDashBoard = removeFromDashBoard;
                $scope.appToShow = appToShow;
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