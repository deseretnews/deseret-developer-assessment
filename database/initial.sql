CREATE TABLE task (id SERIAL NOT NULL, title VARCHAR(255) NOT NULL, completed BOOLEAN NOT NULL, PRIMARY KEY(id));

INSERT INTO task (id, title, completed) VALUES (1, 'Docker - Set up a docker-compose.yml that has 4 services in it', false);
INSERT INTO task (id, title, completed) VALUES (2, 'Database - Add 2 fields to the database, created_at and completed_at.', false);
INSERT INTO task (id, title, completed) VALUES (3, 'Database - Add an index for each of the new fields.', false);
INSERT INTO task (id, title, completed) VALUES (4, 'API - Update the entity with the 2 new fields.', false);
INSERT INTO task (id, title, completed) VALUES (5, 'API - Add a calculated field that will show task working time (completed_at - created_at).', false);
INSERT INTO task (id, title, completed) VALUES (6, 'API - When a todo item is created, the created_at time should be automatically updated.', false);
INSERT INTO task (id, title, completed) VALUES (7, 'API - When a todo item is marked as completed, the completed_at time should be automatically updated.', false);
INSERT INTO task (id, title, completed) VALUES (8, 'Frontend - Create a page that houses the todo interface.', false);