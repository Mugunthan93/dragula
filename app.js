var app = angular.module('angular-dragula-demo', [angularDragula(angular)]);


app.controller('MainCtrl', function ($scope, dragulaService) {

    $scope.model = [
        [
            'income',
            'expense'
        ],
        [
            'profit'
        ],
        [
            'recent',
            'feed'
        ],
        [
            'client',
            'file'
        ]
    ];


    dragulaService.options($scope, 'model', {});
    dragulaService.options($scope, 'containers', {});

});