'use strict';

function mainCtrl($scope) {

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
