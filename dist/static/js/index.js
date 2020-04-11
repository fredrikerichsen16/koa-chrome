import storage from 'local-storage';

let $user = storage.get('user');

function userValidIsh() {
    return $user.hasOwnProperty('preferences') && $user.hasOwnProperty('widgets');
}

if(!$user || !userValidIsh())
{
    (async function() {
        await import('@static/js/helpers/tryToLogin');
    })();
}

let $page = storage.get('page');
if(!$page) {
    $page = {
        middleComponentSlide: 0,
        backgrounds: {}
    };

    storage.set('page', $page);
}

// if (!$user) {
//
//     $user = {
//         id: 1,
//         personal: {
//             name: 'Fredrik',
//             city: {
//                 name: 'Stavanger, Norway',
//                 timezone: 'UTC+1',
//             },
//         },
//         preferences: {
//             clockFormat: '12HR',
//             language: 'EN',
//         },
//         widgets: ['news-digest', 'todo', 'stocks'],
//         middleComponent: {
//             slide: 1
//         },
//     };
//
//     storage.set('user', $user);
// }