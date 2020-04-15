import express from 'express';
import { callbackMessage } from './routes';

const app = express();
const port = 3333;

app.get('/', callbackMessage);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});