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

    $scope.ledOn = function () {

        mySocket.emit('led:on');
        console.log('LED ON');
    };


    $scope.ledOff = function () {

        mySocket.emit('led:off');
        console.log('LED OFF');  
    };    
});
