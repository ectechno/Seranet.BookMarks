(
function () {
    
    angular.module("app").controller("dashboardCtrl",
            function ($scope, appService)
            {
                var applist = angular.fromJson(appService.availableApplist());
                var defaultAppList = angular.fromJson(appService.defaultAppList());
                var appToShow = [];
                var userAppKey = "UserApps";


                var initilizeVisibleAppList = function () {
                    var userApps = JSON.parse(localStorage.getItem(userAppKey));
                   
                    if ( userApps == null || userApps.length === 0) {
                        for (appKey in applist) {
                            var appObj = applist[appKey];
                            if (defaultAppList.indexOf(appObj.id) != -1) {
                                appToShow.push(appObj);
                            }
                        }
                    } else {
                        for (uk in userApps) {
                            var userAppObj = userApps[uk];
                            appToShow.push(userAppObj);
                        }
                        
                }

             
                }
                
              
                var addToDashBord = function (app) {
                    var i = defaultAppList.indexOf(app);
                    
                    if(i=== -1 && appToShow.indexOf(app) ===-1){
                        appToShow.push(app);
                        localStorage.setItem(userAppKey,JSON.stringify( appToShow));
                    }
                }

                var removeFromDashBoard = function (app) {
                    var i = appToShow.indexOf(app);
                    if (i != -1) {
                        appToShow.splice(i, 1);
                        localStorage.setItem(userAppKey, JSON.stringify(appToShow));
                       
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