// _varname to avoid polluting the variable name space

import storage from 'local-storage';
import _widgets from '../widgets/widgets.json';
import find from 'lodash.find';

let _userWidgets = storage.get('user').widgets;

let _match = [];

for(let widget of _widgets) {
    if(find(_userWidgets, {'name': widget.name, 'type': 'sidebar'})) {
        _match.push(widget);
    }
}

let _routes = [];

let temp = {};
for(let widget of _match) {
    temp = {};
    temp.path = '/' + widget.slug;
    temp.component = () => import(`../widgets/${widget.name}/${widget.name}`);
    temp.meta = {
        name: widget.title,
        slug: widget.slug,
        icon: widget.icons.flat,
    };

    _routes.push(temp);
}

export default _routes;