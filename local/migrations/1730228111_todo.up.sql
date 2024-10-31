CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO todos (title, is_completed) VALUES
('Buy groceries', FALSE),
('Prepare presentation', TRUE),
('Read book', FALSE),
('Clean workspace', FALSE),
('Exercise', TRUE);
