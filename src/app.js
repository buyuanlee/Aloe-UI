import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'


Vue.component('aloe-button', Button);
Vue.component('aloe-icon', Icon);
Vue.component('aloe-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading: false
    }
})
;

