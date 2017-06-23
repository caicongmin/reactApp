/**
 * Created by ccm on 2017/6/23.
 */
import _ from "lodash"

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['hello', 'webpack'], ' @@@@@@@@@@@@');

    return element;
}

document.body.appendChild(component());