import { createApp } from 'vue'
import { createDatabase } from './database';
import './style.css'
import App from './App.vue'
  
// If you comment out this line the error disappears
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

const database = createDatabase();

const app = createApp(App)

database.then(db => {
    app.use(db).mount('#app');
});
