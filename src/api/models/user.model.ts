import { Model, Table, Column, DataType, BeforeCreate, BeforeBulkCreate } from 'sequelize-typescript';
import UUIDV1 from 'uuid/v1';

@Table({ tableName: 'user', timestamps: true, charset: 'utf8', underscored: true })
export class UserModel extends Model<UserModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.UUID,
  }) id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  }) name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  }) email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  }) password!: string;

  @BeforeBulkCreate
  static beforeCreateHook(instance: UserModel, options: any) {
    instance.set('id', UUIDV1());
  }
}

// export const userModel = new UserModel();