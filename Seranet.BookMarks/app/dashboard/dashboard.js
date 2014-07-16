(
function () {
    
    angular.module("app").controller("dashboardCtrl",
            function ($scope, appService)
            {
                var applist = angular.fromJson(appService.availableApplist());
                var defaultAppList = angular.fromJson(appService.defaultAppList());

                var addToDashBord = function (app) {
                   
                    defaultAppList.push(app);
                }

                var removeFromDashBoard = function (app) {
                    defaultAppList.remove(app);
                }

                $scope.applist = applist;
                $scope.defaultAppList = defaultAppList;
                $scope.addToDashBord = addToDashBord;
                $scope.removeFromDashBoard = removeFromDashBoard;
            }

        );


}
)();