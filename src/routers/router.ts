import express from 'express';

import users from './userRouter';
import subscriptions from './subscriptionRouter';

const router = express.Router();

export default (): express.Router => {
  users(router);
  subscriptions(router);

  return router;
};
