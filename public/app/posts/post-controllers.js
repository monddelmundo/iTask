'use strict';

//Post Index Controller
angular.module('Yote')

  // default resource controller generated by the CLI
  .controller('PostCtrl', ['$scope', '$stateParams', '$state', 'PostFactory', function($scope, $stateParams, $state, PostFactory){
    console.log('PostCtrl loaded...');
  }])

  /********************** 
  *  Custom Controllers 
  ***********************/

  .controller('PostListCtrl', ['$scope', '$stateParams', '$state', 'PostFactory', function($scope, $stateParams, $state, PostFactory){
    console.log('PostListCtrl loaded....');

    PostFactory.all()
      .then(function(data) {
        $scope.posts = data;
        console.log(data);
      }, function(data){
        alert(data);
      });
  }])

  .controller('PostShowCtrl', ['$scope', '$stateParams', '$state', 'PostFactory', function($scope, $stateParams, $state, PostFactory){
    console.log('PostShowCtrl loaded...');

    //load post from state params
    PostFactory.show($stateParams.slug)
      .then(function(data){
        $scope.post = data.post;
      }, function(data){
        alert(data);
      });

  }])

  .controller('PostCreateCtrl', ['$scope', '$stateParams', '$state', '$rootScope', 'PostFactory', function($scope, $stateParams, $state, $rootScope, PostFactory) {
    console.log('PostCreateCtrl loaded');
    //create action
    $scope.createAction = function(postData) {
      //set author to current user
      postData.author = $scope.currentUser._id;
      console.log("create action initiated");
      PostFactory.create(postData)
        .then(function(data) {
          if(data.success) {
            //go to post page
            $state.go('post.show', { slug: data.post.slug });
          } else {
            alert(data.message + " Please try again.");
          }
        });
    }
  }])

  .controller('PostUpdateCtrl', ['$scope', '$stateParams', '$state', '$rootScope', 'PostFactory', function($scope, $stateParams, $state, $rootScope, PostFactory) {
    console.log('PostUpdateCtrl loaded');
    
    //load post from state params
    PostFactory.show($stateParams.slug)
      .then(function(data){
        $scope.post = data.post;
      }, function(data){
        alert(data);
      });
    
    $scope.updateAction = function(postData) {
      console.log("udpate action initiated");
      PostFactory.update(postData)
        .then(function(data) {
          if(data.success) {
            //go to post page
            $state.go('post.show', { slug: data.post.slug });
          } else {
            alert(data.message + " Please try again.");
          }
        });
    }
  }])

// end of file
;