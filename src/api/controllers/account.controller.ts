import express from 'express';
import { Router } from '../../common/router';
import { AccountModel } from '../models/account.model';

class AccountController extends Router {
  applyRoutes(application: express.Application) {
    application.post('/accounts', (req, res) => {
      const { username, password } = req.body;
      
      AccountModel.create({
        username,
        password,
      })
        .then((account: any) => res.status(200).json(account))
        .catch((err: any) => res.status(400).json({ err }))
    });
  }
}

export const accountController = new AccountController();