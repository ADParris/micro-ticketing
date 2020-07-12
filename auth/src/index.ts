import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const PORT = process.env.PORT || 3000;

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({ signed: false, secure: true }));

app.use(currentUserRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(signinRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

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
