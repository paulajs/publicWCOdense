/**
 * Controller for parking module. Get JSON data via service $http, and set initial state of $scope-object to parkingLots.
 */

app.controller('wcController', function($scope, $http){
	$http.get('http://odensedataplatform.dk/dataset/c86695ce-3a84-4f75-a8ae-ff768eebe4d0/resource/37fcca93-b4d9-4c72-b7b5-57dd98657778/download/toiletterodense.json')
	.then(function(response){
		$scope.wcs = response.data.features;
    $scope.id = 0;
    console.log($scope.wcs);
	});

  this.returnProperties = function(id){
    return $scope.wcs[id].properties;
  };
  this.getType = function(id){
    return $scope.wcs[id].properties.Type;
  };
// Function that sets the current marker id, to id (in $scope). 
  this.showWCInfo = function () {
    $scope.id = this.id;
    document.getElementById('modalbox').style.display = "block";
  };
//Function that returns array of coordinates from.
  this.getCoordinatesWC = function (id) {
    return [$scope.wcs[id].geometry.coordinates[1], $scope.wcs[id].geometry.coordinates[0]];
  };
});