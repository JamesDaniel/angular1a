/**
 * Created by james on 31/07/16.
 */
'use-strict';


var myApp = angular
               .module("myModule", [])
               .controller('myController', function ($scope) {
                  var employee = {
                     firstName: 'David',
                     lastName: 'Hastings',
                     gender: 'Male'
                  };

                  $scope.employee = employee;
               });