/*
    Group 6
    INFO 343 with Morris
    Kyle Bergman, Tammy Nguyen, Rhea Arora, Sean Cheong
*/

var url = 'https://api.parse.com/1/classes/emails/';

angular.module('EmailApp', [])
    .config(function($httpProvider) {
    	$httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'wRO7sKRzS0HiGREF7Hele3LrJpocvYtdFyPYE072';
        $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = '2fcVE9FWvU2ZG8YAOf5gAIdA4AlbOSr8JgCHoXXm';
    })

    .controller('EmailController', function($scope, $http) {

        //get emails again from Parse
    	$scope.refreshEmails = function() {
            $scope.loading = true;
            $http.get(url)
                .success(function(responseData) {
                    $scope.emails = responseData.results;
                })
                .error(function(err) {
                    console.log(err);
                })
                 .finally(function() {
                    $scope.loading = false;
                });
        };

        $scope.refreshEmails();

        //initialize email object
        $scope.newEmail = {done: false};

        //adds new email from form
    	$scope.addEmail = function(email) {
            $scope.adding = true; //begin loading animation
            $scope.none = false; //now a email exists
            $http.post(url, email)
                .success(function(responseData) {
                    $("#submit").click(function() {
                        document.getElementById("form").style.display = "none";
                        document.getElementById("signedUp").style.display = "initial";
                    })
                    email.objectId = responseData.objectId;
                    $scope.emails.push(email);
                    //clear form and create new email object
                    $scope.newEmail = {done: false};
                })
                .error(function(err) {
                	console.log(err);
                })
                .finally(function() {
                    $scope.adding = false; //end loading animation
                });
        };

        //deletes an email from the newsletter list
        $scope.deleteEmail = function(email) {
            $http.delete(url + email.objectId)
            .success(function(responseData) {
                //successful deletion
                $scope.refreshEmails();
            })
            .error(function(err) {
                console.log(err);
            });
        }

    });