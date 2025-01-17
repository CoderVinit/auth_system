import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
