var adminurl = "http://192.168.1.127:1337/";

var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [
    {
    name: "Home",
    classis: "active",
    anchor: "home",
    // subnav: [{
    //   name: "Subnav1",
    //   classis: "active",
    //   link: "#/home"
    // }]
  },
    {
    name: "My Calendar",
    classis: "active",
    anchor: "home",
  },
    {
    name: "My Booking Page",
    classis: "active",
    anchor: "home",
  },
    {
    name: "My Profile Page",
    classis: "active",
    anchor: "home",
  },
    {
    name: "My Account",
    classis: "active",
    anchor: "home",
  },
    {
    name: "About Us",
    classis: "active",
    anchor: "home",
  },
    {
    name: "Contact Us",
    classis: "active",
    anchor: "home",
  }
];

  return {
    getnav: function() {
      return navigation;
    },
    ExpertUSerCreateSubmit: function(formData, callback) {
      //console.log('Navigation form data: ', formData);
      console.log(formData);
      $http({
        url: adminurl + 'ExpertUser/saveData',
        method: 'POST',
        withCredentials: true,
        data:formData
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
