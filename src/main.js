import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
  
// If you comment out this line the error disappears
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

import { createDatabase } from './database';
const database = createDatabase();

const app = createApp(App)

database.then(db => {
    app.use(db).mount('#app');
});
