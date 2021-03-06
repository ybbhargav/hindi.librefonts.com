﻿/* 
* @Author: Bhargav Krishna
* @Date:   2014-08-30 00:29:17
* @Last Modified by:   Bhargav Krishna
* @Last Modified time: 2014-09-02 21:36:56
*/
'use strict';

angular.module('AwesomeHindiFont', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of demos
    $scope.demos = [
        {src : "demos/vesper-libre.html"},
        {src : "demos/astronomer.html"},
        {src : "demos/crow-pitcher.html"},
        {src : "demos/gnat-bull.html"},
        {src : "demos/oak.html"},
        {src : "demos/rivers.html"},
        {src : "demos/the-fox-and-the-grapes.html"},
        {src : "demos/two-bags.html"}
    ];

    // initial demo index
    $scope._Index = 0;

    // if a current demo is the same as requested demo
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev demo
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.demos.length - 1;
    };

    // show next demo
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.demos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain demo
    $scope.showDemo = function (index) {
        $scope._Index = index;
    };
});

