
DROP TABLE IF EXISTS "films";


CREATE TABLE IF NOT EXISTS "films" (

  
  "adult" BOOLEAN,
  "backdrop_path" TEXT,
  "genre_ids" VARCHAR(255),
  "id" INT NOT NULL PRIMARY KEY,
  "original_language" VARCHAR(2),
  "original_title" TEXT,
  "overview" TEXT,
  "popularity" FLOAT,
  "poster_path" TEXT,
  "release_date" DATE,
  "title" TEXT,
  "video" BOOLEAN,
  "vote_average" FLOAT,
  "vote_count" INT
);

