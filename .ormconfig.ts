import { DataSource } from 'typeorm';
import { User } from './src/users/user.entity/user.entity';

export default new DataSource({
  type: 'postgres', // o mysql
  host: 'localhost',
  port: 5432,
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_bd',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
