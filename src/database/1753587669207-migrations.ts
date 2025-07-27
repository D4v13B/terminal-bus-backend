import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1753587669207 implements MigrationInterface {
    name = 'Migrations1753587669207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`terminales\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nom\` varchar(255) NOT NULL, \`long\` int NOT NULL, \`lat\` int NOT NULL, \`provinciaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`provincia\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ruta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`distancia\` int NOT NULL, \`anden\` varchar(255) NOT NULL, \`horaEntrada\` varchar(255) NOT NULL, \`horaSalida\` varchar(255) NOT NULL, \`provId\` int NULL, \`toId\` int NULL, \`tdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parada\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`lat\` decimal NOT NULL, \`long\` decimal NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parada_ruta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`precio\` decimal NOT NULL, \`rutaId\` int NULL, \`paradaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`boleto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaUso\` datetime NOT NULL, \`valido\` tinyint NOT NULL, \`tokenBoleto\` varchar(255) NOT NULL, \`paradaRutaId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notificaciones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` enum ('EMAIL', 'SMS', 'WHATSAPP', 'PUSH') NOT NULL, \`destino\` varchar(255) NOT NULL, \`asunto\` varchar(255) NULL, \`mensaje\` text NOT NULL, \`enviado_en\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`boleto_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`terminales\` ADD CONSTRAINT \`FK_737f60f39dad13cd57c6daed8a3\` FOREIGN KEY (\`provinciaId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_89d1e13d261f2ac0e832f893b09\` FOREIGN KEY (\`provId\`) REFERENCES \`provincia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_233e109545e0c1e41552ba12350\` FOREIGN KEY (\`toId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ruta\` ADD CONSTRAINT \`FK_c8acd2ce68aca7f34b5120b626e\` FOREIGN KEY (\`tdId\`) REFERENCES \`terminales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_463ea59b32cc458c4fda9d3792c\` FOREIGN KEY (\`rutaId\`) REFERENCES \`ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` ADD CONSTRAINT \`FK_dbb0af9de9c99458cff7156cec2\` FOREIGN KEY (\`paradaId\`) REFERENCES \`parada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_a3d8d785dd767e1df17fbd79ebb\` FOREIGN KEY (\`paradaRutaId\`) REFERENCES \`parada_ruta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boleto\` ADD CONSTRAINT \`FK_95fc3e6d95c085859a16b48058a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificaciones\` ADD CONSTRAINT \`FK_0389bee8b19007171ff192d2d55\` FOREIGN KEY (\`boleto_id\`) REFERENCES \`boleto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notificaciones\` DROP FOREIGN KEY \`FK_0389bee8b19007171ff192d2d55\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_95fc3e6d95c085859a16b48058a\``);
        await queryRunner.query(`ALTER TABLE \`boleto\` DROP FOREIGN KEY \`FK_a3d8d785dd767e1df17fbd79ebb\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_dbb0af9de9c99458cff7156cec2\``);
        await queryRunner.query(`ALTER TABLE \`parada_ruta\` DROP FOREIGN KEY \`FK_463ea59b32cc458c4fda9d3792c\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_c8acd2ce68aca7f34b5120b626e\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_233e109545e0c1e41552ba12350\``);
        await queryRunner.query(`ALTER TABLE \`ruta\` DROP FOREIGN KEY \`FK_89d1e13d261f2ac0e832f893b09\``);
        await queryRunner.query(`ALTER TABLE \`terminales\` DROP FOREIGN KEY \`FK_737f60f39dad13cd57c6daed8a3\``);
        await queryRunner.query(`DROP TABLE \`notificaciones\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`boleto\``);
        await queryRunner.query(`DROP TABLE \`parada_ruta\``);
        await queryRunner.query(`DROP TABLE \`parada\``);
        await queryRunner.query(`DROP TABLE \`ruta\``);
        await queryRunner.query(`DROP TABLE \`provincia\``);
        await queryRunner.query(`DROP TABLE \`terminales\``);
    }

}
