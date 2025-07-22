import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'monchillo24',
  database: 'terminal',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: false,
};

export const dataSource = new DataSource(AppDataSourceOptions);
