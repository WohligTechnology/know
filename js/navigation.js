var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
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
