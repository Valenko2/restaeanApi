import './bootstrap';

import {createApp} from "vue";
import App from './src/App.vue';
import Router from "./src/router/router.js";
import '../css/app.css';

createApp(App).use(Router).mount("#app")
