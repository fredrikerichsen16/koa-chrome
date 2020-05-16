import authorize from './authorize.js';
import storage from 'local-storage';

authorize(function(error, user) {
    if(error) {
        storage.clear();
        location.href = 'http://localhost:3002/signin';
        return;
    }

    storage.set('user', user);
    location.reload();
});