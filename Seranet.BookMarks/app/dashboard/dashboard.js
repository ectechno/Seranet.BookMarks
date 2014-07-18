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