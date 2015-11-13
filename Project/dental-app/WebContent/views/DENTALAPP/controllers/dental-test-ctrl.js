var app = angular.module('myApp', ['nvd3']);
app.controller('myCtrl', function($scope) {

	$scope.quantityA = 0;
	$scope.quantityB = 0;
	$scope.quantityC = 0;
	/* Chart options */
	$scope.options = {
		chart : {
			type : 'discreteBarChart',
			height : 130,
			width : 100,
			margin : {
				top : 50,
				right : 0,
				bottom : 0,
				left : 60
			},
			x : function(d) {
				return d.label;
			},
			y : function(d) {
				return d.value;
			},
			showValues : true,
			valueFormat : function(d) {
				return d;
			},
			transitionDuration : 500,
			xAxis : {
				axisLabel : 'X Axis'
			},
			yAxis : {
				axisLabel : 'Y Axis',
				axisLabelDistance : -5
			}
		}
	};

	/* Chart data */
	// $scope.data = { /* JSON data */}
	
	$scope.dataChart = [ {
		key : "Cumulative Return",
		values : [ {
			"label" : "A",
			"value" : $scope.quantityA
		}, {
			"label" : "B",
			"value" : $scope.quantityB
		}, {
			"label" : "C",
			"value" : $scope.quantityC
		} ]
	} ];
	
	$scope.onChangeQuantityA = function(){
		var a=1;
	};
	

});