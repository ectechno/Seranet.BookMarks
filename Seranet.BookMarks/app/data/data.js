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
                               "id": "1",
                               "title": "99X Technology WebSite",
                               "leftMeunuTileClass": "icon-picture icon-2x",
                               "mainTileClass": "icon-picture icon-4x",
                               "tileContainerClass": "tile blue title-verticalcenter title-fadeout w2 h1",
                               "href": "http://www.99xtechnology.com/",
                               "description": ""
                           },
                            {
                                "id": "2",
                                "title": "99X HRIS",
                                "leftMeunuTileClass": "icon-user icon-2x",
                                "mainTileClass": "icon-user icon-4x",
                                "tileContainerClass": "tile orange  icon-featurecw title-fadeout w2 h1",
                                "href": "http://people.99xtechnology.com",
                                "description": "Human Resource Management System"
                            }

                            ,
                            {
                                "id": "3",
                                "title": "99x Fix",
                                "leftMeunuTileClass": "fa fa-wrench icon-2x",
                                "mainTileClass": "fa fa-wrench icon-4x",
                                "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                "href": "http://99fix.99x.lk/portal",
                                "description": ""
                            },
                             {
                                 "id": "4",
                                 "title": "99x Process Portal",
                                 "leftMeunuTileClass": "fa fa-cogs icon-2x",
                                 "mainTileClass": "fa fa-cogs icon-4x",
                                 "tileContainerClass": "tile turquoise title-horizontalcenter icon-scaledownrotate360cw w2 h1",
                                 "href": "http://portal.99xtechnology.com/",
                                 "description": ""
                             },
                              {
                                  "id": "5",
                                  "title": "99x Jira",
                                  "leftMeunuTileClass": "fa fa-wrench icon-2x",
                                  "mainTileClass": "fa fa-wrench icon-4x",
                                  "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                  "href": "https://seranet.atlassian.net/secure/Dashboard.jspa",
                                  "description": ""
                              }
                              ,
                               {
                                   "id": "6",
                                   "title": "Lab Rats",
                                   "leftMeunuTileClass": "fa fa-wrench icon-2x",
                                   "mainTileClass": "fa fa-wrench icon-4x",
                                   "tileContainerClass": "tile green title-featurefade icon-scaledownrotate360cw w2 h1",
                                   "href": "http://research.99xtechnology.com/",
                                   "description": ""
                               },
                                {
                                    "id": "7",
                                    "title": "Dotitude",
                                    "leftMeunuTileClass": "fa fa-wrench icon-2x",
                                    "mainTileClass": "fa fa-wrench icon-4x",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.facebook.com/Dotitude",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "8",
                                    "title": "99X Time Porting",
                                    "leftMeunuTileClass": "fa fa-clock-o icon-2x",
                                    "mainTileClass": "fa fa-clock-o icon-4x",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://timesheets.99xtechnology.com/",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "9",
                                    "title": "Sports Committee",
                                    "leftMeunuTileClass": "fa fa-futbol-o icon-2x",
                                    "mainTileClass": "fa fa-futbol-o icon-4x",
                                    "tileContainerClass": "tile orange  icon-featurecw title-fadeout w2 h1",
                                    "href": "",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "10",
                                    "title": "99X CSR",
                                    "leftMeunuTileClass": "fa fa-wrench icon-2x",
                                    "mainTileClass": "fa fa-wrench icon-4x",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.facebook.com/99XTechnologyCSR",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "11",
                                    "title": "Twitter",
                                    "leftMeunuTileClass": "fa fa-twitter icon-2x",
                                    "mainTileClass": "fa fa-twitter icon-4x",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://twitter.com/99xtechnology",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "12",
                                    "title": "FaceBook",
                                    "leftMeunuTileClass": "fa fa-facebook icon-2x",
                                    "mainTileClass": "fa fa-facebook icon-4x",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "https://www.facebook.com/99XTechnology",
                                    "description": ""
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