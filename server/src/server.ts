import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { createDocument } from './docCreator/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/time', (_, res: Response) => {
  res.json({ date: Date.now() });
});

app.post('/create', (req: Request, res: Response) => {
  const data = req.body;

  createDocument(data);

  res.end();
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
