/**
 * Main module for the parking app, and ng-map module.
 */
var app = angular.module('publicWC', ['ngMap','UserPosition']);

// Map Module - pre-defined by ng-maps. 
angular.module('ngMap').run(function($rootScope, NgMap) {
  NgMap.getMap().then(function(map,crd) {
    $rootScope.map = map;
  });
});


