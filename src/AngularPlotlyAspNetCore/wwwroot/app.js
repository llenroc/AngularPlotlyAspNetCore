!function(){var a=angular.module("mainApp",["ui.router","plotly"]);a.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/overview"),a.state("overview",{url:"/overview",templateUrl:"/templates/overview.html",controller:"OverviewController",resolve:{SnakeDataService:"SnakeDataService",geographicalRegions:["SnakeDataService",function(a){return a.getGeographicalRegions()}]}})}]),a.run(["$rootScope",function(a){a.$on("$stateChangeError",function(a,b,c,d,e,f){console.log(a),console.log(b),console.log(c),console.log(d),console.log(e),console.log(f)}),a.$on("$stateNotFound",function(a,b,c,d){console.log(a),console.log(b),console.log(c),console.log(d)})}])}(),function(){"use strict";function a(a,b,c){b.info("OverviewController called"),a.message="Overview",a.geographicalRegions=c,b.info(c)}var b=angular.module("mainApp");b.controller("OverviewController",["$scope","$log","geographicalRegions",a])}(),function(){"use strict";function a(a,b){b.info("SnakeDataService called");var c=function(){return b.info("SnakeDataService GetGeographicalRegions called"),a.get("/api/SnakeData/GeographicalRegions").then(function(a){return a.data})},d=function(c){return b.info("SnakeDataService get MC1 data called: "+c),b.info(c),a.get("/api/OeeData/"+c).then(function(a){return a.data})},e=function(c,d,e){return b.info("SnakeDataService getBarChartData: "+c),b.info(c),a.get("/api/OeeData/LineData/"+c+"/"+d+"/"+e).then(function(a){return a.data})};return{getGeographicalRegions:c,getMachineOee:d,getBarChartData:e}}var b=angular.module("mainApp");b.factory("SnakeDataService",["$http","$log",a])}();