angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];

  $scope.hows=[{
icon:'img/i1.png',
title:'Search for an expert',
desc:'Search from a wide range of experts to answer all your questions'
  },{
icon:'img/i2.png',
title:'Compare experts',
desc:'View expert profiles and shortlist them based on your criteria'
  },{
icon:'img/i3.png',
title:'Schedule your expert appointment',
desc:'Schedule your phone consultation at a convenient time, Get a confirmation and only then pay for your call'
  },{
icon:'img/i4.png',
title:'Get on call with them',
desc:'Get seamlessly connected with the expert. Have a great experience getting your query resolved'
  }]
  $scope.testimonial = [
    {
      img: "img/team.png",
      descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
      name: "- Kris Mathews"
    },
    {
      img: "img/team.png",
      descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
      name: "- Kris Mathews"
    },
    {
      img: "img/team.png",
      descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
      name: "- Kris Mathews"
    }];
})


.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
