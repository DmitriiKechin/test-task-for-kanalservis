import express from 'express';
import path from 'path';
import corsMiddleware from './middleware/cors.middleware';
import ordersRouter from './routes/orders.router';

const app = express();
const PORT = 5500;

if (process.env.NODE_ENV === 'development') {
  app.use(corsMiddleware);
}

app.use(express.json());
app.use('/api/orders', ordersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../../client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    );
  });
}

function start(): Promise<void> {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port --> ${PORT}...`)
    );
    const data = require(path.join(__dirname, '../../server', 'db.json'));
    return data;
  } catch (e: any) {
    console.log('server Error :-(', e.messsage);
    process.exit(1);
  }
}

export const dataBase = start();
