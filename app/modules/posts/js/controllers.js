'use strict';

angular.module('spBlogger.posts.controllers', []).controller('PostController',
		[ '$scope', 'postService', function($scope, postService) {
			$scope.getAllPosts = function() {
				return postService.getAll();
			};
			$scope.posts = $scope.getAllPosts();
		} ]).controller(
		'PostDetailsController',
		[  '$routeProvider', '$scope', 'postService',
				function($routeProvider, $scope, postService) {
					$scope.getPostById = function(id) {
						return postService.getPostById(id);
					};
					$scope.closePost = function() {
						$routeProvider.go('allPosts');
					};
					$scope.singlePost = $scope.getPostById($routeProvider.id);
				} ]);


var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);