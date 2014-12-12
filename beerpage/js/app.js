// "use strict";

// angular.module('ToDoApp', [])
//     .config(function($httpProvider) {

//         $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'YbStblxUEnTuSbzcutIW3KCdcMardZag25fVht2u';
//         $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = 'X2sxmT2AKq3hXv5VX4HtZm7RQNtN4eSHIjbOulq9';
//     })
//     .controller('beerController', function($scope, $http) {
   
//         var beerUrl = 'https://api.parse.com/1/classes/beers';
//         var tapUrl = 'https://api.parse.com/1/classes/tap';

//         $scope.refreshBeers = function() {
            
//             $scope.loading = true;
//             $http.get(beerUrl + '?where={"done": false}')
//                 .success(function(responseData) {
//                     $scope.beers = responseData.results;
//                 })
//                 .error(function(err) {
//                     console.log(err);
                    
//                 })
//                 .finally(function() {
//                     $scope.loading = false;
//                 });
//         };      
//         $scope.refreshBeers();    
//         $scope.newBeer = {done: false};
//         $scope.newBeer = {onTap: false};

//         $scope.addBeer = function(beer) {
//             $scope.inserting = true;
//             $http.post(beerUrl, beer)
//                 .success(function(responseData) {
           
//                     beer.objectId = responseData.objectId;
//                     $scope.beers.push(beer);
//                     $scope.newBeer = {done: false};
//                     $scope.newBeer = {onTap: false};

//                 })
//                 .error(function(err) {
//                     console.log(err);
                    
//                 })
//                 .finally(function() {
//                     $scope.inserting = false;
//                 });
//         };

//         $scope.updateBeer = function(beer) {
//             $scope.updating = true;
//             $http.put(beerUrl + '/' + beer.objectId, beer)
//                 .success(function(responseData) {
                    
//                 })
//                 .error(function(err) {
//                     console.log(err);
                
//                 })
//                 .finally(function() {
//                     $scope.updating = false;
//                 });
//         };

//         // $scope.tapList = function(beer) {
//         // 	var temp = 
//         //     $http.post(tapUrl, tap)
//         //     	.success(function(responseData) {
//         //     		tap.objectId = responseData.objectId;

//         //     		updateBeer(beer);
//         //     		$scope.tap.push(beer);
//         //     	})
//         // };

//         $scope.tapList = function(beer) {
//         	$scope.beer.onTap = true;
//         	console.log("tapList is working!");
//         }




//     });

"use strict";
 
angular.module('ToDoApp', [])
    .config(function($httpProvider) {
 
        $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'YbStblxUEnTuSbzcutIW3KCdcMardZag25fVht2u';
        $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = 'X2sxmT2AKq3hXv5VX4HtZm7RQNtN4eSHIjbOulq9';
    })
    .controller('beerController', function($scope, $http) {
    
        var beerUrl = 'https://api.parse.com/1/classes/beers';
        var tapUrl = 'https://api.parse.com/1/classes/tap';
 
        $scope.refreshBeers = function() {
             
            $scope.loading = true;
            $http.get(beerUrl)
                .success(function(responseData) {
                    $scope.beers = responseData.results;
                    
                })
                .error(function(err) {
                    console.log(err);
                     
                })
                .finally(function() {
                    $scope.loading = false;
                });
        };      
        $scope.refreshBeers();    
        $scope.newBeer = {done: false};
 
        $scope.addBeer = function(beer) {
            $scope.inserting = true;
            $http.post(beerUrl, beer)
                .success(function(responseData) {
            
                    beer.objectId = responseData.objectId;
 
                     
                    $scope.beers.push(beer);
 
                     
                    $scope.newBeer = {done: false};
                })
                .error(function(err) {
                    console.log(err);
                     
                })
                .finally(function() {
                    $scope.inserting = false;
                });
        };
 
        //function to update an existing task
        $scope.updateBeer = function(beer) {
            $scope.updating = true;
            $http.put(beerUrl + '/' + beer.objectId, beer)
                .success(function(responseData) {
                     
                })
                .error(function(err) {
                    console.log(err);
                 
                })
                .finally(function() {
                    $scope.updating = false;
                });
        };
        
        $scope.removeBeer = function(beer) {
            $http.delete(beerUrl + '/' + beer.objectId)
                .success(function(responseData) {
                    $scope.refreshBeers();
                    //$scope.updateBeer();
                })
                .error(function(err) {
                    console.log(err);
                });
        }

        $scope.saveChanges = function(beer) {
            $('#confirmation').html('You have saved ' + beer.title + ".");
            $http.put(beerUrl + '/' + beer.objectId, beer)
                .success(function(responseData) {        
                })
                .error(function(err) {
                    console.log(err);
                })
                .finally(function() {
                });
        }

           
 
    });
$(document).ready(function() {
  //fade out social buttons as you scroll
  var mn = $(".nav-bar");
  $(window).scroll(function() {
    if($(this).scrollTop() > 275) {
        mn.addClass("main-nav-scrolled");
        $("header").fadeOut();
    } else {
        mn.removeClass("main-nav-scrolled");
        $("header").fadeIn();
    }
  })
 
});