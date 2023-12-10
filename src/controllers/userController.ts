import express from 'express';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    
    res.send('Hello! You\'ve reached User Controller');
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};