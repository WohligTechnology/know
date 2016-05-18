// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'imageupload'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })

    .state('user-booking', {
            url: "/user-booking",
            templateUrl: "views/template.html",
            controller: 'UserBookingCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/template.html",
            controller: 'AboutCtrl'
        })
        .state('wishlist', {
            url: "/wishlist",
            templateUrl: "views/template.html",
            controller: 'WishlistCtrl'
        })
        .state('edit-user', {
            url: "/edit-user/:id",
            templateUrl: "views/template.html",
            controller: 'EditUserCtrl'
        })
        .state('change-password', {
            url: "/change-password/:id",
            templateUrl: "views/template.html",
            controller: 'ChangePasswordCtrl'
        })
        .state('change-expert-password', {
            url: "/change-expert-password/:id",
            templateUrl: "views/template.html",
            controller: 'ChangeExpertPasswordCtrl'
        })
        .state('book-now', {
            url: "/book-now/:id",
            templateUrl: "views/template.html",
            controller: 'BookNowCtrl'
        })
        .state('expert-booking', {
            url: "/expert-booking",
            templateUrl: "views/template.html",
            controller: 'ExpertBookingCtrl'
        })
        .state('expert-profile', {
            url: "/expert-profile/:id",
            templateUrl: "views/template.html",
            controller: 'ExpertProfileCtrl'
        })
        .state('search', {
            url: "/search/:search",
            templateUrl: "views/template.html",
            controller: 'SearchCtrl'
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/template.html",
            controller: 'LoginCtrl'
        })
        .state('signup', {
            url: "/signup",
            templateUrl: "views/template.html",
            controller: 'SignupCtrl'
        })
        .state('privacy', {
            url: "/privacy",
            templateUrl: "views/template.html",
            controller: 'PrivacyCtrl'
        })
        .state('home-expert', {
            url: "/home-expert",
            templateUrl: "views/template.html",
            controller: 'HomeExpertCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: "views/template.html",
            controller: 'FaqCtrl'
        })
        .state('terms-condition', {
            url: "/terms-condition",
            templateUrl: "views/template.html",
            controller: 'TermsConditionCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/template.html",
            controller: 'ContactCtrl'
        })
        .state('profile', {
            url: "/profile/:id",
            templateUrl: "views/template.html",
            controller: 'ProfileCtrl'
        })
        .state('comingsoon', {
            url: "/comingsoon",
            templateUrl: "views/template.html",
            controller: 'ComingsoonCtrl'
        });
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(isproduction);
});

firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width != "") {
            other += "&width=" + width;
        }
        if (height && height != "") {
            other += "&height=" + height;
        }
        if (style && style != "") {
            other += "&style=" + style;
        }
        if (input) {
            console.log(input);
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;
            } else {
                return input;
            }
        }
    };
});

firstapp.filter('showbtn', function(NavigationService) {
    return function(input, data) {
        console.log('input', input);
        console.log('data', data);
        if (input && data && input != "" && data != "") {
            if (data._id && data.shortList && data.shortList.length > 0) {
                var foundIndex = _.findIndex(data.shortList, {
                    "expertUser": input
                })
                if (foundIndex != -1) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
    };
});
firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});

firstapp.directive('uploadImage', function($http, $filter) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function(n) {
                        $scope.image.push({
                            url: $filter("uploadpath")(n)
                        });
                    });
                } else {
                    $scope.image = {};
                    $scope.image.url = $filter("uploadpath")($scope.model);
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.uploadNow = function(image) {
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    console.log("success");
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});

firstapp.directive('img', function($compile, $parse) {

    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);

            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
                $(".various").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
firstapp.directive('fancybox2', function($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function($scope, element, attrs) {

            $(".fancybox2").fancybox({
                openEffect: 'none',
                closeEffect: 'none'
            });


        }
    };
});
