import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1753173126003 implements MigrationInterface {
  name = 'NewMigration1753173126003';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`paradas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`orden\` int NOT NULL, \`tiempo_estimado_llegada\` int NOT NULL, \`ruta_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`provincias\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`rutas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`distancia_km\` float NOT NULL, \`duracion_estimada\` int NOT NULL, \`activa\` tinyint NOT NULL DEFAULT 1, \`origen_id\` int NULL, \`destino_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`andenes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`terminal\` varchar(255) NOT NULL, \`numero\` varchar(255) NOT NULL, \`activo\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`buses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`placa\` varchar(255) NOT NULL, \`tipo\` enum ('EXPRESS', 'ESTANDAR') NOT NULL, \`capacidad\` int NOT NULL, \`estado_tecnico\` enum ('BUENO', 'REGULAR', 'MANTENIMIENTO') NOT NULL DEFAULT 'BUENO', \`activo\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_e78e1b9df21315024e40a67d02\` (\`placa\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`salidas_programadas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fecha\` date NOT NULL, \`hora_salida\` time NOT NULL, \`estado\` enum ('PROGRAMADA', 'EN_CURSO', 'CANCELADA') NOT NULL DEFAULT 'PROGRAMADA', \`ruta_id\` int NULL, \`bus_id\` int NULL, \`anden_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`boletos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`asiento\` varchar(255) NOT NULL, \`precio\` float NOT NULL, \`estado\` enum ('RESERVADO', 'PAGADO', 'CANCELADO', 'REEMBOLSADO') NOT NULL DEFAULT 'RESERVADO', \`codigo_qr\` varchar(255) NOT NULL, \`creado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`salida_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`notificaciones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` enum ('EMAIL', 'SMS', 'WHATSAPP', 'PUSH') NOT NULL, \`destino\` varchar(255) NOT NULL, \`asunto\` varchar(255) NULL, \`mensaje\` text NOT NULL, \`enviado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`boleto_id\` int NULL, \`salida_programada_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`paradas\` ADD CONSTRAINT \`FK_b761d7230ec18b4bf9eee4bc332\` FOREIGN KEY (\`ruta_id\`) REFERENCES \`rutas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rutas\` ADD CONSTRAINT \`FK_210b416169c54083900485ba18f\` FOREIGN KEY (\`origen_id\`) REFERENCES \`provincias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rutas\` ADD CONSTRAINT \`FK_48b1f5faad59b1c05bf8005e795\` FOREIGN KEY (\`destino_id\`) REFERENCES \`provincias\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`salidas_programadas\` ADD CONSTRAINT \`FK_3b01601925aa4e645fbf1fad7e1\` FOREIGN KEY (\`ruta_id\`) REFERENCES \`rutas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`salidas_programadas\` ADD CONSTRAINT \`FK_acea926274e22a9f73bedbbe172\` FOREIGN KEY (\`bus_id\`) REFERENCES \`buses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`salidas_programadas\` ADD CONSTRAINT \`FK_91e960f55c3ab2a87abe678ac4a\` FOREIGN KEY (\`anden_id\`) REFERENCES \`andenes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`boletos\` ADD CONSTRAINT \`FK_d21584a925dc496a58ffea46b09\` FOREIGN KEY (\`salida_id\`) REFERENCES \`salidas_programadas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0389bee8b19007171ff192d2d55\` FOREIGN KEY (\`boleto_id\`) REFERENCES \`boletos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0b8310617b2d7dcc1add07537eb\` FOREIGN KEY (\`salida_programada_id\`) REFERENCES \`salidas_programadas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0b8310617b2d7dcc1add07537eb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0389bee8b19007171ff192d2d55\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`boletos\` DROP FOREIGN KEY \`FK_d21584a925dc496a58ffea46b09\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`salidas_programadas\` DROP FOREIGN KEY \`FK_91e960f55c3ab2a87abe678ac4a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`salidas_programadas\` DROP FOREIGN KEY \`FK_acea926274e22a9f73bedbbe172\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`salidas_programadas\` DROP FOREIGN KEY \`FK_3b01601925aa4e645fbf1fad7e1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rutas\` DROP FOREIGN KEY \`FK_48b1f5faad59b1c05bf8005e795\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rutas\` DROP FOREIGN KEY \`FK_210b416169c54083900485ba18f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`paradas\` DROP FOREIGN KEY \`FK_b761d7230ec18b4bf9eee4bc332\``,
    );
    await queryRunner.query(`DROP TABLE \`notificaciones\``);
    await queryRunner.query(`DROP TABLE \`boletos\``);
    await queryRunner.query(`DROP TABLE \`salidas_programadas\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e78e1b9df21315024e40a67d02\` ON \`buses\``,
    );
    await queryRunner.query(`DROP TABLE \`buses\``);
    await queryRunner.query(`DROP TABLE \`andenes\``);
    await queryRunner.query(`DROP TABLE \`rutas\``);
    await queryRunner.query(`DROP TABLE \`provincias\``);
    await queryRunner.query(`DROP TABLE \`paradas\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
