CREATE DATABASE chat;

USE chat;

CREATE TABLE username (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  name CHAR(20) NOT NULL,
  roomId MEDIUMINT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  message VARCHAR(160) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  nameId MEDIUMINT NOT NULL
);

CREATE TABLE rooms (
  roomId MEDIUMINT NOT NULL,
  roomName VARCHAR(20) NOT NULL,
  PRIMARY KEY (roomId)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

