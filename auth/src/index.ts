import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined.');
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Auth server is connected to MongoDB.');
  } catch (error) {
    console.error(error.message);
  }
  app.listen(PORT, () =>
    console.log(`Auth server is listening on port ${PORT}...`)
  );
};

start();
