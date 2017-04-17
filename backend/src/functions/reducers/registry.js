'use strict';

const registry = {
    'VOTE': [
        'reducer-userVotes',
    ],
};

const registryFunctions = {
    getReducersForEvent(event) {
        return registry[event];
    },
}

module.exports = registryFunctions;
