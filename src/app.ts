import { Server } from './loaders/express.loader';
import { Database } from './loaders/database.loader';

import { utilController } from './api/controllers/util.controller';
import { accountController } from './api/controllers/account.controller';

class Main {
  server = new Server();
  database = new Database();
  
  init() {
    this.server.bootstrap({
      controllers: [
        utilController,
        accountController,
      ]
    })
    .then((app) => {
      const { port, address } = <any>app.server?.address();
      console.log(`Server running on address ${address} in port ${port}`);
      // this.initializeDatabase();
    })
    .catch((err) => this.shutdown(err));
  }

  async initializeDatabase() {
    this.database.connection.authenticate()
      .then(async () => {
        await this.database.connection.sync()
        console.log('Database connected');
      })
      .catch((err) => this.shutdown(err))
  }

  shutdown(err: Error) {
    console.error(err);
    console.log('System shutdown');
    process.exit(1);
  }
}

const starter = new Main();

starter.init();
