import storage from 'local-storage';

let $user = storage.get('user');
console.log($user);

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