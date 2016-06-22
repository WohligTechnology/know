window.uploadurl = "http://wohlig.biz/uploadfile/upload/";
var abc = {};
var global = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui-rangeSlider', 'jkuri.timepicker', 'imageupload', 'angular-loading-bar'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "";
    $scope.home = "home-page";
    // $timeout(function () {
    //     $scope.hidePreloader();
    // }, 2000);

    $scope.freqSearch = {};
    NavigationService.getFreqSearch($scope.freqSearch, function(data) {
        $scope.freqSearch = data.data;
        console.log('$scope.freqSearch', $scope.freqSearch);

    });

    // ----for search expert------




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

    // $scope.forgotpswd = {};
    // $scope.forgotpswdClick = function(formValid) {
    //     console.log('in fun');
    //     if (formValid.$valid) {
    //
    //
    //         NavigationService.getForgotpswd($scope.forgotpswd, function(data) {
    //             $scope.forgotpswd = data.data;
    //             console.log('forgotpswd', $scope.forgotpswd);
    //         });
    //     }
    // };






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
    //
    // $scope.categorydata = {};
    // NavigationService.getCategory($scope.categorydata, function(data) {
    //     $scope.categorydata = data.data;
    //     console.log('$scope.categorydata', $scope.categorydata);
    //
    // });
    // $scope.userdata = {};
    // $scope.userForm = {};
    // $scope.addQuery = function(id, cat, needhelp) {
    //     // if(cat.$valid && needhelp.$valid) {
    //
    //     NavigationService.getUserData($scope.userdata, function(data) {
    //         $scope.userdata = data;
    //         console.log("$scope.userdata", $scope.userdata._id);
    //         NavigationService.getHelp($scope.userForm, function(data) {
    //             if (data && data.value === true) {
    //
    //                 $scope.findcat = true;
    //                 $timeout(function() {
    //                         modalInstance1.dismiss();
    //                         $timeout(function() {
    //                             $scope.findcat = "";
    //                         }, 1000)
    //
    //                     }, 2500)
    //                     //$state.reload();
    //
    //             } else {
    //                 $scope.nouser = true;
    //                 $timeout(function() {
    //                         modalInstance1.dismiss();
    //                         $timeout(function() {
    //                             $scope.nouser = "";
    //                         }, 1000)
    //                     }, 2500)
    //                     //$state.reload();
    //             }
    //
    //         });
    //
    //
    //
    //     });
    //     $scope.userForm={};
    //     // }
    // };
    // var modalInstance1 = '';
    // $scope.open4 = function(size) {
    //     modalInstance1 = $uibModal.open({
    //         animation: $scope.animationsEnabled,
    //         templateUrl: 'views/modal/needhelp.html',
    //         //controller: 'HomeCtrl',
    //         size: size,
    //         scope: $scope,
    //         //           myModalTimeout: setTimeout(function(){
    //         //      $("#needhelp.html").hide();
    //         //  }, 3000)
    //         // resolve: {
    //         //     items: function() {
    //         //         return $scope.items;
    //         //     }
    //         // }
    //     });
    //
    // };
    //
    // $scope.toggleAnimation = function() {
    //     $scope.animationsEnabled = !$scope.animationsEnabled;
    // };

})

.controller('UserBookingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("user-booking");
    $scope.menutitle = NavigationService.makeactive("User-Booking");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // TemplateService.header = "./views/header2.html";
    $scope.expertlogo = "";
    $scope.userlogo = "user-page";
    $scope.userBookings = {};
    $scope.userBookingsubmit = {};
    $scope.userBooking = {};
    $scope.userpay = {};

    $scope.userBook = function(status, user) {
        console.log("here");
        $scope.userBookings.status = status;
        $scope.userBookings.from = user;
        NavigationService.getUserBooking($scope.userBookings, function(data) {
            console.log(data);
            $scope.userBooking = data.data;
            if (data.data == "") {
                console.log('this iss null');
                $scope.nodata = true;
            }
            console.log('userBooking', $scope.userBooking);
        });
    }

    $scope.userBook('accept', 'user');
    $scope.userpay.from = "user";
    $scope.getPay = function(status, id, expert) {
        $scope.userpay._id = id;
        $scope.userpay.status = status;
        console.log(expert);
        NavigationService.getExpertProfile(expert, function(data2) {
          console.log("/////////////////////////////",data2);
            $scope.userpay.expertemail = data2.data.email;
            $scope.userpay.expertname = data2.data.firstName;
            NavigationService.getPayment($scope.userpay, function(data) {
                if (data.value != false) {
                    $scope.userBook('accept', 'user');
                }
            });
        });
    };
})

