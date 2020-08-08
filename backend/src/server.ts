import express from "express"
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    return res.json({cesao:"quero jogar dark souls"})
})

app.listen(666,()=>{
    console.log("Servidor iniciado")
});