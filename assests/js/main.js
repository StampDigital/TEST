var stampDigital = angular.module('stampDigital', []);

stampDigital.controller('MainController', function ($scope) {
    $scope.testing = "HEY";



    var article_1 = "The News in Limericks";
    var article_1_image = 'images/IMAG0516.mp4';
    var article_1_content = "h";
    var article_1_link = "articles/In Shalott House";
    var article_1_author = "articles/In Shalott House";

    var article_2 = "The Lady in the Mountain";
    var article_2_image = 'images/IMAG0516.mp4';
    var article_2_content = "h";
    var article_2_link = "articles/In Shalott House";
    var article_2_author = "articles/In Shalott House";

    var article_3 = 'Are EU in or out?';
    var article_3_image = 'images/IMAG0516.mp4';
    var article_3_content = "D";
    var article_3_link = "articles/In Shalott House";
    var article_3_author = "articles/In Shalott House";

    var article_4 = 'In Shalott House';
    var article_4_image = 'images/IMAG0516.mp4';
    var article_4_content = "D";
    var article_4_link = "articles/In Shalott House";
    var article_4_author = "articles/In Shalott House";

    var articleNum = [article_1, article_2, article_3, article_4];

    $scope.newestArticle = articleNum[articleNum.length-1];
    $scope.newestArticleImage = articleNum[articleNum.length-1];
    $scope.secondNewestArticle = articleNum[articleNum.length-2];
    $scope.thirdNewestArticle = articleNum[articleNum.length-3];
    $scope.oldestArticle = articleNum[articleNum.length-4];

  //Controller to controll articles on home page
  // var varName = "article_" + articleNum.ToString();
  //


  // var newestArticle =  $scope.scopeName;
  // $scope.home_article_1 = newestArticle;
  //
  // articleNum = articleNum.ToString();
  // $scope.home_article_1 = window["$scope.article_1"]; //NEWEST ARTICLE
  // $scope.home_article_1_image = "f";
  // scope.home_article_1_content = "d";
  // scope.home_article_1_link = "w";

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
