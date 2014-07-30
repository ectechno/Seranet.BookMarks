(function () {


    var app = angular.module("app");


    app.service('appService', function () {
        this.availableApplist = function () {

            var applist = [
                           //{
                           //    "title": "Home",
                           //    "leftMeunuClass": "home-icon",
                           //    "appListLinkClass": "",
                           //    "applistMainClass": "",
                           //    "href": "#",
                           //    "description": "Lorem Ipsum"

                           //},
                           {
                                "id" :"1",
                                "title": "About Us",
                                "leftMeunuClass": "aboutus-icon",
                                "appListClass": "icon-user icon-4x",
                                "applistMainClass": "tile orange w2 h1 icon-featurecw title-fadeout",
                                "href": "http://google.com",
                                "description": "Perspiciatis unde"
                           },
                            {
                                "id": "2",
                                "title": "Contact",
                                "leftMeunuClass": "contact-icon",
                                "appListClass": "icon-envelope icon-4x",
                                "applistMainClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                "href": "http://www.linkedin.com",
                                "description": "Vestibulum cursus"
                          }
            ]
            return applist;
        }

        this.defaultAppList = function () {
            var applist = ["1"];
            //var applist =  [
            //               {
            //                   "title": "About Us",
            //                   "leftMeunuClass": "aboutus-icon",
            //                   "appListClass": "icon-user icon-4x",
            //                   "applistMainClass": "tile orange w2 h1 icon-featurecw title-fadeout",
            //                   "href": "#",
            //                   "description": "Perspiciatis unde"

            //              }, 
            //               // {
            //               //     "title": "Contact",
            //               //     "leftMeunuClass": "contact-icon",
            //               //     "appListClass": "icon-envelope icon-4x",
            //               //     "applistMainClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
            //               //     "href": "#",
            //               //     "description": "Vestibulum cursus"
            //               // }
            //]

            return applist;
        };
    });


})();