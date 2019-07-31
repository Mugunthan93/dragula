var app = angular.module('angular-dragula-demo', [angularDragula(angular)]);


app.controller('MainCtrl', function ($scope, dragulaService) {

    var vm = this;

    $scope.items1 = [{
        items: 'income',
        id: "1"
    }, {
        items: 'expense',
        id: "2"

    }];

    $scope.items2 = [{
        items: 'profit',
        id: "3"
    }];

    $scope.items3 = [{
        items: 'recent',
        id: "4"
    }, {
        items: 'feed',
        id: "5"
    }];

    $scope.items4 = [{
        items: 'client'
    }, {
        items: 'file'
    }];

    dragulaService.options($scope, 'container', {
        moves: function (el, container, handle) {
            // console.log(el, container, handle);
            return true;
        },
        accepts: function (el, target, source, d) {
            // console.log($(target), $(source));
            // console.log(el, target, source, d);
            return true;
        },
        invalid: function (el, container) {
            var invalid = false;
            // var parent = $(container).parent();
            // console.log(parent);
            // if (el) {

            //     return invalid;
            // }
            return invalid;
        },
        copy: false,
        revertOnSpill: true,
        removeOnSpill: false
    });

    $scope.$on('container.over', function (event, container, el, d) {
        // console.log(event, container, el, d);
    });

    $scope.$on('container.drop', function (event, el, target, source) {
        // console.log(event, el, target, source);
    });

});