import express from "express"
import routes from './routes'
const app = express();

app.use(express.json());
app.use(routes)

app.listen(666,()=>{
    console.log("Servidor iniciado")
});