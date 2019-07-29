var app = angular.module('angular-dragula-demo', [angularDragula(angular)]);


app.controller('MainCtrl', function ($scope, dragulaService) {

    console.log(dragulaService);

    dragulaService.options($scope, 'bag-one', {
        direction: function () {
            return 'horizontal';
        }
    })

    $scope.items = [
        "one", "two", "three"
    ];

});