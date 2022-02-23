import { Model, DataTypes } from 'sequelize';
import sequelize from './database.mjs';

class User extends Model {};

User.init({
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user'
})

export default User;