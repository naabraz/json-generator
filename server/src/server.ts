import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

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

  res.send(`Data received: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
