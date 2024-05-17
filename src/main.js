import { createApp } from 'vue'
import { createDatabase } from './database';
import './style.css'
import App from './App.vue'
import SocioGrpcApi from "@socotec.io/socio-grpc-api";
import SocioVueComponents from "@socotec.io/socio-vue-components";
  
const socioGrpcClient = new SocioGrpcApi("local");

const database = createDatabase();

const app = createApp(App)

database.then(db => {
    app.use(db).mount('#app');
});
