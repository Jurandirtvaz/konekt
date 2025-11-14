import express from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import prisma from './src/config/prisma.js'; 

const app = express(); 
const PORT = process.env.PORT || 3001; 

//CORS
const allowedOrigins = process.env.CORS_ORIGIN.split(',');

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rota de teste
app.get('/', (req, res) =>{
    res.json({
        message: 'API funcionando'
    });
});

app.listen(PORT, ()=>{
     console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});