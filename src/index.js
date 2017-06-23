/**
 * Created by ccm on 2017/6/23.
 */
import _ from "lodash";
import './style.css';
import Icon from './11.png';
import Library from './library'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['hello', 'webpack'], ' @@@@@@@@@@@@');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
if (module.hot) {
    module.hot.accept('./library', function() {
        console.log('Accepting the updated library module!');
        Library.log();
    })
}

document.body.appendChild(component());