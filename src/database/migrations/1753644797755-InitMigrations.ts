import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigrations1753644797755 implements MigrationInterface {
    name = 'InitMigrations1753644797755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`verification\` (\`id\` varchar(36) NOT NULL, \`identifier\` text NOT NULL, \`value\` text NOT NULL, \`expiresAt\` datetime NOT NULL, \`createdAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`terminales\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nom\` varchar(255) NOT NULL, \`long\` int NOT NULL, \`lat\` int NOT NULL, \`provinciaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`provincia\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ruta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`distancia\` int NOT NULL, \`anden\` varchar(255) NOT NULL, \`horaEntrada\` varchar(255) NOT NULL, \`horaSalida\` varchar(255) NOT NULL, \`provId\` int NULL, \`toId\` int NULL, \`tdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parada\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`lat\` varchar(255) NOT NULL, \`long\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parada_ruta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`precio\` decimal NOT NULL, \`rutaId\` int NULL, \`paradaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`boleto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaUso\` datetime NOT NULL, \`valido\` tinyint NOT NULL, \`tokenBoleto\` varchar(255) NOT NULL, \`paradaRutaId\` int NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`session\` (\`id\` varchar(36) NOT NULL, \`expiresAt\` datetime NOT NULL, \`token\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ipAddress\` text NULL, \`userAgent\` text NULL, \`userId\` varchar(36) NOT NULL, UNIQUE INDEX \`IDX_232f8e85d7633bd6ddfad42169\` (\`token\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`account\` (\`id\` varchar(36) NOT NULL, \`accountId\` text NOT NULL, \`providerId\` text NOT NULL, \`userId\` varchar(36) NOT NULL, \`accessToken\` text NULL, \`refreshToken\` text NULL, \`idToken\` text NULL, \`accessTokenExpiresAt\` datetime NULL, \`refreshTokenExpiresAt\` datetime NULL, \`scope\` text NULL, \`password\` text NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` text NOT NULL, \`email\` varchar(255) NOT NULL, \`emailVerified\` tinyint NOT NULL, \`image\` text NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notificaciones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` enum ('EMAIL', 'SMS', 'WHATSAPP', 'PUSH') NOT NULL, \`destino\` varchar(255) NOT NULL, \`asunto\` varchar(255) NULL, \`mensaje\` text NOT NULL, \`enviado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`user_id\` varchar(36) NULL, \`boleto_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`terminales\` ADD CONSTRAINT \`FK_737f60f39dad13cd57c6daed8a3\` FOREIGN KEY (\`provinciaId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_89d1e13d261f2ac0e832f893b09\` FOREIGN KEY (\`provId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_233e109545e0c1e41552ba12350\` FOREIGN KEY (\`toId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_c8acd2ce68aca7f34b5120b626e\` FOREIGN KEY (\`tdId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_463ea59b32cc458c4fda9d3792c\` FOREIGN KEY (\`rutaId\`) REFERENCES \`ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_dbb0af9de9c99458cff7156cec2\` FOREIGN KEY (\`paradaId\`) REFERENCES \`parada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_a3d8d785dd767e1df17fbd79ebb\` FOREIGN KEY (\`paradaRutaId\`) REFERENCES \`parada_ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_95fc3e6d95c085859a16b48058a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`session\` ADD CONSTRAINT \`FK_3d2f174ef04fb312fdebd0ddc53\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`account\` ADD CONSTRAINT \`FK_60328bf27019ff5498c4b977421\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0a5f87551149ecc486ee8477c5f\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0389bee8b19007171ff192d2d55\` FOREIGN KEY (\`boleto_id\`) REFERENCES \`boleto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0389bee8b19007171ff192d2d55\``);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0a5f87551149ecc486ee8477c5f\``);
        await queryRunner.query(`ALTER TABLE \`account\` DROP FOREIGN KEY \`FK_60328bf27019ff5498c4b977421\``);
        await queryRunner.query(`ALTER TABLE \`session\` DROP FOREIGN KEY \`FK_3d2f174ef04fb312fdebd0ddc53\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_95fc3e6d95c085859a16b48058a\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_a3d8d785dd767e1df17fbd79ebb\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_dbb0af9de9c99458cff7156cec2\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_463ea59b32cc458c4fda9d3792c\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_c8acd2ce68aca7f34b5120b626e\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_233e109545e0c1e41552ba12350\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_89d1e13d261f2ac0e832f893b09\``);
        await queryRunner.query(`ALTER TABLE \`terminales\` DROP FOREIGN KEY \`FK_737f60f39dad13cd57c6daed8a3\``);
        await queryRunner.query(`DROP TABLE \`notificaciones\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`account\``);
        await queryRunner.query(`DROP INDEX \`IDX_232f8e85d7633bd6ddfad42169\` ON \`session\``);
        await queryRunner.query(`DROP TABLE \`session\``);
        await queryRunner.query(`DROP TABLE \`boleto\``);
        await queryRunner.query(`DROP TABLE \`parada_ruta\``);
        await queryRunner.query(`DROP TABLE \`parada\``);
        await queryRunner.query(`DROP TABLE \`ruta\``);
        await queryRunner.query(`DROP TABLE \`provincia\``);
        await queryRunner.query(`DROP TABLE \`terminales\``);
        await queryRunner.query(`DROP TABLE \`verification\``);
    }

}
