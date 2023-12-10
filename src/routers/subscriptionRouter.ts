import express from 'express';

import { getAllSubscription } from '../controllers/subscriptionController';

export default (router: express.Router) => {
  router.get('/subscriptions', getAllSubscription);
};
