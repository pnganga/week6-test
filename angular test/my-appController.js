var anApp = angular.module('anApp',[]);

anApp.controller('newContrl', function($scope, $http) {
  $http.post("http://jsonplaceholder.typicode.com/posts/1/comments")
  .success(function (response) {
  	console.log('hi');
  	$scope.names = response

  });
});