.controller('ExpertBookingCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        $scope.template = TemplateService.changecontent("expert-booking");
        $scope.menutitle = NavigationService.makeactive("Expert-Booking");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "expert-page";
        $scope.userlogo = "";
        $scope.bookexperts = {};
        $scope.expertBook = function(status, expert) {
            console.log(status);
            $scope.bookexperts.status = status;
            $scope.bookexperts.from = expert;
            NavigationService.getExpertBooking($scope.bookexperts, function(data) {
                console.log(data);
                $scope.bookexpert = data.data;
                console.log('bookexpert', $scope.bookexpert);
            });
        }

        $scope.sendData = {};
        $scope.sendData.from = "expert";
        $scope.acceptRequest = function(val, id, user) {
            NavigationService.getOneUser(user, function(data2) {
                if (val == 1) {
                    $scope.sendData.status = "accept";
                    $scope.sendData._id = id;
                } else {
                    $scope.sendData.status = "reject";
                    $scope.sendData._id = id;
                }
                $scope.sendData.useremail = data2.data.email;
                $scope.sendData.username = data2.data.firstName;
                NavigationService.acceptRequest($scope.sendData, function(data) {
                    console.log('userdata', $scope.userdata);
                    if (data.value != false) {
                        $scope.expertBook('pending', 'expert');
                    }
                });
            });
        };
        $scope.expertBook('pending', 'expert');
    })
    .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('BookNowCtrl', function($scope, TemplateService, NavigationService, $timeout, $log, $window, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("book-now");
        $scope.menutitle = NavigationService.makeactive("Book-Now");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";

        $scope.ptions = {
            minDate: new Date()
        }

        $scope.duration = ['30 Min', '60 Min', '90 Min', '120 Min'];

        $scope.userForm = {};
        $scope.userSubmitForm = function(formValid) {
            if (formValid.$valid) {
                $scope.userForm.expert = $stateParams.id;
                NavigationService.getExpertProfile({
                    _id: $stateParams.id
                }, function(data2) {
                    if (data2.value != false) {
                        $scope.userForm.expertemail = data2.data.email;
                        $scope.userForm.expertname = data2.data.firstName;
                        NavigationService.getBooking($scope.userForm, function(data) {
                            $scope.userForm = data.data;
                            $scope.userForm.bookDate = new Date();
                            $scope.userForm.bookTime = new Date();
                            $scope.userForm.callDuration = new Date();
                            console.log('booknow', data.value);
                            if (data.value == true) {
                                $scope.formComplete = true;
                                $timeout(function() {
                                    $state.go("user-booking");
                                    $timeout(function() {
                                        $scope.formComplete = "";
                                    }, 2000)

                                }, 3000)
                                console.log('booknow', $scope.userForm);
                            } else {
                                if (data.data == 'User not loggd-in') {
                                    $scope.nouser = true;
                                    $timeout(function() {
                                        $state.reload();
                                        $timeout(function() {
                                            $scope.formComplete = "";
                                        }, 2000)

                                    }, 3000)

                                } else {
                                    $scope.alreadyBooked = true;
                                    $timeout(function() {
                                        $state.reload();
                                        $timeout(function() {
                                            $scope.formComplete = "";
                                        }, 2000);
                                    }, 3000);
                                }
                            }
                        });
                    }
                });
            }
        };

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
    .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $interval) {
        $scope.template = TemplateService.changecontent("login");
        $scope.menutitle = NavigationService.makeactive("Login");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.mesg = [];
        $scope.userForm = {};

        //-------------Social Login------------------------------

        $scope.facebookLogin = function() {
            window.location.href = "http://chaitalee.com/user/loginFacebook";
        }
        $scope.googleLogin = function() {
                window.location.href = "http://chaitalee.com/user/loginGoogle";
            }
            //-------------------------------------------------------

        $scope.getLogin = function(formValid) {
            //console.log($scope.userForm);
            if (formValid.$valid) {

                NavigationService.getUserLogin($scope.userForm, function(data) {
                    if (data.value == true) {
                        $scope.userForm = data;
                        $state.go("home");
                    } else {
                        $scope.mesg.push({
                            type: 'danger',
                            msg: 'Incorrect Email or Password'
                        });

                        $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }

                    }

                });

            }
            $scope.mesg = [];
        };

        $scope.forgotpswd = {};
        $scope.forgotpswdClick = function(formValid) {
            console.log("//////", formValid);
            NavigationService.getForgotpswd(formValid, function(data) {
                $scope.forgotpswd = data.data;
                console.log('forgotpswd', $scope.forgotpswd);
                if ($scope.forgotpswd.comment == 'User not found') {
                    $scope.mesg.push({
                        type: 'danger',
                        msg: 'Incorrect Email'
                    });

                    $scope.closeAlert = function(index) {
                        $scope.mesg.splice(index, 1);
                    }

                }
            });
            $scope.mesg = [];
        };

        $scope.open3 = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal/forgetpassword.html',
                //controller: 'HomeCtrl',
                size: size,
                scope: $scope
            });

        };



    })
    .controller('SignupCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $window) {
        $scope.template = TemplateService.changecontent("signup");
        $scope.menutitle = NavigationService.makeactive("Signup");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.mesg = [];
        $scope.userForm = {};
        $scope.userSignup = function(formValid) {
            console.log('SignupCtrl', $scope.userForm);
            if (formValid.$valid) {
                if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                    NavigationService.Signup($scope.userForm, function(data) {
                        $scope.userForm = data.data;
                        if (data.value == true) {
                            $scope.formComplete = true;

                            $timeout(function() {
                                $state.go("home");
                            }, 1000)



                        } else {
                            $scope.alreadyExist = true;
                            $timeout(function() {
                                $state.go("login");
                            }, 1000)
                        }
                    });
                } else {
                    $scope.mesg.push({
                        type: 'success',
                        msg: 'Password do not match.'
                    });
                    $scope.closeAlert = function(index) {
                        $scope.mesg.splice(index, 1);
                    }
                    $scope.userForm.confirmPassword = "";
                }

            }
            $scope.mesg = [];
        };



        // $scope.userSignup = function(formValid) {
        //     console.log('SignupCtrl', $scope.userForm);
        //     if (formValid.$valid) {
        //
        //         NavigationService.Signup($scope.userForm, function(data) {
        //           if(data.value==true){
        //             console.log($scope.userForm.password);
        //             console.log($scope.userForm.confirmPassword);
        //             if ($scope.userForm.password == $scope.userForm.confirmPassword) {
        //                 $scope.userForm = data.data;
        //                 //console.log('userformctrl', $scope.userForm);
        //                 $state.go("home");
        //             } else {
        //                 $scope.mesg.push({
        //                     type: 'success',
        //                     msg: 'Password do not match.'
        //                 });
        //                 $scope.closeAlert = function(index) {
        //                     $scope.mesg.splice(index, 1);
        //                 }
        //                 $scope.userForm.confirmPassword = "";
        //             }
        //           }else{
        //             $scope.alreadyExist=true;
        //           }
        //
        //
        //
        //         });
        //
        //     }
        //     $scope.mesg = [];
        // };


    })

.controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
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
                $scope.formComplete = true;
                $timeout(function() {
                    $state.reload();
                    $timeout(function() {
                        $scope.formComplete = "";
                    }, 2000)

                }, 3000)
                NavigationService.editProfile($scope.userForm, function(data) {

                    $scope.userForm = data.data;
                });
            }
        };
        //
        // $scope.getreload=function(){
        //   $state.reload();
        // };
    })
    .controller('ChangePasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("change-password");
        $scope.menutitle = NavigationService.makeactive("change-password");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.mesg = [];



        // $scope.userForm = {};
        NavigationService.getUserEditDetail($stateParams.id, function(data) {
            console.log('getUserEditDetail', data);
            $scope.userForm = data;
        });

        $scope.userSubmitForm = function(formValid) {
            console.log('in function');

            //console.log('on the user');
            if (formValid.$valid) {
                console.log('in validate');
                NavigationService.changePassword($scope.userForm, function(data) {
                    console.log('$scope.userForm', $scope.userForm);
                    if (data.value == true) {
                        $scope.changpswd = true;
                        $scope.userForm = data.data;
                        //$state.go("home");
                    } else {
                        $scope.mesg.push({
                            type: 'danger',
                            msg: 'Incorrect Password'
                        });
                        $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }
                    }
                });
            }
            $scope.mesg = [];
        };
    })
    .controller('ChangeExpertPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("change-expert-password");
        $scope.menutitle = NavigationService.makeactive("change-expert-password");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.mesg = [];



        // $scope.userForm = {};
        NavigationService.getExpertEditDetail($stateParams.id, function(data) {
            console.log('getUserEditDetail', data);
            $scope.userForm = data;
        });

        $scope.userSubmitForm = function(formValid) {
            console.log('in function');

            //console.log('on the user');
            if (formValid.$valid) {
                console.log('in validate');
                NavigationService.changeExpertPassword($scope.userForm, function(data) {
                    console.log('$scope.userForm', $scope.userForm);
                    if (data.value == true) {
                        $scope.changpswd = true;
                        $scope.userForm = data.data;
                        //$state.go("home");
                    } else {
                        $scope.mesg.push({
                            type: 'danger',
                            msg: 'Incorrect Password'
                        });
                        $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }
                    }
                });
            }
            $scope.mesg = [];
        };
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


        $scope.mesg = [];
        $scope.userForm = {};
        $scope.expertSignup = function(formValid) {
            if (formValid.$valid) {
                console.log('HomeExpertCtrl', $scope.userForm);
                if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                    NavigationService.ExpertSignup($scope.userForm, function(data) {
                        $scope.userForm = data.data;
                        if (data.value == true) {
                            // $timeout(function () {
                            $scope.formComplete = true;

                            $timeout(function() {
                                $state.go("expert-profile");
                            }, 1000)

                            // }, 1000);

                            // $scope.formComplete = true;


                        } else {
                            $scope.expertAlreadyExist = true;
                            $timeout(function() {
                                $scope.expertAlreadyExist = false;
                                // $state.go("home-expert");
                            }, 5000)
                        }

                        // console.log($scope.userForm.password);
                        // console.log($scope.userForm.confirmPassword);

                    });

                    //console.log('userformctrl', $scope.userForm);
                    // $state.go("expert-profile");
                } else {
                    $scope.mesg.push({
                        type: 'success',
                        msg: 'Password do not match.'
                    });
                    $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }
                        //$window.alert("Password do not match.");
                    $scope.userForm.confirmPassword = "";
                }




            }
            $scope.mesg = [];
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
                        $scope.mesg.push({
                            type: 'danger',
                            msg: 'Incorrect Email or Password'
                        });

                        $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }

                    }
                });
                $scope.mesg = [];
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
        global.open = $scope.openform;
    })

