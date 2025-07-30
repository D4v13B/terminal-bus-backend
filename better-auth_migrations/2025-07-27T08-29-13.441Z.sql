create table `user` (`id` varchar(36) not null primary key, `name` text not null, `email` varchar(255) not null unique, `emailVerified` boolean not null, `image` text, `createdAt` datetime not null, `updatedAt` datetime not null);

create table `session` (`id` varchar(36) not null primary key, `expiresAt` datetime not null, `token` varchar(255) not null unique, `createdAt` datetime not null, `updatedAt` datetime not null, `ipAddress` text, `userAgent` text, `userId` varchar(36) not null references `user` (`id`));

create table `account` (`id` varchar(36) not null primary key, `accountId` text not null, `providerId` text not null, `userId` varchar(36) not null references `user` (`id`), `accessToken` text, `refreshToken` text, `idToken` text, `accessTokenExpiresAt` datetime, `refreshTokenExpiresAt` datetime, `scope` text, `password` text, `createdAt` datetime not null, `updatedAt` datetime not null);

CREATE TABLE `jwks` (
  `id` VARCHAR(36) NOT NULL PRIMARY KEY,
  `privateKey` TEXT NOT NULL,
  `publicKey` TEXT NOT NULL,
  `algorithm` VARCHAR(10) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
