import { DataSource } from 'typeorm';
import { User } from './src/users/user.entity/user.entity';

export default new DataSource({
  type: 'mysql', // o mysql
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'monchillo24',
  database: 'terminal',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