.controller('ExpertProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $window, $stateParams) {
        $scope.template = TemplateService.changecontent("expert-profile");
        $scope.menutitle = NavigationService.makeactive("Expert-Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.userForm = {};
        $scope.userForm.callday = "MONDAY";
        $scope.userForm.sameaddress = false;
        $scope.calldetail = [];

        //
        // if(document.getElementById("RadioBtn").checked){
        //   $scope.sameaddress=true;
        // }else{
        //     $scope.sameaddress=false;
        // }

        $scope.changeAddress = function(val) {
            if (val) {
                $scope.userForm.accountHolderAddress = $scope.userForm.addressDetails;
            } else {
                $scope.userForm.accountHolderAddress = '';
            }
        }


        $scope.done = function(data) {
            console.log(data);
        }
        $scope.oldCallSettings = [];

        $scope.editExpert = function() {
            NavigationService.getExpertEditDetail($stateParams.id, function(data) {
                console.log('getUserEditDetail', data);
                $scope.publilink = data.publicationLinks;
                $scope.edudetail = data.educationalQualification;
                $scope.experiencedetail = data.experience;
                if (data.experience) {
                    $scope.experiencedetail = data.experience;
                    _.each($scope.experiencedetail, function(n) {
                        n.startDate = new Date(n.startDate);
                        n.endDate = new Date(n.endDate);
                    });
                } else {
                    $scope.experiencedetail = [];
                }
                if (data.callSettings && data.callSettings.length > 0) {
                    $scope.calldetail = data.callSettings;

                } else {
                    $scope.calldetail = [];
                }
                $scope.oldCallSettings = _.cloneDeep($scope.calldetail);



                console.log(data.experience);
                //abc = $scope.experiencedetail;
                // for (var i = 0; i < $scope.experiencedetail.length; i++) {
                //     console.log($scope.experiencedetail.length);
                //     $scope.experiencedetail[i].popupModel = false;
                //     console.log("Experience", $scope.experiencedetail[i]);
                //     $scope.experiencedetail[i].startDate = new Date($scope.experiencedetail[i].startDate);
                //     console.log("startDate", $scope.experiencedetail[i].startDate);
                //     $scope.experiencedetail[i].endDate = new Date($scope.experiencedetail[i].endDate);
                // }
                console.log($scope.experiencedetail);

                $scope.moreAwards = data.awards;
                $scope.moreVideos = data.videoLinks;
                $scope.morephotos = data.addPhotos;

                $scope.userForm = data;
                $scope.userForm.callday = "MONDAY";
                $scope.userForm.sameaddress = false;
            });
        };
        $scope.editExpert();

        $scope.mesg = [];

        $scope.userSubmitForm = function(formValid) {
            if (formValid.$valid) {
                console.log('formValid', formValid);
                //$scope.formComplete = true;
                // console.log('start date',$scope.experi.startDate);
                // console.log('end date',$scope.experi.endDate);
                console.log("////", $scope.userForm);
                // for(var i=$scope.userForm.experience;i<)
                _.forEach($scope.userForm.experience, function(n) {
                    console.log('n.endDate', n.endDate);
                    if (n.endDate == 'Thu Jan 01 1970 05:30:00 GMT+0530 (IST)' || n.endDate == null) {
                        n.endDate = new Date();
                        console.log('n.endDate new date', n.endDate);
                    }
                });
                if ($scope.userForm.experience)
                    if ($scope.userForm.callTime == "weekdays") {
                        $scope.calldetail = [];
                        $scope.userForm.callSettings = [];
                    } else if ($scope.userForm.callTime == "weekends") {
                    $scope.calldetail = [];
                    $scope.userForm.callSettings = [];
                }
                console.log("////", $scope.userForm);
                NavigationService.ExpertUSerCreateSubmit($scope.userForm, function(data) {
                    console.log($scope.userForm);
                    if (data.value == true) {
                        console.log('my console', data);
                        if (formValid.$name == 'user1') {
                            $scope.mesg.push({
                                type: 'success',
                                msg: 'Submitted Successfully, Thank You!'
                            });
                            $scope.closeAlert = function(index) {
                                $scope.mesg.splice(index, 1);
                            }
                        }

                    }

                });

            }
            $scope.mesg = [];
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
        $scope.unavailWeekdays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];


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


        //console.log('$scope.publilink.length-1', $scope.publilink.length - 1);
        //  if ($scope.publilink[0].name && ($scope.publilink[1].name != 'null' || $scope.publilink[1].name != 'undefined')) {
        //}

        //  do{
        $scope.addlink = function() {
            //console.log('$scope.publilink[0]', $scope.publilink[0].name);
            var addlinks = $scope.publilink.length + 1;


            $scope.publilink.splice(0, 0, {
                'id': '' + addlinks
            });

        };
        //
        // }while ($scope.publilink[0].name != 'null');
        // console.log("$scope.publilink Arrayyyyyyyyyyyyyyyyyyyyyyyyy",$scope.publilink[0]);



        $scope.edudetail = [{
            title: '',
            name: '',
            year: Date(),
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
            startDate: Date(),
            endDate: Date(),
            image1: ''
        }];

        $scope.moreExperience = function() {
            var addexperience = $scope.experiencedetail.length + 1;
            $scope.experiencedetail.splice(0, 0, {
                'id': '' + addexperience
            });
        };

        $scope.removeAllDays = function() {
            $scope.calldetail = _.cloneDeep($scope.oldCallSettings);
        };


        $scope.addCalls = function() {
            var addCalls = $scope.calldetail.length + 1;
            var matchcall = $scope.userForm.callday;
            //console.log('$scope.userForm.callday', $scope.userForm.callday);
            //console.log('$scope.calldetail', $scope.calldetail);

            console.log('after $scope.calldetail', $scope.calldetail);

            // if ($scope.calldetail) {
            var foundIndex = _.findIndex($scope.calldetail, {
                "day": $scope.userForm.callday
            })
            if (foundIndex != -1) {
                console.log('This is already in array');
            } else {
                $scope.calldetail.push({
                    id: '' + addCalls,
                    callTime: $scope.userForm.callTime,
                    day: $scope.userForm.callday,
                    fromTime: new Date(2016, 0, 0, 0, 0, 0),
                    toTime: new Date(2016, 0, 0, 0, 0, 0)
                });
            }
            // } else {
            //     $scope.calldetail.push({
            //         id: '' + addCalls,
            //         callTime: '',
            //         day: $scope.userForm.callday,
            //         fromTime: '',
            //         toTime: ''
            //     });
            // }

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

        $scope.morephotos = [{
            image2: ''
        }];

        $scope.addphotos = function() {
            var addphotos = $scope.morephotos.length + 1;
            $scope.morephotos.splice(0, 0, {
                'id': '' + addphotos
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

        $scope.open1 = function(popupmod) {
            console.log(popupmod);
            popupmod = true;
            console.log(popupmod);

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
    .controller('FaqExpertCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("faq-expert");
        $scope.menutitle = NavigationService.makeactive("FAQ-Expert");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })
    .controller('WishlistCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("wishlist");
        $scope.menutitle = NavigationService.makeactive("Wishlist");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.showWishlist = function() {
            NavigationService.getWishlist($scope.wishlists, function(data) {
                //console.log("in edit blog");
                $scope.wishlists = data.data.shortList;
                if (data.data.shortList == "") {
                    console.log('this iss null');
                    $scope.nodata = true;
                }
                console.log('wishlists', $scope.wishlists);
            });
        };


        NavigationService.getExpertProfile($stateParams.id, function(data) {
            console.log('getExpertProfile', data.data);
            $scope.expertprofile = data.data;
            // console.log('$scope.expertprofile.experience', $scope.expertprofile.experience);
        });
        $scope.userdata = {};
        NavigationService.getUser(function(data) {
            $scope.userdata = data;
        });

        $scope.removeWishlist = function(id) {
            var index = _.findIndex($scope.userdata.shortList, function(o) {
                return o.expertUser == id;
            });
            if (index != -1) {
                $scope.userdata.shortList.splice(index, 1);
            }
            NavigationService.editProfile($scope.userdata, function(data) {
                if (data.value) {
                    $state.reload();
                } else {

                }
            });
            // NavigationService.deleteWishlist({
            //     id: formValid
            // }, function(data) {
            //     console.log('delete data:', data);
            //     if (data.value === true) {
            //
            //         $scope.showWishlist();
            //     }
            //
            // });
        };
        $scope.showWishlist();
    })
    .controller('SearchCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("search");
        $scope.menutitle = NavigationService.makeactive("Search");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.selectedAll = {};
        $scope.selectedAll.expertise = true;
        $scope.selectedAll.location = true;


        $scope.checkAll = function() {
            // if ($scope.selectedAll) {
            //     $scope.selectedAll = false;
            // } else {
            //     $scope.selectedAll = true;
            // }
            var toggleStatus = $scope.selectedAll.expertise;
            _.forEach($scope.expertiseArr, function(expertise) {
                expertise.model = toggleStatus;
            });
            $scope.searchExpert();

        };

        $scope.checkAllLocation = function() {
            // if ($scope.selectedAllLocation) {
            //     $scope.selectedAllLocation = false;
            // } else {
            //     $scope.selectedAllLocation = true;
            // }
            var toggleStatusLocation = $scope.selectedAll.location;
            _.forEach($scope.locationArr, function(location) {
                location.model = toggleStatusLocation;
            });
            $scope.searchExpert();

        };
        // $scope.selectedAllLocation = true;
        // $scope.checkAllLocation = function() {
        //     if ($scope.selectedAllLocation) {
        //         $scope.selectedAllLocation = false;
        //     } else {
        //         $scope.selectedAllLocation = true;
        //     }
        //     _.forEach($scope.locationArr, function(location) {
        //         location.model = $scope.selectedAllLocation;
        //     });
        //
        // };



        $scope.expertdata = {
            search: $stateParams.search
        };
        $scope.expertdata2 = {
            search: $stateParams.search
        };
        $scope.expertiseArr = [];
        $scope.locationArr = [];
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
        $scope.mesg = [];

        $scope.filter = {};
        $scope.filter.expert = [];
        $scope.filter.location = [];
        $scope.pushExpertise = function(val, key) {
            if (key == 13) {
                $scope.expertiseFilter.expertise.unshift(val);

                //$scope.searchExpert();
            }
        }
        $scope.filterLocation = function(check, text) {
            console.log(check + "  " + text);
            if (check) {
                $scope.filter.expert.push(text);
            } else {
                $scope.filter.expert.splice(_.findIndex($scope.filter.expert, function(key) {
                    return key == text;
                }), 1);
            }
            console.log($scope.filter.expert);
        };
        $scope.expertModel = [];
        $scope.pushLocation = function(val, key) {
            if (key == 13) {
                $scope.expertiseFilter.location.unshift(val);
                $scope.filterlocation = $scope.expertiseFilter.location;



                // NavigationService.getSearchLocation($stateParams.search,$scope.filterlocation, function(data) {
                //     if (data && data.data && data.data.data) {
                //         $scope.expertdata = data.data.data;
                //         $scope.expertiseFilter = data.data.arr;
                //
                //         console.log('arr', data.data.arr.expertise);
                //         //console.log('$scope.expertdata.length',$scope.expertdata.length);
                //         if ($scope.expertdata.length == 0) {
                //             //console.log('$scope.expertdata.length22',$scope.expertdata.length);
                //             $scope.notfound = true;
                //         } else {
                //             console.log('getSearchdata111', $scope.expertdata);
                //             NavigationService.getUser(function(logindata) {
                //                 _.each($scope.expertdata, function(n) {
                //                     n.showbtn = $filter('showbtn')(n._id, logindata);
                //
                //                 })
                //             });
                //         }
                //     } else {
                //         $scope.notfound = true;
                //     }
                // });
                //$scope.searchExpert();
            }
        }

        $scope.priceFilter = {
            range: {
                min: 100,
                max: 10000,
            },
            minPrice: undefined,
            maxPrice: undefined
        };


        $scope.searchExpert = function() {

            var x = 0;
            _.each($scope.expertiseArr, function(n) {
                if (!n.model || n.model == false) {
                    $scope.selectedAll.expertise = false;
                } else if (n.model == true) {
                    x++;
                }
            })
            if (x == $scope.expertiseArr.length) {
                $scope.selectedAll.expertise = true;
            }
            var y = 0;
            _.each($scope.locationArr, function(n) {
                if (!n.model || n.model == false) {
                    $scope.selectedAll.location = false;
                } else if (n.model == true) {
                    y++;
                }
            })
            if (y == $scope.locationArr.length) {
                $scope.selectedAll.location = true;
            }

            var dataToSend = {
                search: $scope.expertdata2.search,
                areaofexpert: [],
                location: [],
                minprice: $scope.priceFilter.minPrice,
                maxprice: $scope.priceFilter.maxPrice,
            };
            dataToSend.location = _.map(_.filter($scope.locationArr, function(n) {
                return n.model
            }), 'value');

            dataToSend.areaofexpert = _.map(_.filter($scope.expertiseArr, function(n) {
                return n.model
            }), 'value');

            NavigationService.getSearch(dataToSend, function(data) {
                if (data && data.data && data.data.data) {
                    $scope.notfound = false;
                    $scope.expertdata = data.data.data;

                    $scope.expertiseFilter = data.data.arr;

                    console.log(data.data.data);
                    var min = _.minBy(data.data.data, 'priceForService').priceForService;

                    var max = _.maxBy(data.data.data, 'priceForService').priceForService;

                    console.log(min, max);

                    if ($scope.expertiseArr.length == 0 && $scope.locationArr.length == 0) {
                        $scope.priceFilter = {
                            range: {
                                min: min,
                                max: max,
                            },
                            minPrice: min,
                            maxPrice: max
                        };
                    }


                    if ($scope.expertiseArr.length == 0) {
                        _.each(data.data.arr.expertise, function(n) {
                            $scope.expertiseArr.push({
                                value: n,
                                model: true
                            });
                        });
                    }
                    if ($scope.locationArr.length == 0) {
                        _.each(data.data.arr.location, function(n) {
                            $scope.locationArr.push({
                                value: n,
                                model: true
                            });
                        });
                    }

                    //console.log('$scope.expertdata.length',$scope.expertdata.length);
                    if ($scope.expertdata.length == 0) {
                        //console.log('$scope.expertdata.length22',$scope.expertdata.length);
                        $scope.notfound = true;
                    } else {
                        console.log('getSearchdata111', $scope.expertdata);
                        NavigationService.getUser(function(logindata) {
                            _.each($scope.expertdata, function(n) {
                                n.showbtn = $filter('showbtn')(n._id, logindata);

                            })
                        })

                    }
                } else {
                    $scope.notfound = true;
                }
            });

        };
        $scope.searchExpert();

        $scope.mesg = [];

        $scope.addToWishlist = function(id) {

            console.log('funid', id);
            var input = {
                expertUser: id,
                timestamp: new Date()
            };
            NavigationService.getUser(function(user) {
                $scope.emptycheck = _.isEmpty(user);
                if ($scope.emptycheck == false) {
                    console.log('user in search', user);
                    user.shortList.push(input);
                    delete user._id;
                    NavigationService.editProfile(user, function(data) {
                        if (data.value === true) {
                            $scope.mesg.push({
                                type: 'success',
                                msg: 'Added To Your Shortlist'
                            });
                            NavigationService.getUser(function(logindata) {
                                _.each($scope.expertdata, function(n) {
                                    n.showbtn = $filter('showbtn')(n._id, logindata);

                                })
                            })
                        }
                        $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }
                    });
                    $scope.mesg = [];
                } else {
                    $scope.noLogin = true;
                    console.log('user is not here');
                    $scope.mesg.push({
                        type: 'success',
                        msg: 'Please Login to Shortlist'
                    });
                    $scope.closeAlert = function(index) {
                            $scope.mesg.splice(index, 1);
                        }
                        //
                }
                //
            })
            $scope.mesg = [];
        };





        // default the user's values to the available range
        $scope.userMinPrice = $scope.minPrice;
        $scope.userMaxPrice = $scope.maxPrice;
    })

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "user-page";
    $scope.start = "";

    $scope.expertdata2 = {
        search: ""
    };

    NavigationService.getExpertProfile($stateParams.id, function(data) {
        console.log('getExpertProfile', data.data);
        $scope.expertprofile = data.data;
        console.log('$scope.expertprofile.experience', $scope.expertprofile.experience);
        if (data) {
            var length = $scope.expertprofile.experience.length;
            // console.log('length',length);
            for (var i = 0; i < length; i++) {
                var oneDay = 24 * 60 * 60 * 1000;
                var startdt = new Date($scope.expertprofile.experience[i].startDate);
                var enddt = new Date($scope.expertprofile.experience[i].endDate);
                var diffDays = Math.round(Math.abs((startdt.getTime() - enddt.getTime()) / (oneDay)));
                console.log(diffDays);
                var diffDays = parseInt(diffDays);
                console.log('diffDays', diffDays);
                var months = Math.floor(diffDays / 31);
                console.log('months', months);
                $scope.expertprofile.experience[i].duration = months;

            };
        }



    });


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

    $scope.animationsEnabled = true;
    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/day.html',
            controller: 'ProfileCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

    };
})

