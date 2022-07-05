
CREATE TABLE productora (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
ranking INT UNSIGNED UNIQUE,
activo INT UNSIGNED,
fecha_creacion DATETIME
);

CREATE TABLE prueba (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
prueba VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS prueba;

CREATE TABLE lenguajes (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL
);

INSERT INTO lenguajes VALUES(DEFAULT, "ingles");

ALTER TABLE actors ADD lenguaje_id INT UNSIGNED;

ALTER TABLE actors ADD FOREIGN KEY (lenguaje_id) REFERENCES lenguajes(id);

INSERT INTO movies VALUES(DEFAULT, NULL, NULL, "Casablanca", 9.5, 8, "1970-05-10 00:00:00", 220, 3 );

INSERT INTO actors VALUES(DEFAULT, NULL, NULL, "Actor","5", 9.5, 8, 1);

INSERT INTO actor_movie VALUES(DEFAULT, NULL, NULL, 53,24);

UPDATE actor_movie SET actor_id = 54, movie_id = 25 WHERE id = 44;

ALTER TABLE movies MODIFY awards INT UNSIGNED;

UPDATE movies SET awards = NULL WHERE id > 1;

SET SQL_SAFE_UPDATES = 0;

UPDATE movies SET awards = 2 WHERE release_date >= "2000-01-01 00:00:00";

UPDATE movies SET awards = 0 WHERE awards = NULL;

DELETE FROM movies WHERE actor_movie=54;/*como elimino una pelicula segun el actor que la interpreta?*/

INSERT INTO genres VALUES(DEFAULT, "2020-05-10 00:00:00", NULL, "GENERO NUEVO 1", 5, 1);

UPDATE genres SET active = 0 WHERE id >= 1;

UPDATE genres SET active = 1 WHERE id <= 5;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM genres WHERE active = 0;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM movies WHERE rating < 1;

SET FOREIGN_KEY_CHECKS=0;
