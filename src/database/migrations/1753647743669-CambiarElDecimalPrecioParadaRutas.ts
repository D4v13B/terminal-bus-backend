import { MigrationInterface, QueryRunner } from "typeorm";

export class CambiarElDecimalPrecioParadaRutas1753647743669 implements MigrationInterface {
    name = 'CambiarElDecimalPrecioParadaRutas1753647743669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`terminales\` DROP FOREIGN KEY \`FK_737f60f39dad13cd57c6daed8a3\``);
        await queryRunner.query(`ALTER TABLE \`terminales\` CHANGE \`provinciaId\` \`provinciaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_89d1e13d261f2ac0e832f893b09\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_233e109545e0c1e41552ba12350\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_c8acd2ce68aca7f34b5120b626e\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` CHANGE \`provId\` \`provId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ruta\` CHANGE \`toId\` \`toId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ruta\` CHANGE \`tdId\` \`tdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_463ea59b32cc458c4fda9d3792c\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_dbb0af9de9c99458cff7156cec2\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` CHANGE \`precio\` \`precio\` decimal(11,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` CHANGE \`rutaId\` \`rutaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` CHANGE \`paradaId\` \`paradaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_a3d8d785dd767e1df17fbd79ebb\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_95fc3e6d95c085859a16b48058a\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` CHANGE \`paradaRutaId\` \`paradaRutaId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`boleto\` CHANGE \`userId\` \`userId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`session\` CHANGE \`ipAddress\` \`ipAddress\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`session\` CHANGE \`userAgent\` \`userAgent\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`accessToken\` \`accessToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`refreshToken\` \`refreshToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`idToken\` \`idToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`accessTokenExpiresAt\` \`accessTokenExpiresAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`refreshTokenExpiresAt\` \`refreshTokenExpiresAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`scope\` \`scope\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`password\` \`password\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`image\` \`image\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0a5f87551149ecc486ee8477c5f\``);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0389bee8b19007171ff192d2d55\``);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` CHANGE \`asunto\` \`asunto\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` CHANGE \`boleto_id\` \`boleto_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`terminales\` ADD CONSTRAINT \`FK_737f60f39dad13cd57c6daed8a3\` FOREIGN KEY (\`provinciaId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_89d1e13d261f2ac0e832f893b09\` FOREIGN KEY (\`provId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_233e109545e0c1e41552ba12350\` FOREIGN KEY (\`toId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_c8acd2ce68aca7f34b5120b626e\` FOREIGN KEY (\`tdId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_463ea59b32cc458c4fda9d3792c\` FOREIGN KEY (\`rutaId\`) REFERENCES \`ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_dbb0af9de9c99458cff7156cec2\` FOREIGN KEY (\`paradaId\`) REFERENCES \`parada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_a3d8d785dd767e1df17fbd79ebb\` FOREIGN KEY (\`paradaRutaId\`) REFERENCES \`parada_ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_95fc3e6d95c085859a16b48058a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0a5f87551149ecc486ee8477c5f\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0389bee8b19007171ff192d2d55\` FOREIGN KEY (\`boleto_id\`) REFERENCES \`boleto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0389bee8b19007171ff192d2d55\``);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0a5f87551149ecc486ee8477c5f\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_95fc3e6d95c085859a16b48058a\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_a3d8d785dd767e1df17fbd79ebb\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_dbb0af9de9c99458cff7156cec2\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_463ea59b32cc458c4fda9d3792c\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_c8acd2ce68aca7f34b5120b626e\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_233e109545e0c1e41552ba12350\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_89d1e13d261f2ac0e832f893b09\``);
        await queryRunner.query(`ALTER TABLE \`terminales\` DROP FOREIGN KEY \`FK_737f60f39dad13cd57c6daed8a3\``);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` CHANGE \`boleto_id\` \`boleto_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` CHANGE \`asunto\` \`asunto\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0389bee8b19007171ff192d2d55\` FOREIGN KEY (\`boleto_id\`) REFERENCES \`boleto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0a5f87551149ecc486ee8477c5f\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`image\` \`image\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`password\` \`password\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`scope\` \`scope\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`refreshTokenExpiresAt\` \`refreshTokenExpiresAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`accessTokenExpiresAt\` \`accessTokenExpiresAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`idToken\` \`idToken\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`refreshToken\` \`refreshToken\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account\` CHANGE \`accessToken\` \`accessToken\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`session\` CHANGE \`userAgent\` \`userAgent\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`session\` CHANGE \`ipAddress\` \`ipAddress\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`boleto\` CHANGE \`userId\` \`userId\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`boleto\` CHANGE \`paradaRutaId\` \`paradaRutaId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_95fc3e6d95c085859a16b48058a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_a3d8d785dd767e1df17fbd79ebb\` FOREIGN KEY (\`paradaRutaId\`) REFERENCES \`parada_ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` CHANGE \`paradaId\` \`paradaId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` CHANGE \`rutaId\` \`rutaId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` CHANGE \`precio\` \`precio\` decimal(10,0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_dbb0af9de9c99458cff7156cec2\` FOREIGN KEY (\`paradaId\`) REFERENCES \`parada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_463ea59b32cc458c4fda9d3792c\` FOREIGN KEY (\`rutaId\`) REFERENCES \`ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` CHANGE \`tdId\` \`tdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ruta\` CHANGE \`toId\` \`toId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ruta\` CHANGE \`provId\` \`provId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_c8acd2ce68aca7f34b5120b626e\` FOREIGN KEY (\`tdId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_233e109545e0c1e41552ba12350\` FOREIGN KEY (\`toId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_89d1e13d261f2ac0e832f893b09\` FOREIGN KEY (\`provId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`terminales\` CHANGE \`provinciaId\` \`provinciaId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`terminales\` ADD CONSTRAINT \`FK_737f60f39dad13cd57c6daed8a3\` FOREIGN KEY (\`provinciaId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
