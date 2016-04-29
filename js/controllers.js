window.uploadurl = "http://wohlig.biz/uploadfile/upload/";

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui-rangeSlider', 'jkuri.timepicker', 'imageupload'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "";
    $scope.home = "home-page"

    $scope.testimonial = {};
    NavigationService.getTestimonial($scope.testimonial, function(data) {
        $scope.testimonial = data.data;
        console.log('testimonial', $scope.testimonial);

    });
    $scope.dailyUpdates = {};
    NavigationService.getdailyUpdates($scope.dailyUpdates, function(data) {
        $scope.dailyUpdates = data.data;
        console.log('dailyUpdates', $scope.dailyUpdates);
    });

    $scope.categories = {};
    NavigationService.getCategory($scope.categories, function(data) {
        $scope.categories = data.data;
        console.log('categories', $scope.categories);
    });

    $scope.forgotpswd = {};
    $scope.forgotpswd = function(formValid) {
        console.log('in fun');
        if (formValid.$valid) {


            NavigationService.getForgotpswd($scope.forgotpswd, function(data) {
                $scope.forgotpswd = data.data;
                console.log('forgotpswd', $scope.forgotpswd);
            });
        }
    };


    $scope.newsletter = {};

    $scope.newsletterSubmit = function(data) {
        console.log('newsletterSubmitd', data);
        // if(data){

        NavigationService.getNewsletter($scope.newsletter, function(data) {
            $scope.newsletter = data;
            console.log('newsletter', $scope.newsletter);
            $state.go("home");
        });
        // }


        //$scope.newsletter={};

    };




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
    // $scope.testimonial = [{
    //     img: "img/team.png",
    //     descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
    //     name: "- Kris Mathews"
    // }, {
    //     img: "img/team.png",
    //     descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
    //     name: "- Kris Mathews"
    // }, {
    //     img: "img/team.png",
    //     descp: "We had been planning our honeymoon for a lng time. Jacknows’ travel expert helped us curate our experience and visit some places that we would have otherwise missed. I would recommend Jacknows to all would be travellers.Their help in getting us a good expert who could be trusted helped us a great deal",
    //     name: "- Kris Mathews"
    // }];




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
        $scope.userBooking = {};
        $scope.userBookingsubmit = {};

        $scope.feedback = function(formValid) {
            if (formValid.$valid) {

                NavigationService.feedbackSubmit($scope.userBookingsubmit, function(data) {
                    $scope.userBookingsubmit = data.data;
                    console.log('userBookingsubmit', $scope.userBookingsubmit);
                });
            }
            $scope.formComplete = true;
        };

        $scope.userBook = function() {
            NavigationService.getUserBooking($scope.userBooking, function(data) {
                $scope.userBooking = data.data;
                $scope.userBooking.bookDate = new Date();
                $scope.userBooking.bookTime = new Date();
                // $scope.userBooking.bookDate=$scope.userBooking.bookDate.toString().split('TO');
                // console.log('var dateParts',$scope.userBooking.bookDate);
                console.log('userBooking', $scope.userBooking);
            });
        }

        $scope.userBook();


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
    .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state) {
        $scope.template = TemplateService.changecontent("login");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.userForm = {};
        $scope.getLogin = function(formValid) {
            //console.log($scope.userForm);
            if (formValid.$valid) {

                NavigationService.getUserLogin($scope.userForm, function(data) {
                    if (data.value == true) {
                        $scope.userForm = data;
                        $state.go("home");
                    } else {

                    }
                });
            }
        };

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
    .controller('SignupCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $window) {
        $scope.template = TemplateService.changecontent("signup");
        $scope.menutitle = NavigationService.makeactive("Signup");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.userForm = {};
        $scope.userSignup = function(formValid) {
            console.log('SignupCtrl', $scope.userForm);
            if (formValid.$valid) {

                NavigationService.Signup($scope.userForm, function(data) {
                    console.log($scope.userForm.password);
                    console.log($scope.userForm.confirmPassword);
                    if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                        $scope.userForm = data.data;
                        //console.log('userformctrl', $scope.userForm);
                        $state.go("home");
                    } else {
                        $window.alert("Password do not match.");
                        $scope.userForm.confirmPassword = "";
                    }


                });

            }

        };


    })

.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        $scope.template = TemplateService.changecontent("edit-user");
        $scope.menutitle = NavigationService.makeactive("Edit-User");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        // $scope.userForm = {};
        NavigationService.getUserEditDetail($stateParams.id, function(data) {
            console.log('getUserEditDetail', data);
            $scope.userForm = data;
        });

        $scope.userSubmitForm = function(formValid) {
            console.log($scope.userForm);

            //console.log('on the user');
            if (formValid.$valid) {

                NavigationService.editProfile($scope.userForm, function(data) {

                    $scope.userForm = data.data;
                });
            }


        };
    })
    .controller('ChangePasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        $scope.template = TemplateService.changecontent("change-password");
        $scope.menutitle = NavigationService.makeactive("change-password");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.expertlogo = "";
        $scope.userlogo = "user-page";




        // $scope.userForm = {};
        NavigationService.getUserEditDetail($stateParams.id, function(data) {
            console.log('getUserEditDetail', data);
            $scope.userForm = data;
        });

        $scope.userSubmitForm = function(formValid) {
            console.log($scope.userForm);

            //console.log('on the user');
            if (formValid.$valid) {

                NavigationService.changePassword($scope.userForm, function(data) {

                    $scope.userForm = data.data;
                });
            }


        };
    })

