import express from 'express';
import { Router } from '../../common/router';
import { UserModel } from '../models/user.model';
import UUIDV1 from 'uuid/v1';

class UserController extends Router {

  applyRoutes(application: express.Application) {
    application.post('/user', async (req, res) => {
      const { name, email, password } = req.body;

      console.log('UUIDDDD', UUIDV1());

      await UserModel.create({  name, email, password })
        .then((user) => res.status(200).json(user))
        .catch((err) => {
          console.log(err);
          res.status(400).json({ error: 'Occured a error to create user' })
        });
    });
  }
}

export const userController = new UserController();