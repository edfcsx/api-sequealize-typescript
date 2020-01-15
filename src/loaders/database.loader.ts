import { Env } from '../common/env';
import * as Sequelize from 'sequelize';
// import { UserModel } from '../api/models/user.model';

export class Database {
  public connection: Sequelize.Sequelize;
  private env = Env();

  constructor() {
    this.connection = new Sequelize.Sequelize({
      database: this.env.database.database,
      host: this.env.database.host,
      username: this.env.database.username,
      password: this.env.database.password,
      dialect: 'postgres',
      define: {
        timestamps: true,
        underscored: true,
      },
    });

    const db = {
      sequelize: this.connection,
      Sequelize,
    }


  }
}