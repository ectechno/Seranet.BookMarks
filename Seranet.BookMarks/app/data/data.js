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
                                "href": "http://people.99xt.lk",
                                "description": "Human Resource Management System"
                            }

                            ,
                            {
                                "id": "3",
                                "title": "99x Fix",
                                "leftMeunuTileClass": "fa fa-cogs",
                                "mainTileClass": "fa fa-cogs",
                                "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                "href": "http://99fix.99xt.lk/portal",
                                "description": ""
                            },
                             {
                                 "id": "4",
                                 "title": "99x Process Portal",
                                 "leftMeunuTileClass": "fa fa-line-chart",
                                 "mainTileClass": "fa fa-line-chart",
                                 "tileContainerClass": "tile turquoise title-horizontalcenter icon-scaledownrotate360cw w2 h1",
                                 "href": "http://portal.99xt.lk/",
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
                                    "href": "http://timesheets.99xt.lk/",
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
                                },
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
                                    "title": "CCC",
                                    "leftMeunuTileClass": "fa fa-copyright",
                                    "mainTileClass": "fa fa-copyright",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://www.colombocamps.com/",
                                    "description": ""
                                },
                                {
                                    "id": "12",
                                    "title": "99X Web Mail",
                                    "leftMeunuTileClass": "fa fa-envelope",
                                    "mainTileClass": "fa fa-envelope",
                                    "tileContainerClass": "tile green title-featurefade icon-scaledownrotate360cw w2 h1",
                                    "href": "https://mail.99xtechnology.com/owa",
                                    "description": ""
                                },
                                {
                                    "id": "13",
                                    "title": "My Retro",
                                    "leftMeunuTileClass": "fa fa-comments",
                                    "mainTileClass": "fa fa-comments",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.facebook.com/99XTechnology",
                                    "description": ""
                                },
                                {
                                    "id": "14",
                                    "title": "Employee Geo",
                                    "leftMeunuTileClass": "fa fa-globe",
                                    "mainTileClass": "fa fa-globe",
                                    "tileContainerClass": "tile blue title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href":"http://99xt.lk/geo",
                                    "description": ""
                                },
                                {
                                    "id": "15",
                                    "title": "Service API",
                                    "leftMeunuTileClass": "fa fa-plug",
                                    "mainTileClass": "fa fa-plug",
                                    "tileContainerClass": "tile yellow title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://99xt.lk/services",
                                    "description": ""
                                },
                                {
                                    "id": "16",
                                    "title": "FaceBook",
                                    "leftMeunuTileClass": "fa fa-facebook",
                                    "mainTileClass": "fa fa-facebook",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "https://www.facebook.com/99XTechnology",
                                    "description": ""
                                },
                                {
                                    "id": "17",
                                    "title": "Twitter",
                                    "leftMeunuTileClass": "fa fa-twitter",
                                    "mainTileClass": "fa fa-twitter",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://twitter.com/99xtechnology",
                                    "description": ""
                                },
                                {
                                    "id": "18",
                                    "title": "Yammer",
                                    "leftMeunuTileClass": "fa fa-hacker-news",
                                    "mainTileClass": "fa fa-hacker-news",
                                    "tileContainerClass": "tile turquoise title-featurefade icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.yammer.com/99x.lk",
                                    "description": ""
                                },
                                {
                                    "id": "19",
                                    "title": "Life @99x",
                                    "leftMeunuTileClass": "fa fa-smile-o",
                                    "mainTileClass": "fa fa-smile-o",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "http://blog.99xtechnology.com/",
                                    "description": ""
                                },
                                {
                                    "id": "20",
                                    "title": "YouTube",
                                    "leftMeunuTileClass": "fa fa-youtube",
                                    "mainTileClass": "fa fa-youtube",
                                    "tileContainerClass": "tile red title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "https://www.youtube.com/user/99XTechnology",
                                    "description": ""
                                },
                                {
                                    "id": "21",
                                    "title": "LinkedIn",
                                    "leftMeunuTileClass": "fa fa-linkedin-square",
                                    "mainTileClass": "fa fa-linkedin-square",
                                    "tileContainerClass": "tile blue title-verticalcenter title-scaleup w2 h1",
                                    "href": "https://www.linkedin.com/company/99xtechnology",
                                    "description": ""
                                },
,
                                {
                                    "id": "22",
                                    "title": "HR Support",
                                    "leftMeunuTileClass": "fa fa-user",
                                    "mainTileClass": "fa fa-user",
                                    "tileContainerClass": "tile yellow title-verticalcenter title-scaleup w2 h1",
                                    "href": "http://hrsupport.99xt.lk/portal",
                                    "description": ""
                                },
                                 {
                                    "id": "23",
                                    "title": "Spec",
                                    "leftMeunuTileClass": "fa fa-cog",
                                    "mainTileClass": "fa fa-cog",
                                    "tileContainerClass": "tile purple title-scaleup icon-scaledownrotate360cw w2 h1",
                                    "href": "http://99xt.lk/spec",
                                    "description": ""
                                }


            ]
            return applist;
        }

        this.defaultAppList = function () {
            var applist = ["1","2","3","4","5","8","12","13","15","16","21","22","23"];
          
            return applist;
        };
    });


})();
