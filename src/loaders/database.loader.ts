import { Env } from '../common/env';
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../api/models/user.model';

export class Database {
  public connection: Sequelize;
  private env = Env();

  constructor() {
    this.connection = new Sequelize({
      database: this.env.database.database,
      host: this.env.database.host,
      username: this.env.database.username,
      password: this.env.database.password,
      dialect: 'postgres',
      define: {
        timestamps: true,
        underscored: true,
      },
      models: [UserModel],
    });
  }
}