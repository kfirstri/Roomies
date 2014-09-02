var app = angular.module('roomiesApp', [
  "ngRoute",
  "mobile-angular-ui",
]);
  
  
app.factory('getMessagesFactory', function ($http) {
  
  var returnData = null;
  
  return $http.get('/messages');
  
  //var database = new ODatabase('http://localhost:2480/Roomies');
  //database.open("admin", "admin");
  //var queryResult = database.query("select from Message order by publish_date_time desc", null, '*:-1');
  
  //return returnData;
});
  
app.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'Templates/messages.html' });
    $routeProvider.when('/bills', { templateUrl: '' });
    $routeProvider.when('/billsPay', { templateUrl: '' });
});
  

app.controller('MessagesController', function($scope, $http, getMessagesFactory) {
  getMessagesFactory.success(function(data){
    $scope.messages = data;
  });
});