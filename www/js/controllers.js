angular.module('starter.controllers', ['btford.socket-io'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})
.factory('mySocket', function (socketFactory) {
  var myIoSocket = io.connect('http://192.168.0.11:3000');

      mySocket = socketFactory({
        ioSocket: myIoSocket
      });

    return mySocket;
}).
controller('LightCtrl', function ($scope,mySocket) {
    
    
    mySocket.on('ledState', function(data) {
      $scope.led = data;     
      $scope.led.brightness = 255;
    });

    $scope.setLight = function(value){
        if(value){
          mySocket.emit('led:on');
        }else{
          mySocket.emit('led:off');
        }
    }; 

    $scope.setBrightness = function(value){
        if(value){
          mySocket.emit('led-brightness',{value: value});
        }
    }; 

    $scope.setBlink = function(value){
        if(value){
          mySocket.emit('led-blink:on');
        }else{
          mySocket.emit('led-blink:off'); 
        }
    };   
});
