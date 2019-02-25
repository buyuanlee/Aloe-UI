import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import './icon.js'


Vue.component('a-button', Button);
Vue.component('a-icon', Icon);

new Vue({
    el: '#app',
    data: {
        loading: false
}
})
;

