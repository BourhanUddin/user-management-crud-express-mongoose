import cors from 'cors';
import express, { Request, Response } from 'express';
const app = express();
// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
console.log(process.cwd());

export default app;
