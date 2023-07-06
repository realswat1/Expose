// database.js
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('Exposedatabase', 'exposeswat', 'iamtheSwat1*', {
  host: 'localhost',
  dialect: 'postgres'
});