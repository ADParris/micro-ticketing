import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined.');
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be defined.');
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Tickets server is connected to MongoDB.');
  } catch (error) {
    console.error(error.message);
  }
  app.listen(PORT, () =>
    console.log(`Tickets server is listening on port ${PORT}...`)
  );
};

start();
