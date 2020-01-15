import { Model, Table, Column, DataType, BeforeCreate } from 'sequelize-typescript';
import UUIDV1 from 'uuid/v1';

@Table({ tableName: 'users', timestamps: true, charset: 'utf8', underscored: true })
export class UserModel extends Model<UserModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    unique: true,
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

  @BeforeCreate
  static beforeCreateHook(instance: UserModel) {
    console.log('EXECUTOOOOOOOU')
    instance.id = UUIDV1();
  }
}

// export const userModel = new UserModel();