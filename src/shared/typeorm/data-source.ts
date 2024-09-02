import 'reflect-metadata';
import Juice from '../../modules/juices/typeorm/entities/Juice';
import Order from '../../modules/orders/typeorm/entities/Order';
import { DataSource, DataSourceOptions } from 'typeorm';

type AppDataSourceConstructorOptions = DataSourceOptions;

const options: AppDataSourceConstructorOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: 'postgres',
  password: 'admin',
  database: 'juiceshop-db',
  synchronize: false,
  logging: false,
  entities: [Order, Juice],
  migrations: [`${__dirname}/../typeorm/migrations/*.{js,ts}`],
  subscribers: [],
};
export const AppDataSource = new DataSource(options);
