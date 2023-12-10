import express from 'express';

export const getAllSubscription = async (req: express.Request, res: express.Response) => {
  try {
    
    res.send('Hello! You\'ve reached Subscription Controller');
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};