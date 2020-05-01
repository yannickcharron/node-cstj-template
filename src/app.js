import cors from 'cors';
import express from 'express';
//import bottlejs from 'bottlejs';

const app = express();

app.use(cors());
app.use(express.json());

//TODO: Configuration des routes


export default app;