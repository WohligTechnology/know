window.uploadurl = "http://wohlig.biz/uploadfile/upload/";

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui-rangeSlider', 'jkuri.timepicker', 'imageupload'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "";
    $scope.home = "home-page"

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

    $scope.animationsEnabled = true;
    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/login.html',
            controller: 'HomeCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

    };
    $scope.open2 = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/signup.html',
            controller: 'HomeCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

    };
    $scope.open3 = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/forgetpassword.html',
            controller: 'HomeCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

    };
    $scope.open4 = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/needhelp.html',
            controller: 'HomeCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

    };

    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

})

.controller('UserBookingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("user-booking");
        $scope.menutitle = NavigationService.makeactive("User-Booking");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // TemplateService.header = "./views/header2.html";
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('ExpertBookingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("expert-booking");
        $scope.menutitle = NavigationService.makeactive("Expert-Booking");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // TemplateService.header = "./views/header2.html";
        $scope.expertlogo = "expert-page";
        $scope.userlogo = "";
    })
    .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('BookNowCtrl', function($scope, TemplateService, NavigationService, $timeout, $log) {
        $scope.template = TemplateService.changecontent("book-now");
        $scope.menutitle = NavigationService.makeactive("Book-Now");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        $scope.popup2 = {
            opened: false
        };
        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [{
            date: tomorrow,
            status: 'full'
        }, {
            date: afterTomorrow,
            status: 'partially'
        }];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
        $scope.ismeridian = true;
        $scope.time = "1970-01-01T05:00:40.000Z"; // (formatted: 10:30 AM)
        $scope.selectedTimeAsNumber = 37840000; // (formatted: 4:00 PM)
        $scope.sharedDate = "2016-04-06T05:30:00.116Z"; // (formatted: 4/6/16 11:00 AM)

    })
    .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("login");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.animationsEnabled = true;
        $scope.open3 = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal/forgetpassword.html',
                controller: 'LoginCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

        };
        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    })
    .controller('SignupCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("signup");
        $scope.menutitle = NavigationService.makeactive("Signup");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("edit-user");
        $scope.menutitle = NavigationService.makeactive("Edit-User");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.userForm={};
        $scope.userSubmitForm = function(formValid) {
            console.log($scope.userForm);
            if (formValid.$valid) {
              $scope.formComplete = true;
                NavigationService.ContactSubmit($scope.userForm, function(data) {
                    console.log('userformctrl', $scope.userForm);

                });

            }

        };

    })
    .controller('PrivacyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("privacy");
        $scope.menutitle = NavigationService.makeactive("Privacy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("terms-condition");
        $scope.menutitle = NavigationService.makeactive("Terms-Condition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('HomeExpertCtrl', function($scope, TemplateService, NavigationService, $timeout,$state) {
        $scope.template = TemplateService.changecontent("home-expert");
        $scope.menutitle = NavigationService.makeactive("Home-Expert");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "";
        $scope.home = "";
        $scope.experthome = "expert-home";

        $scope.userForm={};
        $scope.userSubmitForm = function(formValid) {
            console.log($scope.userForm);
            if (formValid.$valid) {
                NavigationService.ExpertSubmit($scope.userForm, function(data) {
                    console.log('userformctrl', $scope.userForm);
                    //console.log('$scope.userForm.experienceType',$scope.userForm.experienceType);
                    // if($scope.userForm.experienceType==company)
                    // {
                    //   $scope.myexp=true;
                    // }
                    $state.go("home-expert");
                });

            }
        };




        $scope.openform = function(param) {
            if (param == 'Login') {
                $scope.showform = true;
            } else {
                $scope.showform = false;
            }
            $(window).scrollTop(0)
        }
    })

.controller('ExpertProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.changecontent("expert-profile");
        $scope.menutitle = NavigationService.makeactive("Expert-Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.userForm = {};

        $scope.done = function(data) {
            console.log(data);
        }

        $scope.userSubmitForm = function(formValid) {
            console.log($scope.userForm);
            if (formValid.$valid) {
                NavigationService.ExpertUSerCreateSubmit($scope.userForm, function(data) {
                    console.log('userformctrl', $scope.userForm);
                    //console.log('$scope.userForm.experienceType',$scope.userForm.experienceType);
                    // if($scope.userForm.experienceType==company)
                    // {
                    //   $scope.myexp=true;
                    // }
                    $state.go("expert-profile");
                });

            }
        };
        $scope.publilink = [{
            name: ''
        }];

        $scope.addlink = function() {
            var addlinks = $scope.publilink.length + 1;
            $scope.publilink.splice(0, 0, {
                'id': '' + addlinks
            });
        };


        $scope.edudetail = [{
            title: '',
            name: '',
            year: '',
            city: '',
            country: ''
        }];

        $scope.addMore = function() {
            var addedu = $scope.edudetail.length + 1;
            $scope.edudetail.splice(0, 0, {
                'id': '' + addedu
            });
        };

        $scope.experiencedetail = [{
            experienceType: '',
            companyName: '',
            jobTitle: '',
            jobDescription: '',
            startDate: '',
            endDate: ''
        }];

        $scope.addexperience = function() {
            var addexperience = $scope.experiencedetail.length + 1;
            $scope.experiencedetail.splice(0, 0, {
                'id': '' + addexperience
            });
        };

        $scope.moreAwards = [{
            name: ''
        }];

        $scope.addawards = function() {
            var addawards = $scope.moreAwards.length + 1;
            $scope.moreAwards.splice(0, 0, {
                'id': '' + addawards
            });
        };

        $scope.moreVideos = [{
            name: ''
        }];

        $scope.addvideos = function() {
            var addvideos = $scope.moreVideos.length + 1;
            $scope.moreVideos.splice(0, 0, {
                'id': '' + addvideos
            });
        };

        // TemplateService.header = "./views/header2.html";
        $scope.expertlogo = "expert-page";
        $scope.userlogo = "";

        $scope.tab2 = 'personal';
        $scope.classa = 'expert-active';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';

        $scope.tabchange = function(tab, a) {
            console.log(tab);
            $scope.tab2 = tab;
            if (a == 1) {
                $scope.classa = "expert-active";
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = '';
            } else if (a == 2) {
                $scope.classa = '';
                $scope.classb = "expert-active";
                $scope.classc = '';
                $scope.classd = '';
            } else if (a == 3) {
                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "expert-active";
                $scope.classd = '';
            } else {
                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = "expert-active";
            }
        };
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [{
            date: tomorrow,
            status: 'full'
        }, {
            date: afterTomorrow,
            status: 'partially'
        }];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
    })
    .controller('FaqCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("faq");
        $scope.menutitle = NavigationService.makeactive("FAQ");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('WishlistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("wishlist");
        $scope.menutitle = NavigationService.makeactive("Wishlist");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('SearchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("search");
        $scope.menutitle = NavigationService.makeactive("Search");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        // TemplateService.header = "./views/header2.html";

        $scope.demo2 = {
            range: {
                min: 100,
                max: 10000,
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
    $scope.expertlogo = "";
    $scope.userlogo = "user-page";

    $scope.tab2 = 'summary';
    $scope.classa = 'expert-active';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';

    $scope.tabchange = function(tab, a) {
        console.log(tab);
        $scope.tab2 = tab;
        if (a == 1) {
            $scope.classa = "expert-active";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
        } else if (a == 2) {
            $scope.classa = '';
            $scope.classb = "expert-active";
            $scope.classc = '';
            $scope.classd = '';
        } else if (a == 3) {
            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = "expert-active";
            $scope.classd = '';
        } else {
            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = "expert-active";
        }
    };


})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        $scope.menu = "menu-in";
    };
    $scope.closeMenu = function() {
        $scope.menu = "menu-out";
    };
})

;
