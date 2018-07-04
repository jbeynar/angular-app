'use strict';

// register new app
angular.module('angularApp', ['ngRoute']);

// register service
angular.module('angularApp').service('ClientsDAO', ClientsDAO);

// register application routes
angular.module('angularApp').config(['$routeProvider', ($routeProvider) => {
    // declare routes
    $routeProvider.when('/main', {
        controller: mainCtrl,
        templateUrl: 'src/views/main.html'
    }).when('/create-client', {
        controller: ['$scope', 'ClientsDAO', createClientCtrl],
        templateUrl: 'src/views/createClient.html'
    }).otherwise('/');

}]);
