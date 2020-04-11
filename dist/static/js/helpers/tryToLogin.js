import authorize from './authorize.js';
import storage from 'local-storage';

authorize(function(error, user) {
    if(error) {
        storage.clear();
        location.href = 'http://localhost:3002/signin';
    }

    storage.set('user', user);
});