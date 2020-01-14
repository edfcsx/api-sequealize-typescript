import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { Router } from '../common/router';
import { Env } from '../common/env';

export interface ServerOptions {
  controllers: Router[]
}

export class Server {
  public application: express.Application | undefined;
  public server: http.Server | undefined;
  public env = Env();

  private initializeServer(options: ServerOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express();
        
        this.application.use(bodyParser.urlencoded({ extended: true }));
        this.application.use(express.json());
        this.application.use(logger('dev'));

        for (const route of options.controllers) {
          route.applyRoutes(this.application);
        }

        this.server = http.createServer(this.application);
        this.server.listen(this.env.server.port, () => resolve(this.application));
      } catch (err) {
        reject(err);
      }
    });
  }

  bootstrap(options: ServerOptions): Promise<Server> {
    return this.initializeServer(options)
      .then(() => this);
  }

  shutdown(): void {
    if (this.server instanceof http.Server) {
      try {
        this.server.close();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error('Server nothing initialized');
    }
  }
}