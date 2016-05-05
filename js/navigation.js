var adminurl = "http://localhost:1337/";
// var adminurl1 = "http://wohlig.io:81/callApi/jacknows/";
var imgurl = "http://192.168.1.131/upload";
var imgpath = imgurl + "/readFile";
var uploadurl = imgurl;

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
                url: adminurl + 'ExpertUser/editProfile',
                method: 'POST',
                withCredentials: true,
                data: formData

            }).success(callback);
        },

        getAllExpert: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/getAll',
                method: 'POST',
                withCredentials: true,
                data: formData

            }).success(callback);
        },
        ExpertRegistrationSubmit: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData

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
        getCategory: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'category/getAll',
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
                url: adminurl + 'Booking/getBooking',
                method: 'POST',
                withCredentials: true,
                data:{
                    "status": formData.status
                }

            }).success(callback);
        },
        feedbackSubmit: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'Booking/saveData',
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
        getUserEditDetail: function(_id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'user/profile',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": _id
                }
            }).success(callback);
        },
        editUserSubmit: function(formData, callback) {
            console.log('In service : ', formData);
            $http({
                url: adminurl + 'user/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },

        addWishlist: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'User/saveData',
                method: 'POST',
                withCredentials: true,
                data: {

                    "expertUser": formData.expertUser,
                    "timestamp": new Date()

                }
            }).success(callback);
        },

        getWishlist: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'User/getShortlist',
                method: 'POST',
                withCredentials: true,
                data: formData

            }).success(callback);
        },

        Signup: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'user/register',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },
        ExpertSignup: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/register',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },

        getUser: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'user/profile',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getExpert: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'expertuser/profile',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getUserLogin: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'user/login',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },
        getExpertLogin: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/login',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },
        editProfile: function(input, callback) {
            // console.log('form data: ', formData);
            delete input.password;
            delete input.forgotpassword;
            $http({
                url: adminurl + 'user/editProfile',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },
        changePassword: function(input, callback) {
            // console.log('form data: ', formData);
            delete input._id;
            $http({
                url: adminurl + 'user/changePassword',
                method: 'POST',
                data: {
                    "password": input.password,
                    "changePassword": input.changePassword
                }
            }).success(callback);
        },
        changeExpertPassword: function(input, callback) {
            // console.log('form data: ', formData);
            delete input._id;
            $http({
                url: adminurl + 'ExpertUser/changePassword',
                method: 'POST',
                data: {
                    "password": input.password,
                    "changePassword": input.changePassword
                }
            }).success(callback);
        },
        getUserLogout: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'user/logout',
                method: 'POST',
                data: input
            }).success(callback);
        },
        getExpertLogout: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/logout',
                method: 'POST',
                data: input
            }).success(callback);
        },
        getForgotpswd: function(input, callback) {
            // console.log('form data: ', formData);
            console.log(input)
            $http({
                url: adminurl + 'user/forgotPassword',
                method: 'POST',
                data: {
                    "email": input.email
                }
            }).success(callback);
        },
        getExpertProfile: function(_id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": _id
                }
            }).success(callback);
        },
        getSearch: function(search, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'ExpertUser/searchData',
                method: 'POST',
                data: {
                    "search": search
                }
            }).success(callback);
        },
        getBooking: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'Booking/saveData',
                method: 'POST',
                data: input
            }).success(callback);
        },
        acceptRequest: function(status,id, callback) {
           console.log(status);
           console.log(id);
            $http({
                url: adminurl + 'Booking/saveData',
                method: 'POST',
                data: {
                  "_id": id,
                  "status": status
                }
            }).success(callback);
        },
        getPayment: function(status,id, callback) {
           console.log(status);
           console.log(id);
            $http({
                url: adminurl + 'Booking/saveData',
                method: 'POST',
                data: {
                  "_id": id,
                  "status": status
                }
            }).success(callback);
        },
        getExpertBooking: function(formData, callback) {
            //console.log('Navigation form data: ', formData);
            $http({
                url: adminurl + 'Booking/getExpertBooking',
                method: 'POST',
                withCredentials: true,
                data: {
                  "status": formData.status
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
