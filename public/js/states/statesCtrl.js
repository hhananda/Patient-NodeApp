
//app.controller('statesCtrl', ['$http', '$rootScope', '$scope',
//    , function ($http,$rootScope, $scope) {

//        //$scope.statesList = statesResource.query();
//        $http.get("http://localhost:3333/api/states")
//            .success(function(response) {
//                debugger;
//                $scope.statesList = response;
//            });
//    }]);

app.controller('statesCtrl', function ($scope, $http) {
    $http.get("http://localhost:3333/api/states")
    .success(function (response) { debugger; $scope.statesList = response; });
});
