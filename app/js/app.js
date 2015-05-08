'use strict';

angular.module('spBlogger',['ngRoute','spBlogger.posts','spBlogger.controllers','spBlogger.services']);



angular.module('spBlogger').run(['$state',function($state){

      $state.go('allPosts');

     
}]);