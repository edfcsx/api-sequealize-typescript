import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
import UUIDV1 from 'uuid/v1';

export class AccountModel extends Model {
  id?: String;
  password?: String;
}

AccountModel.init({
  id: {
    type: DataTypes.UUIDV1,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'AccountModel',
  tableName: 'accounts',
  underscored: true,
  timestamps: true,
});

AccountModel.beforeCreate(function (account) {
  account.setDataValue('id', UUIDV1());
});