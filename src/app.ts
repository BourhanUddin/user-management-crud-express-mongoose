import cors from 'cors';
import express, { Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
const app = express();
// parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
