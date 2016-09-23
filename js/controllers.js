window.uploadurl = "http://wohlig.biz/uploadfile/upload/";
var abc = {};
var global = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui-rangeSlider', 'jkuri.timepicker', 'imageupload', 'angular-loading-bar', 'ui.select'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "";
    $scope.home = "home-page";

    $scope.categorydata = {};
    NavigationService.getCategory($scope.categorydata, function(data) {
        $scope.categorydata = data.data;
        console.log('$scope.categorydata', $scope.categorydata);
    });
    $scope.freqSearch = {};
    NavigationService.getFreqSearch($scope.freqSearch, function(data) {
        $scope.freqSearch = data.data;
        console.log('$scope.freqSearch', $scope.freqSearch);

    });
    $scope.changeToSearchPage = function(search) {
        console.log(search);
        $state.go('search', {
            search: search
        });
    }

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
    }
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
            }
            console.log('userBooking', $scope.userBooking);
        });
    }
    $scope.mesg = [];
    $scope.selectOnce = false;
    $scope.userBook('accept', 'user');
    $scope.getPay = function(booking, val) {
        var currentDate = new Date();
        var callTime = new Date(booking.callTime);
        if (callTime > currentDate) {
            console.log("in me");
            document.getElementById(val).disabled = true;
            booking.status = "paid";
            booking.from = "user";
            NavigationService.payNow(booking, function(data) {
                console.log(data);
                var win = window.open(data.data);
                var closeInterval = setInterval(function() {
                    NavigationService.getSingleBooking(booking._id, function(singleBooking) {
                        console.log(singleBooking);
                        console.log($scope.userpay);
                        if (singleBooking.value) {
                            if (singleBooking.data.status == "paid") {
                                clearInterval(closeInterval);
                                win.close();
                                if ($scope.userpay.status == 'paid') {
                                    $scope.selectOnce = true;
                                    $scope.mesg.push({
                                        type: 'success',
                                        msg: 'Your reply send to the Expert'
                                    });
                                    $scope.closeAlert = function(index) {
                                        $scope.mesg.splice(index, 1);
                                    }
                                }
                                document.getElementById(val).disabled = false;
                            } else if (singleBooking.data.status == "failure") {
                                clearInterval(closeInterval);
                                win.close();
                                $scope.selectOnce = true;
                                $scope.mesg.push({
                                    type: 'danger',
                                    msg: 'Your payment failed'
                                });
                                $scope.closeAlert = function(index) {
                                    $scope.mesg.splice(index, 1);
                                }
                                document.getElementById(val).disabled = false;
                            }
                        }
                    });
                }, 1000);
            });
        } else {
            $scope.selectOnce = true;
            console.log($scope.selectOnce);
            $scope.mesg.push({
                type: 'danger',
                msg: 'Your call time is expired'
            });
            $scope.closeAlert = function(index) {
                $scope.mesg.splice(index, 1);
            }
        }
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
    $scope.mesg = [];
    $scope.sendData = {};
    $scope.sendData.from = "expert";
    $scope.alertmesg = false;
    $scope.disableButton = false;
    $scope.selectOnce = false;
    $scope.acceptRequest = function(val, id, user) {
        $scope.disableButton = true;
        console.log(user);
        NavigationService.getOneUser(user._id, function(data2) {
            if (val == 1) {
                $scope.selectOnce = true;
                $scope.sendData.status = "accept";
                $scope.sendData._id = id;
                if ($scope.sendData.status == 'accept') {
                    $scope.alertmesg = true;
                    $scope.mesg.push({
                        type: 'success',
                        msg: 'Your reply send to the user'
                    });
                    $scope.closeAlert = function(index) {
                        $scope.mesg.splice(index, 1);
                    }
                }
            } else {
                $scope.selectOnce = true;
                $scope.sendData.status = "reject";
                $scope.sendData._id = id;
                if ($scope.sendData.status == 'reject') {
                    $scope.mesg.push({
                        type: 'success',
                        msg: 'Your reply send to the user'
                    });
                    $scope.closeAlert = function(index) {
                        $scope.mesg.splice(index, 1);
                    }
                }
            }
            if (data2.data.email) {
                $scope.sendData.useremail = data2.data.email;
            }
            $scope.sendData.username = data2.data.firstName;
            if (data2.data.mobile) {
                $scope.sendData.mobile = data2.data.mobile;
            }
            NavigationService.acceptRequest($scope.sendData, function(data) {
                console.log('userdata', $scope.userdata);
                if (data.value != false) {
                    $scope.expertBook('pending', 'expert');
                }
            });
        });
        $scope.mesg = [];
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

.controller('BookNowCtrl', function($scope, TemplateService, NavigationService, $timeout, $log, $window, $stateParams, $state, $filter) {
    $scope.template = TemplateService.changecontent("book-now");
    $scope.menutitle = NavigationService.makeactive("Book-Now");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "user-page";
    $scope.minTime = new Date();
    $scope.isInvalid = true;

    // -------------set time 9 am to 9 pm----------------------------
    // $scope.min = '';
    // $scope.max = '';
    var d = new Date();
    d.setHours(9);
    d.setMinutes( 0 );
    $scope.min = d;

    var s = new Date();
    s.setHours(21);
    s.setMinutes( 0 );
    $scope.max = s;
    // -------------------------------------------------------

    $scope.checkTime = function() {
        var time = {};
        if ($scope.userForm.bookDate && $scope.userForm.bookTime) {
            time.year = $scope.userForm.bookDate.getFullYear();
            time.month = $scope.userForm.bookDate.getMonth();
            time.date = $scope.userForm.bookDate.getDate();
            time.hours = $scope.userForm.bookTime.getHours();
            time.mins = $scope.userForm.bookTime.getMinutes();
            $scope.userForm.callTime = new Date(time.year, time.month, time.date, time.hours, time.mins, 0, 0);
            if ($scope.userForm.callTime < new Date()) {
                console.log("here");
                $scope.isInvalid = true;
            } else {
                $scope.isInvalid = false;
            }
        }
    }

    function getTimeBetween(from,to) {
      var arr = [];
      var fd = moment(from);
      var td = moment(to);
      var newD = moment(from);
      while(newD.isSameOrBefore(td) ) {
        arr.push(newD.format("hh:mm A"));
        newD = newD.add(5,"minute");
      }
      return arr;
    }


    $scope.disabled = function (date, mode) {

      var d = moment(date.date);
      var returnval = false;
      if($scope.ExpertDetail.callTime == "weekdays")
      {
        if(d.day() == 0 || d.day() == 6) {
          returnval = true;
        }
      }
      if($scope.ExpertDetail.callTime == "weekends")
      {
        if(!(d.day() == 0 || d.day() == 6)) {
          returnval = true;
        }
      }
      if($scope.ExpertDetail.callTime == "custom")
      {
        if(_.indexOf(myarr,d.day()) == -1) {
          returnval = true;
        }
      }
      return returnval;
    };



    $scope.ptions = {
        minDate: new Date(),
        dateDisabled: $scope.disabled
    }

    $scope.duration = ['10 Min', '30 Min', '60 Min', '90 Min', '120 Min'];

    $scope.userForm = {};

    $scope.calcFinalAmt = function(dur) {
        if (dur) {
            var factor = parseInt(dur) / 30;
            $scope.userForm.finalAmount = $scope.expertPrice * factor;
            $scope.userForm.finalAmount = $scope.userForm.finalAmount.toFixed(2);
        }
    }
$scope.custdays = [];
var myarr = [];
  NavigationService.getExpertProfile($stateParams.id, function(data) {
      console.log(data.data.callSettings);
      _.each(data.data.callSettings,function(n){
        var day;
 switch (n.day) {
     case "Sunday":
         day = 0;
         break;
     case "MONDAY":
         day = 1;
         break;
     case "TUESDAY":
         day = 2;
         break;
     case "Wednesday":
         day = 3;
         break;
     case "THURSDAY":
         day = 4;
         break;
     case "Friday":
         day = 5;
         break;
     case  "Saturday":
         day = 6;
         break;

 }
 console.log(day);
        $scope.custdays.push(day);
       myarr = $scope.custdays;
      })
      console.log(myarr);
      $scope.ExpertDetail=data.data;
      if (data.value != false) {
          if (data.data && data.data.priceForService) {
              $scope.expertPrice = data.data.priceForService;
              $scope.calcFinalAmt(10);
          }
      }
  })




    $scope.userSubmitForm = function(formValid) {
        if (formValid.$valid) {
            $scope.userForm.expert = $stateParams.id;
            NavigationService.getExpertProfile({
                _id: $stateParams.id
            }, function(data2) {
                if (data2.value != false) {
                    $scope.userForm.expertemail = data2.data.email;
                    $scope.userForm.expertname = data2.data.firstName;
                    $scope.userForm.mobile = data2.data.mobileno;
                    if ($scope.userForm.bookDate && $scope.userForm.bookTime) {
                        var time = {};
                        $scope.userForm.bookDate = new Date($scope.userForm.bookDate);
                        $scope.userForm.bookTime = new Date($scope.userForm.bookTime);
                        time.year = $scope.userForm.bookDate.getFullYear();
                        time.month = $scope.userForm.bookDate.getMonth();
                        time.date = $scope.userForm.bookDate.getDate();
                        time.hours = $scope.userForm.bookTime.getHours();
                        time.mins = $scope.userForm.bookTime.getMinutes();
                        $scope.userForm.callTime = new Date(time.year, time.month, time.date, time.hours, time.mins, 0, 0);
                    }
                    delete $scope.userForm.bookDate;
                    delete $scope.userForm.bookTime;
                    NavigationService.getBooking($scope.userForm, function(data) {
                        // $scope.userForm = data.data;
                        // $scope.userForm.callDuration = new Date();
                        if (data.value == true) {
                            $scope.formComplete = true;
                            $timeout(function() {
                                $state.go("user-booking");
                                $timeout(function() {
                                    $scope.formComplete = "";
                                }, 2000)

                            }, 3000);
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
        window.location.href = "http://jacknows.wohlig.com/user/loginFacebook";
    }
    $scope.googleLogin = function() {
        window.location.href = "http://jacknows.wohlig.com/user/loginGoogle";
    }

    //-------------------------------------------------------

    $scope.getLogin = function(formValid) {
      $scope.myjstorage=$.jStorage.get('DoneForgotPswd');
      console.log('$scope.myjstorage',$scope.myjstorage);
        //console.log($scope.userForm);
        if (formValid.$valid) {
            NavigationService.getUserLogin($scope.userForm, function(data) {
                if (data.value == true && $scope.myjstorage==null) {
                    $scope.userForm = data;
                    console.log('inside if',$scope.userForm);
                    $state.go("home");
                } else if (data.value == true && $scope.myjstorage == 'Mail Sent') {
                  $scope.userForm = data;
                  var myid = data.data._id;
                  console.log('inside elseif',$scope.userForm);
                  $state.go("change-password",{id:myid});
                }
                else {
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

    NavigationService.getUser(function(data) {
        if (data._id && data._id != "") {
            $state.go("home");
        }
    });

    $scope.changeSuccess = false;
    $scope.forgotpswd = {};
    $scope.forgotpswdClick = function(formValid) {
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
            } else if ($scope.forgotpswd.comment == 'Mail Sent') {
               $.jStorage.set('DoneForgotPswd',$scope.forgotpswd.comment);
               $scope.myjstorage=$.jStorage.get('DoneForgotPswd');
               console.log('$scope.myjstorage',$scope.myjstorage);
                $scope.changeSuccess = true;
            }
        });
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
    $scope.mesgAgree = [];
    $scope.userForm = {};
    $scope.isAgree = false;
    $scope.userSignup = function(formValid) {
        console.log('SignupCtrl', $scope.userForm);
        if (formValid.$valid) {
            if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                if ($scope.userForm.agreeTerms == true) {
                    console.log('isAgree==============true');
                    $scope.isAgree = false;
                    console.log('trueeeeeeeeeee');
                    NavigationService.Signup($scope.userForm, function(data) {
                        $scope.userForm = data.data;
                        if (data.value == true) {
                            $scope.formComplete = true;
                            $timeout(function() {
                                $state.go("home");
                            }, 1000);
                        } else {
                            $scope.alreadyExist = true;
                            $timeout(function() {
                                $state.go("login");
                            }, 1000);
                        }
                    });
                } else {
                    $scope.mesgAgree.push({
                        type: 'success',
                        msg: 'Please indicate that you have read and agree to Terms & Conditions and Privacy Policy.'
                    });
                    $scope.closeAlert = function(index) {
                            $scope.mesgAgree.splice(index, 1);
                        }
                        //     console.log('isAgree==============false');
                        // $scope.isAgree = true;
                }

            } else {

                $scope.mesg.push({
                    type: 'success',
                    msg: 'Incorrect Password.'
                });
                $scope.closeAlert = function(index) {
                    $scope.mesg.splice(index, 1);
                }
                $scope.userForm.confirmPassword = "";
            }
        }
        // $scope.mesg = [];
    };
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
        if (formValid.$valid) {
            $scope.formComplete = true;
            $timeout(function() {
                $state.go("user-booking");
                $timeout(function() {
                    $scope.formComplete = "";
                }, 2000);
            }, 3000);
            NavigationService.editProfile($scope.userForm, function(data) {
                $scope.userForm = data.data;
            });
        }
    };
})

.controller('ChangePasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    $scope.template = TemplateService.changecontent("change-password");
    $scope.menutitle = NavigationService.makeactive("change-password");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.expertlogo = "";
    $scope.userlogo = "user-page";
    $scope.mesg = [];
// if($stateParams.id==''){
//
// }
    NavigationService.getUserEditDetail($stateParams.id, function(data) {
        console.log('getUserEditDetail', data);
        $scope.userForm = data;
    });

    $scope.userSubmitForm = function(formValid) {
      // $.jstorage.set()
        console.log('in function');
        if (formValid.$valid) {
            console.log('in validate');
              console.log('$scope.userForm', $scope.userForm);
              if ($scope.userForm.changePassword==$scope.userForm.changePassword2) {
                NavigationService.changePassword($scope.userForm, function(data) {
                  $scope.changpswd = true;
                  $scope.userForm = data.data;
                  //$state.go("home");
                    // console.log('$scope.userForm', $scope.userForm);

                });

              } else {
                  $scope.mesg.push({
                      type: 'danger',
                      msg: 'Re-enter correct Password'
                  });
                  $scope.closeAlert = function(index) {
                      $scope.mesg.splice(index, 1);
                  }
                  // $scope.mesg = [];
              }

        }

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
              if ($scope.userForm.changePassword==$scope.userForm.changePassword2){
                NavigationService.changeExpertPassword($scope.userForm, function(data) {
                    console.log('$scope.userForm', $scope.userForm);
                    if (data.value == true) {
                        $scope.changpswd = true;
                        $scope.userForm = data.data;
                        //$state.go("home");
                    }
                });
              }else {
                  $scope.mesg.push({
                      type: 'danger',
                      msg: 'Re-enter correct Password'
                  });
                  $scope.closeAlert = function(index) {
                      $scope.mesg.splice(index, 1);
                  }
              }

        }
        // $scope.mesg = [];
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
    .controller('TermsConditionExpertCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("terms-condition-expert");
        $scope.menutitle = NavigationService.makeactive("Terms-Condition-expert");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.expertlogo = "";
        $scope.userlogo = "user-page";
    })

.controller('HomeExpertCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $window, $uibModal, $rootScope, saveform, UserForm) {
    $scope.template = TemplateService.changecontent("home-expert");
    $scope.menutitle = NavigationService.makeactive("Home-Expert");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.expertlogo = "";
    $scope.userlogo = "";
    $scope.home = "";
    $scope.experthome = "expert-home";
    var modalInstance = '';

    NavigationService.getExpert(function(data) {
        if (data._id && data._id != "") {
            $state.go("home-expert");
        }
    });

    $scope.open3 = function(size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/forgetpassword.html',
            //controller: 'HomeCtrl',
            size: size,
            scope: $scope
        });
    };
    $scope.open4 = function(size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/otp.html',
            //controller: 'HomeCtrl',
            size: size,
            scope: $scope
        });
    };
    $scope.mesg = [];
    $scope.mesgAgree = [];
    $scope.mesgage = [];
    $scope.userForm = {};
    $scope.expertSignup = function(formValid) {
        if (formValid.$valid) {
            console.log('HomeExpertCtrl', $scope.userForm.age);
            if ($scope.userForm.password == $scope.userForm.confirmPassword) {
                if ($scope.userForm.age >= 18) {
                    if ($scope.userForm.agreeTerms == true) {
                        console.log('greater than 18');
                        NavigationService.ExpertSignup($scope.userForm, function(data) {
                            if (data.value == true) {
                                $scope.formComplete = true;
                                // $timeout(function() {
                                //     $state.go("expert-profile");
                                // }, 1000);
                            } else {
                                $scope.expertAlreadyExist = true;
                                $timeout(function() {
                                    $scope.expertAlreadyExist = false;
                                }, 5000)
                            }
                        });
                    } else {
                        $scope.mesgAgree.push({
                            type: 'success',
                            msg: 'Please indicate that you have read and agree to Terms & Conditions and Privacy Policy.'
                        });
                        $scope.closeAlert = function(index) {
                            $scope.mesgAgree.splice(index, 1);
                        }
                    }
                } else {
                    $scope.mesgage.push({
                        type: 'success',
                        msg: 'Expert Age does not match the requirements.'
                    });
                    $scope.closeAlert = function(index) {
                        $scope.mesgage.splice(index, 1);
                    }
                }
            } else {
                console.log('doo not match');
                $scope.mesg.push({
                    type: 'success',
                    msg: 'Incorrect Password.'
                });
                $scope.closeAlert = function(index) {
                    $scope.mesg.splice(index, 1);
                }
            }
        }
    };

    $scope.mesgs = [];

    $scope.getLogin = function(formValid) {
      $scope.myjstorage=$.jStorage.get('DoneForgotPswd');
      console.log('$scope.myjstorage',$scope.myjstorage);
        if (formValid.$valid) {
            NavigationService.getExpertLogin($scope.userForm, function(data) {
              if (data.value == true && $scope.myjstorage==null) {
                  $scope.userForm = data;
                  console.log('inside if',$scope.userForm);
                  $state.go("expert-booking");
              } else if (data.value == true && $scope.myjstorage == 'Mail Sent') {
                $scope.userForm = data;
                var myid = data.data._id;
                console.log('inside elseif',$scope.userForm);
                $state.go("change-expert-password",{id:myid});
              }
              else {
                  $scope.mesg.push({
                      type: 'danger',
                      msg: 'Incorrect Email or Password'
                  });
                  $scope.closeAlert = function(index) {
                      $scope.mesg.splice(index, 1);
                  }
              }
                // if (data.value == true) {
                //     $scope.userForm = data;
                //     $state.go("expert-booking");
                // } else {
                //     $scope.mesgs.push({
                //         type: 'danger',
                //         msg: 'Incorrect Email or Password'
                //     });
                //
                //     $scope.closeAlert = function(index) {
                //         $scope.mesgs.splice(index, 1);
                //     }
                // }
            });
            $scope.mesgs = [];
        }
    };

    $scope.changeSuccess = false;
    $scope.forgotpswd = {};
    $scope.forgotpswdClick = function(formValid) {
        console.log("//////", formValid);
        NavigationService.getForgotpswdExpert(formValid, function(data) {
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
            } else if ($scope.forgotpswd.comment == 'Mail Sent') {
              $.jStorage.set('DoneForgotPswd',$scope.forgotpswd.comment);
              $scope.myjstorage=$.jStorage.get('DoneForgotPswd');
              console.log('$scope.myjstorage',$scope.myjstorage);
                $scope.changeSuccess = true;
            }

        });
    };




    $scope.userform = {};
    $scope.tempData = {};

    $rootScope.$on('$stateChangeStart', function(event) {

        console.log($scope.tempData, $scope.userform)

        if (!_.isEqual($scope.tempData, $scope.userform)) {
            console.log('OK CHANGE DETECTED, SAVE')

            var temp = {}

            UserForm.set(angular.copy($scope.userform));

        } else {
            console.log('NO CHANGE')
        }

    });

    $rootScope.$on('$stateChangeSuccess', function(event) {
        var temp = UserForm.get();

        if (Object.keys(temp).length != 0) {
            UserForm.cancel();
            angular.copy(temp, $scope.tempData);
            angular.copy(temp, $scope.userform);
        }
    });






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
        $scope.startDateISGreater = false;
        $scope.userSubmitForm = function(formValid, userform) {
            if (formValid.$valid) {
                console.log('formValid', formValid);
                //$scope.formComplete = true;
                // console.log('start date',$scope.experi.startDate);
                // console.log('end date',$scope.experi.endDate);
                console.log("////", $scope.userForm);
                // _.forEach($scope.userForm.experience,function(n){
                //   if(n.startDate > n.endDate){
                //     console.log('isgreater');
                //   }else{
                //     console.log('not greater');
                //   }
                // })

                // for(var i=$scope.userForm.experience;i<)
                _.forEach($scope.userForm.experience, function(n) {
                    console.log('n.endDate', n.endDate);
                    if (n.endDate == 'Thu Jan 01 1970 05:30:00 GMT+0530 (IST)' || n.endDate == null) {
                        n.endDate = new Date();
                        console.log('n.endDate new date', n.endDate);
                    } else {
                        // $scope.startDateISGreater = false;
                        console.log('in else');
                    }
                });
                // $scope.startDateISGreater = true;
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
            // console.log($scope.experiencedetail,'*********************');
            var addexperience = $scope.experiencedetail.length + 1;
            $scope.experiencedetail.splice(0, 0, {
                'id': '' + addexperience
            });
        };
        // _.forEach($scope.experiencedetail,function(n){
        //   if(n.startDate>n.endDate){
        //     $scope.startDateISGreater = true;
        //       console.log('isgreater');
        //   }
        // })

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
  $scope.noResult = false;

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
  $scope.noSearchFound = false;

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
              if(data.data.length == 0 || $stateParams.search == ''){
                $scope.noSearchFound = true;
                $state.go('search',({search:''}));
              }
              console.log(data.data.length);
              // if(data.data.message){
              //   $scope.noResult = true;
              // }
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
                      // $state.go('search',{search:''});
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
                  // $state.go('search',{search:''});
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

        $scope.categories = {};
        NavigationService.getCategory($scope.categories, function(data) {
            $scope.categories = data.data;
            console.log('categories', $scope.categories);
        });



        // default the user's values to the available range
        $scope.userMinPrice = $scope.minPrice;
        $scope.userMaxPrice = $scope.maxPrice;
    })

.controller('VerifyEmailCtrl', function($scope, $stateParams, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("verifyemail");
    // console.log($scope.template);
    $scope.template.header = "";
    $scope.template.footer = "";
    $scope.menutitle = NavigationService.makeactive("Verify Email");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.ver = {};
    $scope.sc = {};
    $scope.er = {};
    $scope.er.errText = false;
    $scope.ver.verify = $stateParams.text;
console.log('in verify ctrl');
    NavigationService.emailVerification($scope.ver, function(data) {
        console.log('*********************************************');
        $scope.er.errText = false;
        $scope.sc.status = data.value;

        if (data.value) {

        } else {
            if (data.error && data.error.includes("mobile")) {
                $scope.sc.status = true;
                $scope.sc.text = data.error;
                $scope.er.errText = true;
            }
        }
    }, function(err) {
        console.log(err);
    });
    // TemplateService.header = "views/content/header.html";
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
    $scope.userLogedin = false;
    $scope.expertLogedin = false;
    // $scope.fromUrl = $state.

    // ----------for Notification onClick---------------
    $scope.editNotificationdata = {};
    $scope.onNotification = function(id) {
        NavigationService.editNotification({
            _id: id
        }, function(data) {
            $scope.editNotificationdata = data.data;
            console.log('$scope.editNotificationdata', $scope.editNotificationdata);

        });
        if ($scope.userLogedin == true) {
          $state.go('user-booking');
            console.log('checkUSer', $scope.userLogedin);
            $scope.getUserNotification();
        } else {
            console.log('checkUSer is expert', $scope.userLogedin);
            $state.go('expert-booking');
            $scope.getExpertNotification();
        }

    }

    // ----------------end of  Notification onClick-----------------

    $scope.becomeExpertBtn = function() {
        NavigationService.getUser(function(data) {
            if (!data._id) {
                $state.go('home-expert');
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


    $scope.getUserNotification = function() {
        NavigationService.getNotification({
            from: "user"
        }, function(data) {
            $scope.notificationdata = data.data;
            console.log('$scope.notificationdata user', $scope.notificationdata);
        });
    }

    $scope.getExpertNotification = function() {

        NavigationService.getNotification({
            from: "expert"
        }, function(data) {
            $scope.notificationdata = data.data;
            console.log('$scope.notificationdata expert', $scope.notificationdata);
        });
    }




    // --------User Login----------
    $scope.userdata = {};
    NavigationService.getUser(function(data) {
        if (_.isEmpty(data) == false) {
            $scope.userLogedin = true;
            // $scope.expertLogedin = false;
            if (data._id && data._id != "") {
                $scope.userdata = data;
                console.log("userdata", $scope.userdata);
                $scope.getUserNotification();
                // NavigationService.getNotification({
                //     from: "user"
                // }, function(data) {
                //     $scope.notificationdata = data.data;
                //     console.log('$scope.notificationdata user', $scope.notificationdata);
                // });
            } else {
                $scope.userNotLogedin = true;
                if (window.location.href.indexOf('user-') != -1) {
                    $state.go('home');
                }
            }
        } else {
            $scope.userLogedin = false;
        }

    });

    // --------Expert Login----------
    NavigationService.getExpert(function(data) {
        if (_.isEmpty(data) == false) {
            // console.log(data, '////////////////****************************');
            $scope.expertLogedin = true;
            if (data._id && data._id != "") {
                $scope.userdata = data;
                console.log($scope.userdata);

                $scope.getExpertNotification();
                // NavigationService.getNotification({
                //     from: "expert"
                // }, function(data) {
                //     $scope.notificationdata = data.data;
                //     console.log('$scope.notificationdata expert', $scope.notificationdata);
                // });
            } else {
                // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
                // $scope.expertNotLogedin = true;
                if (window.location.href.indexOf('expert-') != -1) {
                    $state.go('home');
                }
            }
        } else {
            $scope.expertLogedin = false;
            console.log('is empty');
        }



    });
    $scope.userLogout = function() {
      $.jStorage.flush();
        NavigationService.getUserLogout($scope.userdata, function(data) {
            $scope.userLogedin = false;
            if (data.value == true) {
                $scope.userNotAvail = true;
                console.log('true');
                $state.go('home');
            }
        });
    };
    $scope.expertLogout = function() {
      $.jStorage.flush();
        NavigationService.getExpertLogout($scope.userdata, function(data) {
            console.log(data);
            if (data.value == true) {
                $scope.expertNotAvail = true;
                $state.go("home-expert");
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
                    console.log($scope.userForm, '///////////////////////');
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
            //
        }
        $scope.userForm = {};
    };

    var modalInstance1 = '';
    $scope.open4 = function(size) {
        $scope.userForm = {};
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
    $scope.cancelmodal = function(formData) {
        console.log(formData, '**************************');
        formData = {};
        // console.log(formData,'/////////////////////');
        modalInstance1.dismiss();
    };

    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    // --------------------------------------End need Help---------------------------------------------
});
