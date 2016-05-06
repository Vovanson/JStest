var app = angular.module('app', ['nya.bootstrap.select']);
app.controller('mainCtrl', function ($scope) {
    $scope.options = [
        'Alpha', 'Bravo', 'Charlie', 'Delta',
        'Echo'
    ];
});