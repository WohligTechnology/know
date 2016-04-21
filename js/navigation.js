var adminurl = "http://192.168.1.127:1337/";
var adminurl1 = "http://wohlig.io:81/callApi/jacknows/";
var imgurl = "http://192.168.1.122/upload";
var imgpath = imgurl + "/readFile";
var uploadurl = imgurl;

var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        // subnav: [{
        //   name: "Subnav1",
        //   classis: "active",
        //   link: "#/home"
        // }]
    }, {
        name: "My Calendar",
        classis: "active",
        anchor: "home",
    }, {
        name: "My Booking Page",
        classis: "active",
        anchor: "home",
    }, {
        name: "My Profile Page",
        classis: "active",
        anchor: "home",
    }, {
        name: "My Account",
        classis: "active",
        anchor: "home",
    }, {
        name: "About Us",
        classis: "active",
        anchor: "home",
    }, {
        name: "Contact Us",
        classis: "active",
        anchor: "home",
    }];

    return {
        getnav: function() {
            return navigation;
        },
        ExpertUSerCreateSubmit: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
                    // data: {
                    //   "email": formData.email,
                    //   "mobileno": formData.mobileno,
                    //   "gender": formData.gender,
                    //   "firstName": formData.firstName,
                    //   "lastName": formData.lastName,
                    //   "password": formData.password,
                    //   "addressDetails": formData.addressDetails
                    //   //"confirmPassword": formData.confirmPassword,
                    //   // "logintype": formData.logintype,
                    //   // "twitter": formData.twitter
                    // }
            }).success(callback);
        },
        ContactSubmit: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'Contact/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData

            }).success(callback);
        },
        ExpertSubmit: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'ExpertRegistration/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData

            }).success(callback);
        },

        getTestimonial: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'Testimonial/getAll',
                method: 'POST',
                withCredentials: true,
                data: {
                  "name": formData.name,
                  "testimonial": formData.testimonial,
                  "company": formData.company,
                  "image": formData.image
                }

            }).success(callback);
        },
        getdailyUpdates: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'DailyUpdates/getAll',
                method: 'POST',
                withCredentials: true,
                data: formData
              }).success(callback);
        },

        getUserBooking: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'Booking/getAll',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },

        getNewsletter: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl1 + 'newsletter/submit',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        deleteCallsData: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl1 + 'ExpertRegistration/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                  "_id": formData._id
                }
            }).success(callback);
        },

        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    };
});
