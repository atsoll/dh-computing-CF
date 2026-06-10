
var prefix = "/dh-computing-CF/"


//for scale
var vh = window.innerHeight/100;
var vw = window.innerWidth/100;




var app = angular.module('template',['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap', 'duScroll']);

app.config(function($routeProvider) {

    //configure the routes

    $routeProvider
    .when("/", {
        templateUrl : prefix + "views/overview.html"
    }).when("/framework", {
        templateUrl : prefix + "views/framework.html",
    }).when("/literature", {
        templateUrl : prefix + "views/literature.html",
    })

});



app.controller('ctrl', function($scope, $window, $document,  $anchorScroll) {

  $scope.model = {
    active_page: 'Overview',
    menu: [{title: "Overview", link:"#!"}, {title: "Competency Framework", link:"#!framework"}, {title: "Related Literature", link:"#!literature"}]
  }



})
