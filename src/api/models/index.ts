import { Sequelize } from 'sequelize';
import { Env } from '../../common/env';

const env = Env();

const sequelize = new Sequelize({
  database: env.database.database,
  host: env.database.host,
  username: env.database.username,
  password: env.database.password,
  dialect: 'postgres',
});

export default sequelize;