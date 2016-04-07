// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
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
    url: "/edit-user",
    templateUrl: "views/template.html",
    controller: 'EditUserCtrl'
  })
  .state('book-now', {
    url: "/book-now",
    templateUrl: "views/template.html",
    controller: 'BookNowCtrl'
  })
  .state('expert-booking', {
    url: "/expert-booking",
    templateUrl: "views/template.html",
    controller: 'ExpertBookingCtrl'
  })
  .state('expert-profile', {
    url: "/expert-profile",
    templateUrl: "views/template.html",
    controller: 'ExpertProfileCtrl'
  })
  .state('search', {
    url: "/search",
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
    url: "/profile",
    templateUrl: "views/template.html",
    controller: 'ProfileCtrl'
  });
  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(isproduction);
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
