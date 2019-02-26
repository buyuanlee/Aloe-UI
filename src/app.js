import Vue from 'vue'
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies);

const expect = chai.expect;

import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'


Vue.component('aloe-button', Button);
Vue.component('aloe-icon', Icon);
Vue.component('aloe-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading: false
    }
});

console.log(Button);

