(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

var myInfo=[];

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var myInfoCtrl = this;
  // var registered
  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.registered = false;
  myInfoCtrl.info = MenuService.getMyInfo();
  if(myInfoCtrl.info.registered==true){
    myInfoCtrl.registered = true;
    if (myInfoCtrl.info.menuNumber!= undefined) {
      MenuService.getMenuItem(myInfoCtrl.info.menuNumber).then(function(result){
      myInfoCtrl.menuItem =result.data;});
      myInfoCtrl.dish=true;
    }else {
      myInfoCtrl.dish=false;
    }
  }
}

})();