.controller('headerctrl', function($scope, TemplateService, NavigationService, $state, $rootScope, $uibModal, $timeout) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, $state, $uibModal, $timeout) {
        $(window).scrollTop(0);
    });
    $scope.menu = "menu-out";
    $scope.getMenu = function() {
        $(".side-menu").addClass("menu-in");
        $(".side-menu").removeClass("menu-out");
    };
    $scope.closeMenu = function() {
        $(".side-menu").removeClass("menu-in");
        $(".side-menu").addClass("menu-out");
    };

    $(".template.content").click(function() {
        $(".side-menu").removeClass("menu-in");
        $(".side-menu").addClass("menu-out");
    });
    // $scope.fromUrl = $state.

    $scope.becomeExpertBtn = function() {
        NavigationService.getUser(function(data) {
            // console.log('id',data._id);

            // $scope.userobj=angular.isObject(data);
            // console.log('$scope.userobj',$scope.userobj);
            if (!data._id) {
                $state.go('home-expert');
            } else {

            }
        });

    };

    $scope.newsletter = {};

    $scope.goToLogin = function() {

        if ($state.current.name == "home-expert") {
            global.open('Login');
        } else if ($state.current.name == "home") {
            console.log("Getting");
            $state.go("login");
        } else {
            console.log("Getting");
        }
    };

    $scope.newsletterSubmit = function(data) {
        console.log('newsletterSubmitd', data);
        if (data) {
            NavigationService.getNewsletter($scope.newsletter, function(data) {
                $scope.newsletter = data.data;
                console.log('newsletter', $scope.newsletter);
                //$state.go("home");
            });
        } else {
            // $scope.newsletter.comment = "incorrectEmail";
            // $scope.newsletter.message = "incorrectEmail";
        }

    };




    // --------User Login----------
    $scope.userdata = {};
    NavigationService.getUser(function(data) {
        if (data._id) {
            $scope.userdata = data;
            $scope.userLogedin = true;
            NavigationService.getNotification({
                from: "user"
            }, function(data) {
                $scope.notificationdata = data.data;
                console.log('$scope.notificationdata user', $scope.notificationdata);
            });
        } else {
            $scope.userNotLogedin = true;
            if (window.location.href.indexOf('user-') != -1) {
                $state.go('home');
            }
        }
    });

    // --------Expert Login----------
    NavigationService.getExpert(function(data) {
        console.log('false');
        if (data._id) {
            $scope.userdata = data;
            $scope.expertLogedin = true;
            NavigationService.getNotification({
                from: "expert"
            }, function(data) {
                $scope.notificationdata = data.data;
                console.log('$scope.notificationdata expert', $scope.notificationdata);
            });
        } else {
            $scope.expertNotLogedin = true;
            if (window.location.href.indexOf('expert-') != -1) {
                $state.go('home');
            }
        }
    });
    $scope.userLogout = function() {
        //$state.go('login');
        NavigationService.getUserLogout($scope.userdata, function(data) {
            // if(id==data._id){
            if (data.value == true) {

                $scope.userNotAvail = true;
                console.log('true');
                if (window.location.href.indexOf('home')) {

                }
            }
        });
    };
    $scope.expertLogout = function() {
        //$state.go('home-expert');
        console.log("in me expert logout/////////////////////////////////");
        NavigationService.getExpertLogout($scope.userdata, function(data) {
            console.log(data);
            if (data.value == true) {

                $scope.expertNotAvail = true;
                console.log('trueeeeeeeeeeeeeeeee');
                if (window.location.href.indexOf('home')) {

                }
            }
        });
    };


    // -------------------for need help-------------------------------

    $scope.categorydata = {};
    NavigationService.getCategory($scope.categorydata, function(data) {
        $scope.categorydata = data.data;
        console.log('$scope.categorydata', $scope.categorydata);

    });
    $scope.userdata = {};
    $scope.userForm = {};
    $scope.addQuery = function(id, cat, needhelp, formvalid) {
        console.log('formvalid', formvalid);
        if (formvalid.$valid) {

            NavigationService.getUserData($scope.userdata, function(data) {
                $scope.userdata = data;
                console.log("$scope.userdata", $scope.userdata._id);
                NavigationService.getHelp($scope.userForm, function(data) {
                    if (data && data.value === true) {

                        $scope.findcat = true;
                        $timeout(function() {
                                modalInstance1.dismiss();
                                $timeout(function() {
                                    $scope.findcat = "";
                                }, 2000)

                            }, 3000)
                            //$state.reload();

                    } else {
                        $scope.nouser = true;
                        $timeout(function() {
                                modalInstance1.dismiss();
                                $timeout(function() {
                                    $scope.nouser = "";
                                }, 2000)
                            }, 3000)
                            //$state.reload();
                    }

                });


            });
            $scope.userForm = {};
        }
    };

    var modalInstance1 = '';
    $scope.open4 = function(size) {
        modalInstance1 = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/needhelp.html',
            //controller: 'HomeCtrl',
            size: size,
            scope: $scope,
            //           myModalTimeout: setTimeout(function(){
            //      $("#needhelp.html").hide();
            //  }, 3000)
            // resolve: {
            //     items: function() {
            //         return $scope.items;
            //     }
            // }
        });

    };

    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    // --------------------------------------End need Help---------------------------------------------
});
