'use strict';

angular.module('angularApp', []); // register new app

function mainController($scope) {

    $scope.formData = {};

    $scope.addClient = function () {
        const client = angular.copy($scope.formData, {});
        $scope.clients.push(client);
        $scope.formData = {};
    };

    // scope is an object with shared assets
    $scope.clients = [
        {
            firstName: 'Jan',
            lastName: 'Kowalski',
            year: 1967
        },
        {
            firstName: 'Jakub',
            lastName: 'Kowalski',
            year: 1990
        },
        {
            firstName: 'Andrzej',
            lastName: 'Kowalski',
            year: 1961
        },
        {
            firstName: 'Józef',
            lastName: 'Kowalski',
            year: 1987
        }
    ];

}

// register new controller ( name, function )
angular.module('angularApp').controller('mainController', mainController);
