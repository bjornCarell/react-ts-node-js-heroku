import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();

const app = express();
const distPath = path.join(__dirname, '..', 'client/build');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(distPath, 'index.html');
});

app.get('/connection', (rej, res) => res.json('Server connection successful'));

const port = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

export { app };
