'use strict';

function createClientCtrl($scope, ClientDAO) {

    $scope.formData = {
        firstName: 'Janek',
        lastName: 'Kowalski',
        year: 1999
    };

    console.log('go!');
    ClientDAO.addClient($scope.formData);
    var clients = ClientDAO.getClients();
    console.log(clients);

    $scope.addClient = function () {
        const client = angular.copy($scope.formData, {});
        // TODO adjust it, utilize service for local storage
        // $scope.clients.push(client);
        $scope.formData = {};
    };
}
