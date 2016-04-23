var stampDigital = angular.module('stampDigital', []);

stampDigital.controller('MainController', function ($scope) {
  var articleNum = 6;


  $scope.article_1 = 'In Shalott House';
  $scope.article_1_image = 'images/IMAG0516.mp4';
  $scope.article_1_content = "She was born many years ago, long before the days of war and violence. The day she was born was a cold winter's day when a crisp frost coated the ground and roses froze in their vases and a thin cry broke through the cracks in the old broken windows. It was an old house, and very beautiful, but the scarlet ivy which crept up the walls
  showed the neglect which it had faced, and the flickering light of a candle in the window of an upper room was the only sign that people still lived there. A thin cry, like the wail of a new-born kitten, escaped from the room, echoing out across the vast grounds, long since abandoned by any gardener who cared for them, and the light dimmed.
  A low sob burst out, which turned into a flood of tears, mingling with the cries of the child to create a heart-breaking symphony of pain and grief.";
  $scope.article_1_link = "articles/In Shalott House";

  $scope.article_2 = 'In Shalott House';
  $scope.article_2_image = 'images/IMAG0516.mp4';
  $scope.article_2_content = "She was born many years ago, long before the days of war and violence. The day she was born was a cold winter's day when a crisp frost coated the ground and roses froze in their vases and a thin cry broke through the cracks in the old broken windows. It was an old house, and very beautiful, but the scarlet ivy which crept up the walls
  showed the neglect which it had faced, and the flickering light of a candle in the window of an upper room was the only sign that people still lived there. A thin cry, like the wail of a new-born kitten, escaped from the room, echoing out across the vast grounds, long since abandoned by any gardener who cared for them, and the light dimmed.
  A low sob burst out, which turned into a flood of tears, mingling with the cries of the child to create a heart-breaking symphony of pain and grief.";
  $scope.article_2_link = "articles/In Shalott House";

  $scope.article_3 = 'In Shalott House';
  $scope.article_3_image = 'images/IMAG0516.mp4';
  $scope.article_3_content = "She was born many years ago, long before the days of war and violence. The day she was born was a cold winter's day when a crisp frost coated the ground and roses froze in their vases and a thin cry broke through the cracks in the old broken windows. It was an old house, and very beautiful, but the scarlet ivy which crept up the walls
  showed the neglect which it had faced, and the flickering light of a candle in the window of an upper room was the only sign that people still lived there. A thin cry, like the wail of a new-born kitten, escaped from the room, echoing out across the vast grounds, long since abandoned by any gardener who cared for them, and the light dimmed.
  A low sob burst out, which turned into a flood of tears, mingling with the cries of the child to create a heart-breaking symphony of pain and grief.";
  $scope.article_3_link = "articles/In Shalott House";

  $scope.article_4 = 'In Shalott House';
  $scope.article_4_image = 'images/IMAG0516.mp4';
  $scope.article_4_content = "She was born many years ago, long before the days of war and violence. The day she was born was a cold winter's day when a crisp frost coated the ground and roses froze in their vases and a thin cry broke through the cracks in the old broken windows. It was an old house, and very beautiful, but the scarlet ivy which crept up the walls
  showed the neglect which it had faced, and the flickering light of a candle in the window of an upper room was the only sign that people still lived there. A thin cry, like the wail of a new-born kitten, escaped from the room, echoing out across the vast grounds, long since abandoned by any gardener who cared for them, and the light dimmed.
  A low sob burst out, which turned into a flood of tears, mingling with the cries of the child to create a heart-breaking symphony of pain and grief.";
  $scope.article_4_link = "articles/In Shalott House";

  $scope.article_5 = 'In Shalott House';
  $scope.article_5_image = 'images/IMAG0516.mp4';
  $scope.article_5_content = "She was born many years ago, long before the days of war and violence. The day she was born was a cold winter's day when a crisp frost coated the ground and roses froze in their vases and a thin cry broke through the cracks in the old broken windows. It was an old house, and very beautiful, but the scarlet ivy which crept up the walls
  showed the neglect which it had faced, and the flickering light of a candle in the window of an upper room was the only sign that people still lived there. A thin cry, like the wail of a new-born kitten, escaped from the room, echoing out across the vast grounds, long since abandoned by any gardener who cared for them, and the light dimmed.
  A low sob burst out, which turned into a flood of tears, mingling with the cries of the child to create a heart-breaking symphony of pain and grief.";
  $scope.article_5_link = "articles/In Shalott House";

  $scope.article_6 = 'In Shalott House 6';
  $scope.article_6_image = 'images/IMAG0516.mp4';
  $scope.article_6_content = "She was born many years ago, long before the days of war and violence. The day she was born was a cold winter's day when a crisp frost coated the ground and roses froze in their vases and a thin cry broke through the cracks in the old broken windows. It was an old house, and very beautiful, but the scarlet ivy which crept up the walls
  showed the neglect which it had faced, and the flickering light of a candle in the window of an upper room was the only sign that people still lived there. A thin cry, like the wail of a new-born kitten, escaped from the room, echoing out across the vast grounds, long since abandoned by any gardener who cared for them, and the light dimmed.
  A low sob burst out, which turned into a flood of tears, mingling with the cries of the child to create a heart-breaking symphony of pain and grief.";
  $scope.article_6_link = "articles/In Shalott House";



  //Controller to controll articles on home page
  articleNum = articleNum.ToString();
  $scope.home_article_1 = window["'$scope_' + articleNum"] ; //NEWEST ARTICLE
  $scope.home_article_1_image = ;
  scope.home_article_1_content = ;
  scope.home_article_1_link = ;




  //Controller to controll articles in archive


});



stampDigital.controller('suggestedArticles', function ($scope) {

  $scope.message = 'HI hello';
});





// var app = angular.module("stampDigital", []);
// var MainController = function($scope){
//
//   $scope.message = "Hi hello";
//   $scope.username = "TESTING";
//   $scope.repoSortOrder = "-stargazers_count";
//
//   app.controller("MainController", MainController);
// };













// var app = angular.module('App', []);
// app.controller('suggestedArticles', function($scope) {
// $scope.name_1="TEST";
// $scope.pic_="TEST2";
// $scope.link_1="TEST3"
//
// $scope.article_1="In Shalott House";
// $scope.article_1_image="TEST2";
// $scope.article_1_link="TEST3";
// var article_array = [];
// $scope.latest_2="TEST";
// $scope.latest_2_image="TEST2";
// $scope.latest_2_link="TEST3";
//
//
// $scope.latest_1="In Shalott House";
// $scope.article_1_image="TEST2";
// $scope.article_1_link="TEST3";
// });
//
// var app = angular.module("App", []);
// var ControllerName = function($scope){
// $scope.nameOne = "Hello";
//
// //app.controller("Articles" );
// };
