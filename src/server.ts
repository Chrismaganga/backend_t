import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/userRoutes';
import { Request, Response } from 'express';
const app = express();
const port = 3000;

// Middleware
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
// Routes
app.get('/', (_req: Request, res: Response) => {
    res.json({ info: "backend-api" })
});
app.use('/api', router);
app.use('users', router);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});