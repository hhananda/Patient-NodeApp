var app = angular.module('MyApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/patient/list");

     $stateProvider
        .state('patientList', {
            url: "/patient/list",
            templateUrl: "app/views/patient/list.html"
            })
          .state('patientEdit', {
            url: "/patient/edit",
            templateUrl: "app/views/patient/edit.html"
            })
});


app.controller('rootController', function(){
    
})