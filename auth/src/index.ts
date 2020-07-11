import { json } from 'body-parser';
import express from 'express';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(signinRouter);

app.listen(PORT, () =>
  console.log(`Auth server is listening on port ${PORT}...`)
);
