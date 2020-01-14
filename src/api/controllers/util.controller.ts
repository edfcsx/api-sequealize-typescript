import express from 'express';
import { Router } from '../../common/router';

class UtilController extends Router {
  applyRoutes(application: express.Application) {
    application.get('/ping', (req, res) => {
      res.status(200).json({});
    })
  }
}

export const utilController = new UtilController(); 