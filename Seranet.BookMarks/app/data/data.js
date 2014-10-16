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
                               "leftMeunuTileClass": "icon-picture",
                               "mainTileClass": "icon-picture",
                               "tileContainerClass": "tile blue title-verticalcenter title-fadeout w2 h1",
                               "href": "http://www.99xtechnology.com/",
                               "description": ""
                           },
                            {
                                "id": "2",
                                "title": "99X HRIS",
                                "leftMeunuTileClass": "fa fa-users",
                                "mainTileClass": "fa fa-users",
                                "tileContainerClass": "tile orange  icon-featurecw title-fadeout w2 h1",
                                "href": "http://people.99xtechnology.com",
                                "description": "Human Resource Management System"
                            }

                            ,
                            {
                                "id": "3",
                                "title": "99x Fix",
                                "leftMeunuTileClass": "fa fa-cogs",
                                "mainTileClass": "fa fa-cogs",
                                "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                "href": "http://99fix.99x.lk/portal",
                                "description": ""
                            },
                             {
                                 "id": "4",
                                 "title": "99x Process Portal",
                                 "leftMeunuTileClass": "fa fa-line-chart",
                                 "mainTileClass": "fa fa-line-chart",
                                 "tileContainerClass": "tile turquoise title-horizontalcenter icon-scaledownrotate360cw w2 h1",
                                 "href": "http://portal.99xtechnology.com/",
                                 "description": ""
                             },
                              {
                                  "id": "5",
                                  "title": "99x Jira",
                                  "leftMeunuTileClass": "fa fa-wrench",
                                  "mainTileClass": "fa fa-wrench",
                                  "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                  "href": "https://seranet.atlassian.net/secure/Dashboard.jspa",
                                  "description": ""
                              }
                              ,
                               {
                                   "id": "6",
                                   "title": "Lab Rats",
                                   "leftMeunuTileClass": "fa fa-flask",
                                   "mainTileClass": "fa fa-flask",
                                   "tileContainerClass": "tile green title-featurefade icon-scaledownrotate360cw w2 h1",
                                   "href": "http://research.99xtechnology.com/",
                                   "description": ""
                               },
                                {
                                    "id": "7",
                                    "title": "Dotitude",
                                    "leftMeunuTileClass": "fa fa-graduation-cap",
                                    "mainTileClass": "fa fa-graduation-cap",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.facebook.com/Dotitude",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "8",
                                    "title": "99X Time Porting",
                                    "leftMeunuTileClass": "fa fa-clock-o",
                                    "mainTileClass": "fa fa-clock-o",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://timesheets.99xtechnology.com/",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "9",
                                    "title": "Sports Committee",
                                    "leftMeunuTileClass": "fa fa-futbol-o",
                                    "mainTileClass": "fa fa-futbol-o",
                                    "tileContainerClass": "tile orange  icon-featurecw title-fadeout w2 h1",
                                    "href": "",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "10",
                                    "title": "99X CSR",
                                    "leftMeunuTileClass": "fa fa-wheelchair",
                                    "mainTileClass": "fa fa-wheelchair",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.facebook.com/99XTechnologyCSR",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "11",
                                    "title": "Twitter",
                                    "leftMeunuTileClass": "fa fa-twitter",
                                    "mainTileClass": "fa fa-twitter",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://twitter.com/99xtechnology",
                                    "description": ""
                                }
                                ,
                                {
                                    "id": "12",
                                    "title": "FaceBook",
                                    "leftMeunuTileClass": "fa fa-facebook",
                                    "mainTileClass": "fa fa-facebook",
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