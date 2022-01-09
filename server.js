import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import router from './server/routers/router.js';
import { connectMongo } from './server/database/connection.js';
dotenv.config({ path: 'var.env' });

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, 'sources/css')));
app.use('/img', express.static(path.resolve(__dirname, 'sources/img')));
app.use('/js', express.static(path.resolve(__dirname, 'sources/js')));

const startApp = async () => {
  try {
    await connectMongo();
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (error) {
    console.log('ERROR');
  }
};
startApp();
