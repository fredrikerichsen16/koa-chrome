import storage from 'local-storage';

let $user = storage.get('user');

if (!$user) {
    $user = {
        id: 1,
        personal: {
            name: 'Fredrik',
            city: {
                name: 'Stavanger, Norway',
                timezone: 'UTC+1',
            },
        },
        preferences: {
            clockFormat: '12HR',
            language: 'EN',
        },
        widgets: ['news-digest', 'todo', 'stocks']
    };

    storage.set('user', $user);
}