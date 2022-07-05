USE movies_db;

SELECT * FROM movies;
SELECT * FROM actors;

SELECT title FROM movies;
SELECT first_name, last_name FROM actors;

SELECT * FROM movies WHERE release_date > "2000-12-31";

SELECT * FROM movies WHERE release_date BETWEEN "2000-01-01" AND "2009-12-31";

SELECT * FROM movies WHERE title LIKE "Toy Story";

SELECT * FROM actors WHERE first_name LIKE "Mark";

SELECT * FROM actors WHERE first_name != "Mark";

SELECT * FROM actors WHERE first_name =  "Sam" OR first_name = "Mark";

SELECT * FROM movies WHERE id > 10 AND (release_date < "2000-01-01" OR release_date > "2009-01-01");


SELECT * FROM actors ORDER BY first_name;

SELECT * FROM actors ORDER BY first_name, last_name;

SELECT * FROM movies ORDER BY release_date;

SELECT * FROM movies WHERE release_date > "2000-01-01" ORDER BY title;

SELECT * FROM movies LIMIT 5;

SELECT * FROM movies WHERE release_date > "2000-01-01" LIMIT 3;

SELECT * FROM movies WHERE release_date > "2000-01-01" ORDER BY title LIMIT 3;

SELECT * FROM actors LIMIT 1;

SELECT * FROM movies ORDER BY id DESC LIMIT 1;

SELECT * FROM movies WHERE release_date BETWEEN "1999-10-01" AND "2004-12-01";

SELECT * FROM movies WHERE length BETWEEN 45 AND 150;

SELECT * FROM actors WHERE first_name BETWEEN 'He%' AND 'To%' ORDER BY first_name;

SELECT * FROM movies WHERE title LIKE 'T%' ORDER BY title;

SELECT * FROM movies WHERE title LIKE 'T%c' ORDER BY title;

SELECT * FROM movies WHERE release_date BETWEEN "2000-01-01" AND "2000-12-31" ORDER BY title;

SELECT * FROM movies WHERE title LIKE '%-%' ORDER BY title;

SELECT * FROM movies WHERE (release_date LIKE '%-10-%') OR (release_date LIKE '%1999-%') ORDER BY release_date, title DESC;

SELECT * FROM actors WHERE first_name LIKE "J____y" ORDER BY first_name;

SELECT * FROM actors WHERE last_name LIKE "%o" ORDER BY last_name, first_name;

SELECT * FROM movies WHERE title LIKE "% y %la%" ORDER BY title;

SELECT * FROM actors WHERE ((last_name LIKE "%dé%") OR (last_name LIKE "%ll%")) AND (first_name LIKE "%a%")ORDER BY last_name;

SELECT * FROM movies WHERE ((title LIKE "Toy Story%") OR (title LIKE "Harry Potter%")) AND length = 120 ORDER BY title ASC, length DESC;

SELECT * FROM movies WHERE (rating = 9.1) OR (rating = 9.0) OR (rating = 8.3) ORDER BY rating DESC;

SELECT * FROM movies WHERE (awards = 2) OR (awards = 5) OR (awards = 7) ORDER BY awards DESC;

SELECT * FROM movies WHERE length LIKE "%" ORDER BY length DESC;

SELECT * FROM movies WHERE release_date  NOT LIKE "%-07-%" ORDER BY release_date DESC;

SELECT * FROM actors WHERE last_name NOT LIKE "%k%" ORDER BY last_name DESC;

SELECT * FROM movies WHERE length NOT IN (120,180) ORDER BY title DESC;
