(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

var myInfo=[];

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;

  signUpCtrl.submit = function () {
    myInfo.firstname = signUpCtrl.firstname;
    myInfo.lastname = signUpCtrl.lastname;
    myInfo.email = signUpCtrl.email;
    myInfo.phone = signUpCtrl.phone;
    myInfo.menuNumber = angular.uppercase(signUpCtrl.menuNumber);
    myInfo.registered = true;

    if (signUpCtrl.menuNumber!= undefined) {

      MenuService.getMenuItem(angular.uppercase(signUpCtrl.menuNumber)).then(function(result){
        signUpCtrl.menuItem =result.data;

        if (signUpCtrl.menuItem != undefined) {
          MenuService.storeMyInfo(myInfo);
          signUpCtrl.saved=true;
          signUpCtrl.favoriteDish=false;
          console.log("sucess");
        }
      }).catch(function(error){
        signUpCtrl.favoriteDish=true;
        signUpCtrl.saved=false;
        console.log("error");
      });
    }else {
      MenuService.storeMyInfo(myInfo);
      signUpCtrl.saved=true;
      signUpCtrl.favoriteDish=false;
      console.log("else");
    }
  };
};
})();
