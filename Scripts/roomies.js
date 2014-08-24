var app = angular.module('roomiesApp', [
  "ngRoute",
  "mobile-angular-ui",
]);
  
app.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'Templates/home.html' });
});