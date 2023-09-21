CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS "Employee" (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  "salary" DOUBLE PRECISION NOT NULL
);

INSERT INTO "Employee"("firstName", "lastName", "salary")
VALUES
('Lewis', 'Burson', 40700),
('Ian', 'Malcolm', 70000),
('Ellie', 'Sattler', 102000),
('Dennis', 'Nedry', 52000),
('John', 'Hammond', 89600),
('Ray', 'Arnold', 45000),
('Laura', 'Burnett', 102000);
