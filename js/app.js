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
  .state('userbooking', {
    url: "/userbooking",
    templateUrl: "views/template.html",
    controller: 'UserBookingCtrl'
  })
  .state('edit-user', {
    url: "/edit-user",
    templateUrl: "views/template.html",
    controller: 'EditUserCtrl'
  })
  .state('search', {
    url: "/search",
    templateUrl: "views/template.html",
    controller: 'SearchCtrl'
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

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