.controller('ChangeExpertPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        $scope.template = TemplateService.changecontent("change-expert-password");
        $scope.menutitle = NavigationService.makeactive("change-expert-password");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.expertlogo = "expert-page";
        $scope.userlogo = "";



        //$scope.userForm={};

        // NavigationService.getUserEditDetail($stateParams.id, function(data) {
        //     console.log('getUserEditDetail', data);
        //     $scope.userForm = data;
        // });
        // $scope.userSubmitForm = function(formValid) {
        //     console.log($scope.userForm);
        //
        //     //console.log('on the user');
        //     if (formValid.$valid) {
        //
        //         NavigationService.changePassword($scope.userForm, function(data) {
        //
        //             $scope.userForm = data.data;
        //         });
        //     }
        //
        //
        // };
    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.userForm = {};
        $scope.userSubmitForm = function(formValid) {
            console.log($scope.userForm);
            if (formValid.$valid) {
                $scope.formComplete = true;
                NavigationService.ContactSubmit($scope.userForm, function(data) {
                    //console.log('userformctrl', $scope.userForm);

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
    .controller('HomeExpertCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $window) {
        $scope.template = TemplateService.changecontent("home-expert");
        $scope.menutitle = NavigationService.makeactive("Home-Expert");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "";
        $scope.home = "";
        $scope.experthome = "expert-home";



        $scope.userForm = {};
        $scope.expertSignup = function(formValid) {
            console.log('HomeExpertCtrl', $scope.userForm);
            if (formValid.$valid) {

                NavigationService.ExpertSignup($scope.userForm, function(data) {
                    // console.log($scope.userForm.password);
                    // console.log($scope.userForm.confirmPassword);
                    if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                        $scope.userForm = data.data;
                        //console.log('userformctrl', $scope.userForm);
                        $state.go("expert-profile");
                    } else {
                        $window.alert("Password do not match.");
                        $scope.userForm.confirmPassword = "";
                    }
                    //$scope.formComplete = true;


                });

            }

        };

        //
        //$scope.userForm = {};
        $scope.getLogin = function(formValid) {
            //console.log($scope.userForm);
            if (formValid.$valid) {

                NavigationService.getExpertLogin($scope.userForm, function(data) {
                    if (data.value == true) {
                        $scope.userForm = data;
                        $state.go("expert-booking");
                    } else {

                    }
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

.controller('ExpertProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $window) {
        $scope.template = TemplateService.changecontent("expert-profile");
        $scope.menutitle = NavigationService.makeactive("Expert-Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.userForm = {};
        $scope.userForm.callday = "MONDAY";

        $scope.done = function(data) {
            console.log(data);
        }

        $scope.userSubmitForm = function(formValid) {

            if (formValid.$valid) {
                NavigationService.ExpertUSerCreateSubmit($scope.userForm, function(data) {
                    //$scope.userForm=data.data;
                    //console.log('userformctrl', $scope.userForm);
                    //console.log('$scope.userForm.experienceType',$scope.userForm.experienceType);
                    // if($scope.userForm.experienceType==company)
                    // {
                    //   $scope.myexp=true;
                    // }
                    if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                        //$scope.userForm = data.data;
                        //console.log('userformctrl', $scope.userForm);
                        $state.go("expert-profile");
                    } else {
                        $window.alert("Password do not match.");
                        $scope.userForm.confirmPassword = "";
                    }
                    //$state.go("expert-profile");
                });

            }
        };

        $scope.categorydata = {};
        NavigationService.getCategory($scope.categorydata, function(data) {
            $scope.categorydata = data.data;
            console.log('$scope.categorydata', $scope.categorydata);

        });
        //
        //
        //       $scope.data = {
        //  weekdays: [
        //    {id: '1', name: 'MONDAY'},
        //    {id: '2', name: 'TUESDAY'},
        //    {id: '3', name: 'WEDNESDAY'},
        //    {id: '4', name: 'THURSDAY'},
        //    {id: '5', name: 'FRIDAY'}
        //  ],
        //  selectedOption: {id: '6', name: 'MONDAY'} //This sets the default value of the select in the ui
        //  };

        $scope.weekdays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];


        $scope.deleteCall = function(formValid) {
            NavigationService.deleteCallsData({
                id: formValid
            }, function(data) {
                console.log('delete data:', data);
            });
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


        $scope.calldetail = [];

        $scope.addCalls = function() {
            var addCalls = $scope.calldetail.length + 1;
            var matchcall = $scope.userForm.callday;
            //console.log('$scope.userForm.callday', $scope.userForm.callday);
            //console.log('$scope.calldetail', $scope.calldetail);

            console.log('after $scope.calldetail', $scope.calldetail);

            if ($scope.calldetail) {
                var foundIndex = _.findIndex($scope.calldetail, {
                    "day": $scope.userForm.callday
                })
                if (foundIndex != -1) {
                    console.log('This is already in array');
                } else {
                    $scope.calldetail.push({
                        id: '' + addCalls,
                        callTime: '',
                        day: $scope.userForm.callday,
                        fromTime: '',
                        toTime: ''
                    });
                }
            } else {
                $scope.calldetail.push({
                    id: '' + addCalls,
                    callTime: '',
                    day: $scope.userForm.callday,
                    fromTime: '',
                    toTime: ''
                });
            }

            //  });

        };

        $scope.removeCalls = function(index) {
            //var addCalls = $scope.calldetail.length + 1;
            $scope.calldetail.splice(index, 1);
        };

        //ng-if="calls.callTime=='custom' || calls.callTime=='unavailable'"

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
    .controller('WishlistCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        $scope.template = TemplateService.changecontent("wishlist");
        $scope.menutitle = NavigationService.makeactive("Wishlist");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        NavigationService.getWishlist($scope.wishlists, function(data) {
            //console.log("in edit blog");
            $scope.wishlists = data.data.shortList;
            console.log('wishlists', $scope.wishlists);
        });
    })
    .controller('SearchCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter, $stateParams) {
        $scope.template = TemplateService.changecontent("search");
        $scope.menutitle = NavigationService.makeactive("Search");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.mesg = [];
        // TemplateService.header = "./views/header2.html";

        // NavigationService.getAllExpert($scope.expertdata, function(data) {
        //     $scope.expertdata = data.data;
        //     console.log('expertdata', $scope.expertdata);
        //     NavigationService.getUser(function(logindata) {
        //         _.each($scope.expertdata, function(n) {
        //             n.showbtn = $filter('showbtn')(n._id, logindata);
        //         })
        //     })
        // });

        $scope.searchExpert = function() {
            NavigationService.getSearch($stateParams.search, function(data) {
                $scope.expertdata = data.data;
                console.log('getSearchdata', $scope.expertdata);
                NavigationService.getUser(function(logindata) {
                    _.each($scope.expertdata, function(n) {
                        n.showbtn = $filter('showbtn')(n._id, logindata);
                    })
                })
            });
        };
        $scope.searchExpert();







        $scope.addToWishlist = function(id) {
            console.log('funid', id);
            var input = {
                expertUser: id,
                timestamp: new Date()
            };
            NavigationService.getUser(function(user) {
                user.shortList.push(input);
                console.log('userid', user._id);

                delete user._id;
                NavigationService.editProfile(user, function(data) {
                    // console.log('addWishlist', data);
                    if (data.value === true) {
                        $scope.mesg.push({
                            type: 'success',
                            msg: 'added to the wishlist'
                        });
                    }
                });
            })
            $scope.mesg = [];
        };

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

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "user-page";
    $scope.start = "";

    NavigationService.getExpertProfile($stateParams.id, function(data) {
        console.log('getExpertProfile', data.data);
        $scope.expertprofile = data.data;
        console.log('$scope.expertprofile.experience', $scope.expertprofile.experience);

        //     for(i=$scope.expertprofile.experience[0];i<$scope.expertprofile.experience.length;i++)
        // {
        //   $scope.start=$scope.expertprofile.experience.startDate;
        //   console.log('start',$scope.start);
        // }
    });
    // $scope.monthdiff = function(start, end) {
    //     var tempDate = new Date(start);
    //     var monthCount = 0;
    //     while ((tempDate.getMonth() + '' + tempDate.getFullYear()) != (end.getMonth() + '' + end.getFullYear())) {
    //         monthCount++;
    //         tempDate.setMonth(tempDate.getMonth() + 1);
    //     }
    //     return monthCount + 1;
    // }


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

.controller('headerctrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, $state) {
        $(window).scrollTop(0);
    });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        $scope.menu = "menu-in";
    };
    $scope.closeMenu = function() {
        $scope.menu = "menu-out";
    };
    //
    // if($scope.userdata._id){
    //   $scope.loginuser=true;
    // }else{
    //   $state.go("login");
    // }


    $scope.userdata = {};
    NavigationService.getUser(function(data) {
        $scope.userdata = data;
        console.log('id headerctrl ', $scope.userdata._id);
        if ($scope.userdata._id) {
            $scope.userLogedin = true;
        }


        //$scope.
        // if($scope.userdata._id){
        //  $window.alert("")
        //    $scope.loginuser=true;
        //    $state.go("login");
        //  }

        console.log('getuser in headerctrl', data);
    });
    $scope.logout = function() {
        console.log("in me logout/////////////////////////////////");
        NavigationService.getLogout($scope.userdata, function(data) {
            // $scope.userdata = data;
            // console.log('headeruserdata', $scope.userdata);
        });
    }
});
