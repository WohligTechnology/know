angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider','ui-rangeSlider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.hows = [{
    icon: 'img/i1.png',
    title: 'Search for an expert',
    desc: 'Search from a wide range of experts to answer all your questions'
  }, {
    icon: 'img/i2.png',
    title: 'Compare experts',
    desc: 'View expert profiles and shortlist them based on your criteria'
  }, {
    icon: 'img/i3.png',
    title: 'Schedule your expert appointment',
    desc: 'Schedule your phone consultation at a convenient time, Get a confirmation and only then pay for your call'
  }, {
    icon: 'img/i4.png',
    title: 'Get on call with them',
    desc: 'Get seamlessly connected with the expert. Have a great experience getting your query resolved'
  }];
  $scope.testimonial = [{
    img: "img/team.png",
    descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
    name: "- Kris Mathews"
  }, {
    img: "img/team.png",
    descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
    name: "- Kris Mathews"
  }, {
    img: "img/team.png",
    descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
    name: "- Kris Mathews"
  }];
})

.controller('UserBookingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("userbooking");
  $scope.menutitle = NavigationService.makeactive("User Booking");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("edit-user");
  $scope.menutitle = NavigationService.makeactive("Edit-User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("contact");
  $scope.menutitle = NavigationService.makeactive("Contact");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('PrivacyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("privacy");
  $scope.menutitle = NavigationService.makeactive("Privacy");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("terms-condition");
  $scope.menutitle = NavigationService.makeactive("Terms-Condition");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('HomeExpertCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("home-expert");
  $scope.menutitle = NavigationService.makeactive("Home-Expert");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('ExpertProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("expert-profile");
  $scope.menutitle = NavigationService.makeactive("Expert-Profile");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.tab = 'personal';
$scope.classa = 'active';
$scope.classb = '';
$scope.classc = '';
$scope.classd = '';

$scope.tabchange = function(tab, a) {
    //        console.log(tab);
    $scope.tab = tab;
    if (a == 1) {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = "active";
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
    } else if (a == 2) {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = "active";
        $scope.classc = '';
        $scope.classd = '';
    }else if (a == 3) {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = '';
        $scope.classc = "active";
        $scope.classd = '';
    }else {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = "active";
    }
};
})
.controller('FaqCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("faq");
  $scope.menutitle = NavigationService.makeactive("FAQ");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('SearchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("search");
  $scope.menutitle = NavigationService.makeactive("Search");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.demo2 = {
      range: {
          min: 0,
          max: 10050
      },
      minPrice: 1000,
      maxPrice: 4000
  };
  // set available range
$scope.minPrice = 100;
$scope.maxPrice = 999;

// default the user's values to the available range
$scope.userMinPrice = $scope.minPrice;
$scope.userMaxPrice = $scope.maxPrice;
})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("profile");
  $scope.menutitle = NavigationService.makeactive("Profile");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.tab = 'summary';
$scope.classa = 'active';
$scope.classb = '';
$scope.classc = '';
$scope.classd = '';

$scope.tabchange = function(tab, a) {
    //        console.log(tab);
    $scope.tab = tab;
    if (a == 1) {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = "active";
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
    } else if (a == 2) {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = "active";
        $scope.classc = '';
        $scope.classd = '';
    }else if (a == 3) {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = '';
        $scope.classc = "active";
        $scope.classd = '';
    }else {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = "active";
    }
};
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
