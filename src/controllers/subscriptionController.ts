import express from 'express';

import logger from '../helpers/loggerHelper';

export const getAllSubscription = async (req: express.Request, res: express.Response) => {
  try {
    
    res.send('Hello! You\'ve reached Subscription Controller');
    
  } catch (error) {
    logger.error('Error occurred', { error: error.message });
    return res.sendStatus(400);
  }
};