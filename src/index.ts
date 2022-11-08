import express, { Request, Response } from 'express';
import routes from './routes/index';

const app = express();
const port = 5000;
//adding route for path
app.get('/', (req: Request, res: Response): void => {
  res.send('connected');
});

//connect all the routes with their endpoints to the server
app.use(routes);

//start a server
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
