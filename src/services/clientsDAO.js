'use strict';

function ClientsDAO() {

    const DATA_KEY = 'APP_DATA_CLIENTS';

    function addClient(client) {
        // getClients();
        // TODO push new client to the array and save serialized clients array
    }

    function getClients() {
        const rawClients = localStorage.getItem(DATA_KEY);
        let clients;
        try {
            clients = JSON.parse(rawClients) || [];
        } catch (err) {
            clients = [];
        }
        return clients;
    }

    return {
        addClient: addClient,
        getClients: getClients
    }
}
