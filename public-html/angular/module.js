var a = angular.module('1st', ['ngRoute'])

a.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
    otherwise({
        redirectTo: 'index.html',
    });
}]);
a.controller('b', function($scope, $window) {

    $scope.logo = "images/1.jpg";

    $scope.jobs = [
        { Title: "Habib ur Rehman", Type: "feeling Cool", Location: "San Franciso, USA", Photo: "Images/1.jpg" },
        { Title: "Wasiq Mukhlis", Type: "feeling chill", Location: "CA Franciso, USA", Photo: "Images/1.jpg" },
        { Title: "Khalil Aslam", Type: "feeling awesome", Location: "Miami florida, usa", Photo: "Images/1.jpg" },
        { Title: "Arfan Bashir", Type: "feeling sad", Location: "torontto, canda", Photo: "Images/1.jpg" },
        { Title: "Jabran Ibrar", Type: "feeling happy", Location: "dubai, uae", Photo: "Images/1.jpg" }
    ];



    $scope.add = function() {
        if (angular.isDefined($scope.Title) && $scope.Title != '' && $scope.Community != '' && $scope.Location != '' && $scope.Photo != '') {
            // ADD A NEW ELEMENT.
            $scope.jobs.push({ Title: $scope.Title, Type: $scope.Type, Location: $scope.Location, Photo: $scope.Photo });

            // CLEAR THE FIELDS.
            $scope.Title = '';
            $scope.Type = '';
            $scope.Location = '';
            $scope.Photo = '';


        }
        $window.alert("Your atatus has been uploaded");

    }



    // $scope.like = function() {
    //     $scope.k = { "color": "red" }
    // }

    // $scope.dislike = function() {
    //     $scope.m = { "color": "#eee" }
    // }
     


    $scope.remove = function(index) {
        $scope.jobs.splice(index, 1)
    }

    $scope.home = function() {
        $scope.c = { "display": "none" }
        $scope.d = { "display": "block" }
        $scope.e = { "display": "block" }
        $scope.f = { "display": "block" }
    }


    $scope.c = true;
    $scope.d = true;
    $scope.e = true;
    $scope.f = true;
    $scope.g = true;
    $scope.h = true;
    $scope.i = true;
    $scope.j = true;

    $scope.about = function() {
        $scope.g = true;
        $scope.e = false;
        $scope.c = false;
        $scope.d = false;
        $scope.e = false;
        $scope.f = false;
        $scope.h = false;
        $scope.i = false;
        $scope.j = false;
    }



    $scope.contact = function() {
        $scope.g = false;
        $scope.e = false;
        $scope.c = false;
        $scope.d = false;
        $scope.e = false;
        $scope.f = false;
        $scope.h = false;
        $scope.i = false;
        $scope.j = true;
    }


});